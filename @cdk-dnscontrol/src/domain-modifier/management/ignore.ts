import { Construct } from "constructs";
import { DnscontrolUnmanagedConfig } from "../../types/dnscontrol-unmanaged-config";
import { DnscontrolDomainModifier } from "../dnscontrol-domain-modifier";

const DNS_CONTROL_IGNORE_SYMBOL = Symbol.for("DnscontrolIgnore");

export interface DnscontrolIgnoreProps {
  readonly labelPattern: string;
  readonly typePattern?: string | undefined;
  readonly targetPattern?: string | undefined;
}

export class DnscontrolIgnore extends DnscontrolDomainModifier {
  public readonly labelPattern: string;
  public readonly typePattern?: string | undefined;
  public readonly targetPattern?: string | undefined;
  constructor(scope: Construct, id: string, props: DnscontrolIgnoreProps) {
    super(scope, id, {
      modiferType: "IGNORE",
    });
    Object.defineProperty(this, DNS_CONTROL_IGNORE_SYMBOL, { value: true });
    this.labelPattern = props.labelPattern;
    this.typePattern = props.typePattern;
    this.targetPattern = props.targetPattern;
  }
  public static isDnscontrolIgnore(x: unknown): x is DnscontrolIgnore {
    return x != null && typeof x === "object" && DNS_CONTROL_IGNORE_SYMBOL in x;
  }
  public renderUnmanagedConfig(): DnscontrolUnmanagedConfig {
    return {
      labelPattern: this.labelPattern,
      rTypePattern: this.typePattern,
      targetPattern: this.targetPattern,
    };
  }
}
