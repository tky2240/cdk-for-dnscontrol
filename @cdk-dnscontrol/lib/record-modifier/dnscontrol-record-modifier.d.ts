import { Construct } from "constructs";
export declare abstract class DnscontrolRecordModifier extends Construct {
  constructor(scope: Construct, id: string);
  static isDnscontrolRecordModifier(x: unknown): x is DnscontrolRecordModifier;
}
