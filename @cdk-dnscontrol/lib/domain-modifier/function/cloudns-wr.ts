import { Construct } from "constructs";
import { DnscontrolCloudnsWrRecord } from "../record/cloudns-wr";
import { Duration } from "../../types/duration";

export function CLOUDNS_WR(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string
): DnscontrolCloudnsWrRecord {
  return new DnscontrolCloudnsWrRecord(scope, `CloudnsWr:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
