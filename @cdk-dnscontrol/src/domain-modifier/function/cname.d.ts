import { Construct } from "constructs";
import { DnscontrolCnameRecord } from "../record/cname";
export declare function CNAME(scope: Construct, label: string, target: string, ttl?: number | string, isEnsuredAbsent?: boolean, meta?: Record<string, string>): DnscontrolCnameRecord;
