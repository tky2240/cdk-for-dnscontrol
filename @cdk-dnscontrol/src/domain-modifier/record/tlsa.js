"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolTlsaRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_TLSA_RECORD_SYMBOL = Symbol.for("DnscontrolTlsaRecord");
class DnscontrolTlsaRecord extends dnscontrol_record_1.DnscontrolRecord {
    usage;
    selector;
    matchingType;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "TLSA",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            isEnsuredAbsent: props.isEnsuredAbsent,
            meta: props.meta,
        });
        this.usage = props.usage;
        this.selector = props.selector;
        this.matchingType = props.matchingType;
    }
    static isDnscontrolTlsaRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_TLSA_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            tlsaUsage: this.usage,
            tlsaSelector: this.selector,
            tlsaMatchingType: this.matchingType,
            meta: this.meta,
        };
    }
}
exports.DnscontrolTlsaRecord = DnscontrolTlsaRecord;
