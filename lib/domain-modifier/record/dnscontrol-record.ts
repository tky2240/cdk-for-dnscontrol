import { Construct } from "constructs";
import { DnscontrolRecordType } from "../../types/dnscontrol-record-types";
import { Duration } from "../../types/duration";
import { DnscontrolDomainModifier } from "../dnscontrol-domain-modifier";

const DNS_CONTROL_RECORD_SYMBOL = Symbol.for("DnscontrolRecord");

export interface DnscontrolRecordProps {
  recordType: DnscontrolRecordType;
  label: string;
  ttl?: Duration | undefined;
  target: string;
}

export abstract class DnscontrolRecord extends DnscontrolDomainModifier {
  public readonly recordType: DnscontrolRecordType;
  public readonly label: string;
  public readonly ttl?: Duration | undefined;
  public readonly target: string;
  constructor(scope: Construct, id: string, props: DnscontrolRecordProps) {
    super(scope, id, { type: props.recordType, name: props.label });
    Object.defineProperty(this, DNS_CONTROL_RECORD_SYMBOL, { value: true });
    this.recordType = props.recordType;
    this.label = props.label;
    this.ttl = props.ttl;
    this.target = props.target;
  }
  public static isDnscontrolRecord(x: unknown): x is DnscontrolRecord {
    return x != null && typeof x === "object" && DNS_CONTROL_RECORD_SYMBOL in x;
  }
}
