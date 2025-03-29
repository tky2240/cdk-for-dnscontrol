import { Construct } from "constructs";
import { DnscontrolUrl301RecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_URL301_RECORD_SYMBOL = Symbol.for("DnscontrolUrl301Record");

export interface DnscontrolUrl301RecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration | undefined;
}

export class DnscontrolUrl301Record extends DnscontrolRecord {
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolUrl301RecordProps,
  ) {
    super(scope, id, {
      recordType: "URL301",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
  }
  public static isDnscontrolUrl301Record(
    x: unknown,
  ): x is DnscontrolUrl301Record {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_URL301_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolUrl301RecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: {},
    };
  }
}
