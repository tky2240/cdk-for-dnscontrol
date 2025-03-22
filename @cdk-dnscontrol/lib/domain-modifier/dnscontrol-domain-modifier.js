"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolDomainModifier = void 0;
const constructs_1 = require("constructs");
const DNS_CONTROL_DOMAIN_MODIFIER_SYMBOL = Symbol.for(
  "DnscontrolDomainModifier",
);
class DnscontrolDomainModifier extends constructs_1.Construct {
  type;
  constructor(scope, id, props) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_DOMAIN_MODIFIER_SYMBOL, {
      value: true,
    });
    this.type = props.type;
  }
  static isDnscontrolDomainModifier(x) {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_DOMAIN_MODIFIER_SYMBOL in x
    );
  }
}
exports.DnscontrolDomainModifier = DnscontrolDomainModifier;
