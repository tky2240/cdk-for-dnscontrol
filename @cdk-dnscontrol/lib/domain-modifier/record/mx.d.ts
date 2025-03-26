import { Construct } from "constructs";
import { DnscontrolMxRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { MxPreference } from "../../types/mx-preference";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolMxRecordProps {
    readonly label: string;
    readonly mxPreference: MxPreference;
    readonly target: string;
    readonly ttl?: Duration | undefined;
}
export declare class DnscontrolMxRecord extends DnscontrolRecord {
    readonly mxPreference: MxPreference;
    constructor(scope: Construct, id: string, props: DnscontrolMxRecordProps);
    static isDnscontrolMxRecord(x: unknown): x is DnscontrolMxRecord;
    getRecordConfig(): DnscontrolMxRecordConfig;
}
