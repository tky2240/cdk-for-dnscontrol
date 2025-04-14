import { Construct } from "constructs";
import { DnscontrolCfRedirectRecord } from "../record/cf-redirect";
export declare function CF_REDIRECT(scope: Construct, source: string, destination: string, ttl?: number | string, meta?: Record<string, string>): DnscontrolCfRedirectRecord;
