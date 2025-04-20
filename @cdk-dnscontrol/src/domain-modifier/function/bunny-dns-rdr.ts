import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolBunnyDnsRdrRecord } from "../record/bunny-dns-rdr";

export function BUNNY_DNS_RDR(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string,
  isEnsuredAbsent?: boolean,
  meta?: Record<string, string>,
): DnscontrolBunnyDnsRdrRecord {
  return new DnscontrolBunnyDnsRdrRecord(
    scope,
    `BunnyDnsRdr:${label}:${target}`,
    {
      target: target,
      label: label,
      ttl: ttl != null ? new Duration(ttl) : undefined,
      isEnsuredAbsent: isEnsuredAbsent,
      meta: meta,
    },
  );
}
