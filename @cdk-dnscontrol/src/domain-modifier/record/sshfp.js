"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolSshfpRecord = exports.getSshfpFingerprintFormatStringFromValue = exports.sshfpFingerprintFormat = exports.getSshfpAlgorithmStringFromValue = exports.sshfpAlgorithm = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_SSHFP_RECORD_SYMBOL = Symbol.for("DnscontrolSshfpRecord");
exports.sshfpAlgorithm = {
    RSA: 1,
    DSA: 2,
    SCDSA: 3,
    ED25519: 4,
};
function isSshfpAlgorithm(x) {
    return typeof x === "string" && Object.keys(exports.sshfpAlgorithm).includes(x);
}
const getSshfpAlgorithmStringFromValue = (value) => {
    const algorithm = Object.entries(exports.sshfpAlgorithm).find((sshfpAlgorithm) => {
        return sshfpAlgorithm[1] === value;
    });
    const sshfpAlgorithmString = algorithm?.[0];
    if (isSshfpAlgorithm(sshfpAlgorithmString)) {
        return sshfpAlgorithmString;
    }
    throw new Error(`Invalid SSHFP algorithm value: ${value}`);
};
exports.getSshfpAlgorithmStringFromValue = getSshfpAlgorithmStringFromValue;
exports.sshfpFingerprintFormat = {
    "SHA-1": 1,
    "SHA-256": 2,
};
function isSshfpFingerprintFormat(x) {
    return (typeof x === "string" && Object.keys(exports.sshfpFingerprintFormat).includes(x));
}
const getSshfpFingerprintFormatStringFromValue = (value) => {
    const fingerprintFormat = Object.entries(exports.sshfpFingerprintFormat).find((sshfpFingerprintFormat) => {
        return sshfpFingerprintFormat[1] === value;
    });
    const sshfpFingerprintFormatString = fingerprintFormat?.[0];
    if (isSshfpFingerprintFormat(sshfpFingerprintFormatString)) {
        return sshfpFingerprintFormatString;
    }
    throw new Error(`Invalid SSHFP fingerprint format value: ${value}`);
};
exports.getSshfpFingerprintFormatStringFromValue = getSshfpFingerprintFormatStringFromValue;
class DnscontrolSshfpRecord extends dnscontrol_record_1.DnscontrolRecord {
    algorithm;
    fingerprintFormat;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "SSHFP",
            label: props.label,
            target: props.value,
            ttl: props.ttl,
            meta: props.meta,
        });
        this.algorithm = props.algorithm;
        this.fingerprintFormat = props.fingerprintFormat;
    }
    static isDnscontrolSshfpRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_SSHFP_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            sshfpAlgorithm: exports.sshfpAlgorithm[this.algorithm],
            sshfpFingerprint: exports.sshfpFingerprintFormat[this.fingerprintFormat],
            meta: this.meta,
        };
    }
}
exports.DnscontrolSshfpRecord = DnscontrolSshfpRecord;
