import { Construct } from "constructs";
import { DnscontrolCfTmpRedirectRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolCfTmpRedirectRecordProps {
    readonly source: string;
    readonly destination: string;
    readonly ttl?: Duration | undefined;
}
export declare class DnscontrolCfTmpRedirectRecord extends DnscontrolRecord {
    readonly source: string;
    readonly destination: string;
    constructor(scope: Construct, id: string, props: DnscontrolCfTmpRedirectRecordProps);
    static isDnscontrolCfTmpRedirectRecord(x: unknown): x is DnscontrolCfTmpRedirectRecord;
    renderRecordConfig(): DnscontrolCfTmpRedirectRecordConfig;
}
