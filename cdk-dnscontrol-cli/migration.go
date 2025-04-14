package main

import (
	"errors"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"text/template"

	"github.com/StackExchange/dnscontrol/v4/pkg/js"
	"github.com/StackExchange/dnscontrol/v4/pkg/normalize"
	"github.com/urfave/cli/v2"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

func migration(c *cli.Context) error {
	outputDir := c.String("outputDir")
	if outputDir == "" {
		return errors.New("outputDir is required")
	}
	dnsconfig := c.String("dnsconfig")
	if dnsconfig == "" {
		return errors.New("dnsconfig is required")
	}
	return _migration(outputDir, dnsconfig)
}

func _migration(outputDir string, dnsconfig string) error {
	conf, err := js.ExecuteJavaScript(dnsconfig, false, nil)
	if err != nil {
		return err
	}

	errs := normalize.ValidateAndNormalizeConfig(conf)
	if len(errs) != 0 {
		return errors.New("failed to validate config")
	}

	tmpl := template.Must(template.New("stack.ts.tmpl").Funcs(template.FuncMap{
		"sanitizeDomainName": func(domain string) string {
			regexp := regexp.MustCompile(`[^a-zA-Z0-9]`)
			domain = regexp.ReplaceAllString(domain, "")
			labels := strings.Split(domain, ".")
			for i, label := range labels {
				labels[i] = cases.Title(language.English).String(label)
			}
			return strings.Join(labels, "")
		},
		"sanitizeName": func(name string) string {
			regexp := regexp.MustCompile(`[^a-zA-Z0-9]`)
			name = regexp.ReplaceAllString(name, "")
			return cases.Title(language.English).String(name)
		},
		"splitByComma": func(s string) []string {
			return strings.Split(s, ",")
		},
		"encloseInQuotes": func(strings []string) []string {
			for i, s := range strings {
				strings[i] = "\"" + s + "\""
			}
			return strings
		},
	}).ParseFiles("templates/stack.ts.tmpl"))

	_, err = os.Stat(outputDir)
	if os.IsNotExist(err) {
		err = os.MkdirAll(outputDir, 0777)
		if err != nil {
			return err
		}
	}

	stackFilePath := filepath.Join(outputDir, "stack.ts")
	_, err = os.Stat(stackFilePath)
	if os.IsExist(err) {
		err = os.Remove(stackFilePath)
		if err != nil {
			return err
		}
	}

	file, err := os.Create(stackFilePath)
	if err != nil {
		return err
	}
	defer file.Close()
	err = tmpl.ExecuteTemplate(file, "stack.ts.tmpl", conf)
	if err != nil {
		return err
	}
	// for _, domainConfig := range conf.Domains {
	// 	for _, record := range domainConfig.Records {
	// 		if record.Type == "A" || record.Type == "AAAA" {
	// 			record.Type = "A"
	// 		}
	// 		if record.Type == "CNAME" {
	// 			record.Type = "CNAME"
	// 		}
	// 		if record.Type == "MX" {
	// 			record.Type = "MX"
	// 		}
	// 		if record.Type == "TXT" {
	// 			record.Type = "TXT"
	// 		}
	// 		if record.Type == "NS" {
	// 			record.Type = "NS"
	// 		}
	// 	}
	// }

	return nil
}
