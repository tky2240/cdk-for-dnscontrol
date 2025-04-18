declare const recordTypeStrings: readonly ["A", "AAAA", "ALIAS", "CAA", "CNAME", "DHCID", "DNAME", "DNSKEY", "DS", "FRAME", "HTTPS", "LOC", "MX", "NAPTR", "NS", "PTR", "SOA", "SRV", "SSHFP", "SVCB", "TLSA", "TXT", "URL", "URL301", "AKAMAICDN", "R53_ALIAS", "AZURE_ALIAS", "CLOUDNS_WR", "CF_REDIRECT", "CF_TEMP_REDIRECT", "CF_WORKER_ROUTE", "PORKBUN_URLFWD", "BUNNY_DNS_RDR"];
export type DnscontrolRecordType = (typeof recordTypeStrings)[number];
export {};
