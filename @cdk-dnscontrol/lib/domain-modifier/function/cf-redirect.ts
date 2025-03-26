import { Construct } from "constructs";
import { DnscontrolCfRedirectRecord } from "../record/cf-redirect";
import { Duration } from "../../types/duration";

export function CF_REDIRECT(
  scope: Construct,
  source: string,
  destination: string,
  ttl?: number | string
): DnscontrolCfRedirectRecord {
  return new DnscontrolCfRedirectRecord(scope, `CfRedirect:${source}:${destination}`, {
    source: source,
    destination: destination,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
