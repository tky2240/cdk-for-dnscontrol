import { Construct } from "constructs";
import { DnscontrolDsRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_DS_RECORD_SYMBOL = Symbol.for("DnscontrolDsRecord");

//ref: https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml#prime-lengths
const dsAlgorithm = {
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

export type DsAlgorithm = keyof typeof dsAlgorithm;
function isDsAlgorithm(x: unknown): x is DsAlgorithm {
  return typeof x === "string" && Object.keys(dsAlgorithm).includes(x);
}
export const getDsAlgorithmStringFromValue = (value: number): DsAlgorithm => {
  const algorithm = Object.entries(dsAlgorithm).find((dsAlgorithm) => {
    return dsAlgorithm[1] === value;
  });
  const dsAlgorithmString = algorithm?.[0];
  if (isDsAlgorithm(dsAlgorithmString)) {
    return dsAlgorithmString;
  }
  throw new Error(`Invalid DS algorithm value: ${value}`);
};

//ref: https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml
const dsDigestType = {
  SHA1: 1,
  SHA256: 2,
  GOST_R_34_11_94: 3,
  SHA384: 4,
  GOST_R_34_11_2012: 5,
  SM3: 6,
} as const;

export type DsDigestType = keyof typeof dsDigestType;
function isDsDigestType(x: unknown): x is DsDigestType {
  return typeof x === "string" && Object.keys(dsDigestType).includes(x);
}
export const getDsDigestTypeStringFromValue = (value: number): DsDigestType => {
  const digestType = Object.entries(dsDigestType).find((dsDigestType) => {
    return dsDigestType[1] === value;
  });
  const dsDigestTypeString = digestType?.[0];
  if (isDsDigestType(dsDigestTypeString)) {
    return dsDigestTypeString;
  }
  throw new Error(`Invalid DS digest type value: ${value}`);
};

export interface DnscontrolDsRecordProps {
  readonly label: string;
  readonly keytag: number;
  readonly algorithm: DsAlgorithm;
  readonly digestType: DsDigestType;
  readonly digest: string;
  readonly ttl?: Duration | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export class DnscontrolDsRecord extends DnscontrolRecord {
  public readonly keytag: number;
  public readonly algorithm: DsAlgorithm;
  public readonly digestType: DsDigestType;
  public readonly digest: string;
  constructor(scope: Construct, id: string, props: DnscontrolDsRecordProps) {
    super(scope, id, {
      recordType: "DS",
      label: props.label,
      target: "",
      ttl: props.ttl,
      meta: props.meta,
    });
    this.keytag = props.keytag;
    this.algorithm = props.algorithm;
    this.digestType = props.digestType;
    this.digest = props.digest;
  }
  public static isDnscontrolDsRecord(x: unknown): x is DnscontrolDsRecord {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_DS_RECORD_SYMBOL in x
    );
  }
  public renderRecordConfig(): DnscontrolDsRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: this.meta,
      dsAlgorithm: dsAlgorithm[this.algorithm],
      dsDigestType: dsDigestType[this.digestType],
      dsDigest: this.digest,
      dsKeyTag: this.keytag,
    };
  }
}
