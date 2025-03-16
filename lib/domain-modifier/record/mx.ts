import { Construct } from "constructs";
import { DnscontrolRecordConfig } from "../../types/dnscontrol-record-config";
import { MxPreference } from "../../types/mx-preference";
import { DnscontrolRecord } from "./dnscontrol-record";
import { Duration } from "../../types/duration";

const DNS_CONTROL_MX_RECORD_SYMBOL = Symbol.for("DnscontrolMxRecord");

export interface DnscontrolMxRecordProps {
  readonly label: string;
  readonly mxPreference: MxPreference;
  readonly target: string;
  readonly ttl?: Duration;
}

export class DnscontrolMxRecord extends DnscontrolRecord {
  public readonly mxPreference: MxPreference;
  constructor(scope: Construct, id: string, props: DnscontrolMxRecordProps) {
    super(scope, id, {
      recordType: "MX",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
    this.mxPreference = props.mxPreference;
  }
  public static isDnscontrolMxRecord(x: unknown): x is DnscontrolMxRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_MX_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      mxpreference: this.mxPreference,
      ttl: this.ttl?.toSeconds(),
    };
  }
}
