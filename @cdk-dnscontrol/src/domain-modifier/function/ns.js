"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NS = NS;
const duration_1 = require("../../types/duration");
const ns_1 = require("../record/ns");
function NS(scope, label, target, ttl, isEnsuredAbsent, meta) {
    return new ns_1.DnscontrolNsRecord(scope, `Ns:${label}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
    });
}
