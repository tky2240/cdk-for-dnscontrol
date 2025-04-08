import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolUrl301Record } from "../record/url301";

export function URL301(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolUrl301Record {
  return new DnscontrolUrl301Record(scope, `Url301:${label}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    meta: meta,
  });
}
