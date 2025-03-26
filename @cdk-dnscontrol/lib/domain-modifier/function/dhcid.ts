import { Construct } from "constructs";
import { DnscontrolDhcidRecord } from "../record/dhcid";
import { Duration } from "../../types/duration";

export function DHCID(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string
): DnscontrolDhcidRecord {
  return new DnscontrolDhcidRecord(scope, `Dhcid:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
