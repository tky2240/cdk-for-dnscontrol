"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLOUDNS_WR = CLOUDNS_WR;
const duration_1 = require("../../types/duration");
const cloudns_wr_1 = require("../record/cloudns-wr");
function CLOUDNS_WR(scope, label, target, ttl) {
    return new cloudns_wr_1.DnscontrolCloudnsWrRecord(scope, `CloudnsWr:${label}:${target}`, {
        target: target,
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
