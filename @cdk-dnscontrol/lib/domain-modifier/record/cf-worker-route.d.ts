import { Construct } from "constructs";
import { DnscontrolCfWorkerRouteRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";
export interface DnscontrolCfWorkerRouteRecordProps {
    readonly pattern: string;
    readonly script: string;
    readonly ttl?: Duration | undefined;
}
export declare class DnscontrolCfWorkerRouteRecord extends DnscontrolRecord {
    readonly pattern: string;
    readonly script: string;
    constructor(scope: Construct, id: string, props: DnscontrolCfWorkerRouteRecordProps);
    static isDnscontrolCfWorkerRouteRecord(x: unknown): x is DnscontrolCfWorkerRouteRecord;
    getRecordConfig(): DnscontrolCfWorkerRouteRecordConfig;
}
