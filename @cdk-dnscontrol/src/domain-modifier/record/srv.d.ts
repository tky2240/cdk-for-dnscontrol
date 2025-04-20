import { Construct } from "constructs";
import { DnscontrolSrvRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolSrvRecordProps {
    readonly label: string;
    readonly target: string;
    readonly priority: number;
    readonly weight: number;
    readonly port: number;
    readonly ttl?: Duration | undefined;
    readonly isEnsuredAbsent?: boolean | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolSrvRecord extends DnscontrolRecord {
    readonly priority: number;
    readonly weight: number;
    readonly port: number;
    constructor(scope: Construct, id: string, props: DnscontrolSrvRecordProps);
    static isDnscontrolSrvRecord(x: unknown): x is DnscontrolSrvRecord;
    renderRecordConfig(): DnscontrolSrvRecordConfig;
}
