import { Construct } from "constructs";
import { DnscontrolAliasRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_ALIAS_RECORD_SYMBOL = Symbol.for("DnscontrolAliasRecord");

export interface DnscontrolAliasRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration | undefined;
  readonly isEnsuredAbsent?: boolean | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export class DnscontrolAliasRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnscontrolAliasRecordProps) {
    super(scope, id, {
      recordType: "ALIAS",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
      isEnsuredAbsent: props.isEnsuredAbsent,
      meta: props.meta,
    });
  }
  public static isDnscontrolARecord(x: unknown): x is DnscontrolAliasRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_ALIAS_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolAliasRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: this.meta,
    };
  }
}
