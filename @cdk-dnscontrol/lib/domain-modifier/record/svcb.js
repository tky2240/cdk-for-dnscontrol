"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolSvcbRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_SVCB_RECORD_SYMBOL = Symbol.for("DnscontrolSvcbRecord");
class DnscontrolSvcbRecord extends dnscontrol_record_1.DnscontrolRecord {
  priority;
  params;
  constructor(scope, id, props) {
    super(scope, id, {
      recordType: "SVCB",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
    this.priority = props.priority;
    this.params = props.params;
  }
  static isDnscontrolSvcbRecord(x) {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_SVCB_RECORD_SYMBOL in x
    );
  }
  getRecordConfig() {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      svcpriority: this.priority,
      svcparams: this.params,
      meta: {},
    };
  }
}
exports.DnscontrolSvcbRecord = DnscontrolSvcbRecord;
