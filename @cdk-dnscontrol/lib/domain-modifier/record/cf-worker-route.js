"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolCfWorkerRouteRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_CF_WORKER_ROUTE_RECORD_SYMBOL = Symbol.for("DnscontrolCfWorkerRouteRecord");
class DnscontrolCfWorkerRouteRecord extends dnscontrol_record_1.DnscontrolRecord {
    pattern;
    script;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "CF_WORKER_ROUTE",
            label: "@",
            target: `${props.pattern},${props.script}`,
            ttl: props.ttl,
        });
        if (props.pattern.includes(",")) {
            throw new Error("pattern must include no commma");
        }
        if (props.script.includes(",")) {
            throw new Error("script must include no commma");
        }
        this.pattern = props.pattern;
        this.script = props.script;
    }
    static isDnscontrolCfWorkerRouteRecord(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_CF_WORKER_ROUTE_RECORD_SYMBOL in x);
    }
    getRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            type: this.recordType,
            ttl: this.ttl?.toSeconds(),
            meta: {
                orig_custom_type: "CF_WORKER_ROUTE",
            },
        };
    }
}
exports.DnscontrolCfWorkerRouteRecord = DnscontrolCfWorkerRouteRecord;
