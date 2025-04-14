"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CNAME = CNAME;
const duration_1 = require("../../types/duration");
const cname_1 = require("../record/cname");
function CNAME(scope, label, target, ttl, meta) {
    return new cname_1.DnscontrolCnameRecord(scope, `Cname:${label}:${target}`, {
        target: target,
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        meta: meta,
    });
}
