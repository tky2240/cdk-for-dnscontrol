import { Construct } from "constructs";
import { DnscontrolMxRecord } from "../record/mx";
export declare function MX(scope: Construct, label: string, mxPriority: number, target: string, ttl?: number | string): DnscontrolMxRecord;
