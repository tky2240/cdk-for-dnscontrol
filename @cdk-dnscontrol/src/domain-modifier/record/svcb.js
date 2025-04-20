"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolSvcbRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_SVCB_RECORD_SYMBOL = Symbol.for("DnscontrolSvcbRecord");
class DnscontrolSvcbRecord extends dnscontrol_record_1.DnscontrolRecord {
    priority;
    params;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "SVCB",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            isEnsuredAbsent: props.isEnsuredAbsent,
            meta: props.meta,
        });
        this.priority = props.priority;
        this.params = props.params;
    }
    static isDnscontrolSvcbRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_SVCB_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            svcPriority: this.priority,
            svcParams: this.params,
            meta: this.meta,
        };
    }
}
exports.DnscontrolSvcbRecord = DnscontrolSvcbRecord;
