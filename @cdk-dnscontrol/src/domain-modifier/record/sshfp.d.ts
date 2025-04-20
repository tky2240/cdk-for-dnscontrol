import { Construct } from "constructs";
import { DnscontrolSshfpRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export declare const sshfpAlgorithm: {
    readonly RSA: 1;
    readonly DSA: 2;
    readonly SCDSA: 3;
    readonly ED25519: 4;
};
export type SshfpAlgorithm = keyof typeof sshfpAlgorithm;
export declare const getSshfpAlgorithmStringFromValue: (value: number) => SshfpAlgorithm;
export declare const sshfpFingerprintFormat: {
    readonly "SHA-1": 1;
    readonly "SHA-256": 2;
};
export type SshfpFingerprintFormat = keyof typeof sshfpFingerprintFormat;
export declare const getSshfpFingerprintFormatStringFromValue: (value: number) => SshfpFingerprintFormat;
export interface DnscontrolSshfpRecordProps {
    readonly label: string;
    readonly value: string;
    readonly algorithm: SshfpAlgorithm;
    readonly fingerprintFormat: SshfpFingerprintFormat;
    readonly ttl?: Duration | undefined;
    readonly isEnsuredAbsent?: boolean | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolSshfpRecord extends DnscontrolRecord {
    readonly algorithm: SshfpAlgorithm;
    readonly fingerprintFormat: SshfpFingerprintFormat;
    constructor(scope: Construct, id: string, props: DnscontrolSshfpRecordProps);
    static isDnscontrolSshfpRecord(x: unknown): x is DnscontrolSshfpRecord;
    renderRecordConfig(): DnscontrolSshfpRecordConfig;
}
