const rawRecordTypeStrings = [
  "CLOUDFLAREAPI_SINGLE_REDIRECT",
] as const;

export type DnscontrolRawRecordType = (typeof rawRecordTypeStrings)[number];
