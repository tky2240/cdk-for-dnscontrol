"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AAAA = AAAA;
const duration_1 = require("../../types/duration");
const ipv6_1 = require("../../types/ipv6");
const aaaa_1 = require("../record/aaaa");
function AAAA(scope, label, ip, ttl, isEnsuredAbsent, meta) {
    return new aaaa_1.DnscontrolAAAARecord(scope, `AAAA:${label}:${ip}`, {
        ip: (0, ipv6_1.asIPv6Address)(ip),
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
    });
}
