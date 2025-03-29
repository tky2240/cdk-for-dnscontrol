import { Construct } from "constructs";
import { DnscontrolUrl301RecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolUrl301RecordProps {
    readonly label: string;
    readonly target: string;
    readonly ttl?: Duration | undefined;
}
export declare class DnscontrolUrl301Record extends DnscontrolRecord {
    constructor(scope: Construct, id: string, props: DnscontrolUrl301RecordProps);
    static isDnscontrolUrl301Record(x: unknown): x is DnscontrolUrl301Record;
    renderRecordConfig(): DnscontrolUrl301RecordConfig;
}
