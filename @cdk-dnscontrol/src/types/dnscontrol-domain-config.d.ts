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
    readonly nameServers?: DnscontrolNamesever[] | undefined;
    readonly recordAbsent?: DnscontrolRecordConfig[] | undefined;
    readonly keepUnknown?: boolean | undefined;
    readonly unmanaged: DnscontrolUnmanagedConfig[];
    readonly unmanagedDisableSafetyCheck?: boolean | undefined;
    readonly autoDnssec?: string | undefined;
    readonly rawRecords: DnscontrolRawRecordConfig[];
}
