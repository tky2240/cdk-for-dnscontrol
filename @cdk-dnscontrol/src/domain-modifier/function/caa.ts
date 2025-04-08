import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { CaaTag, DnscontrolCaaRecord } from "../record/caa";

export function CAA(
  scope: Construct,
  label: string,
  caaTag: CaaTag,
  target: string,
  isCaaCritical: boolean,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolCaaRecord {
  return new DnscontrolCaaRecord(scope, `Caa:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    meta: meta,
    caaTag: caaTag,
    isCaaCritical: isCaaCritical,
  });
}
