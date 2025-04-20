import { Construct } from "constructs";
export interface DnscontrolDomainModifierProps {
    readonly modiferType: string;
}
export declare abstract class DnscontrolDomainModifier extends Construct {
    readonly modiferType: string;
    constructor(scope: Construct, id: string, props: DnscontrolDomainModifierProps);
    static isDnscontrolDomainModifier(x: unknown): x is DnscontrolDomainModifier;
}
