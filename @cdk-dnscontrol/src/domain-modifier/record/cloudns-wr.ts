import { Construct } from "constructs";
import { DnscontrolCloudnsWrRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_CLOUDNS_WR_RECORD_SYMBOL = Symbol.for(
  "DnscontrolCloudnsWrRecord",
);

export interface DnscontrolCloudnsWrRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration | undefined;
  readonly isEnsuredAbsent?: boolean | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export class DnscontrolCloudnsWrRecord extends DnscontrolRecord {
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolCloudnsWrRecordProps,
  ) {
    super(scope, id, {
      recordType: "CLOUDNS_WR",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
      isEnsuredAbsent: props.isEnsuredAbsent,
      meta: props.meta,
    });
  }
  public static isDnscontrolCloudnsWrRecord(
    x: unknown,
  ): x is DnscontrolCloudnsWrRecord {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_CLOUDNS_WR_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolCloudnsWrRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: this.meta,
    };
  }
}
