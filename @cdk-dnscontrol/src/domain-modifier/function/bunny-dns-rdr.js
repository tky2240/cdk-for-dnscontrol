"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUNNY_DNS_RDR = BUNNY_DNS_RDR;
const duration_1 = require("../../types/duration");
const bunny_dns_rdr_1 = require("../record/bunny-dns-rdr");
function BUNNY_DNS_RDR(scope, label, target, ttl, meta) {
    return new bunny_dns_rdr_1.DnscontrolBunnyDnsRdrRecord(scope, `BunnyDnsRdr:${label}:${target}`, {
        target: target,
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        meta: meta,
    });
}
