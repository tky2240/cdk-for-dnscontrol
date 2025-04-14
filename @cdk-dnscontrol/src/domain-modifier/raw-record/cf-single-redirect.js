"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolCfSingleRedirectRawRecord = void 0;
const dnscontrol_raw_record_1 = require("../raw-record/dnscontrol-raw-record");
const DNS_CONTROL_CF_SINGLE_REDIRECT_RAW_RECORD_SYMBOL = Symbol.for("DnscontrolCfSingleRedirectRawRecord");
// eslint-disable-next-line
const redirectCodes = [301, 302];
class DnscontrolCfSingleRedirectRawRecord extends dnscontrol_raw_record_1.DnscontrolRawRecord {
    name;
    code;
    when;
    then;
    constructor(scope, id, props) {
        super(scope, id, {
            rawRecordType: "CLOUDFLAREAPI_SINGLE_REDIRECT",
            ttl: props.ttl,
            metas: props.metas,
        });
        this.name = props.name;
        this.code = props.code;
        this.when = props.when;
        this.then = props.then;
    }
    static isDnscontrolCfSingleRedirectRecord(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_CF_SINGLE_REDIRECT_RAW_RECORD_SYMBOL in x);
    }
    renderRawRecordConfig() {
        return {
            recordType: this.rawRecordType,
            ttl: this.ttl?.toSeconds(),
            args: [this.name, this.code, this.when, this.then],
            metas: {
                ...this.metas,
                orig_custom_type: "CLOUDFLAREAPI_SINGLE_REDIRECT",
            },
        };
    }
}
exports.DnscontrolCfSingleRedirectRawRecord = DnscontrolCfSingleRedirectRawRecord;
