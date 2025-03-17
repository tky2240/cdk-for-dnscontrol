import { Construct } from "constructs";
import { DnscontrolARecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { IPv4 } from "../../types/ipv4";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_A_RECORD_SYMBOL = Symbol.for("DnscontrolARecord");

export interface DnscontrolARecordProps {
  readonly label: string;
  readonly ip: IPv4;
  readonly ttl?: Duration;
}

export class DnscontrolARecord extends DnscontrolRecord {
  public readonly ip: IPv4;
  constructor(scope: Construct, id: string, props: DnscontrolARecordProps) {
    super(scope, id, {
      recordType: "A",
      label: props.label,
      target: props.ip,
      ttl: props.ttl,
    });
    this.ip = props.ip;
  }
  public static isDnscontrolARecord(x: unknown): x is DnscontrolARecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_A_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolARecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
    };
  }
}
