// eslint-disable-next-line
const rawRecordTypeStrings = ["CLOUDFLAREAPI_SINGLE_REDIRECT"] as const;

export type DnscontrolRawRecordType = (typeof rawRecordTypeStrings)[number];
