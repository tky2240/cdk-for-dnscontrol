"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NAPTR = NAPTR;
const duration_1 = require("../../types/duration");
const naptr_1 = require("../record/naptr");
function NAPTR(scope, label, order, preference, flags, service, regexp, target, ttl, meta) {
    return new naptr_1.DnscontrolNaptrRecord(scope, `Naptr:${label}:${order}:${preference}:${flags}:${service}:${regexp}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        meta: meta,
        order: order,
        preference: preference,
        flags: flags,
        service: service,
        regexp: regexp,
    });
}
