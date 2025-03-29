import { Construct } from "constructs";
import { DnscontrolPtrRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolPtrRecordProps {
    readonly label: string;
    readonly target: string;
    readonly ttl?: Duration | undefined;
}
export declare class DnscontrolPtrRecord extends DnscontrolRecord {
    constructor(scope: Construct, id: string, props: DnscontrolPtrRecordProps);
    static isDnscontrolPtrRecord(x: unknown): x is DnscontrolPtrRecord;
    renderRecordConfig(): DnscontrolPtrRecordConfig;
}
