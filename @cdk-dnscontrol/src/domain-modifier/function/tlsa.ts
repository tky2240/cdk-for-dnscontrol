import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolTlsaRecord } from "../record/tlsa";

export function TLSA(
  scope: Construct,
  label: string,
  usage: number,
  selector: number,
  matchingType: number,
  target: string,
  ttl?: number | string,
  isEnsuredAbsent?: boolean,
  meta?: Record<string, string>,
): DnscontrolTlsaRecord {
  return new DnscontrolTlsaRecord(
    scope,
    `Tlsa:${label}:${usage}:${selector}:${matchingType}:${target}`,
    {
      label: label,
      target: target,
      ttl: ttl != null ? new Duration(ttl) : undefined,
      isEnsuredAbsent: isEnsuredAbsent,
      meta: meta,
      usage: usage,
      selector: selector,
      matchingType: matchingType,
    },
  );
}
