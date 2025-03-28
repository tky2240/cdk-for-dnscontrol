"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSHFP = SSHFP;
const duration_1 = require("../../types/duration");
const sshfp_1 = require("../record/sshfp");
function SSHFP(scope, label, algorithm, fingerprintFormat, value, ttl) {
    return new sshfp_1.DnscontrolSshfpRecord(scope, `Sshfp:${label}:${algorithm}:${fingerprintFormat}`, {
        label: label,
        value: value,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        algorithm: algorithm,
        fingerprintFormat: fingerprintFormat,
    });
}
