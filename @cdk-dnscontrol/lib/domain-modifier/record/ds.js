"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolDsRecord = void 0;
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
//ref: https://www.iana.org/assignments/ds-rr-types/ds-rr-types.xhtml
const digestType = {
    SHA1: 1,
    SHA256: 2,
    GOST_R_34_11_94: 3,
    SHA384: 4,
    GOST_R_34_11_2012: 5,
    SM3: 6,
};
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
        });
        this.keytag = props.keytag;
        this.algorithm = props.algorithm;
        this.digestType = props.digestType;
        this.digest = props.digest;
    }
    static isDnscontrolDsRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_DS_RECORD_SYMBOL in x);
    }
    getRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            type: this.recordType,
            ttl: this.ttl?.toSeconds(),
            meta: {},
            dsalgorithm: dsAlgorithm[this.algorithm],
            dsdigesttype: digestType[this.digestType],
            dsdigest: this.digest,
            dskeytag: this.keytag,
        };
    }
}
exports.DnscontrolDsRecord = DnscontrolDsRecord;
