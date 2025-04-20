import { Construct } from "constructs";
import { DnscontrolDsRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
declare const dsAlgorithm: {
    readonly DELETE: 0;
    readonly RSAMD5: 1;
    readonly DH: 2;
    readonly DSA: 3;
    readonly RSASHA1: 5;
    readonly "DSA-NSEC3-SHA1": 6;
    readonly "RSASHA1-NSEC3-SHA1": 7;
    readonly RSASHA256: 8;
    readonly RSASHA512: 10;
    readonly "ECC-GOST": 12;
    readonly ECDSAP256SHA256: 13;
    readonly ECDSAP384SHA384: 14;
    readonly ED25519: 15;
    readonly ED448: 16;
    readonly SM2SM3: 17;
    readonly "ECC-GOST12": 23;
    readonly INDIRECT: 252;
    readonly PRIVATEDNS: 253;
    readonly PRIVATEOID: 254;
};
export type DsAlgorithm = keyof typeof dsAlgorithm;
export declare const getDsAlgorithmStringFromValue: (value: number) => DsAlgorithm;
declare const dsDigestType: {
    readonly SHA1: 1;
    readonly SHA256: 2;
    readonly GOST_R_34_11_94: 3;
    readonly SHA384: 4;
    readonly GOST_R_34_11_2012: 5;
    readonly SM3: 6;
};
export type DsDigestType = keyof typeof dsDigestType;
export declare const getDsDigestTypeStringFromValue: (value: number) => DsDigestType;
export interface DnscontrolDsRecordProps {
    readonly label: string;
    readonly keytag: number;
    readonly algorithm: DsAlgorithm;
    readonly digestType: DsDigestType;
    readonly digest: string;
    readonly ttl?: Duration | undefined;
    readonly isEnsuredAbsent?: boolean | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolDsRecord extends DnscontrolRecord {
    readonly keytag: number;
    readonly algorithm: DsAlgorithm;
    readonly digestType: DsDigestType;
    readonly digest: string;
    constructor(scope: Construct, id: string, props: DnscontrolDsRecordProps);
    static isDnscontrolDsRecord(x: unknown): x is DnscontrolDsRecord;
    renderRecordConfig(): DnscontrolDsRecordConfig;
}
export {};
