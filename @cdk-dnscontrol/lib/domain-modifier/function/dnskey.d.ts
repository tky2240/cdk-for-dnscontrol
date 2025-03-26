import { Construct } from "constructs";
import { DnscontrolDnskeyRecord, DnskeyAlgorithm, DnskeyFlag, DnskeyProtocol } from "../record/dnskey";
export declare function DNSKEY(scope: Construct, label: string, target: string, flag: DnskeyFlag, protocol: DnskeyProtocol, algorythm: DnskeyAlgorithm, publickey: string, ttl?: number | string): DnscontrolDnskeyRecord;
