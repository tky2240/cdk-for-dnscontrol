"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolCaaRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_CAA_RECORD_SYMBOL = Symbol.for("DnscontrolCaaRecord");
// eslint-disable-next-line
const caaTagStrings = ["issue", "issuewild", "iodef"];
class DnscontrolCaaRecord extends dnscontrol_record_1.DnscontrolRecord {
    caaTag;
    isCaaCritical;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "CAA",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
        this.caaTag = props.caaTag;
        this.isCaaCritical = props.isCaaCritical;
    }
    static isDnscontrolARecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_CAA_RECORD_SYMBOL in x);
    }
    getRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            type: this.recordType,
            caatag: this.caaTag,
            caaflag: this.isCaaCritical ? 128 : 0,
            ttl: this.ttl?.toSeconds(),
            meta: {},
        };
    }
}
exports.DnscontrolCaaRecord = DnscontrolCaaRecord;
