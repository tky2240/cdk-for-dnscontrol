import { Construct } from "constructs";
import { DnscontrolAkamaiCdnRecord } from "../record/akamai-cdn";
export declare function AKAMAI_CDN(scope: Construct, label: string, target: string, ttl?: number | string): DnscontrolAkamaiCdnRecord;
