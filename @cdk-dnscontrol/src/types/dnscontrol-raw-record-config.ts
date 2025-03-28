export type DnscontrolRawRecordConfigBase = {
  type: string;
  // eslint-disable-next-line
  args?: any[] | undefined;
  ttl?: number | undefined;
  // eslint-disable-next-line
  metas?: Record<string, any> | undefined;
};

export type DnscontrolCfSingleRedirectRawRecordConfig =
  DnscontrolRawRecordConfigBase;

export type DnscontrolRawRecordConfig =
  DnscontrolCfSingleRedirectRawRecordConfig;
