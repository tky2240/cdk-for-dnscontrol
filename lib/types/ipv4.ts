import * as net from "net";
const IPV4_ADDRESS_SYMBOL = Symbol("IPv4Address");

export type IPv4Address = string & { [IPV4_ADDRESS_SYMBOL]: unknown };

export function isIPv4Address(x: unknown): x is IPv4Address {
  return x != null && typeof x === "string" && net.isIPv4(x);
}

export function asIPv4Address(x: string): IPv4Address {
  if (!isIPv4Address(x)) {
    throw new Error(`Expected an IPv4 address but got '${x}'`);
  }
  return x;
}

const IPV4_PREFIX_LENGTH_SYMBOL = Symbol.for("IPv4PrefixLength");

export type IPv4PrefixLength = number & {
  [IPV4_PREFIX_LENGTH_SYMBOL]: unknown;
};

export function isIPv4PrefixLength(x: unknown): x is IPv4PrefixLength {
  if (x == null) {
    return false;
  }
  if (typeof x !== "number") {
    return false;
  }
  return Number.isInteger(x) && 0 <= x && x <= 32;
}

export function asIPv4PrefixLength(x: number): IPv4PrefixLength {
  if (!isIPv4PrefixLength(x)) {
    throw new Error(`Invalid IPv4 Prefix Length, got '${x}'`);
  }
  return x;
}

const IPV4_CIDR_SYMBOL = Symbol.for("IPv4Cidr");

export type IPv4Cidr = {
  readonly address: IPv4Address;
  readonly prefixLength: IPv4PrefixLength;
} & { [IPV4_CIDR_SYMBOL]: unknown };

export function isIPv4Cidr(x: unknown): x is IPv4Cidr {
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

export function asIPv4Cidr(x: {
  address: string;
  prefixLength: number;
}): IPv4Cidr {
  if (!isIPv4Cidr(x)) {
    throw new Error(
      `Expected an IPv4 cidr but got 'address:${x.address}, prefixLength:${x.prefixLength}'`,
    );
  }
  return x;
}
