"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IGNORE = IGNORE;
const ignore_1 = require("../management/ignore");
function IGNORE(scope, labelSpec, typeSpec, targetSpec) {
    return new ignore_1.DnscontrolIgnore(scope, `Ignore:${labelSpec}:${targetSpec}:${typeSpec}`, {
        labelPattern: labelSpec,
        typePattern: typeSpec,
        targetPattern: targetSpec,
    });
}
