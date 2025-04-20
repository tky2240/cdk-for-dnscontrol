"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAA = CAA;
const duration_1 = require("../../types/duration");
const caa_1 = require("../record/caa");
function CAA(scope, label, caaTag, target, isCaaCritical, ttl, isEnsuredAbsent, meta) {
    return new caa_1.DnscontrolCaaRecord(scope, `Caa:${label}:${target}`, {
        target: target,
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
        caaTag: caaTag,
        isCaaCritical: (() => {
            if (isCaaCritical == null) {
                return undefined;
            }
            if (typeof isCaaCritical === "boolean") {
                return isCaaCritical;
            }
            if (typeof isCaaCritical === "number") {
                if (isCaaCritical === 0) {
                    return false;
                }
                if (isCaaCritical === 128) {
                    return true;
                }
                throw new Error("isCaaCritical must be 0 or 128");
            }
            throw new Error("isCaaCritical must be boolean or number");
        })(),
    });
}
