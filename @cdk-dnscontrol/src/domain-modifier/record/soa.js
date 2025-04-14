"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolSoaRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_SOA_RECORD_SYMBOL = Symbol.for("DnscontrolSoaRecord");
class DnscontrolSoaRecord extends dnscontrol_record_1.DnscontrolRecord {
    mbox;
    refresh;
    retry;
    expire;
    minttl;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "SOA",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            meta: props.meta,
        });
        this.mbox = props.mbox;
        this.refresh = props.refresh;
        this.retry = props.retry;
        this.expire = props.expire;
        this.minttl = props.minttl;
    }
    static isDnscontrolSoaRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_SOA_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            soaMbox: this.mbox,
            soaRefresh: this.refresh,
            soaRetry: this.retry,
            soaExpire: this.expire,
            soaMinTtl: this.minttl,
            meta: this.meta,
        };
    }
}
exports.DnscontrolSoaRecord = DnscontrolSoaRecord;
