"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PTR = PTR;
const duration_1 = require("../../types/duration");
const ptr_1 = require("../record/ptr");
function PTR(scope, label, target, ttl, isEnsuredAbsent, meta) {
    return new ptr_1.DnscontrolPtrRecord(scope, `Ptr:${label}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
    });
}
