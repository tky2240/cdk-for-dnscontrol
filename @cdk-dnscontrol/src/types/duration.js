"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duration = exports.year = exports.nonth = exports.week = exports.day = exports.hour = exports.minute = exports.second = exports.DurationUnit = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
// from https://gist.githubusercontent.com/kamiaka/6f828d3319b81a6d67167c27fc43aa07/raw/1e2608f3c9a411aaad55ec3f5d7d532e893943a2/duration.ts
class DurationUnit {
    value;
    name;
    static [JSII_RTTI_SYMBOL_1] = { fqn: "@tky2240/cdk-for-dnscontrol.DurationUnit", version: "0.0.5" };
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
    static [JSII_RTTI_SYMBOL_1] = { fqn: "@tky2240/cdk-for-dnscontrol.Duration", version: "0.0.5" };
    value;
    unit;
    constructor(value) {
        if (typeof value === "number") {
            if (!isPositiveInteger(value)) {
                throw new Error("Duration must be a positive integer, but got " + value);
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
            throw new Error("Duration must be a positive integer, but got " +
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkdXJhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsNElBQTRJO0FBRTVJLE1BQWEsWUFBWTtJQUVMO0lBQ0E7O0lBRmxCLFlBQ2tCLEtBQWEsRUFDYixJQUFZO1FBRFosVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLFNBQUksR0FBSixJQUFJLENBQVE7SUFDM0IsQ0FBQzs7QUFKTixvQ0FLQztBQUVZLFFBQUEsTUFBTSxHQUFHLElBQUksWUFBWSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNsQyxRQUFBLE1BQU0sR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLEdBQUcsY0FBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNsRCxRQUFBLElBQUksR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLEdBQUcsY0FBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNoRCxRQUFBLEdBQUcsR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLEdBQUcsWUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM3QyxRQUFBLElBQUksR0FBRyxJQUFJLFlBQVksQ0FBQyxDQUFDLEdBQUcsV0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM1QyxRQUFBLEtBQUssR0FBRyxJQUFJLFlBQVksQ0FBQyxFQUFFLEdBQUcsV0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUM5QyxRQUFBLElBQUksR0FBRyxJQUFJLFlBQVksQ0FBQyxHQUFHLEdBQUcsV0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUUzRCxNQUFhLFFBQVE7O0lBQ0gsS0FBSyxDQUFTO0lBQ2QsSUFBSSxDQUFlO0lBRW5DLFlBQVksS0FBc0I7UUFDaEMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUM5QixJ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QztJQUNmLENBQUM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWJ1c2VyY29udGVudC5jb20va2FtaWFrYS82ZjgyOGQzMzE5YjgxYTZkNjcxNjdjMjdmYzQzYWEwNy9yYXcvMWUyNjA4ZjNjOWE0MTFhYWFkNTVlYzNmNWQ3ZDUzMmU4OTM5NDNhMi9kdXJhdGlvbi50c1xuXG5leHBvcnQgY2xhc3MgRHVyYXRpb25Vbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IHZhbHVlOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IG5hbWU6IHN0cmluZyxcbiAgKSB7fVxufVxuXG5leHBvcnQgY29uc3Qgc2Vjb25kID0gbmV3IER1cmF0aW9uVW5pdCgxLCBcInNcIik7XG5leHBvcnQgY29uc3QgbWludXRlID0gbmV3IER1cmF0aW9uVW5pdCg2MCAqIHNlY29uZC52YWx1ZSwgXCJtXCIpO1xuZXhwb3J0IGNvbnN0IGhvdXIgPSBuZXcgRHVyYXRpb25Vbml0KDYwICogbWludXRlLnZhbHVlLCBcImhcIik7XG5leHBvcnQgY29uc3QgZGF5ID0gbmV3IER1cmF0aW9uVW5pdCgyNCAqIGhvdXIudmFsdWUsIFwiZFwiKTtcbmV4cG9ydCBjb25zdCB3ZWVrID0gbmV3IER1cmF0aW9uVW5pdCg3ICogZGF5LnZhbHVlLCBcIndcIik7XG5leHBvcnQgY29uc3Qgbm9udGggPSBuZXcgRHVyYXRpb25Vbml0KDMwICogZGF5LnZhbHVlLCBcIm5cIik7XG5leHBvcnQgY29uc3QgeWVhciA9IG5ldyBEdXJhdGlvblVuaXQoMzY1ICogZGF5LnZhbHVlLCBcInlcIik7XG5cbmV4cG9ydCBjbGFzcyBEdXJhdGlvbiB7XG4gIHB1YmxpYyByZWFkb25seSB2YWx1ZTogbnVtYmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgdW5pdDogRHVyYXRpb25Vbml0O1xuXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICBpZiAoIWlzUG9zaXRpdmVJbnRlZ2VyKHZhbHVlKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgXCJEdXJhdGlvbiBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlciwgYnV0IGdvdCBcIiArIHZhbHVlLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy51bml0ID0gc2Vjb25kO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBkdXJhdGlvblZhbHVlQW5kVW5pdCA9IHZhbHVlLm1hdGNoKC9eKFxcZCspKHN8bXxofGR8d3xufHkpJC8pO1xuICAgIGlmIChkdXJhdGlvblZhbHVlQW5kVW5pdCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGR1cmF0aW9uIGZvcm1hdDogXCIgKyB2YWx1ZSk7XG4gICAgfVxuICAgIGlmIChkdXJhdGlvblZhbHVlQW5kVW5pdC5sZW5ndGggIT09IDMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZHVyYXRpb24gZm9ybWF0OiBcIiArIHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKCFpc1Bvc2l0aXZlSW50ZWdlcihOdW1iZXIoZHVyYXRpb25WYWx1ZUFuZFVuaXRbMV0pKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkR1cmF0aW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLCBidXQgZ290IFwiICtcbiAgICAgICAgICBkdXJhdGlvblZhbHVlQW5kVW5pdFsxXSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMudmFsdWUgPSBOdW1iZXIoZHVyYXRpb25WYWx1ZUFuZFVuaXRbMV0pO1xuICAgIHRoaXMudW5pdCA9ICgoKSA9PiB7XG4gICAgICBzd2l0Y2ggKGR1cmF0aW9uVmFsdWVBbmRVbml0WzJdKSB7XG4gICAgICAgIGNhc2UgXCJzXCI6XG4gICAgICAgICAgcmV0dXJuIHNlY29uZDtcbiAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICByZXR1cm4gbWludXRlO1xuICAgICAgICBjYXNlIFwiaFwiOlxuICAgICAgICAgIHJldHVybiBob3VyO1xuICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgIHJldHVybiBkYXk7XG4gICAgICAgIGNhc2UgXCJ3XCI6XG4gICAgICAgICAgcmV0dXJuIHdlZWs7XG4gICAgICAgIGNhc2UgXCJuXCI6XG4gICAgICAgICAgcmV0dXJuIG5vbnRoO1xuICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgIHJldHVybiB5ZWFyO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZHVyYXRpb24gdW5pdDogXCIgKyBkdXJhdGlvblZhbHVlQW5kVW5pdFsyXSk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgfVxuICBwcml2YXRlIHRvKHVuaXQ6IER1cmF0aW9uVW5pdCwgaXNGbG9vciA9IGZhbHNlKSB7XG4gICAgY29uc3QgdiA9IHRoaXMudmFsdWVcbiAgICAgID8gTWF0aC5yb3VuZCh0aGlzLnZhbHVlICogdGhpcy51bml0LnZhbHVlKSAvIHVuaXQudmFsdWVcbiAgICAgIDogMDtcbiAgICByZXR1cm4gaXNGbG9vciA/IE1hdGguZmxvb3IodikgOiB2O1xuICB9XG4gIHB1YmxpYyB0b1NlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMudG8oc2Vjb25kLCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1Bvc2l0aXZlSW50ZWdlcih2YWx1ZTogdW5rbm93bik6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICghTnVtYmVyLmlzSW50ZWdlcih2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHZhbHVlIDw9IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=