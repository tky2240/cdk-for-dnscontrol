import { Construct } from "constructs";
import { DnscontrolDhcidRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_DHCID_RECORD_SYMBOL = Symbol.for("DnscontrolDhcidRecord");

export interface DnscontrolDhcidRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration;
}

export class DnscontrolDhcidRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnscontrolDhcidRecordProps) {
    super(scope, id, {
      recordType: "DHCID",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
  }
  public static isDnscontrolDhcidRecord(
    x: unknown,
  ): x is DnscontrolDhcidRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_DHCID_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolDhcidRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: {},
    };
  }
}
