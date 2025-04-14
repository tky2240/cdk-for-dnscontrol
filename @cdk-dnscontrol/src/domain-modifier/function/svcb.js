"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVCB = SVCB;
const duration_1 = require("../../types/duration");
const svcb_1 = require("../record/svcb");
function SVCB(scope, label, priority, target, params, ttl, meta) {
    return new svcb_1.DnscontrolSvcbRecord(scope, `Svcb:${label}:${priority}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        meta: meta,
        priority: priority,
        params: params,
    });
}
