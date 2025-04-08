import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolCloudnsWrRecord } from "../record/cloudns-wr";

export function CLOUDNS_WR(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolCloudnsWrRecord {
  return new DnscontrolCloudnsWrRecord(scope, `CloudnsWr:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    meta: meta,
  });
}
