import { Construct } from "constructs";
import { DnscontrolUrl301Record } from "../record/url301";
export declare function URL301(scope: Construct, label: string, target: string, ttl?: number | string, meta?: Record<string, string>): DnscontrolUrl301Record;
