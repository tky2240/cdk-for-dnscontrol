"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolAAAARecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_AAAA_RECORD_SYMBOL = Symbol.for("DnscontrolAAAARecord");
class DnscontrolAAAARecord extends dnscontrol_record_1.DnscontrolRecord {
    ip;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "AAAA",
            label: props.label,
            target: props.ip,
            ttl: props.ttl,
            meta: props.meta,
        });
        this.ip = props.ip;
    }
    static isDnscontrolARecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_AAAA_RECORD_SYMBOL in x);
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
exports.DnscontrolAAAARecord = DnscontrolAAAARecord;
