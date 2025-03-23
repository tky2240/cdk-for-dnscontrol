import { Construct } from "constructs";
import { DnscontrolAkamaiCdnRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolAkamaiCdnRecordProps {
    readonly label: string;
    readonly target: string;
    readonly ttl?: Duration;
}
export declare class DnscontrolAkamaiCdnRecord extends DnscontrolRecord {
    constructor(scope: Construct, id: string, props: DnscontrolAkamaiCdnRecordProps);
    static isDnscontrolAkamaiCdnRecord(x: unknown): x is DnscontrolAkamaiCdnRecord;
    getRecordConfig(): DnscontrolAkamaiCdnRecordConfig;
}
