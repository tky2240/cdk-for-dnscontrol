import { Construct } from "constructs";
import { DnscontrolNsRecord } from "../record/ns";
import { Duration } from "../../types/duration";

export function NS(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string
): DnscontrolNsRecord {
  return new DnscontrolNsRecord(scope, `Ns:${label}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
