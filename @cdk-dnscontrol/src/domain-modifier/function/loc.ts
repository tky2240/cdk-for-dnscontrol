import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolLocRecord } from "../record/loc";

export function LOC(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string,
  isEnsuredAbsent?: boolean,
  meta?: Record<string, string>,
): DnscontrolLocRecord {
  return new DnscontrolLocRecord(scope, `Loc:${label}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    isEnsuredAbsent: isEnsuredAbsent,
    meta: meta,
  });
}
