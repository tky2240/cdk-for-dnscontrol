import { Construct } from "constructs";
import { DnscontrolARecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { IPv4Address } from "../../types/ipv4";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolARecordProps {
    readonly label: string;
    readonly ip: IPv4Address;
    readonly ttl?: Duration;
}
export declare class DnscontrolARecord extends DnscontrolRecord {
    readonly ip: IPv4Address;
    constructor(scope: Construct, id: string, props: DnscontrolARecordProps);
    static isDnscontrolARecord(x: unknown): x is DnscontrolARecord;
    getRecordConfig(): DnscontrolARecordConfig;
}
