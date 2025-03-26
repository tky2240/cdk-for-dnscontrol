import { Construct } from "constructs";
import { DnscontrolSvcbRecord } from "../record/svcb";
export declare function SVCB(scope: Construct, label: string, priority: number, target: string, params: string, ttl?: number | string): DnscontrolSvcbRecord;
