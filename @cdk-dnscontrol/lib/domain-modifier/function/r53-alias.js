"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.R53_ALIAS = R53_ALIAS;
const duration_1 = require("../../types/duration");
const r53_alias_1 = require("../record/r53-alias");
function R53_ALIAS(scope, label, target, r53AliasType, zoneId, isEnabledEvaluateTargetHealth, ttl) {
    return new r53_alias_1.DnscontrolR53AliasRecord(scope, `R53Alias:${label}:${r53AliasType}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        r53AliasType: r53AliasType,
        zoneId: zoneId,
        isEnabledEvaluateTargetHealth: isEnabledEvaluateTargetHealth,
    });
}
