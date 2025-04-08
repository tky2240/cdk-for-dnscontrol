import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolAkamaiCdnRecord } from "../record/akamai-cdn";

export function AKAMAI_CDN(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolAkamaiCdnRecord {
  return new DnscontrolAkamaiCdnRecord(scope, `AkamaiCdn:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    meta: meta,
  });
}
