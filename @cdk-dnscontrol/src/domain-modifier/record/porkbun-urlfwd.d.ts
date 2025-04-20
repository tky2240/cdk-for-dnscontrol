import { Construct } from "constructs";
import { DnscontrolPorkbunUrlfwdRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolPorkbunUrlfwdRecordProps {
    readonly label: string;
    readonly target: string;
    readonly ttl?: Duration | undefined;
    readonly isEnsuredAbsent?: boolean | undefined;
    readonly meta?: Record<string, string> | undefined;
}
export declare class DnscontrolPorkbunUrlfwdRecord extends DnscontrolRecord {
    constructor(scope: Construct, id: string, props: DnscontrolPorkbunUrlfwdRecordProps);
    static isDnscontrolPorkbunUrlfwdRecord(x: unknown): x is DnscontrolPorkbunUrlfwdRecord;
    renderRecordConfig(): DnscontrolPorkbunUrlfwdRecordConfig;
}
