import { DnscontrolNamesever } from "./dnscontrol-namesever";
import { DnscontrolRawRecordConfig } from "./dnscontrol-raw-record-config";
import { DnscontrolRecordConfig } from "./dnscontrol-record-config";
import { UnmanagedConfig } from "./dnscontrol-unmanaged-config";

export type DnscontrolDomainConfig = {
  name: string;
  registrar: string;
  dnsProviders: Record<string, number>;
  meta?: Record<string, string> | undefined;
  records: DnscontrolRecordConfig[];
  nameservers?: DnscontrolNamesever[] | undefined;
  recordabsent?: DnscontrolDomainConfig[] | undefined;
  keepunknown?: boolean | undefined;
  unmanaged?: UnmanagedConfig | undefined;
  auto_dnssec?: string | undefined;
  rawrecords?: DnscontrolRawRecordConfig[] | undefined;
};
