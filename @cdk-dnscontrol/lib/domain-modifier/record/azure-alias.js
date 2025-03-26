"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolAzureAliasRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_AZURE_ALIAS_RECORD_SYMBOL = Symbol.for("DnscontrolAzureAliasRecord");
// eslint-disable-next-line
const azureAliasTypeString = ["A", "AAAA", "CNAME"];
class DnscontrolAzureAliasRecord extends dnscontrol_record_1.DnscontrolRecord {
    azureAliasType;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "AZURE_ALIAS",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
        this.azureAliasType = props.azureAliasType;
    }
    static isDnscontrolAzureAliasRecord(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_AZURE_ALIAS_RECORD_SYMBOL in x);
    }
    getRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            type: this.recordType,
            ttl: this.ttl?.toSeconds(),
            azure_alias: {
                type: this.azureAliasType,
            },
            meta: {
                orig_custom_type: "AZURE_ALIAS",
            },
        };
    }
}
exports.DnscontrolAzureAliasRecord = DnscontrolAzureAliasRecord;
