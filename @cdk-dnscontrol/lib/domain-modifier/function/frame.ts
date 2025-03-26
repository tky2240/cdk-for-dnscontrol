import { Construct } from "constructs";
import { DnscontrolFrameRecord } from "../record/frame";
import { Duration } from "../../types/duration";

export function FRAME(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string
): DnscontrolFrameRecord {
  return new DnscontrolFrameRecord(scope, `Frame:${label}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
