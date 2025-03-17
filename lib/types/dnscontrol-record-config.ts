import { DnscontrolCloudflareSingleRedirectConfig } from "./dnscontrol-cloudflare-single-redirect-config";

export type DnscontrolRecordConfigBase = {
  type: string;
  name: string;
  subdomain?: string | undefined;
  target: string;
  ttl?: number | undefined;
  meta?: Record<string, string> | undefined;
}

export type DnscontrolARecordConfig = DnscontrolRecordConfigBase;

export type DnscontrolAAAARecordConfig = DnscontrolRecordConfigBase;

export type DnscontrolAliasRecordConfig = DnscontrolRecordConfigBase;

export type DnscontrolCaaRecordConfig = DnscontrolRecordConfigBase & {
  caatag: string;
  caaflag: number;
}

export type DnscontrolCnameRecordConfig = DnscontrolRecordConfigBase;

export type DnscontrolDhcidRecordConfig = DnscontrolRecordConfigBase;

export type DnscontrolDnameRecordConfig = DnscontrolRecordConfigBase;

export type DnscontrolDnskeyRecordConfig = DnscontrolRecordConfigBase & {
  dnskeyflags: number;
  dnskeyprotocol: number;
  dnskeyalgorithm: number;
  dnskeypublickey: string;
}

export type DnscontrolDsRecordConfig = DnscontrolRecordConfigBase & {
  dskeytag: number;
  dsalgorithm: number;
  dsdigesttype: number;
  dsdigest: string;
}

export type DnscontrolFrameRecordConfig = DnscontrolRecordConfigBase;

export type DnscontrolHttpsRecordConfig = DnscontrolRecordConfigBase & {
  svcpriority: number;
  svcparams: string;
};

export type DnscontrolLocRecordConfig = DnscontrolRecordConfigBase & {
  locversion?: number | undefined;
  locsize?: number | undefined;
  lochorizpre?: number | undefined;
  locvertpre?: number | undefined;
  loclatitude?: number | undefined;
  loclongitude?: number | undefined;
  localtitude?: number | undefined;
}

export type DnscontrolMxRecordConfig = DnscontrolRecordConfigBase & {
  mxpreference?: number | undefined;
}

export type DnscontrolNaptrRecordConfig = DnscontrolRecordConfigBase & {
  naptrorder: number;
  naptrpreference: number;
  naptrflags: string;
  naptrservice: string;
  naptrregexp: string;
}

export type DnscontrolNsRecordConfig = DnscontrolRecordConfigBase;

export type DnscontrolPtrRecordConfig = DnscontrolRecordConfigBase;

export type DnscontrolSoaRecordConfig = DnscontrolRecordConfigBase & {
  soambox: string;
  soaserial?: number;
  soarefresh: number;
  soaretry: number;
  soaexpire: number;
  soaminttl: number;
}

export type DnscontrolSrvRecordConfig = DnscontrolRecordConfigBase & {
  srvpriority: number;
  srvweight: number;
  srvport: number;
}

export type DnscontrolSshfpRecordConfig = DnscontrolRecordConfigBase & {
  sshfpalgorithm: number;
  sshfpfingerprint: number;
}

export type DnscontrolSvcbRecordConfig = DnscontrolRecordConfigBase & {
  svcpriority: number;
  svcparams: string;
}

export type DnscontrolTlsaRecordConfig = DnscontrolRecordConfigBase & {
  tlsausage: number;
  tlsselector: number;
  tlsmatchingtype: number;
}

export type DnscontrolTxtRecordConfig = DnscontrolRecordConfigBase;

export type DnscontrolUrlRecordConfig = DnscontrolRecordConfigBase;

export type DnscontrolUrl301RecordConfig = DnscontrolRecordConfigBase;

export type DnscontrolAkamaiCdnRecordConfig = DnscontrolRecordConfigBase;

type R53AliasConfig = {
  type: string;
  evaluate_target_health: string;
  zone_id?: string | undefined;
}

export type DnscontrolR53AliasRecordConfig = DnscontrolRecordConfigBase & {
  r53_alias: R53AliasConfig;
}

type AzureAliasConfig = {
  type: string;
}

export type DnscontrolAzureAliasRecordConfig = DnscontrolRecordConfigBase & {
  azure_alias: AzureAliasConfig;
}

export type DnscontrolCfSingleRedirectRecordConfig = DnscontrolRecordConfigBase & {
  cloudflareapi_redirect?: DnscontrolCloudflareSingleRedirectConfig | undefined;
}

export type DnscontrolCloudnsWrRecordConfig = DnscontrolRecordConfigBase;

export type DnscontrolCloudflareRecordConfig = DnscontrolRecordConfigBase & {
  cloudflareapi_redirect?: DnscontrolCloudflareSingleRedirectConfig | undefined;
}

export type DnscontrolRecordConfig = 
  DnscontrolARecordConfig |
  DnscontrolAAAARecordConfig |
  DnscontrolAliasRecordConfig |
  DnscontrolAzureAliasRecordConfig |
  DnscontrolCaaRecordConfig |
  DnscontrolCloudflareRecordConfig |
  DnscontrolCnameRecordConfig |
  DnscontrolDhcidRecordConfig |
  DnscontrolDnameRecordConfig |
  DnscontrolDnskeyRecordConfig |
  DnscontrolDsRecordConfig |
  DnscontrolFrameRecordConfig |
  DnscontrolHttpsRecordConfig |
  DnscontrolLocRecordConfig |
  DnscontrolMxRecordConfig |
  DnscontrolNaptrRecordConfig |
  DnscontrolNsRecordConfig |
  DnscontrolR53AliasRecordConfig |
  DnscontrolSoaRecordConfig |
  DnscontrolSrvRecordConfig |
  DnscontrolSshfpRecordConfig |
  DnscontrolSvcbRecordConfig |
  DnscontrolTlsaRecordConfig |
  DnscontrolTxtRecordConfig |
  DnscontrolUrlRecordConfig |
  DnscontrolUrl301RecordConfig |
  DnscontrolCloudnsWrRecordConfig