import { Construct } from "constructs";
import { DnscontrolLocRecordConfig } from "../../types/dnscontrol-record-config";
import { DnscontrolRecord } from "./dnscontrol-record";
import { Duration } from "../../types/duration";

const DNS_CONTROL_LOC_RECORD_SYMBOL = Symbol.for("DnscontrolLocRecord");

export interface DnscontrolLocRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration;
}

export class DnscontrolLocRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnscontrolLocRecordProps) {
    super(scope, id, {
      recordType: "LOC",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
    throw new Error("Not implemented yet")
  }
  public static isDnscontrolLocRecord(
    x: unknown,
  ): x is DnscontrolLocRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_LOC_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolLocRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
    };
  }
}
