import { Construct } from "constructs";
import { DnscontrolDomain } from "../lib/dnscontrol-domain";
import { DnscontrolDomainProviderProps } from "../lib/dnscontrol-domain-provider";
import { DnscontrolProvider } from "../lib/dnscontrol-provider";
import { DnscontrolRegistrar } from "../lib/dnscontrol-registrar";
import { DnscontrolStack } from "../lib/dnscontrol-stack";
import { DnsControlARecord } from "../lib/domain-modifier/record/a";
import { asIPv4 } from "../lib/types/ipv4";
import { DnsControlAAAARecord } from "../lib/domain-modifier/record/aaaa";
import { asIPv6 } from "../lib/types/ipv6";
import { DnsControlCnameRecord } from "../lib/domain-modifier/record/cname";
import { Duration } from "../lib/types/duration";
import { DnsControlMxRecord } from "../lib/domain-modifier/record/mx";
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
    new DnsControlARecord(this, "MyARecord", {
      label: "@",
      ip: asIPv4("1.2.3.4"),
    });
    new DnsControlAAAARecord(this, "MyAAAARecord", {
      label: "@",
      ip: asIPv6("2001:db8::1"),
      ttl: new Duration("1h")
    })
    new DnsControlCnameRecord(this, "MyCNAMERecord", {
      label: "test",
      target: "hoge",
      ttl: new Duration("1d"),
    })
    new DnsControlMxRecord(this, "MyMXRecord1", {
      label: "@",
      target: "mx1",
      mxPreference: asMxPreference(10),
    })
    new DnsControlMxRecord(this, "MyMXRecord2", {
      label: "@",
      target: "mx1",
      mxPreference: asMxPreference(20),
    })
  }
}
