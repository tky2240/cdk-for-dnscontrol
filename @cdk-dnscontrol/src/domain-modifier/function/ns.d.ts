import { Construct } from "constructs";
import { DnscontrolNsRecord } from "../record/ns";
export declare function NS(scope: Construct, label: string, target: string, ttl?: number | string, isEnsuredAbsent?: boolean, meta?: Record<string, string>): DnscontrolNsRecord;
