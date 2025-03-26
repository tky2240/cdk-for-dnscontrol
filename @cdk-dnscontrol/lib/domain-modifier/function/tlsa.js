"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TLSA = TLSA;
const duration_1 = require("../../types/duration");
const tlsa_1 = require("../record/tlsa");
function TLSA(scope, label, usage, selector, matchingType, target, ttl) {
    return new tlsa_1.DnscontrolTlsaRecord(scope, `Tlsa:${label}:${usage}:${selector}:${matchingType}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        usage: usage,
        selector: selector,
        matchingType: matchingType,
    });
}
