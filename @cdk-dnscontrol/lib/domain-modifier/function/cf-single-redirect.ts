import { Construct } from "constructs";
import { DnscontrolCfSingleRedirectRawRecord, RedirectCode } from "../raw-record/cf-single-redirect";
import { Duration } from "../../types/duration";

export function CF_SINGLE_REDIRECT(
  scope: Construct,
  name: string,
  code: RedirectCode,
  when: string,
  then: string,
  ttl?: number | string
): DnscontrolCfSingleRedirectRawRecord {
  return new DnscontrolCfSingleRedirectRawRecord(scope, `CfSingleRedirect:${name}:${code}`, {
    name: name,
    code: code,
    when: when,
    then: then,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
