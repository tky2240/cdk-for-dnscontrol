"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AKAMAI_CDN = AKAMAI_CDN;
const duration_1 = require("../../types/duration");
const akamai_cdn_1 = require("../record/akamai-cdn");
function AKAMAI_CDN(scope, label, target, ttl) {
    return new akamai_cdn_1.DnscontrolAkamaiCdnRecord(scope, `AkamaiCdn:${label}:${target}`, {
        target: target,
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
