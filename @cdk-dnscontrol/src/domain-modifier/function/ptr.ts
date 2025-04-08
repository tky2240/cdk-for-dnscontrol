import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolPtrRecord } from "../record/ptr";

export function PTR(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolPtrRecord {
  return new DnscontrolPtrRecord(scope, `Ptr:${label}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    meta: meta,
  });
}
