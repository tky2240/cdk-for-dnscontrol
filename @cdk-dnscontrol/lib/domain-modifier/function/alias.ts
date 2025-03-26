import { Construct } from "constructs";
import { DnscontrolAliasRecord } from "../record/alias";
import { Duration } from "../../types/duration";

export function ALIAS(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string
): DnscontrolAliasRecord {
  return new DnscontrolAliasRecord(scope, `Alias:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
