import { Construct } from "constructs";
import { DnscontrolSoaRecord } from "../record/soa";
export declare function SOA(scope: Construct, label: string, target: string, mbox: string, refresh: number, retry: number, expire: number, minttl: number, ttl?: number | string): DnscontrolSoaRecord;
