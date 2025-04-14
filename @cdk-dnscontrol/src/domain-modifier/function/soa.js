"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOA = SOA;
const duration_1 = require("../../types/duration");
const soa_1 = require("../record/soa");
function SOA(scope, label, target, mbox, refresh, retry, expire, minttl, ttl, meta) {
    return new soa_1.DnscontrolSoaRecord(scope, `Soa:${label}:${target}:${mbox}:${refresh}:${refresh}:${expire}:${minttl}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        meta: meta,
        mbox: mbox,
        refresh: refresh,
        retry: retry,
        expire: expire,
        minttl: minttl,
    });
}
