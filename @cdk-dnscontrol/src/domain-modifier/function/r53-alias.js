"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.R53_ALIAS = R53_ALIAS;
const duration_1 = require("../../types/duration");
const r53_alias_1 = require("../record/r53-alias");
function R53_ALIAS(scope, label, target, r53AliasType, r53Params, ttl, meta) {
    return new r53_alias_1.DnscontrolR53AliasRecord(scope, `R53Alias:${label}:${r53AliasType}:${target}:{${r53Params.zoneId}}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        meta: meta,
        r53AliasType: r53AliasType,
        zoneId: r53Params.zoneId,
        isEnabledEvaluateTargetHealth: r53Params.isEnabledEvaluateTargetHealth,
    });
}
