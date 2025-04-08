import { Construct } from "constructs";
import { DnscontrolDnameRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_DNAME_RECORD_SYMBOL = Symbol.for("DnscontrolDnameRecord");

export interface DnscontrolDnameRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export class DnscontrolDnameRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnscontrolDnameRecordProps) {
    super(scope, id, {
      recordType: "DNAME",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
      meta: props.meta,
    });
  }
  public static isDnscontrolDnameRecord(
    x: unknown,
  ): x is DnscontrolDnameRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_DNAME_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolDnameRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: this.meta,
    };
  }
}
