import { Construct } from "constructs";
import { DnscontrolTxtRecord } from "../record/txt";
import { Duration } from "../../types/duration";

export function TXT(
  scope: Construct,
  label: string,
  target: string | readonly string[],
  ttl?: number | string
): DnscontrolTxtRecord {
  return new DnscontrolTxtRecord(scope, `Txt:${label}:${target}`, {
    label: label,
    txtStrings: Array.isArray(target) ? target : [target],
    ttl: ttl != null ? new Duration(ttl) : undefined,
  });
}
