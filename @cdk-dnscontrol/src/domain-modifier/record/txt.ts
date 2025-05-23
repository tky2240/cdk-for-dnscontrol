import { Construct } from "constructs";
import { DnscontrolTxtRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_TXT_RECORD_SYMBOL = Symbol.for("DnscontrolTxtRecord");

export interface DnscontrolTxtRecordProps {
  readonly label: string;
  readonly txtStrings: string[];
  readonly ttl?: Duration | undefined;
  readonly isEnsuredAbsent?: boolean | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export class DnscontrolTxtRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnscontrolTxtRecordProps) {
    super(scope, id, {
      recordType: "TXT",
      label: props.label,
      target: props.txtStrings.join(""),
      ttl: props.ttl,
      isEnsuredAbsent: props.isEnsuredAbsent,
      meta: props.meta,
    });
  }
  public static isDnscontrolTxtRecord(x: unknown): x is DnscontrolTxtRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_TXT_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolTxtRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: this.meta,
    };
  }
}
