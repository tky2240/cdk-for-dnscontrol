import { Construct } from "constructs";
import { DnscontrolHttpsRecordConfig } from "../../types/dnscontrol-record-config";
import { DnscontrolRecord } from "./dnscontrol-record";
import { Duration } from "../../types/duration";

const DNS_CONTROL_HTTPS_RECORD_SYMBOL = Symbol.for("DnscontrolHttpsRecord");

export interface DnscontrolHttpsRecordProps {
  readonly label: string;
  readonly target: string;
  readonly priority: number;
  readonly params: string;
  readonly ttl?: Duration;
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
  public getRecordConfig(): DnscontrolHttpsRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      svcpriority: this.priority,
      svcparams: this.params,
    };
  }
}
