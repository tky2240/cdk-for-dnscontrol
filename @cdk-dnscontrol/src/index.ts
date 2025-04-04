export { App, type AppConfig } from "./app";
export {
  DnscontrolDomain,
  type DnscontrolDomainProps,
} from "./dnscontrol-domain";
export {
  DnscontrolDomainProvider,
  type DnscontrolDomainProviderProps,
} from "./dnscontrol-domain-provider";
export {
  DnscontrolProvider,
  type DnscontrolProviderProps,
} from "./dnscontrol-provider";
export {
  DnscontrolRegistrar,
  type DnscontrolRegistrarProps,
} from "./dnscontrol-registrar";
export { DnscontrolStack, type DnscontrolStackProps } from "./dnscontrol-stack";

export { createReverseDnsName } from "./function/rev";
export { Duration, DurationUnit } from "./types/duration";
export { asIPv4Address, asIPv4Cidr, asIPv4PrefixLength } from "./types/ipv4";
export { asIPv6Address, asIPv6Cidr, asIPv6PrefixLength } from "./types/ipv6";
export { asMxPreference } from "./types/mx-preference";

export {
  DnscontrolIgnore,
  type DnscontrolIgnoreProps,
} from "./domain-modifier/management/ignore";

export {
  DnscontrolDomainModifier,
  type DnscontrolDomainModifierProps,
} from "./domain-modifier/dnscontrol-domain-modifier";

export { type DnscontrolDnsConfig } from "./types/dnscontrol-dns-config";
export { type DnscontrolDomainConfig } from "./types/dnscontrol-domain-config";
export { type DnscontrolNamesever } from "./types/dnscontrol-namesever";
export { type DnscontrolRawRecordConfig } from "./types/dnscontrol-raw-record-config";
export { type DnscontrolRecordConfig } from "./types/dnscontrol-record-config";
export { type DnscontrolUnmanagedConfig } from "./types/dnscontrol-unmanaged-config";
