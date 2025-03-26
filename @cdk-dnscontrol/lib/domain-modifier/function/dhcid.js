"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DHCID = DHCID;
const duration_1 = require("../../types/duration");
const dhcid_1 = require("../record/dhcid");
function DHCID(scope, label, target, ttl) {
    return new dhcid_1.DnscontrolDhcidRecord(scope, `Dhcid:${label}:${target}`, {
        target: target,
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
