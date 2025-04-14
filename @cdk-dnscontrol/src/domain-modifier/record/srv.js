"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolSrvRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_SRV_RECORD_SYMBOL = Symbol.for("DnscontrolSrvRecord");
class DnscontrolSrvRecord extends dnscontrol_record_1.DnscontrolRecord {
    priority;
    weight;
    port;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "SRV",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            meta: props.meta,
        });
        this.priority = props.priority;
        this.weight = props.weight;
        this.port = props.port;
    }
    static isDnscontrolSrvRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_SRV_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            srvPriority: this.priority,
            srvWeight: this.weight,
            srvPort: this.port,
            meta: this.meta,
        };
    }
}
exports.DnscontrolSrvRecord = DnscontrolSrvRecord;
