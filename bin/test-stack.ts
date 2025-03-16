import { Construct } from "constructs";
import { DnscontrolDomain } from "../lib/dnscontrol-domain";
import { DnscontrolDomainProviderProps } from "../lib/dnscontrol-domain-provider";
import { DnscontrolProvider } from "../lib/dnscontrol-provider";
import { DnscontrolRegistrar } from "../lib/dnscontrol-registrar";
import { DnscontrolStack } from "../lib/dnscontrol-stack";
import { DnsControlARecord } from "../lib/domain-modifier/record/a";
import { asIPv4 } from "../lib/types/ipv4";

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
  }
}
