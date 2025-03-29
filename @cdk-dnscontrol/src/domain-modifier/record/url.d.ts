import { Construct } from "constructs";
import { DnscontrolUrlRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolUrlRecordProps {
    readonly label: string;
    readonly target: string;
    readonly ttl?: Duration | undefined;
}
export declare class DnscontrolUrlRecord extends DnscontrolRecord {
    constructor(scope: Construct, id: string, props: DnscontrolUrlRecordProps);
    static isDnscontrolUrlRecord(x: unknown): x is DnscontrolUrlRecord;
    renderRecordConfig(): DnscontrolUrlRecordConfig;
}
