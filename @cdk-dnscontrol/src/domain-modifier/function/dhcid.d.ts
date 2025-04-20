import { Construct } from "constructs";
import { DnscontrolDhcidRecord } from "../record/dhcid";
export declare function DHCID(scope: Construct, label: string, target: string, ttl?: number | string, isEnsuredAbsent?: boolean, meta?: Record<string, string>): DnscontrolDhcidRecord;
