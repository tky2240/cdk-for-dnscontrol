"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAA = CAA;
const duration_1 = require("../../types/duration");
const caa_1 = require("../record/caa");
function CAA(scope, label, caaTag, target, isCaaCritical, ttl) {
    return new caa_1.DnscontrolCaaRecord(scope, `Caa:${label}:${target}`, {
        target: target,
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        caaTag: caaTag,
        isCaaCritical: isCaaCritical,
    });
}
