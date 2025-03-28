export type DnscontrolRawRecordConfigBase = {
    type: string;
    args?: any[] | undefined;
    ttl?: number | undefined;
    metas?: Record<string, any> | undefined;
};
export type DnscontrolCfSingleRedirectRawRecordConfig = DnscontrolRawRecordConfigBase;
export type DnscontrolRawRecordConfig = DnscontrolCfSingleRedirectRawRecordConfig;
