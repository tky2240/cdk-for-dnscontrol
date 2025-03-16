import { Construct } from "constructs";
import {
  DnscontrolDomainProvider,
  DnscontrolDomainProviderProps,
} from "./dnscontrol-domain-provider";
import { DnscontrolStack } from "./dnscontrol-stack";
import { Duration } from "./types/duration";

const DNS_CONTROL_DOMAIN_SYMBOL = Symbol.for("DnscontrolDomain");

export interface DnscontrolDomainProps {
  readonly domainName: string;
  readonly registrarName: string;
  readonly providerPropsList: readonly DnscontrolDomainProviderProps[];
  readonly defaultTtl?: Duration;
}

export abstract class DnscontrolDomain extends Construct {
  public readonly domainName: string;
  public readonly registrarName: string;
  public readonly defaultTtl: Duration;
  constructor(
    scope: DnscontrolStack,
    id: string,
    props: DnscontrolDomainProps,
  ) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_DOMAIN_SYMBOL, { value: true });
    this.domainName = props.domainName;
    this.registrarName = props.registrarName;
    this.defaultTtl = props.defaultTtl ?? new Duration(300);
    for (const providerProps of props.providerPropsList) {
      new DnscontrolDomainProvider(
        this,
        providerProps.domainProviderName,
        providerProps,
      );
    };
  }

  public static isDnscontrolDomain(x: unknown): x is DnscontrolDomain {
    return x != null && typeof x === "object" && DNS_CONTROL_DOMAIN_SYMBOL in x;
  }
}
