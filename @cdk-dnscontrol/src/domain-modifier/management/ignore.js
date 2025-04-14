"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolIgnore = void 0;
const dnscontrol_domain_modifier_1 = require("../dnscontrol-domain-modifier");
const DNS_CONTROL_IGNORE_SYMBOL = Symbol.for("DnscontrolIgnore");
class DnscontrolIgnore extends dnscontrol_domain_modifier_1.DnscontrolDomainModifier {
    labelPattern;
    typePattern;
    targetPattern;
    constructor(scope, id, props) {
        super(scope, id, {
            modiferType: "IGNORE",
        });
        this.labelPattern = props.labelPattern;
        this.typePattern = props.typePattern;
        this.targetPattern = props.targetPattern;
    }
    static isDnscontrolIgnore(x) {
        return x != null && typeof x === "object" && DNS_CONTROL_IGNORE_SYMBOL in x;
    }
    renderUnmanagedConfig() {
        return {
            labelPattern: this.labelPattern,
            rTypePattern: this.typePattern,
            targetPattern: this.targetPattern,
        };
    }
}
exports.DnscontrolIgnore = DnscontrolIgnore;
