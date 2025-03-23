declare const IPV6_ADDRESS_SYMBOL: unique symbol;
export type IPv6Address = string & {
  [IPV6_ADDRESS_SYMBOL]: unknown;
};
export declare function isIPv6Address(x: unknown): x is IPv6Address;
export declare function asIPv6Address(x: string): IPv6Address;
declare const IPV6_PREFIX_LENGTH_SYMBOL: unique symbol;
export type IPv6PrefixLength = number & {
  [IPV6_PREFIX_LENGTH_SYMBOL]: unknown;
};
export declare function isIPv6PrefixLength(x: unknown): x is IPv6PrefixLength;
export declare function asIPv6PrefixLength(x: number): IPv6PrefixLength;
declare const IPV6_CIDR_SYMBOL: unique symbol;
export type IPv6Cidr = {
  readonly address: IPv6Address;
  readonly prefixLength: IPv6PrefixLength;
} & {
  [IPV6_CIDR_SYMBOL]: unknown;
};
export declare function isIPv6Cidr(x: unknown): x is IPv6Cidr;
export declare function asIPv6Cidr(x: {
  address: string;
  prefixLength: number;
}): IPv6Cidr;
export {};
