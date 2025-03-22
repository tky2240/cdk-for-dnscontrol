import { Construct } from "constructs";
import { DnscontrolSoaRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolSoaRecordProps {
    readonly label: string;
    readonly target: string;
    readonly mbox: string;
    readonly refresh: number;
    readonly retry: number;
    readonly expire: number;
    readonly minttl: number;
    readonly ttl?: Duration;
}
export declare class DnscontrolSoaRecord extends DnscontrolRecord {
    readonly mbox: string;
    readonly refresh: number;
    readonly retry: number;
    readonly expire: number;
    readonly minttl: number;
    constructor(scope: Construct, id: string, props: DnscontrolSoaRecordProps);
    static isDnscontrolSoaRecord(x: unknown): x is DnscontrolSoaRecord;
    getRecordConfig(): DnscontrolSoaRecordConfig;
}
