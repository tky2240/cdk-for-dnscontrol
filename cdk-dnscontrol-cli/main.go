package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"log"
	"os"
	"os/exec"
	"os/signal"
	"syscall"

	"github.com/StackExchange/dnscontrol/v4/commands"
	"github.com/StackExchange/dnscontrol/v4/models"
	"github.com/StackExchange/dnscontrol/v4/pkg/normalize"
	"github.com/StackExchange/dnscontrol/v4/pkg/prettyzone"
	"github.com/StackExchange/dnscontrol/v4/pkg/rtypes"
	_ "github.com/StackExchange/dnscontrol/v4/providers/_all"
	"github.com/urfave/cli/v2"
)

func main() {
	app := &cli.App{
		Name:  "cdk-dnscontrol",
		Usage: "cdk fo dnscontrol",
		Commands: []*cli.Command{
			{
				Name:  "diff",
				Usage: "synth and diff",
				Action: func(c *cli.Context) error {
					return diff(c)
				},
				Flags: []cli.Flag{
					&cli.StringFlag{
						Name:  "cdk-entry-point",
						Value: "./bin/index.ts",
						Usage: "CDK entry point, default is ./bin/index.ts",

						Aliases: []string{"i"},
					},
					&cli.StringFlag{
						Name:  "credentials-json",
						Value: "./creds.json",
						Usage: "Path to credentials file",

						Aliases: []string{"c"},
					},
				},
			},
			{
				Name:  "deploy",
				Usage: "synth and deploy",
				Action: func(c *cli.Context) error {
					return deploy(c)
				},
				Flags: []cli.Flag{
					&cli.StringFlag{
						Name:  "cdk-entry-point",
						Value: "./bin/index.ts",
						Usage: "CDK entry point, default is ./bin/index.ts",

						Aliases: []string{"i"},
					},
					&cli.StringFlag{
						Name:  "credentials-json",
						Value: "./creds.json",
						Usage: "Path to credentials file",

						Aliases: []string{"c"},
					},
				},
			},
			{
				Name:  "migration",
				Usage: "migrate from cdk-dnscontrol to cdk-dnscontrol-cli",
				Action: func(c *cli.Context) error {
					return migration(c)
				},
				Flags: []cli.Flag{
					&cli.StringFlag{
						Name:    "dnsconfig",
						Value:   "./dnsconfig.js",
						Usage:   "dnsconfig js file, default is ./dnsconfig.js",
						Aliases: []string{"d"},
					},
					&cli.StringFlag{
						Name:    "outputDir",
						Value:   "./lib/stacks",
						Usage:   "output directory, default is ./lib/stacks",
						Aliases: []string{"o"},
					},
				},
			},
		},
	}

	if err := app.Run(os.Args); err != nil {
		log.Fatal(err)
	}
}

func diff(c *cli.Context) error {
	err := prepare(c)
	if err != nil {
		return err
	}

	err = commands.PPreview(commands.PPreviewArgs{
		GetDNSConfigArgs: commands.GetDNSConfigArgs{
			JSONFile: "./cdk.out/meta.json",
		},
		GetCredentialsArgs: commands.GetCredentialsArgs{
			CredsFile: c.String("creds"),
		},
	})
	if err != nil {
		return err
	}
	return nil
}

func deploy(c *cli.Context) error {
	err := prepare(c)
	if err != nil {
		return err
	}

	err = commands.PPush(commands.PPushArgs{
		PPreviewArgs: commands.PPreviewArgs{
			GetDNSConfigArgs: commands.GetDNSConfigArgs{
				JSONFile: "./cdk.out/meta.json",
			},
			GetCredentialsArgs: commands.GetCredentialsArgs{
				CredsFile: c.String("creds"),
			},
		},
		Interactive: false,
	})
	if err != nil {
		return err
	}
	return nil
}

func prepare(c *cli.Context) (err error) {
	err = synth(c)
	if err != nil {
		return err
	}

	cfg, err := commands.GetDNSConfig(commands.GetDNSConfigArgs{
		JSONFile: "./cdk.out/meta.json",
	})
	if err != nil {
		return err
	}
	err = rtypes.PostProcess(cfg.Domains)
	if err != nil {
		return err
	}

	for _, dc := range cfg.Domains {
		ps := prettyzone.PrettySort(dc.Records, dc.Name, 0, nil)
		dc.Records = ps.Records
		if len(dc.Records) == 0 {
			dc.Records = models.Records{}
		}
	}

	errs := normalize.ValidateAndNormalizeConfig(cfg)
	if len(errs) != 0 {
		commands.PrintValidationErrors(errs)
		return errors.New("failed to validate config")
	}

	// rewrite config
	configJson, err := json.Marshal(cfg)
	if err != nil {
		return err
	}
	f, err := os.Create("./cdk.out/meta.json")
	if err != nil {
		return nil
	}
	defer func() {
		closeErr := f.Close()
		if closeErr != nil {
			err = closeErr
		}
	}()

	_, err = f.Write(configJson)
	if err != nil {
		return err
	}

	return nil
}

func synth(c *cli.Context) error {
	cdkEntryPoint := c.String("cdk-entry-point")
	if cdkEntryPoint == "" {
		return errors.New("cdk-entry-point is not set")
	}
	if _, err := os.Stat(cdkEntryPoint); os.IsNotExist(err) {
		return errors.New("cdk entry point is not exist")
	}
	return _synth(cdkEntryPoint)
}

func _synth(cdkEntryPoint string) error {

	cmd := exec.Command("npx", "tsx", cdkEntryPoint)
	cmd.SysProcAttr = &syscall.SysProcAttr{Setpgid: true}
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	err := cmd.Start()
	if err != nil {
		return err
	}

	done := make(chan error)
	go func() {
		done <- cmd.Wait()
		close(done)
	}()

	s := make(chan os.Signal, 1)
	signal.Notify(s, syscall.SIGHUP, syscall.SIGINT, syscall.SIGTERM)
	select {
	case <-s:
		err = syscall.Kill(-cmd.Process.Pid, syscall.SIGKILL)
		return fmt.Errorf("interrupted: %s", err)
	case err := <-done:
		return err
	}
}
