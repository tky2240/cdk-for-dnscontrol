export type DnscontrolRecordConfig = {
  type: string;
  name: string;
  target: string;
  ttl?: number | undefined;
  meta?: Record<string, string> | undefined;
  mxpreference?: number | undefined;
  srvpriority?: number | undefined;
  srvweight?: number | undefined;
  srvport?: number | undefined;
  caatag?: string | undefined;
  caaflag?: number | undefined;
  tlsausage?: number | undefined;
  tlsselector?: number | undefined;
  tlsmatchingtype?: number | undefined;
  txtstrings?: string[] | undefined;
  r53_alias?: Record<string, string> | undefined;
};
