import { Construct } from "constructs";
import { DnscontrolSshfpRecord, SshfpAlgorithm, SshfpFingerprintFormat } from "../record/sshfp";
export declare function SSHFP(scope: Construct, label: string, algorithm: SshfpAlgorithm, fingerprintFormat: SshfpFingerprintFormat, value: string, ttl?: number | string): DnscontrolSshfpRecord;
