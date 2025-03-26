import { Construct } from "constructs";
import { DnscontrolSoaRecord } from "../record/soa";
import { Duration } from "../../types/duration";

export function SOA(
  scope: Construct,
  label: string,
  target: string,
  mbox: string,
  refresh: number,
  retry: number,
  expire: number,
  minttl: number,
  ttl?: number | string
): DnscontrolSoaRecord {
  return new DnscontrolSoaRecord(scope, `Soa:${label}:${target}:${mbox}:${refresh}:${refresh}:${expire}:${minttl}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    mbox: mbox,
    refresh: refresh,
    retry: retry,
    expire: expire,
    minttl: minttl,
  });
}
