import { DnscontrolDnsProviderConfig } from "./dnscontrol-dns-provider-config";
import { DnscontrolDomainConfig } from "./dnscontrol-domain-config";
import { DnscontrolRegistrarConfig } from "./dnscontrol-registrar-config";
export type DnscontrolDnsConfig = {
  registrars: DnscontrolRegistrarConfig[];
  dns_providers: DnscontrolDnsProviderConfig[];
  domains: DnscontrolDomainConfig[];
};
