import { Construct } from "constructs";
import { DnscontrolUrlRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_URL_RECORD_SYMBOL = Symbol.for("DnscontrolUrlRecord");

export interface DnscontrolUrlRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration;
}

export class DnscontrolUrlRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnscontrolUrlRecordProps) {
    super(scope, id, {
      recordType: "URL",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
  }
  public static isDnscontrolUrlRecord(x: unknown): x is DnscontrolUrlRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_URL_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolUrlRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
    };
  }
}
