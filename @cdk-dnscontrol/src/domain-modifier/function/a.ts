import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { asIPv4Address } from "../../types/ipv4";
import { DnscontrolARecord } from "../record/a";

export function A(
  scope: Construct,
  label: string,
  ip: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolARecord {
  return new DnscontrolARecord(scope, `A:${label}:${ip}`, {
    ip: asIPv4Address(ip),
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    meta: meta,
  });
}
