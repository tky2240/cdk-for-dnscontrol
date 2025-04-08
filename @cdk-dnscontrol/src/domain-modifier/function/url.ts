import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolUrlRecord } from "../record/url";

export function URL(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolUrlRecord {
  return new DnscontrolUrlRecord(scope, `Url:${label}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    meta: meta,
  });
}
