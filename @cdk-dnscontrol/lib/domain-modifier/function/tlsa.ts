import { Construct } from "constructs";
import { DnscontrolTlsaRecord } from "../record/tlsa";
import { Duration } from "../../types/duration";

export function TLSA(
  scope: Construct,
  label: string,
  usage: number,
  selector: number,
  matchingType: number,
  target: string,
  ttl?: number | string
): DnscontrolTlsaRecord {
  return new DnscontrolTlsaRecord(scope, `Tlsa:${label}:${usage}:${selector}:${matchingType}:${target}`, {
    label: label,
    target: target,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    usage: usage,
    selector: selector,
    matchingType: matchingType,
  });
}
