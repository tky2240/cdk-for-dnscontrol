import { Construct } from "constructs";
import { DnscontrolNaptrRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_NAPTR_RECORD_SYMBOL = Symbol.for("DnscontrolNaptrRecord");

export interface DnscontrolNaptrRecordProps {
  readonly label: string;
  readonly target: string;
  readonly order: number;
  readonly preference: number;
  readonly flags: string;
  readonly service: string;
  readonly regexp: string;
  readonly ttl?: Duration | undefined;
  readonly isEnsuredAbsent?: boolean | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export class DnscontrolNaptrRecord extends DnscontrolRecord {
  public readonly order: number;
  public readonly preference: number;
  public readonly flags: string;
  public readonly service: string;
  public readonly regexp: string;
  constructor(scope: Construct, id: string, props: DnscontrolNaptrRecordProps) {
    super(scope, id, {
      recordType: "NAPTR",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
      isEnsuredAbsent: props.isEnsuredAbsent,
      meta: props.meta,
    });
    this.order = props.order;
    this.preference = props.preference;
    this.flags = props.flags;
    this.service = props.service;
    this.regexp = props.regexp;
  }
  public static isDnscontrolNaptrRecord(
    x: unknown,
  ): x is DnscontrolNaptrRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_NAPTR_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolNaptrRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      naptrOrder: this.order,
      naptrPreference: this.preference,
      naptrFlags: this.flags,
      naptrService: this.service,
      naptrRegexp: this.regexp,
      meta: this.meta,
    };
  }
}
