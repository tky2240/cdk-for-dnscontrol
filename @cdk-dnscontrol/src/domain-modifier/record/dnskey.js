"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolDnskeyRecord = exports.getDnsKeyAlgorithmStringFromValue = exports.getDnsKeyProtocolStringFromValue = exports.getDnsKeyFlagStringFromValue = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_DNSKEY_RECORD_SYMBOL = Symbol.for("DnscontrolDnskeyRecord");
const dnskeyFlag = {
    ZSK: 256,
    KSK: 257,
};
function isDnskeyFlag(x) {
    return typeof x === "string" && Object.keys(dnskeyFlag).includes(x);
}
const getDnsKeyFlagStringFromValue = (value) => {
    const keyFlag = Object.entries(dnskeyFlag).find((keyFlag) => {
        return keyFlag[1] === value;
    });
    const dnskeyFlagString = keyFlag?.[0];
    if (isDnskeyFlag(dnskeyFlagString)) {
        return dnskeyFlagString;
    }
    throw new Error(`Invalid DNSKEY flag value: ${value}`);
};
exports.getDnsKeyFlagStringFromValue = getDnsKeyFlagStringFromValue;
const dnskeyProtocol = {
    DNSSEC: 3,
};
function isDnskeyProtocol(x) {
    return typeof x === "string" && Object.keys(dnskeyProtocol).includes(x);
}
const getDnsKeyProtocolStringFromValue = (value) => {
    const keyProtocol = Object.entries(dnskeyProtocol).find((keyProtocol) => {
        return keyProtocol[1] === value;
    });
    const dnskeyProtocolString = keyProtocol?.[0];
    if (isDnskeyProtocol(dnskeyProtocolString)) {
        return dnskeyProtocolString;
    }
    throw new Error(`Invalid DNSKEY protocol value: ${value}`);
};
exports.getDnsKeyProtocolStringFromValue = getDnsKeyProtocolStringFromValue;
//ref: https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml#prime-lengths
const dnskeyAlgorithm = {
    DELETE: 0,
    RSAMD5: 1,
    DH: 2,
    DSA: 3,
    RSASHA1: 5,
    "DSA-NSEC3-SHA1": 6,
    "RSASHA1-NSEC3-SHA1": 7,
    RSASHA256: 8,
    RSASHA512: 10,
    "ECC-GOST": 12,
    ECDSAP256SHA256: 13,
    ECDSAP384SHA384: 14,
    ED25519: 15,
    ED448: 16,
    SM2SM3: 17,
    "ECC-GOST12": 23,
    INDIRECT: 252,
    PRIVATEDNS: 253,
    PRIVATEOID: 254,
};
function isDnskeyAlgorithm(x) {
    return typeof x === "string" && Object.keys(dnskeyAlgorithm).includes(x);
}
const getDnsKeyAlgorithmStringFromValue = (value) => {
    const keyAlgorithm = Object.entries(dnskeyAlgorithm).find((keyAlgorithm) => {
        return keyAlgorithm[1] === value;
    });
    const dnskeyAlgorithmString = keyAlgorithm?.[0];
    if (isDnskeyAlgorithm(dnskeyAlgorithmString)) {
        return dnskeyAlgorithmString;
    }
    throw new Error(`Invalid DNSKEY algorithm value: ${value}`);
};
exports.getDnsKeyAlgorithmStringFromValue = getDnsKeyAlgorithmStringFromValue;
class DnscontrolDnskeyRecord extends dnscontrol_record_1.DnscontrolRecord {
    flag;
    protcol;
    algorithm;
    publickey;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "DNSKEY",
            label: props.label,
            target: "",
            ttl: props.ttl,
            isEnsuredAbsent: props.isEnsuredAbsent,
            meta: props.meta,
        });
        this.algorithm = props.algorithm;
        this.flag = props.flag;
        this.protcol = props.protocol;
        this.publickey = props.publickey;
    }
    static isDnscontrolDnskeyRecord(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_DNSKEY_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            dnskeyAlgorithm: dnskeyAlgorithm[this.algorithm],
            dnskeyFlags: dnskeyFlag[this.flag],
            dnskeyProtocol: dnskeyProtocol[this.protcol],
            dnskeyPublicKey: this.publickey,
            meta: this.meta,
        };
    }
}
exports.DnscontrolDnskeyRecord = DnscontrolDnskeyRecord;
