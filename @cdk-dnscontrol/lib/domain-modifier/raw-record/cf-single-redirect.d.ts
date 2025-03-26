import { Construct } from "constructs";
import { DnscontrolCfSingleRedirectRawRecordConfig } from "../../types/dnscontrol-raw-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRawRecord } from "../raw-record/dnscontrol-raw-record";
type RedirectCode = 301 | 302;
export interface DnscontrolCfSingleRedirectRecordProps {
    readonly name: string;
    readonly code: RedirectCode;
    readonly when: string;
    readonly then: string;
    readonly ttl?: Duration;
}
export declare class DnscontrolCfSingleRedirectRawRecord extends DnscontrolRawRecord {
    readonly name: string;
    readonly code: RedirectCode;
    readonly when: string;
    readonly then: string;
    constructor(scope: Construct, id: string, props: DnscontrolCfSingleRedirectRecordProps);
    static isDnscontrolCfSingleRedirectRecord(x: unknown): x is DnscontrolCfSingleRedirectRawRecord;
    getRawRecordConfig(): DnscontrolCfSingleRedirectRawRecordConfig;
}
export {};
