import { Construct } from "constructs";
export interface DnscontrolRegistrarProps {
    readonly registrarName: string;
    readonly registrarType?: string;
    readonly registrarMetadata?: Record<string, string>;
}
export declare class DnscontrolRegistrar extends Construct {
    readonly registrarName: string;
    readonly registrarType: string;
    readonly registrarMetadata: Record<string, string> | undefined;
    constructor(scope: Construct, id: string, props: DnscontrolRegistrarProps);
    static isDnscontrolRegistrar(x: unknown): x is DnscontrolRegistrar;
}
