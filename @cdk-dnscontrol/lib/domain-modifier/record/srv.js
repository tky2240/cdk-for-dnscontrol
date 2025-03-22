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
        });
        this.priority = props.priority;
        this.weight = props.weight;
        this.port = props.port;
    }
    static isDnscontrolSrvRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_SRV_RECORD_SYMBOL in x);
    }
    getRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            type: this.recordType,
            ttl: this.ttl?.toSeconds(),
            srvpriority: this.priority,
            srvweight: this.weight,
            srvport: this.port,
            meta: {},
        };
    }
}
exports.DnscontrolSrvRecord = DnscontrolSrvRecord;
