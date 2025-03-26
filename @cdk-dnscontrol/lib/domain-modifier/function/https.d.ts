import { Construct } from "constructs";
import { DnscontrolHttpsRecord } from "../record/https";
export declare function HTTPS(scope: Construct, label: string, priority: number, target: string, params: string, ttl?: number | string): DnscontrolHttpsRecord;
