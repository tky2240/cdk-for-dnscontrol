"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.isIPv6Address = isIPv6Address;
exports.asIPv6Address = asIPv6Address;
exports.isIPv6PrefixLength = isIPv6PrefixLength;
exports.asIPv6PrefixLength = asIPv6PrefixLength;
exports.isIPv6Cidr = isIPv6Cidr;
exports.asIPv6Cidr = asIPv6Cidr;
const net = __importStar(require("net"));
const IPV6_ADDRESS_SYMBOL = Symbol("IPv6Address");
function isIPv6Address(x) {
    return x != null && typeof x === "string" && net.isIPv6(x);
}
function asIPv6Address(x) {
    if (!isIPv6Address(x)) {
        throw new Error(`Expected an IPv6 address but got '${x}'`);
    }
    return x;
}
const IPV6_PREFIX_LENGTH_SYMBOL = Symbol.for("IPv6PrefixLength");
function isIPv6PrefixLength(x) {
    if (x == null) {
        return false;
    }
    if (typeof x !== "number") {
        return false;
    }
    return Number.isInteger(x) && 0 <= x && x <= 128;
}
function asIPv6PrefixLength(x) {
    if (!isIPv6PrefixLength(x)) {
        throw new Error(`Invalid IPv6 Prefix Length, got '${x}'`);
    }
    return x;
}
const IPV6_CIDR_SYMBOL = Symbol.for("IPv6Cidr");
function isIPv6Cidr(x) {
    if (x == null) {
        return false;
    }
    if (typeof x !== "object") {
        return false;
    }
    if (!("address" in x) || !("prefixLength" in x)) {
        return false;
    }
    if (!isIPv6Address(x.address)) {
        return false;
    }
    if (!isIPv6PrefixLength(x.prefixLength)) {
        return false;
    }
    return true;
}
function asIPv6Cidr(x) {
    if (!isIPv6Cidr(x)) {
        throw new Error(`Expected an IPv6 cidr but got 'address:${x.address}, prefixLength:${x.prefixLength}'`);
    }
    return x;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXB2Ni5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlwdjYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxzQ0FFQztBQUVELHNDQUtDO0FBUUQsZ0RBUUM7QUFFRCxnREFLQztBQVNELGdDQWlCQztBQUVELGdDQVVDO0FBM0VELHlDQUEyQjtBQUMzQixNQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUlsRCxTQUFnQixhQUFhLENBQUMsQ0FBVTtJQUN0QyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxDQUFTO0lBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRCxNQUFNLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQU1qRSxTQUFnQixrQkFBa0IsQ0FBQyxDQUFVO0lBQzNDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUMxQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDO0FBQ25ELENBQUM7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxDQUFTO0lBQzFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVELE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQU9oRCxTQUFnQixVQUFVLENBQUMsQ0FBVTtJQUNuQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNkLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDMUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzlCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQUN4QyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxTQUFnQixVQUFVLENBQUMsQ0FHMUI7SUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FDYiwwQ0FBMEMsQ0FBQyxDQUFDLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FDdkYsQ0FBQztJQUNKLENBQUM7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBuZXQgZnJvbSBcIm5ldFwiO1xuY29uc3QgSVBWNl9BRERSRVNTX1NZTUJPTCA9IFN5bWJvbChcIklQdjZBZGRyZXNzXCIpO1xuXG5leHBvcnQgdHlwZSBJUHY2QWRkcmVzcyA9IHN0cmluZyAmIHsgW0lQVjZfQUREUkVTU19TWU1CT0xdOiB1bmtub3duIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lQdjZBZGRyZXNzKHg6IHVua25vd24pOiB4IGlzIElQdjZBZGRyZXNzIHtcbiAgcmV0dXJuIHggIT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIiAmJiBuZXQuaXNJUHY2KHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNJUHY2QWRkcmVzcyh4OiBzdHJpbmcpOiBJUHY2QWRkcmVzcyB7XG4gIGlmICghaXNJUHY2QWRkcmVzcyh4KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYW4gSVB2NiBhZGRyZXNzIGJ1dCBnb3QgJyR7eH0nYCk7XG4gIH1cbiAgcmV0dXJuIHg7XG59XG5cbmNvbnN0IElQVjZfUFJFRklYX0xFTkdUSF9TWU1CT0wgPSBTeW1ib2wuZm9yKFwiSVB2NlByZWZpeExlbmd0aFwiKTtcblxuZXhwb3J0IHR5cGUgSVB2NlByZWZpeExlbmd0aCA9IG51bWJlciAmIHtcbiAgW0lQVjZfUFJFRklYX0xFTkdUSF9TWU1CT0xdOiB1bmtub3duO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSVB2NlByZWZpeExlbmd0aCh4OiB1bmtub3duKTogeCBpcyBJUHY2UHJlZml4TGVuZ3RoIHtcbiAgaWYgKHggPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIHggIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIoeCkgJiYgMCA8PSB4ICYmIHggPD0gMTI4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNJUHY2UHJlZml4TGVuZ3RoKHg6IG51bWJlcik6IElQdjZQcmVmaXhMZW5ndGgge1xuICBpZiAoIWlzSVB2NlByZWZpeExlbmd0aCh4KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBJUHY2IFByZWZpeCBMZW5ndGgsIGdvdCAnJHt4fSdgKTtcbiAgfVxuICByZXR1cm4geDtcbn1cblxuY29uc3QgSVBWNl9DSURSX1NZTUJPTCA9IFN5bWJvbC5mb3IoXCJJUHY2Q2lkclwiKTtcblxuZXhwb3J0IHR5cGUgSVB2NkNpZHIgPSB7XG4gIHJlYWRvbmx5IGFkZHJlc3M6IElQdjZBZGRyZXNzO1xuICByZWFkb25seSBwcmVmaXhMZW5ndGg6IElQdjZQcmVmaXhMZW5ndGg7XG59ICYgeyBbSVBWNl9DSURSX1NZTUJPTF06IHVua25vd24gfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSVB2NkNpZHIoeDogdW5rbm93bik6IHggaXMgSVB2NkNpZHIge1xuICBpZiAoeCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0eXBlb2YgeCAhPT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIShcImFkZHJlc3NcIiBpbiB4KSB8fCAhKFwicHJlZml4TGVuZ3RoXCIgaW4geCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCFpc0lQdjZBZGRyZXNzKHguYWRkcmVzcykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCFpc0lQdjZQcmVmaXhMZW5ndGgoeC5wcmVmaXhMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNJUHY2Q2lkcih4OiB7XG4gIGFkZHJlc3M6IHN0cmluZztcbiAgcHJlZml4TGVuZ3RoOiBudW1iZXI7XG59KTogSVB2NkNpZHIge1xuICBpZiAoIWlzSVB2NkNpZHIoeCkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgRXhwZWN0ZWQgYW4gSVB2NiBjaWRyIGJ1dCBnb3QgJ2FkZHJlc3M6JHt4LmFkZHJlc3N9LCBwcmVmaXhMZW5ndGg6JHt4LnByZWZpeExlbmd0aH0nYCxcbiAgICApO1xuICB9XG4gIHJldHVybiB4O1xufVxuIl19