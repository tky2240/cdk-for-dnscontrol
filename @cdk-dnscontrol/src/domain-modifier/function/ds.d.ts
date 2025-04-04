import { Construct } from "constructs";
import { DnscontrolDsRecord, DsAlgorithm, DsDigestType } from "../record/ds";
export declare function DS(scope: Construct, label: string, keytag: number, algorithm: DsAlgorithm, digestType: DsDigestType, digest: string, ttl?: number | string): DnscontrolDsRecord;
