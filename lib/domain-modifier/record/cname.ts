import { Construct } from "constructs";
import { DnscontrolRecordConfig } from "../../types/dnscontrol-record-config";
import { DnscontrolRecord } from "./dnscontrol-record";
import { Duration } from "../../types/duration";

const DNS_CONTROL_CNAME_RECORD_SYMBOL = Symbol.for("DnscontrolCnameRecord");

export interface DnsControlCnameRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration;
}

export class DnsControlCnameRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnsControlCnameRecordProps) {
    super(scope, id, {
      recordType: "CNAME",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
  }
  public static isDnsControlCnameRecord(
    x: unknown,
  ): x is DnsControlCnameRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_CNAME_RECORD_SYMBOL in x
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
