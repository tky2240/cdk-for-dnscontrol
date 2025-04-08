import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolNsRecord } from "../record/ns";

export function NS(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolNsRecord {
  return new DnscontrolNsRecord(scope, `Ns:${label}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    meta: meta,
  });
}
