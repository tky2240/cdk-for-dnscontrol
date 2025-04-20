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
  algorithm: DnskeyAlgorithm | number,
  publickey: string,
  ttl?: number | string,
  isEnsuredAbsent?: boolean,
  meta?: Record<string, string>,
): DnscontrolDnskeyRecord {
  return new DnscontrolDnskeyRecord(
    scope,
    `Dnskey:${label}:${target}:${flag}:${protocol}:${algorithm}`,
    {
      label: label,
      ttl: ttl != null ? new Duration(ttl) : undefined,
    isEnsuredAbsent: isEnsuredAbsent,
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
      algorithm: (() => {
        if (typeof algorithm === "number") {
          return getDnsKeyAlgorithmStringFromValue(algorithm);
        }
        return algorithm;
      })(),
      publickey: publickey,
    },
  );
}
