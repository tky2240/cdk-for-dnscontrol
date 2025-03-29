import { Construct } from "constructs";
import { DnscontrolNsRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_NS_RECORD_SYMBOL = Symbol.for("DnscontrolNsRecord");

export interface DnscontrolNsRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration | undefined;
}

export class DnscontrolNsRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnscontrolNsRecordProps) {
    super(scope, id, {
      recordType: "NS",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
  }
  public static isDnscontrolNsRecord(x: unknown): x is DnscontrolNsRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_NS_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolNsRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: {},
    };
  }
}
