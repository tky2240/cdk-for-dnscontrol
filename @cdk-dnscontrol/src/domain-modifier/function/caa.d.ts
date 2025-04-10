import { Construct } from "constructs";
import { CaaTag, DnscontrolCaaRecord } from "../record/caa";
export declare function CAA(scope: Construct, label: string, caaTag: CaaTag, target: string, isCaaCritical: boolean, ttl?: number | string): DnscontrolCaaRecord;
