import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolCfTempRedirectRecord } from "../record/cf-temp-redirect";

export function CF_TEMP_REDIRECT(
  scope: Construct,
  source: string,
  destination: string,
  ttl?: number | string,
  isEnsuredAbsent?: boolean,
  meta?: Record<string, string>,
): DnscontrolCfTempRedirectRecord {
  return new DnscontrolCfTempRedirectRecord(
    scope,
    `CfTempRedirect:${source}:${destination}`,
    {
      source: source,
      destination: destination,
      ttl: ttl != null ? new Duration(ttl) : undefined,
      isEnsuredAbsent: isEnsuredAbsent,
      meta: meta,
    },
  );
}
