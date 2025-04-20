import { Construct } from "constructs";
import { DnscontrolSshfpRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_SSHFP_RECORD_SYMBOL = Symbol.for("DnscontrolSshfpRecord");

export const sshfpAlgorithm = {
  RSA: 1,
  DSA: 2,
  SCDSA: 3,
  ED25519: 4,
} as const;

export type SshfpAlgorithm = keyof typeof sshfpAlgorithm;
function isSshfpAlgorithm(x: unknown): x is SshfpAlgorithm {
  return typeof x === "string" && Object.keys(sshfpAlgorithm).includes(x);
}
export const getSshfpAlgorithmStringFromValue = (
  value: number,
): SshfpAlgorithm => {
  const algorithm = Object.entries(sshfpAlgorithm).find((sshfpAlgorithm) => {
    return sshfpAlgorithm[1] === value;
  });
  const sshfpAlgorithmString = algorithm?.[0];
  if (isSshfpAlgorithm(sshfpAlgorithmString)) {
    return sshfpAlgorithmString;
  }
  throw new Error(`Invalid SSHFP algorithm value: ${value}`);
};

export const sshfpFingerprintFormat = {
  "SHA-1": 1,
  "SHA-256": 2,
} as const;

export type SshfpFingerprintFormat = keyof typeof sshfpFingerprintFormat;
function isSshfpFingerprintFormat(x: unknown): x is SshfpFingerprintFormat {
  return (
    typeof x === "string" && Object.keys(sshfpFingerprintFormat).includes(x)
  );
}
export const getSshfpFingerprintFormatStringFromValue = (
  value: number,
): SshfpFingerprintFormat => {
  const fingerprintFormat = Object.entries(sshfpFingerprintFormat).find(
    (sshfpFingerprintFormat) => {
      return sshfpFingerprintFormat[1] === value;
    },
  );
  const sshfpFingerprintFormatString = fingerprintFormat?.[0];
  if (isSshfpFingerprintFormat(sshfpFingerprintFormatString)) {
    return sshfpFingerprintFormatString;
  }
  throw new Error(`Invalid SSHFP fingerprint format value: ${value}`);
};

export interface DnscontrolSshfpRecordProps {
  readonly label: string;
  readonly value: string;
  readonly algorithm: SshfpAlgorithm;
  readonly fingerprintFormat: SshfpFingerprintFormat;
  readonly ttl?: Duration | undefined;
  readonly isEnsuredAbsent?: boolean | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export class DnscontrolSshfpRecord extends DnscontrolRecord {
  public readonly algorithm: SshfpAlgorithm;
  public readonly fingerprintFormat: SshfpFingerprintFormat;
  constructor(scope: Construct, id: string, props: DnscontrolSshfpRecordProps) {
    super(scope, id, {
      recordType: "SSHFP",
      label: props.label,
      target: props.value,
      ttl: props.ttl,
      isEnsuredAbsent: props.isEnsuredAbsent,
      meta: props.meta,
    });
    this.algorithm = props.algorithm;
    this.fingerprintFormat = props.fingerprintFormat;
  }
  public static isDnscontrolSshfpRecord(
    x: unknown,
  ): x is DnscontrolSshfpRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_SSHFP_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolSshfpRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      sshfpAlgorithm: sshfpAlgorithm[this.algorithm],
      sshfpFingerprint: sshfpFingerprintFormat[this.fingerprintFormat],
      meta: this.meta,
    };
  }
}
