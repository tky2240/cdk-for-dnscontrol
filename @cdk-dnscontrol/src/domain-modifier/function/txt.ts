import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolTxtRecord } from "../record/txt";

export function TXT(
  scope: Construct,
  label: string,
  target: string | readonly string[],
  ttl?: number | string,
  isEnsuredAbsent?: boolean,
  meta?: Record<string, string>,
): DnscontrolTxtRecord {
  return new DnscontrolTxtRecord(scope, `Txt:${label}:${target}`, {
    label: label,
    txtStrings: Array.isArray(target) ? target : [target],
    ttl: ttl != null ? new Duration(ttl) : undefined,
    isEnsuredAbsent: isEnsuredAbsent,
    meta: meta,
  });
}
