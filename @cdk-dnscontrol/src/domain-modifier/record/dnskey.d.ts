import { Construct } from "constructs";
import { DnscontrolDnskeyRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
declare const dnskeyFlag: {
    readonly ZSK: 256;
    readonly KSK: 257;
};
export type DnskeyFlag = keyof typeof dnskeyFlag;
export declare const getDnsKeyFlagStringFromValue: (value: number) => DnskeyFlag;
declare const dnskeyProtocol: {
    readonly DNSSEC: 3;
};
export type DnskeyProtocol = keyof typeof dnskeyProtocol;
export declare const getDnsKeyProtocolStringFromValue: (value: number) => DnskeyProtocol;
declare const dnskeyAlgorithm: {
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
export type DnskeyAlgorithm = keyof typeof dnskeyAlgorithm;
export declare const getDnsKeyAlgorithmStringFromValue: (value: number) => DnskeyAlgorithm;
export interface DnscontrolDnskeyRecordProps {
    readonly label: string;
    readonly flag: DnskeyFlag;
    readonly protocol: DnskeyProtocol;
    readonly algorithm: DnskeyAlgorithm;
    readonly publickey: string;
    readonly ttl?: Duration | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolDnskeyRecord extends DnscontrolRecord {
    readonly flag: DnskeyFlag;
    readonly protcol: DnskeyProtocol;
    readonly algorithm: DnskeyAlgorithm;
    readonly publickey: string;
    constructor(scope: Construct, id: string, props: DnscontrolDnskeyRecordProps);
    static isDnscontrolDnskeyRecord(x: unknown): x is DnscontrolDnskeyRecord;
    renderRecordConfig(): DnscontrolDnskeyRecordConfig;
}
export {};
