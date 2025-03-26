import { Construct } from "constructs";
import { DnscontrolPtrRecord } from "../record/ptr";
export declare function PTR(scope: Construct, label: string, target: string, ttl?: number | string): DnscontrolPtrRecord;
