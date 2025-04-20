import { Construct } from "constructs";
import { DnscontrolARecord } from "../record/a";
export declare function A(scope: Construct, label: string, ip: string, ttl?: number | string, isEnsuredAbsent?: boolean, meta?: Record<string, string>): DnscontrolARecord;
