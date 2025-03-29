import * as net from "net";
const IPV6_ADDRESS_SYMBOL = Symbol("IPv6Address");

export type IPv6Address = string & { [IPV6_ADDRESS_SYMBOL]: unknown };

export function isIPv6Address(x: unknown): x is IPv6Address {
  return x != null && typeof x === "string" && net.isIPv6(x);
}

export function asIPv6Address(x: string): IPv6Address {
  if (!isIPv6Address(x)) {
    throw new Error(`Expected an IPv6 address but got '${x}'`);
  }
  return x;
}

const IPV6_PREFIX_LENGTH_SYMBOL = Symbol.for("IPv6PrefixLength");

export type IPv6PrefixLength = number & {
  [IPV6_PREFIX_LENGTH_SYMBOL]: unknown;
};

export function isIPv6PrefixLength(x: unknown): x is IPv6PrefixLength {
  if (x == null) {
    return false;
  }
  if (typeof x !== "number") {
    return false;
  }
  return Number.isInteger(x) && 0 <= x && x <= 128;
}

export function asIPv6PrefixLength(x: number): IPv6PrefixLength {
  if (!isIPv6PrefixLength(x)) {
    throw new Error(`Invalid IPv6 Prefix Length, got '${x}'`);
  }
  return x;
}

const IPV6_CIDR_SYMBOL = Symbol.for("IPv6Cidr");

export type IPv6Cidr = {
  readonly address: IPv6Address;
  readonly prefixLength: IPv6PrefixLength;
} & { [IPV6_CIDR_SYMBOL]: unknown };

export function isIPv6Cidr(x: unknown): x is IPv6Cidr {
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

export function asIPv6Cidr(x: {
  address: string;
  prefixLength: number;
}): IPv6Cidr {
  if (!isIPv6Cidr(x)) {
    throw new Error(
      `Expected an IPv6 cidr but got 'address:${x.address}, prefixLength:${x.prefixLength}'`,
    );
  }
  return x;
}
