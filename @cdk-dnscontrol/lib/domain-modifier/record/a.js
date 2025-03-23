"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolARecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_A_RECORD_SYMBOL = Symbol.for("DnscontrolARecord");
class DnscontrolARecord extends dnscontrol_record_1.DnscontrolRecord {
  ip;
  constructor(scope, id, props) {
    super(scope, id, {
      recordType: "A",
      label: props.label,
      target: props.ip,
      ttl: props.ttl,
    });
    this.ip = props.ip;
  }
  static isDnscontrolARecord(x) {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_A_RECORD_SYMBOL in x
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
exports.DnscontrolARecord = DnscontrolARecord;
