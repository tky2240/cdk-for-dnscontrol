"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SRV = SRV;
const duration_1 = require("../../types/duration");
const srv_1 = require("../record/srv");
function SRV(scope, label, priority, weight, port, target, ttl) {
    return new srv_1.DnscontrolSrvRecord(scope, `Srv:${label}:${priority}:${weight}:${port}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        priority: priority,
        weight: weight,
        port: port,
    });
}
