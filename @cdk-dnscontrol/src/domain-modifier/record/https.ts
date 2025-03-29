import { Construct } from "constructs";
import { DnscontrolHttpsRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_HTTPS_RECORD_SYMBOL = Symbol.for("DnscontrolHttpsRecord");

export interface DnscontrolHttpsRecordProps {
  readonly label: string;
  readonly target: string;
  readonly priority: number;
  readonly params: string;
  readonly ttl?: Duration | undefined;
}

export class DnscontrolHttpsRecord extends DnscontrolRecord {
  public readonly priority: number;
  public readonly params: string;
  constructor(scope: Construct, id: string, props: DnscontrolHttpsRecordProps) {
    super(scope, id, {
      recordType: "HTTPS",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
    this.priority = props.priority;
    this.params = props.params;
  }
  public static isDnscontrolHttpsRecord(
    x: unknown,
  ): x is DnscontrolHttpsRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_HTTPS_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolHttpsRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      svcPriority: this.priority,
      svcParams: this.params,
      meta: {},
    };
  }
}
