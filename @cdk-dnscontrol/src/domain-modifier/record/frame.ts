import { Construct } from "constructs";
import { DnscontrolFrameRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_FRAME_RECORD_SYMBOL = Symbol.for("DnscontrolFrameRecord");

export interface DnscontrolFrameRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration | undefined;
}

export class DnscontrolFrameRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnscontrolFrameRecordProps) {
    super(scope, id, {
      recordType: "FRAME",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
  }
  public static isDnscontrolFrameRecord(
    x: unknown,
  ): x is DnscontrolFrameRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_FRAME_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolFrameRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: {},
    };
  }
}
