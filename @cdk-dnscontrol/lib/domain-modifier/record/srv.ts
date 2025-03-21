import { Construct } from "constructs";
import { DnscontrolSrvRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_SRV_RECORD_SYMBOL = Symbol.for("DnscontrolSrvRecord");

export interface DnscontrolSrvRecordProps {
  readonly label: string;
  readonly target: string;
  readonly priority: number;
  readonly weight: number;
  readonly port: number;
  readonly ttl?: Duration;
}

export class DnscontrolSrvRecord extends DnscontrolRecord {
  public readonly priority: number;
  public readonly weight: number;
  public readonly port: number;
  constructor(scope: Construct, id: string, props: DnscontrolSrvRecordProps) {
    super(scope, id, {
      recordType: "SRV",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
    this.priority = props.priority;
    this.weight = props.weight;
    this.port = props.port;
  }
  public static isDnscontrolSrvRecord(x: unknown): x is DnscontrolSrvRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_SRV_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolSrvRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      srvpriority: this.priority,
      srvweight: this.weight,
      srvport: this.port,
      meta: {},
    };
  }
}
