import { Construct } from "constructs";

const DNS_CONTROL_DOMAIN_MODIFIER_SYMBOL = Symbol.for(
  "DnscontrolDomainModifier",
);

export interface DnscontrolDomainModifierProps {
  type: string;
  name: string;
}

export abstract class DnscontrolDomainModifier extends Construct {
  public readonly type: string;
  public readonly name: string;
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolDomainModifierProps,
  ) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_DOMAIN_MODIFIER_SYMBOL, {
      value: true,
    });
    this.type = props.type;
    this.name = props.name;
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
