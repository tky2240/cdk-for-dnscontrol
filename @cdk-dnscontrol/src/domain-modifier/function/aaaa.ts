import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { asIPv6Address } from "../../types/ipv6";
import { DnscontrolAAAARecord } from "../record/aaaa";

export function AAAA(
  scope: Construct,
  label: string,
  ip: string,
  ttl?: number | string,
  isEnsuredAbsent?: boolean,
  meta?: Record<string, string>,
): DnscontrolAAAARecord {
  return new DnscontrolAAAARecord(scope, `AAAA:${label}:${ip}`, {
    ip: asIPv6Address(ip),
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    isEnsuredAbsent: isEnsuredAbsent,
    meta: meta,
  });
}
