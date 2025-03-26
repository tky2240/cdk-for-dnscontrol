import { Construct } from "constructs";
import { DnscontrolAkamaiCdnRecord } from "../record/akamai-cdn";
import { Duration } from "../../types/duration";

export function AKAMAI_CDN(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string
): DnscontrolAkamaiCdnRecord {
  return new DnscontrolAkamaiCdnRecord(scope, `AkamaiCdn:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
