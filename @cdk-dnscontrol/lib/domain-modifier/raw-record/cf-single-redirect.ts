import { Construct } from "constructs";
import { DnscontrolCfSingleRedirectRawRecordConfig } from "../../types/dnscontrol-raw-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRawRecord } from "../raw-record/dnscontrol-raw-record";

const DNS_CONTROL_CF_SINGLE_REDIRECT_RAW_RECORD_SYMBOL = Symbol.for(
  "DnscontrolCfSingleRedirectRawRecord",
);

// eslint-disable-next-line
const redirectCodes = [301, 302] as const;
export type RedirectCode = (typeof redirectCodes)[number];

export interface DnscontrolCfSingleRedirectRecordProps {
  readonly name: string;
  readonly code: RedirectCode;
  readonly when: string;
  readonly then: string;
  readonly ttl?: Duration | undefined;
}

export class DnscontrolCfSingleRedirectRawRecord extends DnscontrolRawRecord {
  public readonly name: string;
  public readonly code: RedirectCode;
  public readonly when: string;
  public readonly then: string;
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolCfSingleRedirectRecordProps,
  ) {
    super(scope, id, {
      rawRecordType: "CLOUDFLAREAPI_SINGLE_REDIRECT",
      ttl: props.ttl,
    });
    this.name = props.name;
    this.code = props.code;
    this.when = props.when;
    this.then = props.then;
  }
  public static isDnscontrolCfSingleRedirectRecord(
    x: unknown,
  ): x is DnscontrolCfSingleRedirectRawRecord {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_CF_SINGLE_REDIRECT_RAW_RECORD_SYMBOL in x
    );
  }
  public getRawRecordConfig(): DnscontrolCfSingleRedirectRawRecordConfig {
    return {
      type: this.rawRecordType,
      ttl: this.ttl?.toSeconds(),
      args: [this.name, this.code, this.when, this.then],
      metas: [{ orig_custom_type: "CLOUDFLAREAPI_SINGLE_REDIRECT" }],
    };
  }
}
