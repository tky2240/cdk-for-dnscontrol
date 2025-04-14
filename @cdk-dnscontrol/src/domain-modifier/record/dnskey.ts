import { Construct } from "constructs";
import { DnscontrolDnskeyRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_DNSKEY_RECORD_SYMBOL = Symbol.for("DnscontrolDnskeyRecord");

const dnskeyFlag = {
  ZSK: 256,
  KSK: 257,
} as const;
export type DnskeyFlag = keyof typeof dnskeyFlag;
function isDnskeyFlag(x: unknown): x is DnskeyFlag {
  return typeof x === "string" && Object.keys(dnskeyFlag).includes(x);
}
export const getDnsKeyFlagStringFromValue = (value: number): DnskeyFlag => {
  const keyFlag = Object.entries(dnskeyFlag).find((keyFlag) => {
    return keyFlag[1] === value;
  });
  const dnskeyFlagString = keyFlag?.[0];
  if (isDnskeyFlag(dnskeyFlagString)) {
    return dnskeyFlagString;
  }
  throw new Error(`Invalid DNSKEY flag value: ${value}`);
};

const dnskeyProtocol = {
  DNSSEC: 3,
} as const;
export type DnskeyProtocol = keyof typeof dnskeyProtocol;
function isDnskeyProtocol(x: unknown): x is DnskeyProtocol {
  return typeof x === "string" && Object.keys(dnskeyProtocol).includes(x);
}
export const getDnsKeyProtocolStringFromValue = (
  value: number,
): DnskeyProtocol => {
  const keyProtocol = Object.entries(dnskeyProtocol).find((keyProtocol) => {
    return keyProtocol[1] === value;
  });
  const dnskeyProtocolString = keyProtocol?.[0];
  if (isDnskeyProtocol(dnskeyProtocolString)) {
    return dnskeyProtocolString;
  }
  throw new Error(`Invalid DNSKEY protocol value: ${value}`);
};

//ref: https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml#prime-lengths
const dnskeyAlgorithm = {
  DELETE: 0,
  RSAMD5: 1,
  DH: 2,
  DSA: 3,
  RSASHA1: 5,
  "DSA-NSEC3-SHA1": 6,
  "RSASHA1-NSEC3-SHA1": 7,
  RSASHA256: 8,
  RSASHA512: 10,
  "ECC-GOST": 12,
  ECDSAP256SHA256: 13,
  ECDSAP384SHA384: 14,
  ED25519: 15,
  ED448: 16,
  SM2SM3: 17,
  "ECC-GOST12": 23,
  INDIRECT: 252,
  PRIVATEDNS: 253,
  PRIVATEOID: 254,
} as const;
export type DnskeyAlgorithm = keyof typeof dnskeyAlgorithm;
function isDnskeyAlgorithm(x: unknown): x is DnskeyAlgorithm {
  return typeof x === "string" && Object.keys(dnskeyAlgorithm).includes(x);
}
export const getDnsKeyAlgorithmStringFromValue = (
  value: number,
): DnskeyAlgorithm => {
  const keyAlgorithm = Object.entries(dnskeyAlgorithm).find((keyAlgorithm) => {
    return keyAlgorithm[1] === value;
  });
  const dnskeyAlgorithmString = keyAlgorithm?.[0];
  if (isDnskeyAlgorithm(dnskeyAlgorithmString)) {
    return dnskeyAlgorithmString;
  }
  throw new Error(`Invalid DNSKEY algorithm value: ${value}`);
};

export interface DnscontrolDnskeyRecordProps {
  readonly label: string;
  readonly flag: DnskeyFlag;
  readonly protocol: DnskeyProtocol;
  readonly algorithm: DnskeyAlgorithm;
  readonly publickey: string;
  readonly ttl?: Duration | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export class DnscontrolDnskeyRecord extends DnscontrolRecord {
  public readonly flag: DnskeyFlag;
  public readonly protcol: DnskeyProtocol;
  public readonly algorithm: DnskeyAlgorithm;
  public readonly publickey: string;
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolDnskeyRecordProps,
  ) {
    super(scope, id, {
      recordType: "DNSKEY",
      label: props.label,
      target: "",
      ttl: props.ttl,
      meta: props.meta,
    });
    this.algorithm = props.algorithm;
    this.flag = props.flag;
    this.protcol = props.protocol;
    this.publickey = props.publickey;
  }
  public static isDnscontrolDnskeyRecord(
    x: unknown,
  ): x is DnscontrolDnskeyRecord {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_DNSKEY_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolDnskeyRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      dnskeyAlgorithm: dnskeyAlgorithm[this.algorithm],
      dnskeyFlags: dnskeyFlag[this.flag],
      dnskeyProtocol: dnskeyProtocol[this.protcol],
      dnskeyPublicKey: this.publickey,
      meta: this.meta,
    };
  }
}
