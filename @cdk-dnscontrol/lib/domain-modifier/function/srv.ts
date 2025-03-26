import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolSrvRecord } from "../record/srv";

export function SRV(
  scope: Construct,
  label: string,
  priority: number,
  weight: number,
  port: number,
  target: string,
  ttl?: number | string,
): DnscontrolSrvRecord {
  return new DnscontrolSrvRecord(
    scope,
    `Srv:${label}:${priority}:${weight}:${port}:${target}`,
    {
      label: label,
      target: target,
      ttl: ttl != null ? new Duration(ttl) : undefined,
      priority: priority,
      weight: weight,
      port: port,
    },
  );
}
