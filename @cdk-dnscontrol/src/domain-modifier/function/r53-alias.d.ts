import { Construct } from "constructs";
import { DnscontrolR53AliasRecord, R53AliasType } from "../record/r53-alias";
export declare function R53_ALIAS(scope: Construct, label: string, target: string, r53AliasType: R53AliasType, r53Params: {
    zoneId?: string;
    isEnabledEvaluateTargetHealth?: boolean;
}, ttl?: number | string, isEnsuredAbsent?: boolean, meta?: Record<string, string>): DnscontrolR53AliasRecord;
