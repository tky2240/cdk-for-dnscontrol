"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNAME = DNAME;
const duration_1 = require("../../types/duration");
const dname_1 = require("../record/dname");
function DNAME(scope, label, target, ttl, isEnsuredAbsent, meta) {
    return new dname_1.DnscontrolDnameRecord(scope, `Dname:${label}:${target}`, {
        target: target,
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
    });
}
