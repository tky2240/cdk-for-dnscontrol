import { Construct } from "constructs";
import { DnscontrolTlsaRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_TLSA_RECORD_SYMBOL = Symbol.for("DnscontrolTlsaRecord");

export interface DnscontrolTlsaRecordProps {
  readonly label: string;
  readonly target: string;
  readonly usage: number;
  readonly selector: number;
  readonly matchingType: number;
  readonly ttl?: Duration | undefined;
}

export class DnscontrolTlsaRecord extends DnscontrolRecord {
  public readonly usage: number;
  public readonly selector: number;
  public readonly matchingType: number;
  constructor(scope: Construct, id: string, props: DnscontrolTlsaRecordProps) {
    super(scope, id, {
      recordType: "TLSA",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
    this.usage = props.usage;
    this.selector = props.selector;
    this.matchingType = props.matchingType;
  }
  public static isDnscontrolTlsaRecord(x: unknown): x is DnscontrolTlsaRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_TLSA_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolTlsaRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      tlsaUsage: this.usage,
      tlsaSelector: this.selector,
      tlsaMatchingType: this.matchingType,
      meta: {},
    };
  }
}
