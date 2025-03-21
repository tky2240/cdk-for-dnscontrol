import { IPv4Cidr, isIPv4Cidr } from "../../types/ipv4";
import { IPv6Address, IPv6Cidr, isIPv6Cidr } from "../../types/ipv6";

export type ReverseDomainMode = "Rfc2317" | "Rfc4183";

export function createReverseDnsName(
  cidr: IPv4Cidr | IPv6Cidr,
  reverseDomainMode: ReverseDomainMode,
): string {
  if (isIPv6Cidr(cidr)) {
    return generateIPv6Rfc4183ReverseDnsName(cidr);
  }
  if (isIPv4Cidr(cidr)) {
    if (
      24 < cidr.prefixLength &&
      cidr.prefixLength < 32 &&
      reverseDomainMode == "Rfc2317"
    ) {
      return generateIPv4Rfc2317ReverseDnsName(cidr);
    } else {
      return generateIPv4Rfc4183ReverseDnsName(cidr);
    }
  }
  throw `Invalid cidr block, got ${cidr}`;
}

function generateIPv4Rfc2317ReverseDnsName(cidr: IPv4Cidr): string {
  const octets = cidr.address.split(".").map(Number);

  const lastOctet = octets[3]; // The last octet
  if (lastOctet == null) {
    throw new Error("not found last octet");
  }

  const subnetMask = 0xffffffff << cidr.prefixLength;
  const hostAddress = lastOctet & ~subnetMask; // Extract host part of last octet.

  const networkOctets = octets.slice(0, 3);
  return `${hostAddress}/${cidr.prefixLength}.${[...networkOctets].reverse().join(".")}.in-addr.arpa`;
}

function generateIPv4Rfc4183ReverseDnsName(cidr: IPv4Cidr): string {
  const octets = new Uint8Array(cidr.address.split(".").map(Number));
  const reverseOctets = [...octets].reverse();

  if (cidr.prefixLength < 8) {
    throw new Error("The notion of fewer than 8 mask bits is not reasonable."); // RFC 4183 4.1.4
  }

  const firstHostAddressOctetIndex = Math.trunc(cidr.prefixLength / 8);
  if (cidr.prefixLength % 8 == 0) {
    return `${reverseOctets.slice(4 - firstHostAddressOctetIndex).join(".")}.in-addr.arpa`;
  }
  const subnetMask = new Uint8Array(
    new Uint32Array([0xffffffff << (32 - cidr.prefixLength)]).buffer,
  ).reverse();
  const firstHostOctet = octets[firstHostAddressOctetIndex];
  if (firstHostOctet == null) {
    throw new Error("not found host octet");
  }

  const maskedOctets = new Uint8Array(4);
  for (let i = 0; i < 4; i++) {
    const octet = octets[i];
    if (octet == null) {
      throw new Error("not found octets");
    }
    const mask = subnetMask[i];
    if (mask == null) {
      throw new Error("not found subnet mask");
    }
    maskedOctets[i] = octet & mask;
  }

  const hostAddress = maskedOctets[firstHostAddressOctetIndex];
  if (hostAddress == null) {
    throw new Error("not found masked host address");
  }
  return `${hostAddress}-${cidr.prefixLength}.${reverseOctets.slice(4 - firstHostAddressOctetIndex).join(".")}.in-addr.arpa`;
}

function generateIPv6Rfc4183ReverseDnsName(cidr: IPv6Cidr): string {
  if (cidr.prefixLength < 8) {
    throw new Error("The notion of fewer than 8 mask bits is not reasonable."); // RFC 4183 4.1.4
  }

  const expandedAddress = expandIPv6Address(cidr.address);
  const nibbles = expandedAddress
    .split("")
    .filter((c) => c !== ":")
    .slice(0, Math.ceil(cidr.prefixLength / 4))
    .reverse(); // Nibbles, reversed

  return nibbles.join(".") + ".ip6.arpa";
}

// Helper function to expand a compressed IPv6 address (e.g., 2001:db8::1 -> 2001:0db8:0000:0000:0000:0000:0000:0001)
function expandIPv6Address(address: IPv6Address): string {
  const parts = address.split("::");

  const expandedParts = parts.map((part) => {
    const subParts = part.split(":");
    return subParts.map((subPart) => subPart.padStart(4, "0")).join(":");
  });

  const firstPart = expandedParts[0];
  if (firstPart == null) {
    throw new Error(`Missing ipv6 first part, got ${address}`);
  }

  if (parts.length === 2) {
    const secondPart = expandedParts[1];
    if (secondPart == null) {
      throw new Error(`Missing ipv6 second part, got ${address}`);
    }
    const missingSegments =
      8 - (firstPart.split(":").length + secondPart.split(":").length);
    const padding = "0000:".repeat(missingSegments).slice(0, -1); // Add padding without trailing ':'
    return firstPart + ":" + padding + ":" + secondPart;
  } else {
    return firstPart;
  }
}
