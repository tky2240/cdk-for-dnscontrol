"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolCfRedirectRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_CF_REDIRECT_RECORD_SYMBOL = Symbol.for("DnscontrolCfRedirectRecord");
class DnscontrolCfRedirectRecord extends dnscontrol_record_1.DnscontrolRecord {
    source;
    destination;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "CF_REDIRECT",
            label: "@",
            target: `${props.source},${props.destination}`,
            ttl: props.ttl,
            meta: props.meta,
        });
        if (props.source.includes(",")) {
            throw new Error("source must include no commma");
        }
        if (props.destination.includes(",")) {
            throw new Error("destination must include no commma");
        }
        this.source = props.source;
        this.destination = props.destination;
    }
    static isDnscontrolCfRedirectRecord(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_CF_REDIRECT_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            meta: {
                ...this.meta,
                orig_custom_type: "CF_REDIRECT",
            },
        };
    }
}
exports.DnscontrolCfRedirectRecord = DnscontrolCfRedirectRecord;
