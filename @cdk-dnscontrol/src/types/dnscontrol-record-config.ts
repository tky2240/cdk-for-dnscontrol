import { DnscontrolCloudflareSingleRedirectConfig } from "./dnscontrol-cloudflare-single-redirect-config";

export interface DnscontrolRecordConfig {
  readonly type: string;
  readonly name: string;
  readonly subdomain?: string | undefined;
  readonly target: string;
  readonly ttl?: number | undefined;
  readonly meta: Record<string, string>;
};

export interface DnscontrolARecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolAAAARecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolAliasRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolCaaRecordConfig extends DnscontrolRecordConfig {
  caatag: string;
  caaflag: number;
};

export interface DnscontrolCnameRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolDhcidRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolDnameRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolDnskeyRecordConfig extends DnscontrolRecordConfig {
  dnskeyflags: number;
  dnskeyprotocol: number;
  dnskeyalgorithm: number;
  dnskeypublickey: string;
};

export interface DnscontrolDsRecordConfig extends DnscontrolRecordConfig {
  dskeytag: number;
  dsalgorithm: number;
  dsdigesttype: number;
  dsdigest: string;
};

export interface DnscontrolFrameRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolHttpsRecordConfig extends DnscontrolRecordConfig {
  svcpriority: number;
  svcparams: string;
};

export interface DnscontrolLocRecordConfig extends DnscontrolRecordConfig {
  locversion?: number | undefined;
  locsize?: number | undefined;
  lochorizpre?: number | undefined;
  locvertpre?: number | undefined;
  loclatitude?: number | undefined;
  loclongitude?: number | undefined;
  localtitude?: number | undefined;
};

export interface DnscontrolMxRecordConfig extends DnscontrolRecordConfig {
  mxpreference?: number | undefined;
};

export interface DnscontrolNaptrRecordConfig extends DnscontrolRecordConfig {
  naptrorder: number;
  naptrpreference: number;
  naptrflags: string;
  naptrservice: string;
  naptrregexp: string;
};

export interface DnscontrolNsRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolPtrRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolSoaRecordConfig extends DnscontrolRecordConfig {
  soambox: string;
  soaserial?: number;
  soarefresh: number;
  soaretry: number;
  soaexpire: number;
  soaminttl: number;
};

export interface DnscontrolSrvRecordConfig extends DnscontrolRecordConfig {
  srvpriority: number;
  srvweight: number;
  srvport: number;
};

export interface DnscontrolSshfpRecordConfig extends DnscontrolRecordConfig {
  sshfpalgorithm: number;
  sshfpfingerprint: number;
};

export interface DnscontrolSvcbRecordConfig extends DnscontrolRecordConfig {
  svcpriority: number;
  svcparams: string;
};

export interface DnscontrolTlsaRecordConfig extends DnscontrolRecordConfig {
  tlsausage: number;
  tlsselector: number;
  tlsmatchingtype: number;
};

export interface DnscontrolTxtRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolUrlRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolUrl301RecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolAkamaiCdnRecordConfig extends DnscontrolRecordConfig {};

interface R53AliasConfig {
  type: string;
  evaluate_target_health: string;
  zone_id?: string | undefined;
};

export interface DnscontrolR53AliasRecordConfig extends DnscontrolRecordConfig {
  r53_alias: R53AliasConfig;
};

interface AzureAliasConfig {
  type: string;
};

export interface DnscontrolAzureAliasRecordConfig extends DnscontrolRecordConfig {
  azure_alias: AzureAliasConfig;
};

export interface DnscontrolCfRedirectRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolCfTmpRedirectRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolCfWorkerRouteRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolCloudnsWrRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolPorkbunUrlfwdRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolBunnyDnsRdrRecordConfig extends DnscontrolRecordConfig {};

export interface DnscontrolCloudflareRecordConfig extends DnscontrolRecordConfig {
  cloudflareapi_redirect?: DnscontrolCloudflareSingleRedirectConfig | undefined;
};
