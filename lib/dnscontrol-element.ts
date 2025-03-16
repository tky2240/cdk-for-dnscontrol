import { Construct } from "constructs";
import { DnscontrolElementType } from "./types/dnscontrol-element-types";

export interface DnscontrolElementMetadata {}

export class DnscontrolElement extends Construct {
  public readonly elementType: DnscontrolElementType;
  constructor(
    scope: Construct,
    id: string,
    elementType: DnscontrolElementType,
  ) {
    super(scope, id);
    this.elementType = elementType;
  }
}
