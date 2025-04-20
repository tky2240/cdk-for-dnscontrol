"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DS = DS;
const duration_1 = require("../../types/duration");
const ds_1 = require("../record/ds");
function DS(scope, label, keytag, algorithm, digestType, digest, ttl, isEnsuredAbsent, meta) {
    return new ds_1.DnscontrolDsRecord(scope, `Ds:${label}:${keytag}:${algorithm}:${digestType}`, {
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
        algorithm: (() => {
            if (typeof algorithm === "number") {
                return (0, ds_1.getDsAlgorithmStringFromValue)(algorithm);
            }
            return algorithm;
        })(),
        digestType: (() => {
            if (typeof digestType === "number") {
                return (0, ds_1.getDsDigestTypeStringFromValue)(digestType);
            }
            return digestType;
        })(),
        digest: digest,
        keytag: keytag,
    });
}
