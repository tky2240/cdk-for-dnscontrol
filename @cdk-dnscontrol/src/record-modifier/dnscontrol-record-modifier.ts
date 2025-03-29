import { Construct } from "constructs";

const DNS_CONTROL_RECORD_MODIFIER_SYMBOL = Symbol.for(
  "DnscontrolRecordModifier",
);

export abstract class DnscontrolRecordModifier extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_RECORD_MODIFIER_SYMBOL, {
      value: true,
    });
  }
  public static isDnscontrolRecordModifier(
    x: unknown,
  ): x is DnscontrolRecordModifier {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_RECORD_MODIFIER_SYMBOL in x
    );
  }
}
