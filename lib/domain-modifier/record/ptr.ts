import { Construct } from "constructs";
import { DnscontrolPtrRecordConfig } from "../../types/dnscontrol-record-config";
import { DnscontrolRecord } from "./dnscontrol-record";
import { Duration } from "../../types/duration";

const DNS_CONTROL_PTR_RECORD_SYMBOL = Symbol.for("DnscontrolPtrRecord");

export interface DnscontrolPtrRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration;
}

export class DnscontrolPtrRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnscontrolPtrRecordProps) {
    super(scope, id, {
      recordType: "PTR",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
  }
  public static isDnscontrolPtrRecord(
    x: unknown,
  ): x is DnscontrolPtrRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_PTR_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolPtrRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
    };
  }
}
