"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolNaptrRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_NAPTR_RECORD_SYMBOL = Symbol.for("DnscontrolNaptrRecord");
class DnscontrolNaptrRecord extends dnscontrol_record_1.DnscontrolRecord {
    order;
    preference;
    flags;
    service;
    regexp;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "NAPTR",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            meta: props.meta,
        });
        this.order = props.order;
        this.preference = props.preference;
        this.flags = props.flags;
        this.service = props.service;
        this.regexp = props.regexp;
    }
    static isDnscontrolNaptrRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_NAPTR_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            naptrOrder: this.order,
            naptrPreference: this.preference,
            naptrFlags: this.flags,
            naptrService: this.service,
            naptrRegexp: this.regexp,
            meta: this.meta,
        };
    }
}
exports.DnscontrolNaptrRecord = DnscontrolNaptrRecord;
