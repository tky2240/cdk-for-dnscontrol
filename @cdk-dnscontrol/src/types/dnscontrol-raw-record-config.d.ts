export interface DnscontrolRawRecordConfig {
    readonly recordType: string;
    readonly args?: any[] | undefined;
    readonly ttl?: number | undefined;
    readonly metas?: Record<string, string | number>[] | undefined;
}
export interface DnscontrolCfSingleRedirectRawRecordConfig extends DnscontrolRawRecordConfig {
}
