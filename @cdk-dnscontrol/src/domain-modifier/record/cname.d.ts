import { Construct } from "constructs";
import { DnscontrolCnameRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolCnameRecordProps {
    readonly label: string;
    readonly target: string;
    readonly ttl?: Duration | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolCnameRecord extends DnscontrolRecord {
    constructor(scope: Construct, id: string, props: DnscontrolCnameRecordProps);
    static isDnscontrolCnameRecord(x: unknown): x is DnscontrolCnameRecord;
    renderRecordConfig(): DnscontrolCnameRecordConfig;
}
