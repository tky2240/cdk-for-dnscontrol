import { Construct } from "constructs";
import { DnscontrolCfTempRedirectRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolCfTempRedirectRecordProps {
    readonly source: string;
    readonly destination: string;
    readonly ttl?: Duration | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolCfTempRedirectRecord extends DnscontrolRecord {
    readonly source: string;
    readonly destination: string;
    constructor(scope: Construct, id: string, props: DnscontrolCfTempRedirectRecordProps);
    static isDnscontrolCfTempRedirectRecord(x: unknown): x is DnscontrolCfTempRedirectRecord;
    renderRecordConfig(): DnscontrolCfTempRedirectRecordConfig;
}
