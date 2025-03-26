import { Construct } from "constructs";
import { DnscontrolMxRecord } from "../record/mx";
import { Duration } from "../../types/duration";
import { asMxPreference } from "../../types/mx-preference";

export function MX(
  scope: Construct,
  label: string,
  mxPriority: number,
  target: string,
  ttl?: number | string
): DnscontrolMxRecord {
  return new DnscontrolMxRecord(scope, `Mx:${label}:${mxPriority}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    mxPreference: asMxPreference(mxPriority),
  });
}
