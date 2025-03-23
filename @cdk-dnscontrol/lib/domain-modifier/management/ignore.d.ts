import { Construct } from "constructs";
import { DnscontrolUnmanagedConfig } from "../../types/dnscontrol-unmanaged-config";
import { DnscontrolDomainModifier } from "../dnscontrol-domain-modifier";
export interface DnscontrolIgnoreProps {
  readonly labelPattern: string;
  readonly typePattern?: string;
  readonly targetPattern?: string;
}
export declare class DnscontrolIgnore extends DnscontrolDomainModifier {
  readonly labelPattern: string;
  readonly typePattern?: string | undefined;
  readonly targetPattern?: string | undefined;
  constructor(scope: Construct, id: string, props: DnscontrolIgnoreProps);
  static isDnscontrolIgnore(x: unknown): x is DnscontrolIgnore;
  getUnmanagedConfig(): DnscontrolUnmanagedConfig;
}
