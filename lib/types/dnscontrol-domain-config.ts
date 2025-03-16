import { DnscontrolNamesever } from "./dnscontrol-namesever";
import { DnscontrolRecordConfig } from "./dnscontrol-record-config";

export type DnscontrolDomainConfig = {
  name: string;
  registrar: string;
  dnsProviders: Record<string, number>;
  meta?: Record<string, string> | undefined;
  records: DnscontrolRecordConfig[];
  nameservers?: DnscontrolNamesever[] | undefined;
  keepunknown?: boolean | undefined;
  ignored_labels?: string[] | undefined;
};
