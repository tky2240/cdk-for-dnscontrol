import { Construct } from "constructs";
import { IPv4 } from "../../types/ipv4";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_CNAME_RECORD_SYMBOL = Symbol.for("DnscontrolCnameRecord");

export interface DnsControlCnameRecordProps {
  readonly label: string;
  readonly target: string;
}

export class DnsControlCnameRecord extends DnscontrolRecord {
  public readonly ip: IPv4;
  constructor(scope: Construct, id: string, props: DnsControlCnameRecordProps) {
    super(scope, id, {
      recordType: "CNAME",
      label: props.label,
      target: props.target,
    });
  }
  public static isDnsControlCnameRecord(
    x: unknown,
  ): x is DnsControlCnameRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_CNAME_RECORD_SYMBOL in x
    );
  }
}
