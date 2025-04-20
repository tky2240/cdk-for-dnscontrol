import { Construct } from "constructs";
import { DnscontrolPorkbunUrlfwdRecord } from "../record/porkbun-urlfwd";
export declare function PORKBUN_URLFWD(scope: Construct, label: string, target: string, ttl?: number | string, isEnsuredAbsent?: boolean, meta?: Record<string, string>): DnscontrolPorkbunUrlfwdRecord;
