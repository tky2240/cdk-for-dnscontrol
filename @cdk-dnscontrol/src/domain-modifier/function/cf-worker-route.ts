import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolCfWorkerRouteRecord } from "../record/cf-worker-route";

export function CF_WORKER_ROUTE(
  scope: Construct,
  pattern: string,
  script: string,
  ttl?: number | string,
  isEnsuredAbsent?: boolean,
  meta?: Record<string, string>,
): DnscontrolCfWorkerRouteRecord {
  return new DnscontrolCfWorkerRouteRecord(
    scope,
    `CfWorkerRoute:${pattern}:${script}`,
    {
      pattern: pattern,
      script: script,
      ttl: ttl != null ? new Duration(ttl) : undefined,
    isEnsuredAbsent: isEnsuredAbsent,
      meta: meta,
    },
  );
}
