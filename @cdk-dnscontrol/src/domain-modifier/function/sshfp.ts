import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import {
  DnscontrolSshfpRecord,
  SshfpAlgorithm,
  SshfpFingerprintFormat,
  getSshfpAlgorithmStringFromValue,
  getSshfpFingerprintFormatStringFromValue,
} from "../record/sshfp";

export function SSHFP(
  scope: Construct,
  label: string,
  algorithm: SshfpAlgorithm | number,
  fingerprintFormat: SshfpFingerprintFormat | number,
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
      algorithm: (() => {
        if (typeof algorithm === "number") {
          return getSshfpAlgorithmStringFromValue(algorithm);
        }
        return algorithm;
      })(),
      fingerprintFormat: (() => {
        if (typeof fingerprintFormat === "number") {
          return getSshfpFingerprintFormatStringFromValue(fingerprintFormat);
        }
        return fingerprintFormat;
      })(),
    },
  );
}
