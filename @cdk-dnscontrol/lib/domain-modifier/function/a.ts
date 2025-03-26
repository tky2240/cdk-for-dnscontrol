import { Construct } from "constructs";
import { DnscontrolARecord } from "../record/a";
import { Duration } from "../../types/duration";
import { asIPv4Address } from "../../types/ipv4";

export function A(
  scope: Construct,
  label: string,
  ip: string,
  ttl?: number | string
): DnscontrolARecord {
  return new DnscontrolARecord(scope, `A:${label}:${ip}`, {
    ip: asIPv4Address(ip),
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
