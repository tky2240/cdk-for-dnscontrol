"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolUrlRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_URL_RECORD_SYMBOL = Symbol.for("DnscontrolUrlRecord");
class DnscontrolUrlRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "URL",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
    }
    static isDnscontrolUrlRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_URL_RECORD_SYMBOL in x);
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
exports.DnscontrolUrlRecord = DnscontrolUrlRecord;
