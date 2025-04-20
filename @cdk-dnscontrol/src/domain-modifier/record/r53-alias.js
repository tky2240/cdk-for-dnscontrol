"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolR53AliasRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_R53_ALIAS_RECORD_SYMBOL = Symbol.for("DnscontrolR53AliasRecord");
// eslint-disable-next-line
const r53AliasTypeString = [
    "A",
    "AAAA",
    "CNAME",
    "CAA",
    "MX",
    "TXT",
    "PTR",
    "SPF",
    "SRV",
    "NAPTR",
];
class DnscontrolR53AliasRecord extends dnscontrol_record_1.DnscontrolRecord {
    r53AliasType;
    zoneId;
    isEnabledEvaluateTargetHealth;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "R53_ALIAS",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            isEnsuredAbsent: props.isEnsuredAbsent,
            meta: props.meta,
        });
        this.r53AliasType = props.r53AliasType;
        this.zoneId = props.zoneId;
        this.isEnabledEvaluateTargetHealth = props.isEnabledEvaluateTargetHealth;
    }
    static isDnscontrolR53AliasRecord(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_R53_ALIAS_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        // missing Boolean.prototype.toString() method
        // https://github.com/microsoft/TypeScript/issues/38347
        const evaluateTargetHealth = (() => {
            if (this.isEnabledEvaluateTargetHealth == null) {
                return "false";
            }
            return this.isEnabledEvaluateTargetHealth ? "true" : "false";
        })();
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            r53Alias: {
                type: this.r53AliasType,
                zoneId: this.zoneId,
                evaluateTargetHealth: evaluateTargetHealth,
            },
            meta: {
                ...this.meta,
                orig_custom_type: "R53_ALIAS",
            },
        };
    }
}
exports.DnscontrolR53AliasRecord = DnscontrolR53AliasRecord;
