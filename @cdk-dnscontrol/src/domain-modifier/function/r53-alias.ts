import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolR53AliasRecord, R53AliasType } from "../record/r53-alias";

export function R53_ALIAS(
  scope: Construct,
  label: string,
  target: string,
  r53AliasType: R53AliasType,
  zoneId?: string,
  isEnabledEvaluateTargetHealth?: boolean,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolR53AliasRecord {
  return new DnscontrolR53AliasRecord(
    scope,
    `R53Alias:${label}:${r53AliasType}:${target}`,
    {
      label: label,
      target: target,
      ttl: ttl != null ? new Duration(ttl) : undefined,
      meta: meta,
      r53AliasType: r53AliasType,
      zoneId: zoneId,
      isEnabledEvaluateTargetHealth: isEnabledEvaluateTargetHealth,
    },
  );
}
