import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolCfRedirectRecord } from "../record/cf-redirect";

export function CF_REDIRECT(
  scope: Construct,
  source: string,
  destination: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolCfRedirectRecord {
  return new DnscontrolCfRedirectRecord(
    scope,
    `CfRedirect:${source}:${destination}`,
    {
      source: source,
      destination: destination,
      ttl: ttl != null ? new Duration(ttl) : undefined,
      meta: meta,
    },
  );
}
