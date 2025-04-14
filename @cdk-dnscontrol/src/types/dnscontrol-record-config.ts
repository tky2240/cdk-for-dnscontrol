import { DnscontrolCloudflareSingleRedirectConfig } from "./dnscontrol-cloudflare-single-redirect-config";

export interface DnscontrolRecordConfig {
  readonly recordType: string;
  readonly name: string;
  readonly subdomain?: string | undefined;
  readonly target: string;
  readonly ttl?: number | undefined;
  readonly meta?: Record<string, string> | undefined;
}

export interface DnscontrolARecordConfig extends DnscontrolRecordConfig {}

export interface DnscontrolAAAARecordConfig extends DnscontrolRecordConfig {}

export interface DnscontrolAliasRecordConfig extends DnscontrolRecordConfig {}

export interface DnscontrolCaaRecordConfig extends DnscontrolRecordConfig {
  readonly caaTag: string;
  readonly caaFlag?: number | undefined;
}

export interface DnscontrolCnameRecordConfig extends DnscontrolRecordConfig {}

export interface DnscontrolDhcidRecordConfig extends DnscontrolRecordConfig {}

export interface DnscontrolDnameRecordConfig extends DnscontrolRecordConfig {}

export interface DnscontrolDnskeyRecordConfig extends DnscontrolRecordConfig {
  readonly dnskeyFlags: number;
  readonly dnskeyProtocol: number;
  readonly dnskeyAlgorithm: number;
  readonly dnskeyPublicKey: string;
}

export interface DnscontrolDsRecordConfig extends DnscontrolRecordConfig {
  readonly dsKeyTag: number;
  readonly dsAlgorithm: number;
  readonly dsDigestType: number;
  readonly dsDigest: string;
}

export interface DnscontrolFrameRecordConfig extends DnscontrolRecordConfig {}

export interface DnscontrolHttpsRecordConfig extends DnscontrolRecordConfig {
  readonly svcPriority: number;
  readonly svcParams: string;
}

export interface DnscontrolLocRecordConfig extends DnscontrolRecordConfig {
  readonly locVersion?: number | undefined;
  readonly locSize?: number | undefined;
  readonly locHorizPre?: number | undefined;
  readonly locVertPre?: number | undefined;
  readonly locLatitude?: number | undefined;
  readonly locLongitude?: number | undefined;
  readonly locAltitude?: number | undefined;
}

export interface DnscontrolMxRecordConfig extends DnscontrolRecordConfig {
  readonly mxPreference?: number | undefined;
}

export interface DnscontrolNaptrRecordConfig extends DnscontrolRecordConfig {
  readonly naptrOrder: number;
  readonly naptrPreference: number;
  readonly naptrFlags: string;
  readonly naptrService: string;
  readonly naptrRegexp: string;
}

export interface DnscontrolNsRecordConfig extends DnscontrolRecordConfig {}

export interface DnscontrolPtrRecordConfig extends DnscontrolRecordConfig {}

export interface DnscontrolSoaRecordConfig extends DnscontrolRecordConfig {
  readonly soaMbox: string;
  readonly soaSerial?: number;
  readonly soaRefresh: number;
  readonly soaRetry: number;
  readonly soaExpire: number;
  readonly soaMinTtl: number;
}

export interface DnscontrolSrvRecordConfig extends DnscontrolRecordConfig {
  readonly srvPriority: number;
  readonly srvWeight: number;
  readonly srvPort: number;
}

export interface DnscontrolSshfpRecordConfig extends DnscontrolRecordConfig {
  readonly sshfpAlgorithm: number;
  readonly sshfpFingerprint: number;
}

export interface DnscontrolSvcbRecordConfig extends DnscontrolRecordConfig {
  readonly svcPriority: number;
  readonly svcParams: string;
}

export interface DnscontrolTlsaRecordConfig extends DnscontrolRecordConfig {
  readonly tlsaUsage: number;
  readonly tlsaSelector: number;
  readonly tlsaMatchingType: number;
}

export interface DnscontrolTxtRecordConfig extends DnscontrolRecordConfig {}

export interface DnscontrolUrlRecordConfig extends DnscontrolRecordConfig {}

export interface DnscontrolUrl301RecordConfig extends DnscontrolRecordConfig {}

export interface DnscontrolAkamaiCdnRecordConfig
  extends DnscontrolRecordConfig {}

interface R53AliasConfig {
  readonly type: string;
  readonly evaluateTargetHealth: string;
  readonly zoneId?: string | undefined;
}

export interface DnscontrolR53AliasRecordConfig extends DnscontrolRecordConfig {
  readonly r53Alias: R53AliasConfig;
}

interface AzureAliasConfig {
  readonly type: string;
}

export interface DnscontrolAzureAliasRecordConfig
  extends DnscontrolRecordConfig {
  readonly azureAlias: AzureAliasConfig;
}

export interface DnscontrolCfRedirectRecordConfig
  extends DnscontrolRecordConfig {}

export interface DnscontrolCfTempRedirectRecordConfig
  extends DnscontrolRecordConfig {}

export interface DnscontrolCfWorkerRouteRecordConfig
  extends DnscontrolRecordConfig {}

export interface DnscontrolCloudnsWrRecordConfig
  extends DnscontrolRecordConfig {}

export interface DnscontrolPorkbunUrlfwdRecordConfig
  extends DnscontrolRecordConfig {}

export interface DnscontrolBunnyDnsRdrRecordConfig
  extends DnscontrolRecordConfig {}

export interface DnscontrolCloudflareRecordConfig
  extends DnscontrolRecordConfig {
  readonly cloudflareApiRedirect?:
    | DnscontrolCloudflareSingleRedirectConfig
    | undefined;
}
