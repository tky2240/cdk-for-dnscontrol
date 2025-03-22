"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolCloudnsWrRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_CLOUDNS_WR_RECORD_SYMBOL = Symbol.for(
  "DnscontrolCloudnsWrRecord",
);
class DnscontrolCloudnsWrRecord extends dnscontrol_record_1.DnscontrolRecord {
  constructor(scope, id, props) {
    super(scope, id, {
      recordType: "CLOUDNS_WR",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
  }
  static isDnscontrolCloudnsWrRecord(x) {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_CLOUDNS_WR_RECORD_SYMBOL in x
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
exports.DnscontrolCloudnsWrRecord = DnscontrolCloudnsWrRecord;
