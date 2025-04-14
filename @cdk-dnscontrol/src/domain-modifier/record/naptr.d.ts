import { Construct } from "constructs";
import { DnscontrolNaptrRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolNaptrRecordProps {
    readonly label: string;
    readonly target: string;
    readonly order: number;
    readonly preference: number;
    readonly flags: string;
    readonly service: string;
    readonly regexp: string;
    readonly ttl?: Duration | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolNaptrRecord extends DnscontrolRecord {
    readonly order: number;
    readonly preference: number;
    readonly flags: string;
    readonly service: string;
    readonly regexp: string;
    constructor(scope: Construct, id: string, props: DnscontrolNaptrRecordProps);
    static isDnscontrolNaptrRecord(x: unknown): x is DnscontrolNaptrRecord;
    renderRecordConfig(): DnscontrolNaptrRecordConfig;
}
