import { Construct } from "constructs";
import { DnscontrolDnskeyRecord, DnskeyAlgorithm, DnskeyFlag, DnskeyProtocol } from "../record/dnskey";
export declare function DNSKEY(scope: Construct, label: string, target: string, flag: DnskeyFlag | number, protocol: DnskeyProtocol | number, algorithm: DnskeyAlgorithm | number, publickey: string, ttl?: number | string, meta?: Record<string, string>): DnscontrolDnskeyRecord;
