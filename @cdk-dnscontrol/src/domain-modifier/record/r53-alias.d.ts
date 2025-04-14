import { Construct } from "constructs";
import { DnscontrolR53AliasRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
declare const r53AliasTypeString: readonly ["A", "AAAA", "CNAME", "CAA", "MX", "TXT", "PTR", "SPF", "SRV", "NAPTR"];
export type R53AliasType = (typeof r53AliasTypeString)[number];
export interface DnscontrolR53AliasRecordProps {
    readonly label: string;
    readonly target: string;
    readonly r53AliasType: R53AliasType;
    readonly zoneId?: string | undefined;
    readonly isEnabledEvaluateTargetHealth?: boolean | undefined;
    readonly ttl?: Duration | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolR53AliasRecord extends DnscontrolRecord {
    readonly r53AliasType: R53AliasType;
    readonly zoneId?: string | undefined;
    readonly isEnabledEvaluateTargetHealth?: boolean | undefined;
    constructor(scope: Construct, id: string, props: DnscontrolR53AliasRecordProps);
    static isDnscontrolR53AliasRecord(x: unknown): x is DnscontrolR53AliasRecord;
    renderRecordConfig(): DnscontrolR53AliasRecordConfig;
}
export {};
