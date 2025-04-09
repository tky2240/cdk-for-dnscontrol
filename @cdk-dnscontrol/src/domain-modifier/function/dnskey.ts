import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import {
  DnscontrolDnskeyRecord,
  DnskeyAlgorithm,
  DnskeyFlag,
  DnskeyProtocol,
  getDnsKeyAlgorithmStringFromValue,
  getDnsKeyFlagStringFromValue,
  getDnsKeyProtocolStringFromValue,
} from "../record/dnskey";

export function DNSKEY(
  scope: Construct,
  label: string,
  target: string,
  flag: DnskeyFlag | number,
  protocol: DnskeyProtocol | number,
  algorythm: DnskeyAlgorithm | number,
  publickey: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolDnskeyRecord {
  return new DnscontrolDnskeyRecord(
    scope,
    `Dnskey:${label}:${target}:${flag}:${protocol}:${algorythm}`,
    {
      label: label,
      ttl: ttl != null ? new Duration(ttl) : undefined,
      meta: meta,
      flag: (() => {
        if (typeof flag === "number") {
          return getDnsKeyFlagStringFromValue(flag);
        }
        return flag;
      })(),
      protocol: (() => {
        if (typeof protocol === "number") {
          return getDnsKeyProtocolStringFromValue(protocol);
        }
        return protocol;
      })(),
      algorythm: (() => {
        if (typeof algorythm === "number") {
          return getDnsKeyAlgorithmStringFromValue(algorythm);
        }
        return algorythm;
      })(),
      publickey: publickey,
    },
  );
}
