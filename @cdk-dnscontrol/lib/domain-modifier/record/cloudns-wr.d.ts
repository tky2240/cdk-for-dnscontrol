import { Construct } from "constructs";
import { DnscontrolCloudnsWrRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolCloudnsWrRecordProps {
  readonly label: string;
  readonly target: string;
  readonly ttl?: Duration;
}
export declare class DnscontrolCloudnsWrRecord extends DnscontrolRecord {
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolCloudnsWrRecordProps,
  );
  static isDnscontrolCloudnsWrRecord(
    x: unknown,
  ): x is DnscontrolCloudnsWrRecord;
  getRecordConfig(): DnscontrolCloudnsWrRecordConfig;
}
