import { Construct } from "constructs";
export interface DnscontrolDomainModifierProps {
    readonly modiferType: string;
    readonly meta?: Record<string, string> | undefined;
}
export declare abstract class DnscontrolDomainModifier extends Construct {
    readonly modiferType: string;
    readonly meta?: Record<string, string> | undefined;
    constructor(scope: Construct, id: string, props: DnscontrolDomainModifierProps);
    static isDnscontrolDomainModifier(x: unknown): x is DnscontrolDomainModifier;
}
