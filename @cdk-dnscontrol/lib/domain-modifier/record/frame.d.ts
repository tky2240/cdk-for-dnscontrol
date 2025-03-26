import { Construct } from "constructs";
import { DnscontrolFrameRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolFrameRecordProps {
    readonly label: string;
    readonly target: string;
    readonly ttl?: Duration | undefined;
}
export declare class DnscontrolFrameRecord extends DnscontrolRecord {
    constructor(scope: Construct, id: string, props: DnscontrolFrameRecordProps);
    static isDnscontrolFrameRecord(x: unknown): x is DnscontrolFrameRecord;
    getRecordConfig(): DnscontrolFrameRecordConfig;
}
