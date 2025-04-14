"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORKBUN_URLFWD = PORKBUN_URLFWD;
const duration_1 = require("../../types/duration");
const porkbun_urlfwd_1 = require("../record/porkbun-urlfwd");
function PORKBUN_URLFWD(scope, label, target, ttl, meta) {
    return new porkbun_urlfwd_1.DnscontrolPorkbunUrlfwdRecord(scope, `PorkbunUrlfwd:${label}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        meta: meta,
    });
}
