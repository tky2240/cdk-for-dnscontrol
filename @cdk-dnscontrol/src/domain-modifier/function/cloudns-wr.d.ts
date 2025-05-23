import { Construct } from "constructs";
import { DnscontrolCloudnsWrRecord } from "../record/cloudns-wr";
export declare function CLOUDNS_WR(scope: Construct, label: string, target: string, ttl?: number | string, isEnsuredAbsent?: boolean, meta?: Record<string, string>): DnscontrolCloudnsWrRecord;
