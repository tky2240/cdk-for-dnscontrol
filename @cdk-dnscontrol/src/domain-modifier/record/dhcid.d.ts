import { Construct } from "constructs";
import { DnscontrolDhcidRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolDhcidRecordProps {
    readonly label: string;
    readonly target: string;
    readonly ttl?: Duration | undefined;
    readonly isEnsuredAbsent?: boolean | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolDhcidRecord extends DnscontrolRecord {
    constructor(scope: Construct, id: string, props: DnscontrolDhcidRecordProps);
    static isDnscontrolDhcidRecord(x: unknown): x is DnscontrolDhcidRecord;
    renderRecordConfig(): DnscontrolDhcidRecordConfig;
}
