"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPS = HTTPS;
const duration_1 = require("../../types/duration");
const https_1 = require("../record/https");
function HTTPS(scope, label, priority, target, params, ttl, isEnsuredAbsent, meta) {
    return new https_1.DnscontrolHttpsRecord(scope, `Https:${label}:${priority}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
        priority: priority,
        params: params,
    });
}
