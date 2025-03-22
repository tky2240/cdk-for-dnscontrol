"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolPorkbunUrlfwdRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_PORKBUN_URLFWD_RECORD_SYMBOL = Symbol.for(
  "DnscontrolPorkbunUrlfwdRecord",
);
class DnscontrolPorkbunUrlfwdRecord extends dnscontrol_record_1.DnscontrolRecord {
  constructor(scope, id, props) {
    super(scope, id, {
      recordType: "PORKBUN_URLFWD",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
  }
  static isDnscontrolPorkbunUrlfwdRecord(x) {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_PORKBUN_URLFWD_RECORD_SYMBOL in x
    );
  }
  getRecordConfig() {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: {},
    };
  }
}
exports.DnscontrolPorkbunUrlfwdRecord = DnscontrolPorkbunUrlfwdRecord;
