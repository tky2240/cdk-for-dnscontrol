import { Construct } from "constructs";
import { DnscontrolAliasRecord } from "../record/alias";
export declare function ALIAS(scope: Construct, label: string, target: string, ttl?: number | string): DnscontrolAliasRecord;
