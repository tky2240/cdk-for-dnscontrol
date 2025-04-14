import { Construct } from "constructs";
import { DnscontrolCfTempRedirectRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_CF_TEMP_REDIRECT_RECORD_SYMBOL = Symbol.for(
  "DnscontrolCfTempRedirectRecord",
);

export interface DnscontrolCfTempRedirectRecordProps {
  readonly source: string;
  readonly destination: string;
  readonly ttl?: Duration | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export class DnscontrolCfTempRedirectRecord extends DnscontrolRecord {
  readonly source: string;
  readonly destination: string;
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolCfTempRedirectRecordProps,
  ) {
    super(scope, id, {
      recordType: "CF_TEMP_REDIRECT",
      label: "@",
      target: `${props.source},${props.destination}`,
      ttl: props.ttl,
      meta: props.meta,
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
  public static isDnscontrolCfTempRedirectRecord(
    x: unknown,
  ): x is DnscontrolCfTempRedirectRecord {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_CF_TEMP_REDIRECT_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolCfTempRedirectRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: {
        ...this.meta,
        orig_custom_type: "CF_TEMP_REDIRECT",
      },
    };
  }
}
