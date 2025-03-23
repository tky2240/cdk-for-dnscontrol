"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolTxtRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_TXT_RECORD_SYMBOL = Symbol.for("DnscontrolTxtRecord");
class DnscontrolTxtRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "TXT",
            label: props.label,
            target: props.txtStrings.join(""),
            ttl: props.ttl,
        });
    }
    static isDnscontrolTxtRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_TXT_RECORD_SYMBOL in x);
    }
    getRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            type: this.recordType,
            ttl: this.ttl?.toSeconds(),
            meta: {},
        };
    }
}
exports.DnscontrolTxtRecord = DnscontrolTxtRecord;
