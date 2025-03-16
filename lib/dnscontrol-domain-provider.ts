import { Construct } from "constructs";

export interface DnscontrolDomainProviderProps {
  readonly domainProviderName: string;
  readonly namesapceCount?: number;
}

const DNS_CONTROL_DOMAIN_PROVIDER_SYMBOL = Symbol.for(
  "DnscontrolDomainProvider",
);

export class DnscontrolDomainProvider extends Construct {
  public readonly domainProviderName: string;
  public readonly namesapceCount: number;
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolDomainProviderProps,
  ) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_DOMAIN_PROVIDER_SYMBOL, {
      value: true,
    });
    this.domainProviderName = props.domainProviderName;
    this.namesapceCount = props.namesapceCount ?? -1;
  }
  public static isDnscontrolDomainProvider(
    x: unknown,
  ): x is DnscontrolDomainProvider {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_DOMAIN_PROVIDER_SYMBOL in x
    );
  }
}
