import { IPv4Cidr } from "../../types/ipv4";
import { IPv6Cidr } from "../../types/ipv6";
export type ReverseDomainMode = "Rfc2317" | "Rfc4183";
export declare function createReverseDnsName(
  cidr: IPv4Cidr | IPv6Cidr,
  reverseDomainMode: ReverseDomainMode,
): string;
