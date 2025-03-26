import { Construct } from "constructs";
import { DnscontrolUrl301Record } from "../record/url301";
import { Duration } from "../../types/duration";

export function URL301(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string
): DnscontrolUrl301Record {
  return new DnscontrolUrl301Record(scope, `Url301:${label}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
