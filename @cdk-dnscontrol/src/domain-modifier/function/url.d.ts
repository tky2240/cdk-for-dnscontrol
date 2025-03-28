import { Construct } from "constructs";
import { DnscontrolUrlRecord } from "../record/url";
export declare function URL(scope: Construct, label: string, target: string, ttl?: number | string): DnscontrolUrlRecord;
