import { Construct } from "constructs";
import { DnscontrolTlsaRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolTlsaRecordProps {
    readonly label: string;
    readonly target: string;
    readonly usage: number;
    readonly selector: number;
    readonly matchingType: number;
    readonly ttl?: Duration | undefined;
}
export declare class DnscontrolTlsaRecord extends DnscontrolRecord {
    readonly usage: number;
    readonly selector: number;
    readonly matchingType: number;
    constructor(scope: Construct, id: string, props: DnscontrolTlsaRecordProps);
    static isDnscontrolTlsaRecord(x: unknown): x is DnscontrolTlsaRecord;
    renderRecordConfig(): DnscontrolTlsaRecordConfig;
}
