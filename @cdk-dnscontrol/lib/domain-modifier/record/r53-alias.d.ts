import { Construct } from "constructs";
import { DnscontrolR53AliasRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
declare const r53AliasTypeString: readonly ["A", "AAAA", "CNAME", "CAA", "MX", "TXT", "PTR", "SPF", "SRV", "NAPTR"];
type R53AliasType = (typeof r53AliasTypeString)[number];
export interface DnscontrolR53AliasRecordProps {
    readonly label: string;
    readonly target: string;
    readonly r53AliasType: R53AliasType;
    readonly zoneId?: string;
    readonly isEnabledEvaluateTargetHealth?: boolean;
    readonly ttl?: Duration;
}
export declare class DnscontrolR53AliasRecord extends DnscontrolRecord {
    readonly r53AliasType: R53AliasType;
    readonly zoneId?: string | undefined;
    readonly isEnabledEvaluateTargetHealth?: boolean | undefined;
    constructor(scope: Construct, id: string, props: DnscontrolR53AliasRecordProps);
    static isDnscontrolR53AliasRecord(x: unknown): x is DnscontrolR53AliasRecord;
    getRecordConfig(): DnscontrolR53AliasRecordConfig;
}
export {};
