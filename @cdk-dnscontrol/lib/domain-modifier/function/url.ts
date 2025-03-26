import { Construct } from "constructs";
import { DnscontrolUrlRecord } from "../record/url";
import { Duration } from "../../types/duration";

export function URL(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string
): DnscontrolUrlRecord {
  return new DnscontrolUrlRecord(scope, `Url:${label}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
