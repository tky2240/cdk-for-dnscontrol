import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { CaaTag, DnscontrolCaaRecord } from "../record/caa";

export function CAA(
  scope: Construct,
  label: string,
  caaTag: CaaTag,
  target: string,
  isCaaCritical?: boolean | number,
  ttl?: number | string,
  isEnsuredAbsent?: boolean,
  meta?: Record<string, string>,
): DnscontrolCaaRecord {
  return new DnscontrolCaaRecord(scope, `Caa:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    isEnsuredAbsent: isEnsuredAbsent,
    meta: meta,
    caaTag: caaTag,
    isCaaCritical: (() => {
      if (isCaaCritical == null) {
        return undefined;
      }
      if (typeof isCaaCritical === "boolean") {
        return isCaaCritical;
      }
      if (typeof isCaaCritical === "number") {
        if (isCaaCritical === 0) {
          return false;
        }
        if (isCaaCritical === 128) {
          return true;
        }
        throw new Error("isCaaCritical must be 0 or 128");
      }
      throw new Error("isCaaCritical must be boolean or number");
    })(),
  });
}
