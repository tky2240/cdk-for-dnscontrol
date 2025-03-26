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
    getRecordConfig() {
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
            type: this.recordType,
            ttl: this.ttl?.toSeconds(),
            r53_alias: {
                type: this.r53AliasType,
                zone_id: this.zoneId,
                evaluate_target_health: evaluateTargetHealth,
            },
            meta: {
                orig_custom_type: "R53_ALIAS",
            },
        };
    }
}
exports.DnscontrolR53AliasRecord = DnscontrolR53AliasRecord;
