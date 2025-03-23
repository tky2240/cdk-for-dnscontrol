"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolTtl = void 0;
const dnscontrol_record_modifier_1 = require("./dnscontrol-record-modifier");
const DNS_CONTROL_TTL_SYMBOL = Symbol.for("DnscontrolTtl");
class DnscontrolTtl extends dnscontrol_record_modifier_1.DnscontrolRecordModifier {
  ttl;
  constructor(scope, id, props) {
    super(scope, id);
    this.ttl = props.ttl;
  }
  static isDnscontrolTtl(x) {
    return x != null && typeof x === "object" && DNS_CONTROL_TTL_SYMBOL in x;
  }
}
exports.DnscontrolTtl = DnscontrolTtl;
