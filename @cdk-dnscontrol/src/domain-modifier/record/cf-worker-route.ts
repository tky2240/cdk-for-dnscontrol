import { Construct } from "constructs";
import { DnscontrolCfWorkerRouteRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_CF_WORKER_ROUTE_RECORD_SYMBOL = Symbol.for(
  "DnscontrolCfWorkerRouteRecord",
);

export interface DnscontrolCfWorkerRouteRecordProps {
  readonly pattern: string;
  readonly script: string;
  readonly ttl?: Duration | undefined;
}

export class DnscontrolCfWorkerRouteRecord extends DnscontrolRecord {
  readonly pattern: string;
  readonly script: string;
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolCfWorkerRouteRecordProps,
  ) {
    super(scope, id, {
      recordType: "CF_WORKER_ROUTE",
      label: "@",
      target: `${props.pattern},${props.script}`,
      ttl: props.ttl,
    });
    if (props.pattern.includes(",")) {
      throw new Error("pattern must include no commma");
    }
    if (props.script.includes(",")) {
      throw new Error("script must include no commma");
    }
    this.pattern = props.pattern;
    this.script = props.script;
  }
  public static isDnscontrolCfWorkerRouteRecord(
    x: unknown,
  ): x is DnscontrolCfWorkerRouteRecord {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_CF_WORKER_ROUTE_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolCfWorkerRouteRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      meta: {
        orig_custom_type: "CF_WORKER_ROUTE",
      },
    };
  }
}
