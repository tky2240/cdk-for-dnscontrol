import { Construct } from "constructs";
import { DnscontrolCfTmpRedirectRecord } from "../record/cf-tmp-redirect";
export declare function CF_TMP_REDIRECT(scope: Construct, source: string, destination: string, ttl?: number | string): DnscontrolCfTmpRedirectRecord;
