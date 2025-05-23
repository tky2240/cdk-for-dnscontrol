import { Construct } from "constructs";
import { DnscontrolAkamaiCdnRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_AKAMAICDN_RECORD_SYMBOL = Symbol.for(
  "DnscontrolAkamaiCdnRecord",
);

export interface DnscontrolAkamaiCdnRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration | undefined;
  readonly isEnsuredAbsent?: boolean | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export class DnscontrolAkamaiCdnRecord extends DnscontrolRecord {
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolAkamaiCdnRecordProps,
  ) {
    super(scope, id, {
      recordType: "AKAMAICDN",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
      isEnsuredAbsent: props.isEnsuredAbsent,
      meta: props.meta,
    });
  }
  public static isDnscontrolAkamaiCdnRecord(
    x: unknown,
  ): x is DnscontrolAkamaiCdnRecord {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_AKAMAICDN_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolAkamaiCdnRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: this.meta,
    };
  }
}
