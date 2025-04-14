"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL = URL;
const duration_1 = require("../../types/duration");
const url_1 = require("../record/url");
function URL(scope, label, target, ttl, meta) {
    return new url_1.DnscontrolUrlRecord(scope, `Url:${label}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        meta: meta,
    });
}
