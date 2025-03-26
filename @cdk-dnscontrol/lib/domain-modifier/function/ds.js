"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DS = DS;
const duration_1 = require("../../types/duration");
const ds_1 = require("../record/ds");
function DS(scope, label, keytag, algorithm, digestType, digest, ttl) {
    return new ds_1.DnscontrolDsRecord(scope, `Ds:${label}:${keytag}:${algorithm}:${digestType}`, {
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        algorithm: algorithm,
        digestType: digestType,
        digest: digest,
        keytag: keytag,
    });
}
