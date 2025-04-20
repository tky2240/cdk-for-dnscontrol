"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolDsRecord = exports.getDsDigestTypeStringFromValue = exports.getDsAlgorithmStringFromValue = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_DS_RECORD_SYMBOL = Symbol.for("DnscontrolDsRecord");
//ref: https://www.iana.org/assignments/dns-sec-alg-numbers/dns-sec-alg-numbers.xhtml#prime-lengths
const dsAlgorithm = {
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
function isDsAlgorithm(x) {
    return typeof x === "string" && Object.keys(dsAlgorithm).includes(x);
}
const getDsAlgorithmStringFromValue = (value) => {
    const algorithm = Object.entries(dsAlgorithm).find((dsAlgorithm) => {
        return dsAlgorithm[1] === value;
    });
    const dsAlgorithmString = algorithm?.[0];
    if (isDsAlgorithm(dsAlgorithmString)) {
        return dsAlgorithmString;
    }
    throw new Error(`Invalid DS algorithm value: ${value}`);
};
exports.getDsAlgorithmStringFromValue = getDsAlgorithmStringFromValue;
//ref: https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml
const dsDigestType = {
    SHA1: 1,
    SHA256: 2,
    GOST_R_34_11_94: 3,
    SHA384: 4,
    GOST_R_34_11_2012: 5,
    SM3: 6,
};
function isDsDigestType(x) {
    return typeof x === "string" && Object.keys(dsDigestType).includes(x);
}
const getDsDigestTypeStringFromValue = (value) => {
    const digestType = Object.entries(dsDigestType).find((dsDigestType) => {
        return dsDigestType[1] === value;
    });
    const dsDigestTypeString = digestType?.[0];
    if (isDsDigestType(dsDigestTypeString)) {
        return dsDigestTypeString;
    }
    throw new Error(`Invalid DS digest type value: ${value}`);
};
exports.getDsDigestTypeStringFromValue = getDsDigestTypeStringFromValue;
class DnscontrolDsRecord extends dnscontrol_record_1.DnscontrolRecord {
    keytag;
    algorithm;
    digestType;
    digest;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "DS",
            label: props.label,
            target: "",
            ttl: props.ttl,
            isEnsuredAbsent: props.isEnsuredAbsent,
            meta: props.meta,
        });
        this.keytag = props.keytag;
        this.algorithm = props.algorithm;
        this.digestType = props.digestType;
        this.digest = props.digest;
    }
    static isDnscontrolDsRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_DS_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            meta: this.meta,
            dsAlgorithm: dsAlgorithm[this.algorithm],
            dsDigestType: dsDigestType[this.digestType],
            dsDigest: this.digest,
            dsKeyTag: this.keytag,
        };
    }
}
exports.DnscontrolDsRecord = DnscontrolDsRecord;
