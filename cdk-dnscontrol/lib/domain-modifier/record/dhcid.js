"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolDhcidRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_DHCID_RECORD_SYMBOL = Symbol.for("DnscontrolDhcidRecord");
class DnscontrolDhcidRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "DHCID",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
    }
    static isDnscontrolDhcidRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_DHCID_RECORD_SYMBOL in x);
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
exports.DnscontrolDhcidRecord = DnscontrolDhcidRecord;
