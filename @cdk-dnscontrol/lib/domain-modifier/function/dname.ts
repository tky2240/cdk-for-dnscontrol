import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolDnameRecord } from "../record/dname";

export function DNAME(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string,
): DnscontrolDnameRecord {
  return new DnscontrolDnameRecord(scope, `Dname:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
