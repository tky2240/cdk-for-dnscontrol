package main

import (
	"encoding/json"
	"errors"
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strconv"
	"strings"
	"text/template"

	"github.com/StackExchange/dnscontrol/v4/models"
	"github.com/StackExchange/dnscontrol/v4/pkg/js"
	"github.com/StackExchange/dnscontrol/v4/pkg/normalize"
	"github.com/urfave/cli/v2"
	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

type MigrationTemplateParams struct {
	DnsConfig *models.DNSConfig
	IsTest    bool
}

func migration(c *cli.Context) error {
	outputDir := c.String("outputDir")
	if outputDir == "" {
		return errors.New("outputDir is required")
	}
	dnsconfig := c.String("dnsconfig")
	if dnsconfig == "" {
		return errors.New("dnsconfig is required")
	}
	return _migration(outputDir, dnsconfig, false)
}

func _migration(outputDir string, dnsconfig string, isTest bool) error {
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
			regexp := regexp.MustCompile(`[^a-zA-Z0-9.]`)
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
		"encloseInQuotes": func(txts []string) string {
			for i, s := range txts {
				s = strings.ReplaceAll(s, "\\", "\\\\")
				s = strings.ReplaceAll(s, "\"", "\\\"")
				s = strings.ReplaceAll(s, "'", "\\'")
				s = strings.ReplaceAll(s, "`", "\\`")
				txts[i] = "\"" + s + "\""
			}
			return strings.Join(txts, ",")
		},
		"escapeString": func(s string) string {
			s = strings.ReplaceAll(s, "\\", "\\\\")
			s = strings.ReplaceAll(s, "\"", "\\\"")
			s = strings.ReplaceAll(s, "'", "\\'")
			s = strings.ReplaceAll(s, "`", "\\`")
			return s
		},
		"marshalRawMessage": func(raw json.RawMessage) (map[string]string, error) {
			metadata := make(map[string]string)
			err := json.Unmarshal(raw, &metadata)
			if err != nil {
				return nil, err
			}
			return metadata, nil
		},
		"getFormattedValue": func(m map[string]any) (string, error) {
			return formatMap(m)
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
	defer func() {
		if closeErr := file.Close(); closeErr != nil {
			err = fmt.Errorf("original error: %v, defer close error: %v", err, closeErr)
		}
	}()
	tmplParams := MigrationTemplateParams{
		DnsConfig: conf,
		IsTest:    isTest,
	}
	err = tmpl.ExecuteTemplate(file, "stack.ts.tmpl", tmplParams)
	if err != nil {
		return err
	}

	return nil
}

func formatMap(m map[string]any) (string, error) {
	var sb strings.Builder
	for k, v := range m {
		var formattedValue string
		switch v := v.(type) {
		case string:
			formattedValue = "\"" + v + "\""
		case int:
			formattedValue = strconv.Itoa(v)
		case float64:
			formattedValue = strconv.FormatFloat(v, 'f', -1, 64)
		case bool:
			formattedValue = strconv.FormatBool(v)
		case map[string]any:
			fv, err := formatMap(v)
			if err != nil {
				return "", err
			}
			formattedValue = fv
		default:
			return "", errors.New("unsupported type: " + fmt.Sprint(v))
		}
		sb.WriteString(fmt.Sprintf("%s: %s", k, formattedValue))
	}
	return sb.String(), nil
}
