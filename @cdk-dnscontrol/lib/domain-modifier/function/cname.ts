import { Construct } from "constructs";
import { DnscontrolCnameRecord } from "../record/cname";
import { Duration } from "../../types/duration";

export function CNAME(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string
): DnscontrolCnameRecord {
  return new DnscontrolCnameRecord(scope, `Cname:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
