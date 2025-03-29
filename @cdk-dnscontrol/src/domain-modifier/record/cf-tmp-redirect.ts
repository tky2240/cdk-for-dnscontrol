import { Construct } from "constructs";
import { DnscontrolCfTmpRedirectRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_CF_TEMP_REDIRECT_RECORD_SYMBOL = Symbol.for(
  "DnscontrolCfTmpRedirectRecord",
);

export interface DnscontrolCfTmpRedirectRecordProps {
  readonly source: string;
  readonly destination: string;
  readonly ttl?: Duration | undefined;
}

export class DnscontrolCfTmpRedirectRecord extends DnscontrolRecord {
  readonly source: string;
  readonly destination: string;
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolCfTmpRedirectRecordProps,
  ) {
    super(scope, id, {
      recordType: "CF_TEMP_REDIRECT",
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
  public static isDnscontrolCfTmpRedirectRecord(
    x: unknown,
  ): x is DnscontrolCfTmpRedirectRecord {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_CF_TEMP_REDIRECT_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolCfTmpRedirectRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: {
        orig_custom_type: "CF_TEMP_REDIRECT",
      },
    };
  }
}
