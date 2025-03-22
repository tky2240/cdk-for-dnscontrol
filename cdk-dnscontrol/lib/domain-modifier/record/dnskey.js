"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolDnskeyRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_DNSKEY_RECORD_SYMBOL = Symbol.for("DnscontrolDnskeyRecord");
const dnskeyFlag = {
    ZSK: 256,
    KSK: 257,
};
const dnskeyProtocol = {
    DNSSEC: 3,
};
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
class DnscontrolDnskeyRecord extends dnscontrol_record_1.DnscontrolRecord {
    flag;
    protcol;
    algorythm;
    publickey;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "DNSKEY",
            label: props.label,
            target: "",
            ttl: props.ttl,
        });
        this.algorythm = props.algorythm;
        this.flag = props.flag;
        this.protcol = props.protocol;
        this.publickey = props.publickey;
    }
    static isDnscontrolDnskeyRecord(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_DNSKEY_RECORD_SYMBOL in x);
    }
    getRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            type: this.recordType,
            ttl: this.ttl?.toSeconds(),
            dnskeyalgorithm: dnskeyAlgorithm[this.algorythm],
            dnskeyflags: dnskeyFlag[this.flag],
            dnskeyprotocol: dnskeyProtocol[this.protcol],
            dnskeypublickey: this.publickey,
            meta: {},
        };
    }
}
exports.DnscontrolDnskeyRecord = DnscontrolDnskeyRecord;
