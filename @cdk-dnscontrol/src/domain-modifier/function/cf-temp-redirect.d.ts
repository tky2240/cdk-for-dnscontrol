import { Construct } from "constructs";
import { DnscontrolCfTempRedirectRecord } from "../record/cf-temp-redirect";
export declare function CF_TEMP_REDIRECT(scope: Construct, source: string, destination: string, ttl?: number | string, meta?: Record<string, string>): DnscontrolCfTempRedirectRecord;
