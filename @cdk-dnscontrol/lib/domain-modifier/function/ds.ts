import { Construct } from "constructs";
import { DnscontrolDsRecord, DsAlgorithm, DsDigestType } from "../record/ds";
import { Duration } from "../../types/duration";

export function DS(
  scope: Construct,
  label: string,
  keytag: number,
  algorithm: DsAlgorithm,
  digestType: DsDigestType,
  digest: string,
  ttl?: number | string
): DnscontrolDsRecord {
  return new DnscontrolDsRecord(scope, `Ds:${label}:${keytag}:${algorithm}:${digestType}`, {
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    algorithm: algorithm,
    digestType: digestType,
    digest: digest,
    keytag: keytag,
  });
}
