import { Construct } from "constructs";
import { Duration } from "../types/duration";
import { DnscontrolRecordModifier } from "./dnscontrol-record-modifier";

const DNS_CONTROL_TTL_SYMBOL = Symbol.for("DnscontrolTtl");

export interface DnscontrolTtlProps {
  readonly ttl: Duration;
}

export class DnscontrolTtl extends DnscontrolRecordModifier {
  public readonly ttl: Duration;
  constructor(scope: Construct, id: string, props: DnscontrolTtlProps) {
    super(scope, id);
    this.ttl = props.ttl;
  }
  public static isDnscontrolTtl(x: unknown): x is DnscontrolTtl {
    return x != null && typeof x === "object" && DNS_CONTROL_TTL_SYMBOL in x;
  }
}
