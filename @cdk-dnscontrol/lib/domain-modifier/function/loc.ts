import { Construct } from "constructs";
import { DnscontrolLocRecord } from "../record/loc";
import { Duration } from "../../types/duration";

export function LOC(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string
): DnscontrolLocRecord {
  return new DnscontrolLocRecord(scope, `Loc:${label}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
