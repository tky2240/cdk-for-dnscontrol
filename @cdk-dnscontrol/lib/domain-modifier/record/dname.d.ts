import { Construct } from "constructs";
import { DnscontrolDnameRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolDnameRecordProps {
    readonly label: string;
    readonly target: string;
    readonly ttl?: Duration;
}
export declare class DnscontrolDnameRecord extends DnscontrolRecord {
    constructor(scope: Construct, id: string, props: DnscontrolDnameRecordProps);
    static isDnscontrolDnameRecord(x: unknown): x is DnscontrolDnameRecord;
    getRecordConfig(): DnscontrolDnameRecordConfig;
}
