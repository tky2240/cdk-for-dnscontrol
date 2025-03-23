"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = [];
          for (var k in o)
            if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
          return ar;
        };
      return ownKeys(o);
    };
    return function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null)
        for (var k = ownKeys(mod), i = 0; i < k.length; i++)
          if (k[i] !== "default") __createBinding(result, mod, k[i]);
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
    throw new Error(
      `Expected an IPv4 cidr but got 'address:${x.address}, prefixLength:${x.prefixLength}'`,
    );
  }
  return x;
}
