import { Construct } from "constructs";
import { DnscontrolSvcbRecord } from "../record/svcb";
import { Duration } from "../../types/duration";

export function SVCB(
  scope: Construct,
  label: string,
  priority: number,
  target: string,
  params: string,
  ttl?: number | string
): DnscontrolSvcbRecord {
  return new DnscontrolSvcbRecord(scope, `Svcb:${label}:${priority}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    priority: priority,
    params: params,
  });
}
