export interface DnscontrolRawRecordConfig {
    readonly recordType: string;
    readonly args?: any[] | undefined;
    readonly ttl?: number | undefined;
    readonly metas?: Record<string, any> | undefined;
}
export interface DnscontrolCfSingleRedirectRawRecordConfig extends DnscontrolRawRecordConfig {
}
