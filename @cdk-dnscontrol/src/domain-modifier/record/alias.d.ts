import { Construct } from "constructs";
import { DnscontrolAliasRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolAliasRecordProps {
    readonly label: string;
    readonly target: string;
    readonly ttl?: Duration | undefined;
    readonly isEnsuredAbsent?: boolean | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolAliasRecord extends DnscontrolRecord {
    constructor(scope: Construct, id: string, props: DnscontrolAliasRecordProps);
    static isDnscontrolARecord(x: unknown): x is DnscontrolAliasRecord;
    renderRecordConfig(): DnscontrolAliasRecordConfig;
}
