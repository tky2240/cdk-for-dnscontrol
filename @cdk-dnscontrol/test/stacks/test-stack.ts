import { Construct } from "constructs";
import {
  DnscontrolDomain,
  DnscontrolDomainProps,
} from "../../src/dnscontrol-domain";
import { DnscontrolDomainProviderProps } from "../../src/dnscontrol-domain-provider";
import { DnscontrolProvider } from "../../src/dnscontrol-provider";
import { DnscontrolRegistrar } from "../../src/dnscontrol-registrar";
import { DnscontrolStack } from "../../src/dnscontrol-stack";
import { DnscontrolCfSingleRedirectRawRecord } from "../../src/domain-modifier/raw-record/cf-single-redirect";
import { DnscontrolARecord } from "../../src/domain-modifier/record/a";
import { DnscontrolAAAARecord } from "../../src/domain-modifier/record/aaaa";
import { DnscontrolCfRedirectRecord } from "../../src/domain-modifier/record/cf-redirect";
import { DnscontrolCnameRecord } from "../../src/domain-modifier/record/cname";
import { DnscontrolMxRecord } from "../../src/domain-modifier/record/mx";
import { Duration } from "../../src/types/duration";
import { asIPv4Address } from "../../src/types/ipv4";
import { asIPv6Address } from "../../src/types/ipv6";
import { asMxPreference } from "../../src/types/mx-preference";

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

interface ExampleDomainProps extends DnscontrolDomainProps {
  readonly domainName: string;
  readonly registrar: DnscontrolRegistrar;
  readonly domainProviderPropsList: DnscontrolDomainProviderProps[];
}

export class ExampleDomain extends DnscontrolDomain {
  constructor(scope: DnscontrolStack, id: string, props: ExampleDomainProps) {
    super(scope, id, props);
    new DnscontrolARecord(this, "MyARecord", {
      label: "@",
      ip: asIPv4Address("1.2.3.4"),
    });
    new DnscontrolAAAARecord(this, "MyAAAARecord", {
      label: "@",
      ip: asIPv6Address("2001:db8::1"),
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
      source: "hoge",
      destination: "fuga",
    });
  }
}
