import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { IPv6 } from "../../types/ipv6";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_AAAA_RECORD_SYMBOL = Symbol.for("DnscontrolAAAARecord");

export interface DnsControlAAAARecordProps {
  readonly label: string;
  readonly ip: IPv6;
  readonly ttl?: Duration;
}

export class DnsControlAAAARecord extends DnscontrolRecord {
  public readonly ip: IPv6;
  constructor(scope: Construct, id: string, props: DnsControlAAAARecordProps) {
    super(scope, id, {
      recordType: "AAAA",
      label: props.label,
      target: props.ip,
      ttl: props.ttl,
    });
    this.ip = props.ip;
  }
  public static isDnsControlARecord(x: unknown): x is DnsControlAAAARecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_AAAA_RECORD_SYMBOL in x
    );
  }
}
