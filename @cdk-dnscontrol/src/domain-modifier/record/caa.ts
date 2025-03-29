import { Construct } from "constructs";
import { DnscontrolCaaRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_CAA_RECORD_SYMBOL = Symbol.for("DnscontrolCaaRecord");

// eslint-disable-next-line
const caaTagStrings = ["issue", "issuewild", "iodef"] as const;
export type CaaTag = (typeof caaTagStrings)[number];

export interface DnscontrolCaaRecordProps {
  readonly label: string;
  readonly target: string;
  readonly caaTag: CaaTag;
  readonly isCaaCritical: boolean;
  readonly ttl?: Duration | undefined;
}

export class DnscontrolCaaRecord extends DnscontrolRecord {
  public readonly caaTag: CaaTag;
  public readonly isCaaCritical: boolean;
  constructor(scope: Construct, id: string, props: DnscontrolCaaRecordProps) {
    super(scope, id, {
      recordType: "CAA",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
    this.caaTag = props.caaTag;
    this.isCaaCritical = props.isCaaCritical;
  }
  public static isDnscontrolARecord(x: unknown): x is DnscontrolCaaRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_CAA_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolCaaRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      caaTag: this.caaTag,
      caaFlag: this.isCaaCritical ? 128 : 0,
      ttl: this.ttl?.toSeconds(),
      meta: {},
    };
  }
}
