import { Construct } from "constructs";

const DNS_CONTROL_DOMAIN_MODIFIER_SYMBOL = Symbol.for(
  "DnscontrolDomainModifier",
);

export interface DnscontrolDomainModifierProps {
  readonly modiferType: string;
  readonly meta?: Record<string, string> | undefined;
}

export abstract class DnscontrolDomainModifier extends Construct {
  public readonly modiferType: string;
  public readonly meta: Record<string, string>;
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolDomainModifierProps,
  ) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_DOMAIN_MODIFIER_SYMBOL, {
      value: true,
    });
    this.modiferType = props.modiferType;
    this.meta = props.meta ?? {};
  }
  public static isDnscontrolDomainModifier(
    x: unknown,
  ): x is DnscontrolDomainModifier {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_DOMAIN_MODIFIER_SYMBOL in x
    );
  }
}
