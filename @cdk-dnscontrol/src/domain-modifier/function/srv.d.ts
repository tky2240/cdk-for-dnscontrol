import { Construct } from "constructs";
import { DnscontrolSrvRecord } from "../record/srv";
export declare function SRV(scope: Construct, label: string, priority: number, weight: number, port: number, target: string, ttl?: number | string): DnscontrolSrvRecord;
