import { Construct } from "constructs";
import { Duration } from "../types/duration";
import { DnscontrolRecordModifier } from "./dnscontrol-record-modifier";
export interface DnscontrolTtlProps {
  readonly ttl: Duration;
}
export declare class DnscontrolTtl extends DnscontrolRecordModifier {
  readonly ttl: Duration;
  constructor(scope: Construct, id: string, props: DnscontrolTtlProps);
  static isDnscontrolTtl(x: unknown): x is DnscontrolTtl;
}
