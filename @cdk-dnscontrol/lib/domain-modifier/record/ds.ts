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

//ref: https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml
const digestType = {
  SHA1: 1,
  SHA256: 2,
  GOST_R_34_11_94: 3,
  SHA384: 4,
  GOST_R_34_11_2012: 5,
  SM3: 6,
} as const;

export type DsDigestType = keyof typeof digestType;

export interface DnscontrolDsRecordProps {
  readonly label: string;
  readonly keytag: number;
  readonly algorithm: DsAlgorithm;
  readonly digestType: DsDigestType;
  readonly digest: string;
  readonly ttl?: Duration | undefined;
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
  public getRecordConfig(): DnscontrolDsRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: {},
      dsalgorithm: dsAlgorithm[this.algorithm],
      dsdigesttype: digestType[this.digestType],
      dsdigest: this.digest,
      dskeytag: this.keytag,
    };
  }
}
