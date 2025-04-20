"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL301 = URL301;
const duration_1 = require("../../types/duration");
const url301_1 = require("../record/url301");
function URL301(scope, label, target, ttl, isEnsuredAbsent, meta) {
    return new url301_1.DnscontrolUrl301Record(scope, `Url301:${label}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
    });
}
