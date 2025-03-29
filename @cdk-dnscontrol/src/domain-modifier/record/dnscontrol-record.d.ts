import { Construct } from "constructs";
import { DnscontrolRecordConfig } from "../../types/dnscontrol-record-config";
import { DnscontrolRecordType } from "../../types/dnscontrol-record-types";
import { Duration } from "../../types/duration";
import { DnscontrolDomainModifier } from "../dnscontrol-domain-modifier";
export interface DnscontrolRecordProps {
    recordType: DnscontrolRecordType;
    label: string;
    ttl?: Duration | undefined;
    target: string;
}
export declare abstract class DnscontrolRecord extends DnscontrolDomainModifier {
    readonly recordType: DnscontrolRecordType;
    readonly label: string;
    readonly name: string;
    readonly ttl?: Duration | undefined;
    readonly target: string;
    constructor(scope: Construct, id: string, props: DnscontrolRecordProps);
    static isDnscontrolRecord(x: unknown): x is DnscontrolRecord;
    abstract renderRecordConfig(): DnscontrolRecordConfig;
}
