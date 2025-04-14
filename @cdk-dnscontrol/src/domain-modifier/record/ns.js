"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolNsRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_NS_RECORD_SYMBOL = Symbol.for("DnscontrolNsRecord");
class DnscontrolNsRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "NS",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            meta: props.meta,
        });
    }
    static isDnscontrolNsRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_NS_RECORD_SYMBOL in x);
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
exports.DnscontrolNsRecord = DnscontrolNsRecord;
