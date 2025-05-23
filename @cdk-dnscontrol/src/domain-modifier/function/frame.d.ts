import { Construct } from "constructs";
import { DnscontrolFrameRecord } from "../record/frame";
export declare function FRAME(scope: Construct, label: string, target: string, ttl?: number | string, isEnsuredAbsent?: boolean, meta?: Record<string, string>): DnscontrolFrameRecord;
