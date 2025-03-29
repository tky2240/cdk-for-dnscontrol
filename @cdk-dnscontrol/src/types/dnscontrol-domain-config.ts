import { DnscontrolNamesever } from "./dnscontrol-namesever";
import { DnscontrolRawRecordConfig } from "./dnscontrol-raw-record-config";
import { DnscontrolRecordConfig } from "./dnscontrol-record-config";
import { DnscontrolUnmanagedConfig } from "./dnscontrol-unmanaged-config";

export interface DnscontrolDomainConfig {
  readonly name: string;
  readonly registrar: string;
  readonly dnsProviders: Record<string, number>;
  readonly meta?: Record<string, string> | undefined;
  readonly records: DnscontrolRecordConfig[];
  readonly nameservers?: DnscontrolNamesever[] | undefined;
  readonly recordabsent?: DnscontrolRecordConfig[] | undefined;
  readonly keepunknown?: boolean | undefined;
  readonly unmanaged: DnscontrolUnmanagedConfig[];
  readonly unmanaged_disable_safety_check?: boolean | undefined;
  readonly auto_dnssec?: string | undefined;
  readonly rawrecords: DnscontrolRawRecordConfig[];
};
