import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import {
  DnscontrolDnskeyRecord,
  DnskeyAlgorithm,
  DnskeyFlag,
  DnskeyProtocol,
} from "../record/dnskey";

export function DNSKEY(
  scope: Construct,
  label: string,
  target: string,
  flag: DnskeyFlag,
  protocol: DnskeyProtocol,
  algorythm: DnskeyAlgorithm,
  publickey: string,
  ttl?: number | string,
): DnscontrolDnskeyRecord {
  return new DnscontrolDnskeyRecord(
    scope,
    `Dnskey:${label}:${target}:${flag}:${protocol}:${algorythm}`,
    {
      label: label,
      ttl: ttl != null ? new Duration(ttl) : undefined,
      flag: flag,
      protocol: protocol,
      algorythm: algorythm,
      publickey: publickey,
    },
  );
}
