import { Construct } from "constructs";
import { DnscontrolTxtRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolTxtRecordProps {
    readonly label: string;
    readonly txtStrings: string[];
    readonly ttl?: Duration | undefined;
    readonly isEnsuredAbsent?: boolean | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolTxtRecord extends DnscontrolRecord {
    constructor(scope: Construct, id: string, props: DnscontrolTxtRecordProps);
    static isDnscontrolTxtRecord(x: unknown): x is DnscontrolTxtRecord;
    renderRecordConfig(): DnscontrolTxtRecordConfig;
}
