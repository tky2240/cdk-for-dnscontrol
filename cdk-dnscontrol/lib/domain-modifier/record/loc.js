"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolLocRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_LOC_RECORD_SYMBOL = Symbol.for("DnscontrolLocRecord");
class DnscontrolLocRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "LOC",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
        throw new Error("Not implemented yet");
    }
    static isDnscontrolLocRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_LOC_RECORD_SYMBOL in x);
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
exports.DnscontrolLocRecord = DnscontrolLocRecord;
