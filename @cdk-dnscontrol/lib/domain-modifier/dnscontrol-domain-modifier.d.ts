import { Construct } from "constructs";
export interface DnscontrolDomainModifierProps {
  type: string;
}
export declare abstract class DnscontrolDomainModifier extends Construct {
  readonly type: string;
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolDomainModifierProps,
  );
  static isDnscontrolDomainModifier(x: unknown): x is DnscontrolDomainModifier;
}
