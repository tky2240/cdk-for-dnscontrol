import { Construct } from "constructs";
import { DnscontrolRawRecordConfig } from "../../types/dnscontrol-raw-record-config";
import { DnscontrolRawRecordType } from "../../types/dnscontrol-raw-record-types";
import { Duration } from "../../types/duration";
import { DnscontrolDomainModifier } from "../dnscontrol-domain-modifier";
export interface DnscontrolRawRecordProps {
    rawRecordType: DnscontrolRawRecordType;
    ttl?: Duration | undefined;
    metas?: Record<string, string | number> | undefined;
}
export declare abstract class DnscontrolRawRecord extends DnscontrolDomainModifier {
    readonly rawRecordType: DnscontrolRawRecordType;
    readonly ttl?: Duration | undefined;
    readonly metas?: Record<string, string | number> | undefined;
    constructor(scope: Construct, id: string, props: DnscontrolRawRecordProps);
    static isDnscontrolRawRecord(x: unknown): x is DnscontrolRawRecord;
    abstract renderRawRecordConfig(): DnscontrolRawRecordConfig;
}
