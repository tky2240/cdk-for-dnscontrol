"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolBunnyDnsRdrRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_BUNNY_DNS_RDR_RECORD_SYMBOL = Symbol.for(
  "DnscontrolBunnyDnsRdrRecord",
);
class DnscontrolBunnyDnsRdrRecord extends dnscontrol_record_1.DnscontrolRecord {
  constructor(scope, id, props) {
    super(scope, id, {
      recordType: "BUNNY_DNS_RDR",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
  }
  static isDnscontrolBunnyDnsRdrRecord(x) {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_BUNNY_DNS_RDR_RECORD_SYMBOL in x
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
exports.DnscontrolBunnyDnsRdrRecord = DnscontrolBunnyDnsRdrRecord;
