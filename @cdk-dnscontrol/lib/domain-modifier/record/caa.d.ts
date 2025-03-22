import { Construct } from "constructs";
import { DnscontrolCaaRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
declare const caaTagStrings: readonly ["issue", "issuewild", "iodef"];
export type CaaTag = (typeof caaTagStrings)[number];
export interface DnscontrolCaaRecordProps {
    readonly label: string;
    readonly target: string;
    readonly caaTag: CaaTag;
    readonly isCaaCritical: boolean;
    readonly ttl?: Duration;
}
export declare class DnscontrolCaaRecord extends DnscontrolRecord {
    readonly caaTag: CaaTag;
    readonly isCaaCritical: boolean;
    constructor(scope: Construct, id: string, props: DnscontrolCaaRecordProps);
    static isDnscontrolARecord(x: unknown): x is DnscontrolCaaRecord;
    getRecordConfig(): DnscontrolCaaRecordConfig;
}
export {};
