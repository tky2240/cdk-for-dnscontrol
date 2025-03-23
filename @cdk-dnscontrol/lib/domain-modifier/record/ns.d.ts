import { Construct } from "constructs";
import { DnscontrolNsRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolNsRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration;
}
export declare class DnscontrolNsRecord extends DnscontrolRecord {
  constructor(scope: Construct, id: string, props: DnscontrolNsRecordProps);
  static isDnscontrolNsRecord(x: unknown): x is DnscontrolNsRecord;
  getRecordConfig(): DnscontrolNsRecordConfig;
}
