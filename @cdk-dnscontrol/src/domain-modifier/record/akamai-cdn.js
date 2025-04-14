"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolAkamaiCdnRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_AKAMAICDN_RECORD_SYMBOL = Symbol.for("DnscontrolAkamaiCdnRecord");
class DnscontrolAkamaiCdnRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "AKAMAICDN",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            meta: props.meta,
        });
    }
    static isDnscontrolAkamaiCdnRecord(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_AKAMAICDN_RECORD_SYMBOL in x);
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
exports.DnscontrolAkamaiCdnRecord = DnscontrolAkamaiCdnRecord;
