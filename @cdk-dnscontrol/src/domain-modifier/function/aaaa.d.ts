import { Construct } from "constructs";
import { DnscontrolAAAARecord } from "../record/aaaa";
export declare function AAAA(scope: Construct, label: string, ip: string, ttl?: number | string, isEnsuredAbsent?: boolean, meta?: Record<string, string>): DnscontrolAAAARecord;
