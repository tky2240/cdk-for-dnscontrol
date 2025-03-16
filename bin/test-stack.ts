import { Construct } from "constructs";
import { DnscontrolDomain } from "../lib/dnscontrol-domain";
import { DnscontrolDomainProviderProps } from "../lib/dnscontrol-domain-provider";
import { DnscontrolProvider } from "../lib/dnscontrol-provider";
import { DnscontrolRegistrar } from "../lib/dnscontrol-registrar";
import { DnscontrolStack } from "../lib/dnscontrol-stack";
import { DnsControlARecord } from "../lib/domain-modifier/record/a";
import { DnsControlAAAARecord } from "../lib/domain-modifier/record/aaaa";
import { asIPv4 } from "../lib/types/ipv4";
import { asIPv6 } from "../lib/types/ipv6";

export class TestStack extends DnscontrolStack {
  constructor(scope: Construct, id: string) {
    super(scope, id, {});

    const provider = new DnscontrolProvider(this, "MyProvider", {
      providerName: "my-provider",
      providerType: "my-provider-type",
    });
    const registrar = new DnscontrolRegistrar(this, "MyRegistrar", {
      registrarName: "my-registrar",
      registrarType: "my-registrar-type",
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
      label: "hoge",
      ip: asIPv4("192.168.1.1"),
    });
    new DnsControlAAAARecord(this, "MyAAAARecord", {
      label: "hoge",
      ip: asIPv6("2001:db8::1"),
    });
  }
}
