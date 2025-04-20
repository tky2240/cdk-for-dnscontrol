"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNSKEY = DNSKEY;
const duration_1 = require("../../types/duration");
const dnskey_1 = require("../record/dnskey");
function DNSKEY(scope, label, target, flag, protocol, algorithm, publickey, ttl, isEnsuredAbsent, meta) {
    return new dnskey_1.DnscontrolDnskeyRecord(scope, `Dnskey:${label}:${target}:${flag}:${protocol}:${algorithm}`, {
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
        flag: (() => {
            if (typeof flag === "number") {
                return (0, dnskey_1.getDnsKeyFlagStringFromValue)(flag);
            }
            return flag;
        })(),
        protocol: (() => {
            if (typeof protocol === "number") {
                return (0, dnskey_1.getDnsKeyProtocolStringFromValue)(protocol);
            }
            return protocol;
        })(),
        algorithm: (() => {
            if (typeof algorithm === "number") {
                return (0, dnskey_1.getDnsKeyAlgorithmStringFromValue)(algorithm);
            }
            return algorithm;
        })(),
        publickey: publickey,
    });
}
