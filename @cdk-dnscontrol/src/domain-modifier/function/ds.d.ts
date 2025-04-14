import { Construct } from "constructs";
import { DnscontrolDsRecord, DsAlgorithm, DsDigestType } from "../record/ds";
export declare function DS(scope: Construct, label: string, keytag: number, algorithm: DsAlgorithm | number, digestType: DsDigestType | number, digest: string, ttl?: number | string, meta?: Record<string, string>): DnscontrolDsRecord;
