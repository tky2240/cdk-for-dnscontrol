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
