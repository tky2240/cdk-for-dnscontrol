import { Construct } from "constructs";
import { DnscontrolCfSingleRedirectRawRecord, RedirectCode } from "../raw-record/cf-single-redirect";
export declare function CF_SINGLE_REDIRECT(scope: Construct, name: string, code: RedirectCode, when: string, then: string, ttl?: number | string): DnscontrolCfSingleRedirectRawRecord;
