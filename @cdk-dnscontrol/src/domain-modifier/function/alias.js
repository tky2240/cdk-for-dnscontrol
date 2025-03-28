"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALIAS = ALIAS;
const duration_1 = require("../../types/duration");
const alias_1 = require("../record/alias");
function ALIAS(scope, label, target, ttl) {
    return new alias_1.DnscontrolAliasRecord(scope, `Alias:${label}:${target}`, {
        target: target,
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
