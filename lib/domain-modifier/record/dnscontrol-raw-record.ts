import { Construct } from "constructs";
import { DnscontrolRawRecordConfig } from "../../types/dnscontrol-raw-record-config";
import { DnscontrolRawRecordType } from "../../types/dnscontrol-raw-record-types";
import { Duration } from "../../types/duration";
import { DnscontrolDomainModifier } from "../dnscontrol-domain-modifier";

const DNS_CONTROL_RAW_RECORD_SYMBOL = Symbol.for("DnscontrolRawRecord");

export interface DnscontrolRawRecordProps {
  rawRecordType: DnscontrolRawRecordType;
  ttl?: Duration | undefined;
}

export abstract class DnscontrolRawRecord extends DnscontrolDomainModifier {
  public readonly rawRecordType: DnscontrolRawRecordType;
  public readonly ttl?: Duration | undefined;
  constructor(scope: Construct, id: string, props: DnscontrolRawRecordProps) {
    super(scope, id, { type: props.rawRecordType });
    Object.defineProperty(this, DNS_CONTROL_RAW_RECORD_SYMBOL, { value: true });
    this.rawRecordType = props.rawRecordType;
    this.ttl = props.ttl;
  }
  public static isDnscontrolRawRecord(x: unknown): x is DnscontrolRawRecord {
    return x != null && typeof x === "object" && DNS_CONTROL_RAW_RECORD_SYMBOL in x;
  }
  public abstract getRawRecordConfig(): DnscontrolRawRecordConfig;
}
