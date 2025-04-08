import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolNaptrRecord } from "../record/naptr";

export function NAPTR(
  scope: Construct,
  label: string,
  order: number,
  preference: number,
  flags: string,
  service: string,
  regexp: string,
  target: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolNaptrRecord {
  return new DnscontrolNaptrRecord(
    scope,
    `Naptr:${label}:${order}:${preference}:${flags}:${service}:${regexp}:${target}`,
    {
      label: label,
      target: target,
      ttl: ttl != null ? new Duration(ttl) : undefined,
      meta: meta,
      order: order,
      preference: preference,
      flags: flags,
      service: service,
      regexp: regexp,
    },
  );
}
