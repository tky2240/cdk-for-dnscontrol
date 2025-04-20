"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolCnameRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_CNAME_RECORD_SYMBOL = Symbol.for("DnscontrolCnameRecord");
class DnscontrolCnameRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "CNAME",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            isEnsuredAbsent: props.isEnsuredAbsent,
            meta: props.meta,
        });
    }
    static isDnscontrolCnameRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_CNAME_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            meta: this.meta,
        };
    }
}
exports.DnscontrolCnameRecord = DnscontrolCnameRecord;
