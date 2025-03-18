import { Construct } from "constructs";
import { DnscontrolPorkbunUrlfwdRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_PORKBUN_URLFWD_RECORD_SYMBOL = Symbol.for(
  "DnscontrolPorkbunUrlfwdRecord",
);

export interface DnscontrolPorkbunUrlfwdRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration;
}

export class DnscontrolPorkbunUrlfwdRecord extends DnscontrolRecord {
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolPorkbunUrlfwdRecordProps,
  ) {
    super(scope, id, {
      recordType: "PORKBUN_URLFWD",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
  }
  public static isDnscontrolPorkbunUrlfwdRecord(
    x: unknown,
  ): x is DnscontrolPorkbunUrlfwdRecord {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_PORKBUN_URLFWD_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolPorkbunUrlfwdRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: {},
    };
  }
}
