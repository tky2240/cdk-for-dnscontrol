import { Construct } from "constructs";
import { DnscontrolRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { IPv6 } from "../../types/ipv6";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_AAAA_RECORD_SYMBOL = Symbol.for("DnscontrolAAAARecord");

export interface DnscontrolAAAARecordProps {
  readonly label: string;
  readonly ip: IPv6;
  readonly ttl?: Duration;
}

export class DnscontrolAAAARecord extends DnscontrolRecord {
  public readonly ip: IPv6;
  constructor(scope: Construct, id: string, props: DnscontrolAAAARecordProps) {
    super(scope, id, {
      recordType: "AAAA",
      label: props.label,
      target: props.ip,
      ttl: props.ttl,
    });
    this.ip = props.ip;
  }
  public static isDnscontrolARecord(x: unknown): x is DnscontrolAAAARecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_AAAA_RECORD_SYMBOL in x
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
