import { Construct } from "constructs";

export interface DnscontrolProviderProps {
  readonly providerName: string;
  readonly providerType?: string;
  readonly providerMetadata?: Record<string, string>;
}

const DNS_CONTROL_PROVIDER_SYMBOL = Symbol.for("DnscontrolProvider");

export class DnscontrolProvider extends Construct {
  public readonly providerName: string;
  public readonly providerType: string;
  public readonly providerMetadata?: Record<string, string> | undefined;
  constructor(scope: Construct, id: string, props: DnscontrolProviderProps) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_PROVIDER_SYMBOL, { value: true });
    this.providerName = props.providerName;
    this.providerType = props.providerType ?? "-";
    this.providerMetadata = props.providerMetadata;
  }
  public static isDnscontrolProvider(x: unknown): x is DnscontrolProvider {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_PROVIDER_SYMBOL in x
    );
  }
}
