import { Construct } from "constructs";
import { DnscontrolPtrRecord } from "../record/ptr";
import { Duration } from "../../types/duration";

export function PTR(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string
): DnscontrolPtrRecord {
  return new DnscontrolPtrRecord(scope, `Ptr:${label}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
