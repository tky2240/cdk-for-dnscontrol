import { Construct } from "constructs";
import { DnscontrolFrameRecord } from "../record/frame";
export declare function FRAME(scope: Construct, label: string, target: string, ttl?: number | string): DnscontrolFrameRecord;
