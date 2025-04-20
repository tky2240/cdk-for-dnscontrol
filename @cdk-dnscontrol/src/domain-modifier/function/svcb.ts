import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolSvcbRecord } from "../record/svcb";

export function SVCB(
  scope: Construct,
  label: string,
  priority: number,
  target: string,
  params: string,
  ttl?: number | string,
  isEnsuredAbsent?: boolean,
  meta?: Record<string, string>,
): DnscontrolSvcbRecord {
  return new DnscontrolSvcbRecord(
    scope,
    `Svcb:${label}:${priority}:${target}`,
    {
      label: label,
      target: target,
      ttl: ttl != null ? new Duration(ttl) : undefined,
    isEnsuredAbsent: isEnsuredAbsent,
      meta: meta,
      priority: priority,
      params: params,
    },
  );
}
