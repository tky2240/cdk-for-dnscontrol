"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOC = LOC;
const duration_1 = require("../../types/duration");
const loc_1 = require("../record/loc");
function LOC(scope, label, target, ttl, meta) {
    return new loc_1.DnscontrolLocRecord(scope, `Loc:${label}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        meta: meta,
    });
}
