import { Construct } from "constructs";
import { DnscontrolAAAARecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { IPv6Address } from "../../types/ipv6";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolAAAARecordProps {
    readonly label: string;
    readonly ip: IPv6Address;
    readonly ttl?: Duration | undefined;
}
export declare class DnscontrolAAAARecord extends DnscontrolRecord {
    readonly ip: IPv6Address;
    constructor(scope: Construct, id: string, props: DnscontrolAAAARecordProps);
    static isDnscontrolARecord(x: unknown): x is DnscontrolAAAARecord;
    renderRecordConfig(): DnscontrolAAAARecordConfig;
}
