import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolAliasRecord } from "../record/alias";

export function ALIAS(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolAliasRecord {
  return new DnscontrolAliasRecord(scope, `Alias:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    meta: meta,
  });
}
