import * as net from "net";
const IPV6_SYMBOL = Symbol("IPv6");

export type IPv6 = string & { [IPV6_SYMBOL]: unknown };

export function isIPv6(x: unknown): x is IPv6 {
  return x != null && typeof x === "string" && net.isIPv6(x);
}

export function asIPv6(x: string): IPv6 {
  if (!isIPv6(x)) {
    throw new Error(`Expected an IPv4 address but got '${x}'`);
  }
  return x;
}
