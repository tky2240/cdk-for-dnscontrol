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
    readonly ttl?: Duration | undefined;
    readonly isEnsuredAbsent?: boolean | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolSoaRecord extends DnscontrolRecord {
    readonly mbox: string;
    readonly refresh: number;
    readonly retry: number;
    readonly expire: number;
    readonly minttl: number;
    constructor(scope: Construct, id: string, props: DnscontrolSoaRecordProps);
    static isDnscontrolSoaRecord(x: unknown): x is DnscontrolSoaRecord;
    renderRecordConfig(): DnscontrolSoaRecordConfig;
}
