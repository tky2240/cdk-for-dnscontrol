import { Construct } from "constructs";
import { DnscontrolSshfpRecord, SshfpAlgorithm, SshfpFingerprintFormat } from "../record/sshfp";
import { Duration } from "../../types/duration";

export function SSHFP(
  scope: Construct,
  label: string,
  algorithm: SshfpAlgorithm,
  fingerprintFormat: SshfpFingerprintFormat,
  value: string,
  ttl?: number | string
): DnscontrolSshfpRecord {
  return new DnscontrolSshfpRecord(scope, `Sshfp:${label}:${algorithm}:${fingerprintFormat}`, {
    label: label,
    value: value,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    algorithm: algorithm,
    fingerprintFormat: fingerprintFormat,
  });
}
