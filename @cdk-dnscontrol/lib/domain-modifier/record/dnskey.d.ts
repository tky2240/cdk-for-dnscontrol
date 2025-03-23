import { Construct } from "constructs";
import { DnscontrolDnskeyRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
declare const dnskeyFlag: {
  readonly ZSK: 256;
  readonly KSK: 257;
};
export type DnskeyFlag = keyof typeof dnskeyFlag;
declare const dnskeyProtocol: {
  readonly DNSSEC: 3;
};
export type DnskeyProtocol = keyof typeof dnskeyProtocol;
declare const dnskeyAlgorithm: {
  DELETE: number;
  RSAMD5: number;
  DH: number;
  DSA: number;
  RSASHA1: number;
  "DSA-NSEC3-SHA1": number;
  "RSASHA1-NSEC3-SHA1": number;
  RSASHA256: number;
  RSASHA512: number;
  "ECC-GOST": number;
  ECDSAP256SHA256: number;
  ECDSAP384SHA384: number;
  ED25519: number;
  ED448: number;
  SM2SM3: number;
  "ECC-GOST12": number;
  INDIRECT: number;
  PRIVATEDNS: number;
  PRIVATEOID: number;
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
export declare class DnscontrolDnskeyRecord extends DnscontrolRecord {
  readonly flag: DnskeyFlag;
  readonly protcol: DnskeyProtocol;
  readonly algorythm: DnskeyAlgorithm;
  readonly publickey: string;
  constructor(scope: Construct, id: string, props: DnscontrolDnskeyRecordProps);
  static isDnscontrolDnskeyRecord(x: unknown): x is DnscontrolDnskeyRecord;
  getRecordConfig(): DnscontrolDnskeyRecordConfig;
}
export {};
