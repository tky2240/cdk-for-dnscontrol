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
exports.isIPv4Address = isIPv4Address;
exports.asIPv4Address = asIPv4Address;
exports.isIPv4PrefixLength = isIPv4PrefixLength;
exports.asIPv4PrefixLength = asIPv4PrefixLength;
exports.isIPv4Cidr = isIPv4Cidr;
exports.asIPv4Cidr = asIPv4Cidr;
const net = __importStar(require("net"));
const IPV4_ADDRESS_SYMBOL = Symbol("IPv4Address");
function isIPv4Address(x) {
    return x != null && typeof x === "string" && net.isIPv4(x);
}
function asIPv4Address(x) {
    if (!isIPv4Address(x)) {
        throw new Error(`Expected an IPv4 address but got '${x}'`);
    }
    return x;
}
const IPV4_PREFIX_LENGTH_SYMBOL = Symbol.for("IPv4PrefixLength");
function isIPv4PrefixLength(x) {
    if (x == null) {
        return false;
    }
    if (typeof x !== "number") {
        return false;
    }
    return Number.isInteger(x) && 0 <= x && x <= 32;
}
function asIPv4PrefixLength(x) {
    if (!isIPv4PrefixLength(x)) {
        throw new Error(`Invalid IPv4 Prefix Length, got '${x}'`);
    }
    return x;
}
const IPV4_CIDR_SYMBOL = Symbol.for("IPv4Cidr");
function isIPv4Cidr(x) {
    if (x == null) {
        return false;
    }
    if (typeof x !== "object") {
        return false;
    }
    if (!("address" in x) || !("prefixLength" in x)) {
        return false;
    }
    if (!isIPv4Address(x.address)) {
        return false;
    }
    if (!isIPv4PrefixLength(x.prefixLength)) {
        return false;
    }
    return true;
}
function asIPv4Cidr(x) {
    if (!isIPv4Cidr(x)) {
        throw new Error(`Expected an IPv4 cidr but got 'address:${x.address}, prefixLength:${x.prefixLength}'`);
    }
    return x;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXB2NC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlwdjQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLQSxzQ0FFQztBQUVELHNDQUtDO0FBUUQsZ0RBUUM7QUFFRCxnREFLQztBQVNELGdDQWlCQztBQUVELGdDQVVDO0FBM0VELHlDQUEyQjtBQUMzQixNQUFNLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUlsRCxTQUFnQixhQUFhLENBQUMsQ0FBVTtJQUN0QyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0QsQ0FBQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxDQUFTO0lBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0QixNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7QUFFRCxNQUFNLHlCQUF5QixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQU1qRSxTQUFnQixrQkFBa0IsQ0FBQyxDQUFVO0lBQzNDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQ2QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUMxQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2xELENBQUM7QUFFRCxTQUFnQixrQkFBa0IsQ0FBQyxDQUFTO0lBQzFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQzNCLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFDO0FBQ1gsQ0FBQztBQUVELE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQU9oRCxTQUFnQixVQUFVLENBQUMsQ0FBVTtJQUNuQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUNkLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFLENBQUM7UUFDMUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0QsSUFBSSxDQUFDLENBQUMsU0FBUyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNoRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQzlCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQztRQUN4QyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxTQUFnQixVQUFVLENBQUMsQ0FHMUI7SUFDQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FDYiwwQ0FBMEMsQ0FBQyxDQUFDLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxZQUFZLEdBQUcsQ0FDdkYsQ0FBQztJQUNKLENBQUM7SUFDRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBuZXQgZnJvbSBcIm5ldFwiO1xuY29uc3QgSVBWNF9BRERSRVNTX1NZTUJPTCA9IFN5bWJvbChcIklQdjRBZGRyZXNzXCIpO1xuXG5leHBvcnQgdHlwZSBJUHY0QWRkcmVzcyA9IHN0cmluZyAmIHsgW0lQVjRfQUREUkVTU19TWU1CT0xdOiB1bmtub3duIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0lQdjRBZGRyZXNzKHg6IHVua25vd24pOiB4IGlzIElQdjRBZGRyZXNzIHtcbiAgcmV0dXJuIHggIT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gXCJzdHJpbmdcIiAmJiBuZXQuaXNJUHY0KHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNJUHY0QWRkcmVzcyh4OiBzdHJpbmcpOiBJUHY0QWRkcmVzcyB7XG4gIGlmICghaXNJUHY0QWRkcmVzcyh4KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYW4gSVB2NCBhZGRyZXNzIGJ1dCBnb3QgJyR7eH0nYCk7XG4gIH1cbiAgcmV0dXJuIHg7XG59XG5cbmNvbnN0IElQVjRfUFJFRklYX0xFTkdUSF9TWU1CT0wgPSBTeW1ib2wuZm9yKFwiSVB2NFByZWZpeExlbmd0aFwiKTtcblxuZXhwb3J0IHR5cGUgSVB2NFByZWZpeExlbmd0aCA9IG51bWJlciAmIHtcbiAgW0lQVjRfUFJFRklYX0xFTkdUSF9TWU1CT0xdOiB1bmtub3duO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzSVB2NFByZWZpeExlbmd0aCh4OiB1bmtub3duKTogeCBpcyBJUHY0UHJlZml4TGVuZ3RoIHtcbiAgaWYgKHggPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodHlwZW9mIHggIT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIoeCkgJiYgMCA8PSB4ICYmIHggPD0gMzI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc0lQdjRQcmVmaXhMZW5ndGgoeDogbnVtYmVyKTogSVB2NFByZWZpeExlbmd0aCB7XG4gIGlmICghaXNJUHY0UHJlZml4TGVuZ3RoKHgpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIElQdjQgUHJlZml4IExlbmd0aCwgZ290ICcke3h9J2ApO1xuICB9XG4gIHJldHVybiB4O1xufVxuXG5jb25zdCBJUFY0X0NJRFJfU1lNQk9MID0gU3ltYm9sLmZvcihcIklQdjRDaWRyXCIpO1xuXG5leHBvcnQgdHlwZSBJUHY0Q2lkciA9IHtcbiAgcmVhZG9ubHkgYWRkcmVzczogSVB2NEFkZHJlc3M7XG4gIHJlYWRvbmx5IHByZWZpeExlbmd0aDogSVB2NFByZWZpeExlbmd0aDtcbn0gJiB7IFtJUFY0X0NJRFJfU1lNQk9MXTogdW5rbm93biB9O1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJUHY0Q2lkcih4OiB1bmtub3duKTogeCBpcyBJUHY0Q2lkciB7XG4gIGlmICh4ID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiB4ICE9PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICghKFwiYWRkcmVzc1wiIGluIHgpIHx8ICEoXCJwcmVmaXhMZW5ndGhcIiBpbiB4KSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIWlzSVB2NEFkZHJlc3MoeC5hZGRyZXNzKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIWlzSVB2NFByZWZpeExlbmd0aCh4LnByZWZpeExlbmd0aCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc0lQdjRDaWRyKHg6IHtcbiAgYWRkcmVzczogc3RyaW5nO1xuICBwcmVmaXhMZW5ndGg6IG51bWJlcjtcbn0pOiBJUHY0Q2lkciB7XG4gIGlmICghaXNJUHY0Q2lkcih4KSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBFeHBlY3RlZCBhbiBJUHY0IGNpZHIgYnV0IGdvdCAnYWRkcmVzczoke3guYWRkcmVzc30sIHByZWZpeExlbmd0aDoke3gucHJlZml4TGVuZ3RofSdgLFxuICAgICk7XG4gIH1cbiAgcmV0dXJuIHg7XG59XG4iXX0=