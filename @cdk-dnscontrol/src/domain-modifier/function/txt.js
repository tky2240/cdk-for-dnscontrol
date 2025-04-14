"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TXT = TXT;
const duration_1 = require("../../types/duration");
const txt_1 = require("../record/txt");
function TXT(scope, label, target, ttl, meta) {
    return new txt_1.DnscontrolTxtRecord(scope, `Txt:${label}:${target}`, {
        label: label,
        txtStrings: Array.isArray(target) ? target : [target],
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        meta: meta,
    });
}
