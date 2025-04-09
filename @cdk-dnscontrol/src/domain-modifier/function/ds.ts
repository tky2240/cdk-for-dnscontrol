import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import {
  DnscontrolDsRecord,
  DsAlgorithm,
  DsDigestType,
  getDsAlgorithmStringFromValue,
  getDsDigestTypeStringFromValue,
} from "../record/ds";

export function DS(
  scope: Construct,
  label: string,
  keytag: number,
  algorithm: DsAlgorithm | number,
  digestType: DsDigestType | number,
  digest: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolDsRecord {
  return new DnscontrolDsRecord(
    scope,
    `Ds:${label}:${keytag}:${algorithm}:${digestType}`,
    {
      label: label,
      ttl: ttl != null ? new Duration(ttl) : undefined,
      meta: meta,
      algorithm: (() => {
        if (typeof algorithm === "number") {
          return getDsAlgorithmStringFromValue(algorithm);
        }
        return algorithm;
      })(),
      digestType: (() => {
        if (typeof digestType === "number") {
          return getDsDigestTypeStringFromValue(digestType);
        }
        return digestType;
      })(),
      digest: digest,
      keytag: keytag,
    },
  );
}
