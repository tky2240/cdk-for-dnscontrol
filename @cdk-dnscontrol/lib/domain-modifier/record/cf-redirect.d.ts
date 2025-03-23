import { Construct } from "constructs";
import { DnscontrolCfRedirectRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolCfRedirectRecordProps {
  readonly source: string;
  readonly destination: string;
  readonly ttl?: Duration;
}
export declare class DnscontrolCfRedirectRecord extends DnscontrolRecord {
  readonly source: string;
  readonly destination: string;
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolCfRedirectRecordProps,
  );
  static isDnscontrolCfRedirectRecord(
    x: unknown,
  ): x is DnscontrolCfRedirectRecord;
  getRecordConfig(): DnscontrolCfRedirectRecordConfig;
}
