import { Construct } from "constructs";
import { DnscontrolHttpsRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolHttpsRecordProps {
    readonly label: string;
    readonly target: string;
    readonly priority: number;
    readonly params: string;
    readonly ttl?: Duration | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolHttpsRecord extends DnscontrolRecord {
    readonly priority: number;
    readonly params: string;
    constructor(scope: Construct, id: string, props: DnscontrolHttpsRecordProps);
    static isDnscontrolHttpsRecord(x: unknown): x is DnscontrolHttpsRecord;
    renderRecordConfig(): DnscontrolHttpsRecordConfig;
}
