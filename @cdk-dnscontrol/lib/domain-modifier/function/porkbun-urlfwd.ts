import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import { DnscontrolPorkbunUrlfwdRecord } from "../record/porkbun-urlfwd";

export function PORKBUN_URLFWD(
  scope: Construct,
  label: string,
  target: string,
  ttl?: number | string,
): DnscontrolPorkbunUrlfwdRecord {
  return new DnscontrolPorkbunUrlfwdRecord(
    scope,
    `PorkbunUrlfwd:${label}:${target}`,
    {
      label: label,
      target: target,
      ttl: ttl != null ? new Duration(ttl) : undefined,
    },
  );
}
