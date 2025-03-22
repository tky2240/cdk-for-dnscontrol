"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolSshfpRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_SSHFP_RECORD_SYMBOL = Symbol.for("DnscontrolSshfpRecord");
const sshfpAlgorithm = {
    RSA: 1,
    DSA: 2,
    SCDSA: 3,
    ED25519: 4,
};
const sshfpFingerprintFormat = {
    "SHA-1": 1,
    "SHA-256": 2,
};
class DnscontrolSshfpRecord extends dnscontrol_record_1.DnscontrolRecord {
    algorithm;
    fingerprintFormat;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "SSHFP",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
        this.algorithm = props.algorithm;
        this.fingerprintFormat = props.fingerprintFormat;
    }
    static isDnscontrolSshfpRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_SSHFP_RECORD_SYMBOL in x);
    }
    getRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            type: this.recordType,
            ttl: this.ttl?.toSeconds(),
            sshfpalgorithm: sshfpAlgorithm[this.algorithm],
            sshfpfingerprint: sshfpFingerprintFormat[this.fingerprintFormat],
            meta: {},
        };
    }
}
exports.DnscontrolSshfpRecord = DnscontrolSshfpRecord;
