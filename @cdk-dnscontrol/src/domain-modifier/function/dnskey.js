"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNSKEY = DNSKEY;
const duration_1 = require("../../types/duration");
const dnskey_1 = require("../record/dnskey");
function DNSKEY(scope, label, target, flag, protocol, algorythm, publickey, ttl) {
    return new dnskey_1.DnscontrolDnskeyRecord(scope, `Dnskey:${label}:${target}:${flag}:${protocol}:${algorythm}`, {
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        flag: flag,
        protocol: protocol,
        algorythm: algorythm,
        publickey: publickey,
    });
}
