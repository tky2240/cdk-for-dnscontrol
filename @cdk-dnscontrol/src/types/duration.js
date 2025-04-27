"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = exports.year = exports.nonth = exports.week = exports.day = exports.hour = exports.minute = exports.second = exports.DurationUnit = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
// from https://gist.githubusercontent.com/kamiaka/6f828d3319b81a6d67167c27fc43aa07/raw/1e2608f3c9a411aaad55ec3f5d7d532e893943a2/duration.ts
class DurationUnit {
    value;
    name;
    static [JSII_RTTI_SYMBOL_1] = { fqn: "@tky2240/cdk-for-dnscontrol.DurationUnit", version: "0.1.0" };
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
    static [JSII_RTTI_SYMBOL_1] = { fqn: "@tky2240/cdk-for-dnscontrol.Duration", version: "0.1.0" };
    value;
    unit;
    constructor(value) {
        if (typeof value === "number") {
            if (!isNonNegativeInteger(value)) {
                throw new Error("Duration must be a non-negative integer, but got " + value);
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
        if (!isNonNegativeInteger(Number(durationValueAndUnit[1]))) {
            throw new Error("Duration must be a non-negative integer, but got " +
                durationValueAndUnit[1]);
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
function isNonNegativeInteger(value) {
    if (typeof value !== "number") {
        return false;
    }
    if (!Number.isInteger(value)) {
        return false;
    }
    if (value < 0) {
        return false;
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkdXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNElBQTRJO0FBRTVJLE1BQWEsWUFBWTtJQUVMO0lBQ0E7O0lBRmxCLFlBQ2tCLEtBQWEsRUFDYixJQUFZO1FBRFosVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFNBQUksR0FBSixJQUFJLENBQVE7SUFDM0IsQ0FBQzs7QUFKTixvQ0FLQztBQUVZLFFBQUEsTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNsQyxRQUFBLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLEdBQUcsY0FBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNsRCxRQUFBLElBQUksR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLEdBQUcsY0FBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoRCxRQUFBLEdBQUcsR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLEdBQUcsWUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM3QyxRQUFBLElBQUksR0FBRyxJQUFJLFlBQVksQ0FBQyxDQUFDLEdBQUcsV0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM1QyxRQUFBLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLEdBQUcsV0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM5QyxRQUFBLElBQUksR0FBRyxJQUFJLFlBQVksQ0FBQyxHQUFHLEdBQUcsV0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUUzRCxNQUFhLFFBQVE7O0lBQ0gsS0FBSyxDQUFTO0lBQ2QsSUFBSSxDQUFlO0lBRW5DLFlBQVksS0FBc0I7UUFDaEMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUM5QixJ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QztJQUNmLENBQUM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20va2FtaWFrYS82ZjgyOGQzMzE5YjgxYTZkNjcxNjdjMjdmYzQzYWEwNy9yYXcvMWUyNjA4ZjNjOWE0MTFhYWFkNTVlYzNmNWQ3ZDUzMmU4OTM5NDNhMi9kdXJhdGlvbi50c1xuXG5leHBvcnQgY2xhc3MgRHVyYXRpb25Vbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IHZhbHVlOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcbiAgKSB7fVxufVxuXG5leHBvcnQgY29uc3Qgc2Vjb25kID0gbmV3IER1cmF0aW9uVW5pdCgxLCBcInNcIik7XG5leHBvcnQgY29uc3QgbWludXRlID0gbmV3IER1cmF0aW9uVW5pdCg2MCAqIHNlY29uZC52YWx1ZSwgXCJtXCIpO1xuZXhwb3J0IGNvbnN0IGhvdXIgPSBuZXcgRHVyYXRpb25Vbml0KDYwICogbWludXRlLnZhbHVlLCBcImhcIik7XG5leHBvcnQgY29uc3QgZGF5ID0gbmV3IER1cmF0aW9uVW5pdCgyNCAqIGhvdXIudmFsdWUsIFwiZFwiKTtcbmV4cG9ydCBjb25zdCB3ZWVrID0gbmV3IER1cmF0aW9uVW5pdCg3ICogZGF5LnZhbHVlLCBcIndcIik7XG5leHBvcnQgY29uc3Qgbm9udGggPSBuZXcgRHVyYXRpb25Vbml0KDMwICogZGF5LnZhbHVlLCBcIm5cIik7XG5leHBvcnQgY29uc3QgeWVhciA9IG5ldyBEdXJhdGlvblVuaXQoMzY1ICogZGF5LnZhbHVlLCBcInlcIik7XG5cbmV4cG9ydCBjbGFzcyBEdXJhdGlvbiB7XG4gIHB1YmxpYyByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgdW5pdDogRHVyYXRpb25Vbml0O1xuXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICBpZiAoIWlzTm9uTmVnYXRpdmVJbnRlZ2VyKHZhbHVlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJEdXJhdGlvbiBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIsIGJ1dCBnb3QgXCIgKyB2YWx1ZSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMudW5pdCA9IHNlY29uZDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZHVyYXRpb25WYWx1ZUFuZFVuaXQgPSB2YWx1ZS5tYXRjaCgvXihcXGQrKShzfG18aHxkfHd8bnx5KSQvKTtcbiAgICBpZiAoZHVyYXRpb25WYWx1ZUFuZFVuaXQgPT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkdXJhdGlvbiBmb3JtYXQ6IFwiICsgdmFsdWUpO1xuICAgIH1cbiAgICBpZiAoZHVyYXRpb25WYWx1ZUFuZFVuaXQubGVuZ3RoICE9PSAzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGR1cmF0aW9uIGZvcm1hdDogXCIgKyB2YWx1ZSk7XG4gICAgfVxuICAgIGlmICghaXNOb25OZWdhdGl2ZUludGVnZXIoTnVtYmVyKGR1cmF0aW9uVmFsdWVBbmRVbml0WzFdKSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgXCJEdXJhdGlvbiBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIsIGJ1dCBnb3QgXCIgK1xuICAgICAgICAgIGR1cmF0aW9uVmFsdWVBbmRVbml0WzFdLFxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IE51bWJlcihkdXJhdGlvblZhbHVlQW5kVW5pdFsxXSk7XG4gICAgdGhpcy51bml0ID0gKCgpID0+IHtcbiAgICAgIHN3aXRjaCAoZHVyYXRpb25WYWx1ZUFuZFVuaXRbMl0pIHtcbiAgICAgICAgY2FzZSBcInNcIjpcbiAgICAgICAgICByZXR1cm4gc2Vjb25kO1xuICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgIHJldHVybiBtaW51dGU7XG4gICAgICAgIGNhc2UgXCJoXCI6XG4gICAgICAgICAgcmV0dXJuIGhvdXI7XG4gICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgcmV0dXJuIGRheTtcbiAgICAgICAgY2FzZSBcIndcIjpcbiAgICAgICAgICByZXR1cm4gd2VlaztcbiAgICAgICAgY2FzZSBcIm5cIjpcbiAgICAgICAgICByZXR1cm4gbm9udGg7XG4gICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgcmV0dXJuIHllYXI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBkdXJhdGlvbiB1bml0OiBcIiArIGR1cmF0aW9uVmFsdWVBbmRVbml0WzJdKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICB9XG4gIHByaXZhdGUgdG8odW5pdDogRHVyYXRpb25Vbml0LCBpc0Zsb29yID0gZmFsc2UpIHtcbiAgICBjb25zdCB2ID0gdGhpcy52YWx1ZVxuICAgICAgPyBNYXRoLnJvdW5kKHRoaXMudmFsdWUgKiB0aGlzLnVuaXQudmFsdWUpIC8gdW5pdC52YWx1ZVxuICAgICAgOiAwO1xuICAgIHJldHVybiBpc0Zsb29yID8gTWF0aC5mbG9vcih2KSA6IHY7XG4gIH1cbiAgcHVibGljIHRvU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy50byhzZWNvbmQsIHRydWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzTm9uTmVnYXRpdmVJbnRlZ2VyKHZhbHVlOiB1bmtub3duKTogYm9vbGVhbiB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCFOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodmFsdWUgPCAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIl19