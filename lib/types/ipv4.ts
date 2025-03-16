import * as net from "net";
const IPV4_SYMBOL = Symbol("IPv4");

export type IPv4 = string & { [IPV4_SYMBOL]: unknown };

export function isIPv4(x: unknown): x is IPv4 {
  return x != null && typeof x === "string" && net.isIPv4(x);
}

export function asIPv4(x: string): IPv4 {
  if (!isIPv4(x)) {
    throw new Error(`Expected an IPv4 address but got '${x}'`);
  }
  return x;
}
