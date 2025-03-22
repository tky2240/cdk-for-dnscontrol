import { Construct } from "constructs";

export interface DnscontrolRegistrarProps {
  readonly registrarName: string;
  readonly registrarType?: string;
  readonly registrarMetadata?: Record<string, string>;
}

const DNS_CONTROL_REGISTRAR_SYMBOL = Symbol.for("DnscontrolRegistrar");

export class DnscontrolRegistrar extends Construct {
  public readonly registrarName: string;
  public readonly registrarType: string;
  public readonly registrarMetadata: Record<string, string> | undefined;
  constructor(scope: Construct, id: string, props: DnscontrolRegistrarProps) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_REGISTRAR_SYMBOL, { value: true });
    this.registrarName = props.registrarName;
    this.registrarType =
      props.registrarType ?? "-";
    this.registrarMetadata = props?.registrarMetadata;
  }
  public static isDnscontrolRegistrar(x: unknown): x is DnscontrolRegistrar {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_REGISTRAR_SYMBOL in x
    );
  }
}
