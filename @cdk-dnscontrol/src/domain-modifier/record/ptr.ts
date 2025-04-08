import { Construct } from "constructs";
import { DnscontrolPtrRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_PTR_RECORD_SYMBOL = Symbol.for("DnscontrolPtrRecord");

export interface DnscontrolPtrRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export class DnscontrolPtrRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnscontrolPtrRecordProps) {
    super(scope, id, {
      recordType: "PTR",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
      meta: props.meta,
    });
  }
  public static isDnscontrolPtrRecord(x: unknown): x is DnscontrolPtrRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_PTR_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolPtrRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: this.meta,
    };
  }
}
