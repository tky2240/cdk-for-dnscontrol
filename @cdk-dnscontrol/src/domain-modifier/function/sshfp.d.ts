import { Construct } from "constructs";
import { DnscontrolSshfpRecord, SshfpAlgorithm, SshfpFingerprintFormat } from "../record/sshfp";
export declare function SSHFP(scope: Construct, label: string, algorithm: SshfpAlgorithm | number, fingerprintFormat: SshfpFingerprintFormat | number, value: string, ttl?: number | string, isEnsuredAbsent?: boolean, meta?: Record<string, string>): DnscontrolSshfpRecord;
