import { Construct } from "constructs";
import { DnscontrolDomain } from "../lib/dnscontrol-domain";
import { DnscontrolDomainProviderProps } from "../lib/dnscontrol-domain-provider";
import { DnscontrolProvider } from "../lib/dnscontrol-provider";
import { DnscontrolRegistrar } from "../lib/dnscontrol-registrar";
import { DnscontrolStack } from "../lib/dnscontrol-stack";
import { DnscontrolARecord } from "../lib/domain-modifier/record/a";
import { DnscontrolAAAARecord } from "../lib/domain-modifier/record/aaaa";
import { DnscontrolCfRedirectRecord } from "../lib/domain-modifier/record/cf-redirect";
import { DnscontrolCfSingleRedirectRawRecord } from "../lib/domain-modifier/record/cf-single-redirect";
import { DnscontrolCnameRecord } from "../lib/domain-modifier/record/cname";
import { DnscontrolMxRecord } from "../lib/domain-modifier/record/mx";
import { Duration } from "../lib/types/duration";
import { asIPv4 } from "../lib/types/ipv4";
import { asIPv6 } from "../lib/types/ipv6";
import { asMxPreference } from "../lib/types/mx-preference";

export class TestStack extends DnscontrolStack {
  constructor(scope: Construct, id: string) {
    super(scope, id, {});

    const provider = new DnscontrolProvider(this, "MyProvider", {
      providerName: "bind",
    });
    const registrar = new DnscontrolRegistrar(this, "MyRegistrar", {
      registrarName: "none",
    });

    new ExampleDomain(this, "MyDomain", {
      domainName: "example.com",
      registrar: registrar,
      domainProviderPropsList: [
        {
          domainProviderName: provider.providerName,
        },
      ],
    });
  }
}

interface ExampleDomainProps {
  readonly domainName: string;
  readonly registrar: DnscontrolRegistrar;
  readonly domainProviderPropsList: readonly DnscontrolDomainProviderProps[];
}

export class ExampleDomain extends DnscontrolDomain {
  constructor(scope: DnscontrolStack, id: string, props: ExampleDomainProps) {
    super(scope, id, {
      domainName: "example.com",
      registrarName: props.registrar.registrarName,
      providerPropsList: props.domainProviderPropsList,
    });
    new DnscontrolARecord(this, "MyARecord", {
      label: "@",
      ip: asIPv4("1.2.3.4"),
    });
    new DnscontrolAAAARecord(this, "MyAAAARecord", {
      label: "@",
      ip: asIPv6("2001:db8::1"),
      ttl: new Duration("1h"),
    });
    new DnscontrolCnameRecord(this, "MyCNAMERecord", {
      label: "test",
      target: "hoge",
      ttl: new Duration("1d"),
    });
    new DnscontrolMxRecord(this, "MyMXRecord1", {
      label: "@",
      target: "mx1",
      mxPreference: asMxPreference(10),
    });
    new DnscontrolMxRecord(this, "MyMXRecord2", {
      label: "@",
      target: "mx1",
      mxPreference: asMxPreference(20),
    });
    new DnscontrolCfSingleRedirectRawRecord(
      this,
      "MyCfSingleRedirectRawRecord",
      {
        name: "name",
        code: 301,
        when: "when",
        then: "then",
      },
    );
    new DnscontrolCfRedirectRecord(this, "MyCfRedirectRecord", {
      source: "hoge,",
      destination: "fuga",
    });
  }
}
