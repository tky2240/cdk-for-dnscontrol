import { Construct } from "constructs";
import { DnscontrolRecordConfig } from "../../types/dnscontrol-record-config";
import { DnscontrolRecordType } from "../../types/dnscontrol-record-types";
import { Duration } from "../../types/duration";
import { DnscontrolDomainModifier } from "../dnscontrol-domain-modifier";

const DNS_CONTROL_RECORD_SYMBOL = Symbol.for("DnscontrolRecord");

export interface DnscontrolRecordProps {
  recordType: DnscontrolRecordType;
  label: string;
  subDomain?: string | undefined;
  ttl?: Duration | undefined;
  target: string;
  isEnsuredAbsent?: boolean | undefined;
  meta?: Record<string, string> | undefined;
}

export abstract class DnscontrolRecord extends DnscontrolDomainModifier {
  public readonly recordType: DnscontrolRecordType;
  public readonly label: string;
  public readonly subDomain?: string | undefined;
  public readonly name: string;
  public readonly ttl?: Duration | undefined;
  public readonly target: string;
  public readonly isEnsuredAbsent?: boolean | undefined;
  constructor(scope: Construct, id: string, props: DnscontrolRecordProps) {
    super(scope, id, {
      modiferType: props.recordType,
      meta: props.meta,
    });
    Object.defineProperty(this, DNS_CONTROL_RECORD_SYMBOL, { value: true });
    this.recordType = props.recordType;
    this.label = props.label;
    this.subDomain = props.subDomain;
    this.ttl = props.ttl;
    this.target = props.target;
    this.name = props.label;
    this.isEnsuredAbsent = props.isEnsuredAbsent;
  }
  public static isDnscontrolRecord(x: unknown): x is DnscontrolRecord {
    return x != null && typeof x === "object" && DNS_CONTROL_RECORD_SYMBOL in x;
  }
  public abstract renderRecordConfig(): DnscontrolRecordConfig;
}
