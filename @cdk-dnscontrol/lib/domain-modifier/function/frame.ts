import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolFrameRecord } from "../record/frame";

export function FRAME(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string,
): DnscontrolFrameRecord {
  return new DnscontrolFrameRecord(scope, `Frame:${label}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
