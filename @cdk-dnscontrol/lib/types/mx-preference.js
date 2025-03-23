"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asMxPreference = asMxPreference;
const MX_PREFERENCE_SYMBOL = Symbol.for("MxPreference");
function isMxPreference(value) {
  if (value == null) {
    return false;
  }
  if (typeof value !== "number") {
    return false;
  }
  return Number.isInteger(value) && value >= 0 && value <= 65535;
}
function asMxPreference(value) {
  if (!isMxPreference(value)) {
    throw new Error(`Expected an MX preference but got '${value}'`);
  }
  return value;
}
