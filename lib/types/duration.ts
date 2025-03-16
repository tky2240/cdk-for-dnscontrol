// from https://gist.githubusercontent.com/kamiaka/6f828d3319b81a6d67167c27fc43aa07/raw/1e2608f3c9a411aaad55ec3f5d7d532e893943a2/duration.ts

export class DurationUnit {
  constructor(
    public readonly value: number,
    public readonly name: string,
  ) {}
}

export const second = new DurationUnit(1, "s");
export const minute = new DurationUnit(60 * second.value, "m");
export const hour = new DurationUnit(60 * minute.value, "h");
export const day = new DurationUnit(24 * hour.value, "d");
export const week = new DurationUnit(7 * day.value, "w");
export const nonth = new DurationUnit(30 * day.value, "n");
export const year = new DurationUnit(365 * day.value, "y");

export class Duration {
  public readonly value: number;
  public readonly unit: DurationUnit;

  constructor(value: string | number) {
    if (typeof value === "number") {
      if (!isPositiveInteger(value)) {
        throw new Error(
          "Duration must be a positive integer, but got " + value,
        );
      }
      this.value = value;
      this.unit = second;
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
          return second;
        case "m":
          return minute;
        case "h":
          return hour;
        case "d":
          return day;
        case "w":
          return week;
        case "n":
          return nonth;
        case "y":
          return year;
        default:
          throw new Error("Invalid duration unit: " + durationValueAndUnit[2]);
      }
    })();
  }
  private to(unit: DurationUnit, isFloor: boolean = false) {
    const v = this.value
      ? Math.round(this.value * this.unit.value) / unit.value
      : 0;
    return isFloor ? Math.floor(v) : v;
  }
  public toSeconds() {
    return this.to(second, true);
  }
}

function isPositiveInteger(value: unknown): boolean {
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
