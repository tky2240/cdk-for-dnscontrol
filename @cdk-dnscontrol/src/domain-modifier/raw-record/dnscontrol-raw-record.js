"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolRawRecord = void 0;
const dnscontrol_domain_modifier_1 = require("../dnscontrol-domain-modifier");
const DNS_CONTROL_RAW_RECORD_SYMBOL = Symbol.for("DnscontrolRawRecord");
class DnscontrolRawRecord extends dnscontrol_domain_modifier_1.DnscontrolDomainModifier {
    rawRecordType;
    ttl;
    constructor(scope, id, props) {
        super(scope, id, { type: props.rawRecordType });
        Object.defineProperty(this, DNS_CONTROL_RAW_RECORD_SYMBOL, { value: true });
        this.rawRecordType = props.rawRecordType;
        this.ttl = props.ttl;
    }
    static isDnscontrolRawRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_RAW_RECORD_SYMBOL in x);
    }
}
exports.DnscontrolRawRecord = DnscontrolRawRecord;
