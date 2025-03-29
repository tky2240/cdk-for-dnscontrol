import { Construct } from "constructs";
import { DnscontrolCfRedirectRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_CF_REDIRECT_RECORD_SYMBOL = Symbol.for(
  "DnscontrolCfRedirectRecord",
);

export interface DnscontrolCfRedirectRecordProps {
  readonly source: string;
  readonly destination: string;
  readonly ttl?: Duration | undefined;
}

export class DnscontrolCfRedirectRecord extends DnscontrolRecord {
  readonly source: string;
  readonly destination: string;
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolCfRedirectRecordProps,
  ) {
    super(scope, id, {
      recordType: "CF_REDIRECT",
      label: "@",
      target: `${props.source},${props.destination}`,
      ttl: props.ttl,
    });
    if (props.source.includes(",")) {
      throw new Error("source must include no commma");
    }
    if (props.destination.includes(",")) {
      throw new Error("destination must include no commma");
    }
    this.source = props.source;
    this.destination = props.destination;
  }
  public static isDnscontrolCfRedirectRecord(
    x: unknown,
  ): x is DnscontrolCfRedirectRecord {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_CF_REDIRECT_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolCfRedirectRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: {
        orig_custom_type: "CF_REDIRECT",
      },
    };
  }
}
