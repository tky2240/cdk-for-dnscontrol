import { Construct } from "constructs";
import { DnscontrolCfTmpRedirectRecord } from "../record/cf-tmp-redirect";
import { Duration } from "../../types/duration";

export function CF_TMP_REDIRECT(
  scope: Construct,
  source: string,
  destination: string,
  ttl?: number | string
): DnscontrolCfTmpRedirectRecord {
  return new DnscontrolCfTmpRedirectRecord(scope, `CfTmpRedirect:${source}:${destination}`, {
    source: source,
    destination: destination,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
