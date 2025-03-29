import { Construct } from "constructs";
import { DnscontrolR53AliasRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_R53_ALIAS_RECORD_SYMBOL = Symbol.for(
  "DnscontrolR53AliasRecord",
);

// eslint-disable-next-line
const r53AliasTypeString = [
  "A",
  "AAAA",
  "CNAME",
  "CAA",
  "MX",
  "TXT",
  "PTR",
  "SPF",
  "SRV",
  "NAPTR",
] as const;

export type R53AliasType = (typeof r53AliasTypeString)[number];

export interface DnscontrolR53AliasRecordProps {
  readonly label: string;
  readonly target: string;
  readonly r53AliasType: R53AliasType;
  readonly zoneId?: string | undefined;
  readonly isEnabledEvaluateTargetHealth?: boolean | undefined;
  readonly ttl?: Duration | undefined;
}

export class DnscontrolR53AliasRecord extends DnscontrolRecord {
  readonly r53AliasType: R53AliasType;
  readonly zoneId?: string | undefined;
  readonly isEnabledEvaluateTargetHealth?: boolean | undefined;
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolR53AliasRecordProps,
  ) {
    super(scope, id, {
      recordType: "R53_ALIAS",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
    this.r53AliasType = props.r53AliasType;
    this.zoneId = props.zoneId;
    this.isEnabledEvaluateTargetHealth = props.isEnabledEvaluateTargetHealth;
  }
  public static isDnscontrolR53AliasRecord(
    x: unknown,
  ): x is DnscontrolR53AliasRecord {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_R53_ALIAS_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolR53AliasRecordConfig {
    // missing Boolean.prototype.toString() method
    // https://github.com/microsoft/TypeScript/issues/38347
    const evaluateTargetHealth = (() => {
      if (this.isEnabledEvaluateTargetHealth == null) {
        return "false";
      }
      return this.isEnabledEvaluateTargetHealth ? "true" : "false";
    })();
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      r53Alias: {
        type: this.r53AliasType,
        zoneId: this.zoneId,
        evaluateTargetHealth: evaluateTargetHealth,
      },
      meta: {
        orig_custom_type: "R53_ALIAS",
      },
    };
  }
}
