import { Construct } from "constructs";
import { DnscontrolElementType } from "./types/dnscontrol-element-types";
export interface DnscontrolElementMetadata {}
export declare class DnscontrolElement extends Construct {
  readonly elementType: DnscontrolElementType;
  constructor(scope: Construct, id: string, elementType: DnscontrolElementType);
}
