import { Construct } from "constructs";
import { DnscontrolMxRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { MxPreference } from "../../types/mx-preference";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_MX_RECORD_SYMBOL = Symbol.for("DnscontrolMxRecord");

export interface DnscontrolMxRecordProps {
  readonly label: string;
  readonly mxPreference: MxPreference;
  readonly target: string;
  readonly ttl?: Duration | undefined;
  readonly isEnsuredAbsent?: boolean | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export class DnscontrolMxRecord extends DnscontrolRecord {
  public readonly mxPreference: MxPreference;
  constructor(scope: Construct, id: string, props: DnscontrolMxRecordProps) {
    super(scope, id, {
      recordType: "MX",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
      isEnsuredAbsent: props.isEnsuredAbsent,
      meta: props.meta,
    });
    this.mxPreference = props.mxPreference;
  }
  public static isDnscontrolMxRecord(x: unknown): x is DnscontrolMxRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_MX_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolMxRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      mxPreference: this.mxPreference,
      ttl: this.ttl?.toSeconds(),
      meta: this.meta,
    };
  }
}
