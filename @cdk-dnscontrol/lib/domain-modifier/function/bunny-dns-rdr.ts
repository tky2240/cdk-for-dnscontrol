import { Construct } from "constructs";
import { DnscontrolBunnyDnsRdrRecord } from "../record/bunny-dns-rdr";
import { Duration } from "../../types/duration";

export function BUNNY_DNS_RDR(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string
): DnscontrolBunnyDnsRdrRecord {
  return new DnscontrolBunnyDnsRdrRecord(scope, `BunnyDnsRdr:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
