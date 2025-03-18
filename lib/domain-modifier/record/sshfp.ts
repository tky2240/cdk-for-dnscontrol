import { Construct } from "constructs";
import { DnscontrolSshfpRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_SSHFP_RECORD_SYMBOL = Symbol.for("DnscontrolSshfpRecord");

const sshfpAlgorithm = {
  RSA: 1,
  DSA: 2,
  SCDSA: 3,
  ED25519: 4,
} as const;

export type SshfpAlgorithm = keyof typeof sshfpAlgorithm;

const sshfpFingerprintFormat = {
  "SHA-1": 1,
  "SHA-256": 2,
} as const;

export type SshfpFingerprintFormat = keyof typeof sshfpFingerprintFormat;

export interface DnscontrolSshfpRecordProps {
  readonly label: string;
  readonly target: string;
  readonly algorithm: SshfpAlgorithm;
  readonly fingerprintFormat: SshfpFingerprintFormat;
  readonly ttl?: Duration;
}

export class DnscontrolSshfpRecord extends DnscontrolRecord {
  public readonly algorithm: SshfpAlgorithm;
  public readonly fingerprintFormat: SshfpFingerprintFormat;
  constructor(scope: Construct, id: string, props: DnscontrolSshfpRecordProps) {
    super(scope, id, {
      recordType: "SSHFP",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
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
  public getRecordConfig(): DnscontrolSshfpRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      sshfpalgorithm: sshfpAlgorithm[this.algorithm],
      sshfpfingerprint: sshfpFingerprintFormat[this.fingerprintFormat],
      meta: {},
    };
  }
}
