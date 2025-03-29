import { Construct } from "constructs";
import { DnscontrolLocRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolLocRecordProps {
    readonly label: string;
    readonly target: string;
    readonly ttl?: Duration | undefined;
}
export declare class DnscontrolLocRecord extends DnscontrolRecord {
    constructor(scope: Construct, id: string, props: DnscontrolLocRecordProps);
    static isDnscontrolLocRecord(x: unknown): x is DnscontrolLocRecord;
    renderRecordConfig(): DnscontrolLocRecordConfig;
}
