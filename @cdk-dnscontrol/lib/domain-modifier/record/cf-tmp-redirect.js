"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolCfTmpRedirectRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_CF_TEMP_REDIRECT_RECORD_SYMBOL = Symbol.for("DnscontrolCfTmpRedirectRecord");
class DnscontrolCfTmpRedirectRecord extends dnscontrol_record_1.DnscontrolRecord {
    source;
    destination;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "CF_TEMP_REDIRECT",
            label: "@",
            target: `${props.source},${props.destination}`,
            ttl: props.ttl,
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
    static isDnscontrolCfTmpRedirectRecord(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_CF_TEMP_REDIRECT_RECORD_SYMBOL in x);
    }
    getRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            type: this.recordType,
            ttl: this.ttl?.toSeconds(),
            meta: {
                orig_custom_type: "CF_TEMP_REDIRECT",
            },
        };
    }
}
exports.DnscontrolCfTmpRedirectRecord = DnscontrolCfTmpRedirectRecord;
