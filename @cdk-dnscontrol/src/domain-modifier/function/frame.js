"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FRAME = FRAME;
const duration_1 = require("../../types/duration");
const frame_1 = require("../record/frame");
function FRAME(scope, label, target, ttl, meta) {
    return new frame_1.DnscontrolFrameRecord(scope, `Frame:${label}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        meta: meta,
    });
}
