import { Construct } from "constructs";
import { DnscontrolAzureAliasRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
declare const azureAliasTypeString: readonly ["A", "AAAA", "CNAME"];
export type AzureAliasType = (typeof azureAliasTypeString)[number];
export interface DnscontrolAzureAliasRecordProps {
    readonly label: string;
    readonly target: string;
    readonly azureAliasType: AzureAliasType;
    readonly ttl?: Duration | undefined;
}
export declare class DnscontrolAzureAliasRecord extends DnscontrolRecord {
    readonly azureAliasType: AzureAliasType;
    constructor(scope: Construct, id: string, props: DnscontrolAzureAliasRecordProps);
    static isDnscontrolAzureAliasRecord(x: unknown): x is DnscontrolAzureAliasRecord;
    renderRecordConfig(): DnscontrolAzureAliasRecordConfig;
}
export {};
