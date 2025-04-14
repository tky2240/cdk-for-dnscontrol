import { Construct } from "constructs";
import { DnscontrolTxtRecord } from "../record/txt";
export declare function TXT(scope: Construct, label: string, target: string | readonly string[], ttl?: number | string, meta?: Record<string, string>): DnscontrolTxtRecord;
