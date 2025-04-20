import { Construct } from "constructs";
import { DnscontrolLocRecord } from "../record/loc";
export declare function LOC(scope: Construct, label: string, target: string, ttl?: number | string, isEnsuredAbsent?: boolean, meta?: Record<string, string>): DnscontrolLocRecord;
