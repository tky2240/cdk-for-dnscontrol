import { Construct } from "constructs";
import { DnscontrolSoaRecordConfig } from "../../types/dnscontrol-record-config";
import { DnscontrolRecord } from "./dnscontrol-record";
import { Duration } from "../../types/duration";

const DNS_CONTROL_SOA_RECORD_SYMBOL = Symbol.for("DnscontrolSoaRecord");

export interface DnscontrolSoaRecordProps {
  readonly label: string;
  readonly target: string;
  readonly mbox: string;
  readonly refresh: number;
  readonly retry: number;
  readonly expire: number;
  readonly minttl: number;
  readonly ttl?: Duration;
}

export class DnscontrolSoaRecord extends DnscontrolRecord {
  public readonly mbox: string;
  public readonly refresh: number;
  public readonly retry: number;
  public readonly expire: number;
  public readonly minttl: number;
  constructor(scope: Construct, id: string, props: DnscontrolSoaRecordProps) {
    super(scope, id, {
      recordType: "SOA",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
    this.mbox = props.mbox;
    this.refresh = props.refresh;
    this.retry = props.retry;
    this.expire = props.expire;
    this.minttl = props.minttl;
  }
  public static isDnscontrolSoaRecord(
    x: unknown,
  ): x is DnscontrolSoaRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_SOA_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolSoaRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      soambox: this.mbox,
      soarefresh: this.refresh,
      soaretry: this.retry,
      soaexpire: this.expire,
      soaminttl: this.minttl,
    };
  }
}
