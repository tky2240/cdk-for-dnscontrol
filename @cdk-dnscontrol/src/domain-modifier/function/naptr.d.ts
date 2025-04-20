import { Construct } from "constructs";
import { DnscontrolNaptrRecord } from "../record/naptr";
export declare function NAPTR(scope: Construct, label: string, order: number, preference: number, flags: string, service: string, regexp: string, target: string, ttl?: number | string, isEnsuredAbsent?: boolean, meta?: Record<string, string>): DnscontrolNaptrRecord;
