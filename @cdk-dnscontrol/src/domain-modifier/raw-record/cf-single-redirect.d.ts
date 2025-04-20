import { Construct } from "constructs";
import { DnscontrolCfSingleRedirectRawRecordConfig } from "../../types/dnscontrol-raw-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRawRecord } from "../raw-record/dnscontrol-raw-record";
declare const redirectCodes: readonly [301, 302, 303, 307, 308];
export type RedirectCode = (typeof redirectCodes)[number];
export interface DnscontrolCfSingleRedirectRecordProps {
    readonly name: string;
    readonly code: RedirectCode;
    readonly when: string;
    readonly then: string;
    readonly ttl?: Duration | undefined;
    readonly metas?: Record<string, string | number> | undefined;
}
export declare class DnscontrolCfSingleRedirectRawRecord extends DnscontrolRawRecord {
    readonly name: string;
    readonly code: RedirectCode;
    readonly when: string;
    readonly then: string;
    constructor(scope: Construct, id: string, props: DnscontrolCfSingleRedirectRecordProps);
    static isDnscontrolCfSingleRedirectRecord(x: unknown): x is DnscontrolCfSingleRedirectRawRecord;
    renderRawRecordConfig(): DnscontrolCfSingleRedirectRawRecordConfig;
}
export {};
