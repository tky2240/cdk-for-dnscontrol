"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolUrl301Record = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_URL301_RECORD_SYMBOL = Symbol.for("DnscontrolUrl301Record");
class DnscontrolUrl301Record extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "URL301",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
    }
    static isDnscontrolUrl301Record(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_URL301_RECORD_SYMBOL in x);
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
exports.DnscontrolUrl301Record = DnscontrolUrl301Record;
