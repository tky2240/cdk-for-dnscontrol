import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolCfTmpRedirectRecord } from "../record/cf-tmp-redirect";

export function CF_TMP_REDIRECT(
  scope: Construct,
  source: string,
  destination: string,
  ttl?: number | string,
): DnscontrolCfTmpRedirectRecord {
  return new DnscontrolCfTmpRedirectRecord(
    scope,
    `CfTmpRedirect:${source}:${destination}`,
    {
      source: source,
      destination: destination,
      ttl: ttl != null ? new Duration(ttl) : undefined,
    },
  );
}
