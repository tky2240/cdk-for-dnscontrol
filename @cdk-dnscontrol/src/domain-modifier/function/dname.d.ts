import { Construct } from "constructs";
import { DnscontrolDnameRecord } from "../record/dname";
export declare function DNAME(scope: Construct, label: string, target: string, ttl?: number | string): DnscontrolDnameRecord;
