import { Construct } from "constructs";
import { DnscontrolBunnyDnsRdrRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolBunnyDnsRdrRecordProps {
    readonly label: string;
    readonly target: string;
    readonly ttl?: Duration | undefined;
}
export declare class DnscontrolBunnyDnsRdrRecord extends DnscontrolRecord {
    constructor(scope: Construct, id: string, props: DnscontrolBunnyDnsRdrRecordProps);
    static isDnscontrolBunnyDnsRdrRecord(x: unknown): x is DnscontrolBunnyDnsRdrRecord;
    getRecordConfig(): DnscontrolBunnyDnsRdrRecordConfig;
}
