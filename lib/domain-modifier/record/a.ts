import { Construct } from "constructs";
import { DnscontrolRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { IPv4 } from "../../types/ipv4";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_A_RECORD_SYMBOL = Symbol.for("DnscontrolARecord");

export interface DnsControlARecordProps {
  readonly label: string;
  readonly ip: IPv4;
  readonly ttl?: Duration;
}

export class DnsControlARecord extends DnscontrolRecord {
  public readonly ip: IPv4;
  constructor(scope: Construct, id: string, props: DnsControlARecordProps) {
    super(scope, id, {
      recordType: "A",
      label: props.label,
      target: props.ip,
      ttl: props.ttl,
    });
    this.ip = props.ip;
  }
  public static isDnsControlARecord(x: unknown): x is DnsControlARecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_A_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
    };
  }
}
