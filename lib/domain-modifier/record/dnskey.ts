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

const dnskeyProtocol = {
  DNSSEC: 3,
} as const;

export type DnskeyProtocol = keyof typeof dnskeyProtocol;

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
};
export type DnskeyAlgorithm = keyof typeof dnskeyAlgorithm;

export interface DnscontrolDnskeyRecordProps {
  readonly label: string;
  readonly flag: DnskeyFlag;
  readonly protocol: DnskeyProtocol;
  readonly algorythm: DnskeyAlgorithm;
  readonly publickey: string;
  readonly ttl?: Duration;
}

export class DnscontrolDnskeyRecord extends DnscontrolRecord {
  public readonly flag: DnskeyFlag;
  public readonly protcol: DnskeyProtocol;
  public readonly algorythm: DnskeyAlgorithm;
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
    });
    this.algorythm = props.algorythm;
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
  public getRecordConfig(): DnscontrolDnskeyRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      dnskeyalgorithm: dnskeyAlgorithm[this.algorythm],
      dnskeyflags: dnskeyFlag[this.flag],
      dnskeyprotocol: dnskeyProtocol[this.protcol],
      dnskeypublickey: this.publickey,
      meta: {},
    };
  }
}
