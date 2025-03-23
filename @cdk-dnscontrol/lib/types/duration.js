"use strict";
// from https://gist.githubusercontent.com/kamiaka/6f828d3319b81a6d67167c27fc43aa07/raw/1e2608f3c9a411aaad55ec3f5d7d532e893943a2/duration.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration =
  exports.year =
  exports.nonth =
  exports.week =
  exports.day =
  exports.hour =
  exports.minute =
  exports.second =
  exports.DurationUnit =
    void 0;
class DurationUnit {
  value;
  name;
  constructor(value, name) {
    this.value = value;
    this.name = name;
  }
}
exports.DurationUnit = DurationUnit;
exports.second = new DurationUnit(1, "s");
exports.minute = new DurationUnit(60 * exports.second.value, "m");
exports.hour = new DurationUnit(60 * exports.minute.value, "h");
exports.day = new DurationUnit(24 * exports.hour.value, "d");
exports.week = new DurationUnit(7 * exports.day.value, "w");
exports.nonth = new DurationUnit(30 * exports.day.value, "n");
exports.year = new DurationUnit(365 * exports.day.value, "y");
class Duration {
  value;
  unit;
  constructor(value) {
    if (typeof value === "number") {
      if (!isPositiveInteger(value)) {
        throw new Error(
          "Duration must be a positive integer, but got " + value,
        );
      }
      this.value = value;
      this.unit = exports.second;
      return;
    }
    const durationValueAndUnit = value.match(/^(\d+)(s|m|h|d|w|n|y)$/);
    if (durationValueAndUnit == null) {
      throw new Error("Invalid duration format: " + value);
    }
    if (durationValueAndUnit.length !== 3) {
      throw new Error("Invalid duration format: " + value);
    }
    if (!isPositiveInteger(Number(durationValueAndUnit[1]))) {
      throw new Error(
        "Duration must be a positive integer, but got " +
          durationValueAndUnit[1],
      );
    }
    this.value = Number(durationValueAndUnit[1]);
    this.unit = (() => {
      switch (durationValueAndUnit[2]) {
        case "s":
          return exports.second;
        case "m":
          return exports.minute;
        case "h":
          return exports.hour;
        case "d":
          return exports.day;
        case "w":
          return exports.week;
        case "n":
          return exports.nonth;
        case "y":
          return exports.year;
        default:
          throw new Error("Invalid duration unit: " + durationValueAndUnit[2]);
      }
    })();
  }
  to(unit, isFloor = false) {
    const v = this.value
      ? Math.round(this.value * this.unit.value) / unit.value
      : 0;
    return isFloor ? Math.floor(v) : v;
  }
  toSeconds() {
    return this.to(exports.second, true);
  }
}
exports.Duration = Duration;
function isPositiveInteger(value) {
  if (typeof value !== "number") {
    return false;
  }
  if (!Number.isInteger(value)) {
    return false;
  }
  if (value <= 0) {
    return false;
  }
  return true;
}
