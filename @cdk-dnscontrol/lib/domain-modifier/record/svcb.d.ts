import { Construct } from "constructs";
import { DnscontrolSvcbRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolSvcbRecordProps {
    readonly label: string;
    readonly target: string;
    readonly priority: number;
    readonly params: string;
    readonly ttl?: Duration | undefined;
}
export declare class DnscontrolSvcbRecord extends DnscontrolRecord {
    readonly priority: number;
    readonly params: string;
    constructor(scope: Construct, id: string, props: DnscontrolSvcbRecordProps);
    static isDnscontrolSvcbRecord(x: unknown): x is DnscontrolSvcbRecord;
    getRecordConfig(): DnscontrolSvcbRecordConfig;
}
