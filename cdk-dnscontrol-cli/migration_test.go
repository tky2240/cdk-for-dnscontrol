package main

import (
	"encoding/json"
	"errors"
	"os"
	"path/filepath"
	"strings"
	"testing"
	"unicode"

	"github.com/StackExchange/dnscontrol/v4/commands"
	"github.com/StackExchange/dnscontrol/v4/models"
	"github.com/StackExchange/dnscontrol/v4/pkg/normalize"
	"github.com/StackExchange/dnscontrol/v4/pkg/prettyzone"
	"github.com/StackExchange/dnscontrol/v4/providers"
	testifyrequire "github.com/stretchr/testify/require"
)

func TestMigraion(t *testing.T) {
	testDir := "./parse_tests"
	files, err := os.ReadDir(testDir)
	if err != nil {
		t.Fatal(err)
	}
	for _, f := range files {
		name := f.Name()
		ignoredTests := []string{
			"006-transforms",
			"007-importTransformTTL",
			"008-import",
			"020-complexRequire",
			"039-include",
			"045-loc", // not implemented yet
			"049-json5-require",
			"051-HASH",
		}

		if filepath.Ext(name) != ".js" || !unicode.IsNumber(rune(name[0])) {
			continue
		}

		t.Run(name, func(t *testing.T) {
			for _, ignored := range ignoredTests {
				if strings.HasPrefix(name, ignored) {
					t.Skipf("skipping test %q", name)
				}
			}
			err := _migration("./tmp", filepath.Join(testDir, name), true)
			if err != nil {
				t.Fatal(err)
			}
			err = _synth("./tmp/stack.ts")
			if err != nil {
				t.Fatal(err)
			}

			synthedFile := filepath.Join("./cdk.out", "meta.json")
			synthedJSON, err := os.ReadFile(synthedFile)
			if err != nil {
				t.Fatal(err)
			}
			expectedFile := filepath.Join(testDir, strings.TrimSuffix(name, filepath.Ext(name))+".json")
			expectedJSON, err := os.ReadFile(expectedFile)
			if err != nil {
				t.Fatal(err)
			}
			var expectedConf models.DNSConfig
			var synthedConf models.DNSConfig
			err = json.Unmarshal(synthedJSON, &synthedConf)
			if err != nil {
				t.Fatal(err)
			}
			err = json.Unmarshal(expectedJSON, &expectedConf)
			if err != nil {
				t.Fatal(err)
			}
			errs := normalize.ValidateAndNormalizeConfig(&synthedConf)
			if len(errs) != 0 {
				commands.PrintValidationErrors(errs)
				t.Fatal(errors.New("failed to validate config"))
			}

			errs = normalize.ValidateAndNormalizeConfig(&expectedConf)
			if len(errs) != 0 {
				commands.PrintValidationErrors(errs)
				t.Fatal(errors.New("failed to validate config"))
			}

			for _, dc := range synthedConf.Domains {
				dc.UpdateSplitHorizonNames()
			}

			for _, dc := range expectedConf.Domains {
				dc.UpdateSplitHorizonNames()
			}

			for _, dc := range synthedConf.Domains {
				ps := prettyzone.PrettySort(dc.Records, dc.Name, 0, nil)
				dc.Records = ps.Records
				if len(dc.Records) == 0 {
					dc.Records = models.Records{}
				}
			}

			for _, dc := range expectedConf.Domains {
				ps := prettyzone.PrettySort(dc.Records, dc.Name, 0, nil)
				dc.Records = ps.Records
				if len(dc.Records) == 0 {
					dc.Records = models.Records{}
				}
			}

			// copy from dnscontrol
			// Initialize any DNS providers mentioned.
			for _, dProv := range synthedConf.DNSProviders {
				pcfg := map[string]string{}

				if dProv.Type == "-" {
					// Pretend any "look up provider type in creds.json" results
					// in a provider type that actually exists.
					dProv.Type = "CLOUDFLAREAPI"
				}

				// Fake out any provider's validation tests.
				switch dProv.Type {
				case "CLOUDFLAREAPI":
					pcfg["apitoken"] = "fake"
				default:
				}
				_, err := providers.CreateDNSProvider(dProv.Type, pcfg, nil)
				if err != nil {
					t.Fatal(err)
				}
			}

			synthedJSON, err = json.Marshal(synthedConf)
			if err != nil {
				t.Fatal(err)
			}

			expectedJSON, err = json.Marshal(expectedConf)
			if err != nil {
				t.Fatal(err)
			}

			testifyrequire.JSONEq(t, string(expectedJSON), string(synthedJSON))
		})
	}
}
