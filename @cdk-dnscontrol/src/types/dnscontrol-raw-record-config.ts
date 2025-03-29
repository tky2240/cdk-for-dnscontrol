export interface DnscontrolRawRecordConfig {
  readonly type: string;
  // eslint-disable-next-line
  readonly args?: any[] | undefined;
  readonly ttl?: number | undefined;
  // eslint-disable-next-line
  readonly metas?: Record<string, any> | undefined;
};

export interface DnscontrolCfSingleRedirectRawRecordConfig extends DnscontrolRawRecordConfig {};
