import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolDhcidRecord } from "../record/dhcid";

export function DHCID(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolDhcidRecord {
  return new DnscontrolDhcidRecord(scope, `Dhcid:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    meta: meta,
  });
}
