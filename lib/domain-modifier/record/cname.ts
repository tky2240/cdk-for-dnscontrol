import { Construct } from "constructs";
import { DnscontrolCnameRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_CNAME_RECORD_SYMBOL = Symbol.for("DnscontrolCnameRecord");

export interface DnscontrolCnameRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration;
}

export class DnscontrolCnameRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnscontrolCnameRecordProps) {
    super(scope, id, {
      recordType: "CNAME",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
  }
  public static isDnscontrolCnameRecord(
    x: unknown,
  ): x is DnscontrolCnameRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_CNAME_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolCnameRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: {},
    };
  }
}
