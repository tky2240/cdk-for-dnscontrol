declare const IPV4_ADDRESS_SYMBOL: unique symbol;
export type IPv4Address = string & {
    [IPV4_ADDRESS_SYMBOL]: unknown;
};
export declare function isIPv4Address(x: unknown): x is IPv4Address;
export declare function asIPv4Address(x: string): IPv4Address;
declare const IPV4_PREFIX_LENGTH_SYMBOL: unique symbol;
export type IPv4PrefixLength = number & {
    [IPV4_PREFIX_LENGTH_SYMBOL]: unknown;
};
export declare function isIPv4PrefixLength(x: unknown): x is IPv4PrefixLength;
export declare function asIPv4PrefixLength(x: number): IPv4PrefixLength;
declare const IPV4_CIDR_SYMBOL: unique symbol;
export type IPv4Cidr = {
    readonly address: IPv4Address;
    readonly prefixLength: IPv4PrefixLength;
} & {
    [IPV4_CIDR_SYMBOL]: unknown;
};
export declare function isIPv4Cidr(x: unknown): x is IPv4Cidr;
export declare function asIPv4Cidr(x: {
    address: string;
    prefixLength: number;
}): IPv4Cidr;
export {};
