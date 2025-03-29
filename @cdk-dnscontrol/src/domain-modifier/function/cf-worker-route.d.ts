import { Construct } from "constructs";
import { DnscontrolCfWorkerRouteRecord } from "../record/cf-worker-route";
export declare function CF_WORKER_ROUTE(scope: Construct, pattern: string, script: string, ttl?: number | string): DnscontrolCfWorkerRouteRecord;
