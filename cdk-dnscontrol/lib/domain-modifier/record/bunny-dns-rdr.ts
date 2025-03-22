import { Construct } from "constructs";
import { DnscontrolBunnyDnsRdrRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_BUNNY_DNS_RDR_RECORD_SYMBOL = Symbol.for(
  "DnscontrolBunnyDnsRdrRecord",
);

export interface DnscontrolBunnyDnsRdrRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration;
}

export class DnscontrolBunnyDnsRdrRecord extends DnscontrolRecord {
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolBunnyDnsRdrRecordProps,
  ) {
    super(scope, id, {
      recordType: "BUNNY_DNS_RDR",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
  }
  public static isDnscontrolBunnyDnsRdrRecord(
    x: unknown,
  ): x is DnscontrolBunnyDnsRdrRecord {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_BUNNY_DNS_RDR_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolBunnyDnsRdrRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: {},
    };
  }
}
