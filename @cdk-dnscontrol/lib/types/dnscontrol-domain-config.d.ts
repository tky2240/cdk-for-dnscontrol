import { DnscontrolNamesever } from "./dnscontrol-namesever";
import { DnscontrolRawRecordConfig } from "./dnscontrol-raw-record-config";
import { DnscontrolRecordConfig } from "./dnscontrol-record-config";
import { DnscontrolUnmanagedConfig } from "./dnscontrol-unmanaged-config";
export type DnscontrolDomainConfig = {
    name: string;
    registrar: string;
    dnsProviders: Record<string, number>;
    meta?: Record<string, string> | undefined;
    records: DnscontrolRecordConfig[];
    nameservers?: DnscontrolNamesever[] | undefined;
    recordabsent?: DnscontrolDomainConfig[] | undefined;
    keepunknown?: boolean | undefined;
    unmanaged: DnscontrolUnmanagedConfig[];
    unmanaged_disable_safety_check?: boolean | undefined;
    auto_dnssec?: string | undefined;
    rawrecords: DnscontrolRawRecordConfig[];
};
