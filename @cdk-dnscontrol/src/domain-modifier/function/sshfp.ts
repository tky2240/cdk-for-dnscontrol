import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import {
  DnscontrolSshfpRecord,
  SshfpAlgorithm,
  SshfpFingerprintFormat,
} from "../record/sshfp";

export function SSHFP(
  scope: Construct,
  label: string,
  algorithm: SshfpAlgorithm,
  fingerprintFormat: SshfpFingerprintFormat,
  value: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolSshfpRecord {
  return new DnscontrolSshfpRecord(
    scope,
    `Sshfp:${label}:${algorithm}:${fingerprintFormat}`,
    {
      label: label,
      value: value,
      ttl: ttl != null ? new Duration(ttl) : undefined,
      meta: meta,
      algorithm: algorithm,
      fingerprintFormat: fingerprintFormat,
    },
  );
}
