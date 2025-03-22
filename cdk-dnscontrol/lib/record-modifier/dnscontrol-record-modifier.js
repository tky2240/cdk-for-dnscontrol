"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolRecordModifier = void 0;
const constructs_1 = require("constructs");
const DNS_CONTROL_RECORD_MODIFIER_SYMBOL = Symbol.for("DnscontrolRecordModifier");
class DnscontrolRecordModifier extends constructs_1.Construct {
    constructor(scope, id) {
        super(scope, id);
        Object.defineProperty(this, DNS_CONTROL_RECORD_MODIFIER_SYMBOL, {
            value: true,
        });
    }
    static isDnscontrolRecordModifier(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_RECORD_MODIFIER_SYMBOL in x);
    }
}
exports.DnscontrolRecordModifier = DnscontrolRecordModifier;
