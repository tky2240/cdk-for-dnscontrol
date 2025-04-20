"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MX = MX;
const duration_1 = require("../../types/duration");
const mx_preference_1 = require("../../types/mx-preference");
const mx_1 = require("../record/mx");
function MX(scope, label, mxPriority, target, ttl, isEnsuredAbsent, meta) {
    return new mx_1.DnscontrolMxRecord(scope, `Mx:${label}:${mxPriority}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
        mxPreference: (0, mx_preference_1.asMxPreference)(mxPriority),
    });
}
