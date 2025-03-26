"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = A;
const a_1 = require("../record/a");
function A(scope, props) {
    return new a_1.DnscontrolARecord(scope, `${props.label}:${props.ip}`, props);
}
