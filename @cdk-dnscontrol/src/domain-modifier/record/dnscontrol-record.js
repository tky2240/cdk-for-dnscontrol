"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolRecord = void 0;
const dnscontrol_domain_modifier_1 = require("../dnscontrol-domain-modifier");
const DNS_CONTROL_RECORD_SYMBOL = Symbol.for("DnscontrolRecord");
class DnscontrolRecord extends dnscontrol_domain_modifier_1.DnscontrolDomainModifier {
    recordType;
    label;
    subDomain;
    name;
    ttl;
    target;
    isEnsuredAbsent;
    meta;
    constructor(scope, id, props) {
        super(scope, id, {
            modiferType: props.recordType,
        });
        Object.defineProperty(this, DNS_CONTROL_RECORD_SYMBOL, { value: true });
        this.recordType = props.recordType;
        this.label = props.label;
        this.subDomain = props.subDomain;
        this.ttl = props.ttl;
        this.target = props.target;
        this.name = props.label;
        this.isEnsuredAbsent = props.isEnsuredAbsent;
        this.meta = props.meta;
    }
    static isDnscontrolRecord(x) {
        return x != null && typeof x === "object" && DNS_CONTROL_RECORD_SYMBOL in x;
    }
}
exports.DnscontrolRecord = DnscontrolRecord;
