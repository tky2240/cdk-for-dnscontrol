import { Construct } from "constructs";
import { DnscontrolRecordConfig } from "../../types/dnscontrol-record-config";
import { DnscontrolRecordType } from "../../types/dnscontrol-record-types";
import { Duration } from "../../types/duration";
import { DnscontrolDomainModifier } from "../dnscontrol-domain-modifier";
export interface DnscontrolRecordProps {
    recordType: DnscontrolRecordType;
    label: string;
    subDomain?: string | undefined;
    ttl?: Duration | undefined;
    target: string;
    isEnsuredAbsent?: boolean | undefined;
    meta?: Record<string, string> | undefined;
}
export declare abstract class DnscontrolRecord extends DnscontrolDomainModifier {
    readonly recordType: DnscontrolRecordType;
    readonly label: string;
    readonly subDomain?: string | undefined;
    readonly name: string;
    readonly ttl?: Duration | undefined;
    readonly target: string;
    readonly isEnsuredAbsent?: boolean | undefined;
    readonly meta?: Record<string, string> | undefined;
    constructor(scope: Construct, id: string, props: DnscontrolRecordProps);
    static isDnscontrolRecord(x: unknown): x is DnscontrolRecord;
    abstract renderRecordConfig(): DnscontrolRecordConfig;
}
