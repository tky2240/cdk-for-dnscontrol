"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolMxRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_MX_RECORD_SYMBOL = Symbol.for("DnscontrolMxRecord");
class DnscontrolMxRecord extends dnscontrol_record_1.DnscontrolRecord {
    mxPreference;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "MX",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
        this.mxPreference = props.mxPreference;
    }
    static isDnscontrolMxRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_MX_RECORD_SYMBOL in x);
    }
    getRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            type: this.recordType,
            mxpreference: this.mxPreference,
            ttl: this.ttl?.toSeconds(),
            meta: {},
        };
    }
}
exports.DnscontrolMxRecord = DnscontrolMxRecord;
