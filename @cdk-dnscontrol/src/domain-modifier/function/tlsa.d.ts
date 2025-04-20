import { Construct } from "constructs";
import { DnscontrolTlsaRecord } from "../record/tlsa";
export declare function TLSA(scope: Construct, label: string, usage: number, selector: number, matchingType: number, target: string, ttl?: number | string, isEnsuredAbsent?: boolean, meta?: Record<string, string>): DnscontrolTlsaRecord;
