"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = A;
const duration_1 = require("../../types/duration");
const ipv4_1 = require("../../types/ipv4");
const a_1 = require("../record/a");
function A(scope, label, ip, ttl, isEnsuredAbsent, meta) {
    return new a_1.DnscontrolARecord(scope, `A:${label}:${ip}`, {
        ip: (0, ipv4_1.asIPv4Address)(ip),
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
    });
}
