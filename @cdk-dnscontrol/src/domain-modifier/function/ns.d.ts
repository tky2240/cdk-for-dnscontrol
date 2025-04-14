import { Construct } from "constructs";
import { DnscontrolNsRecord } from "../record/ns";
export declare function NS(scope: Construct, label: string, target: string, ttl?: number | string, meta?: Record<string, string>): DnscontrolNsRecord;
