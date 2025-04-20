import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { asMxPreference } from "../../types/mx-preference";
import { DnscontrolMxRecord } from "../record/mx";

export function MX(
  scope: Construct,
  label: string,
  mxPriority: number,
  target: string,
  ttl?: number | string,
  isEnsuredAbsent?: boolean,
  meta?: Record<string, string>,
): DnscontrolMxRecord {
  return new DnscontrolMxRecord(scope, `Mx:${label}:${mxPriority}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    isEnsuredAbsent: isEnsuredAbsent,
    meta: meta,
    mxPreference: asMxPreference(mxPriority),
  });
}
