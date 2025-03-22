"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolNaptrRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_NAPTR_RECORD_SYMBOL = Symbol.for("DnscontrolNaptrRecord");
class DnscontrolNaptrRecord extends dnscontrol_record_1.DnscontrolRecord {
  order;
  preference;
  flags;
  service;
  regexp;
  constructor(scope, id, props) {
    super(scope, id, {
      recordType: "NAPTR",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
    this.order = props.order;
    this.preference = props.preference;
    this.flags = props.flags;
    this.service = props.service;
    this.regexp = props.regexp;
  }
  static isDnscontrolNaptrRecord(x) {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_NAPTR_RECORD_SYMBOL in x
    );
  }
  getRecordConfig() {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      naptrorder: this.order,
      naptrpreference: this.preference,
      naptrflags: this.flags,
      naptrservice: this.service,
      naptrregexp: this.regexp,
      meta: {},
    };
  }
}
exports.DnscontrolNaptrRecord = DnscontrolNaptrRecord;
