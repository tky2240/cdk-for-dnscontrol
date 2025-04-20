import { Construct } from "constructs";
import { DnscontrolCnameRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_CNAME_RECORD_SYMBOL = Symbol.for("DnscontrolCnameRecord");

export interface DnscontrolCnameRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration | undefined;
  readonly isEnsuredAbsent?: boolean | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export class DnscontrolCnameRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnscontrolCnameRecordProps) {
    super(scope, id, {
      recordType: "CNAME",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
      isEnsuredAbsent: props.isEnsuredAbsent,
      meta: props.meta,
    });
  }
  public static isDnscontrolCnameRecord(
    x: unknown,
  ): x is DnscontrolCnameRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_CNAME_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolCnameRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: this.meta,
    };
  }
}
