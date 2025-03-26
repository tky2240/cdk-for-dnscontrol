import { Construct } from "constructs";
import { DnscontrolHttpsRecord } from "../record/https";
import { Duration } from "../../types/duration";

export function HTTPS(
  scope: Construct,
  label: string,
  priority: number,
  target: string,
  params: string,
  ttl?: number | string
): DnscontrolHttpsRecord {
  return new DnscontrolHttpsRecord(scope, `Https:${label}:${priority}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    priority: priority,
    params: params
  });
}
