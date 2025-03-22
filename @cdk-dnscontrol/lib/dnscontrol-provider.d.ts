import { Construct } from "constructs";
export interface DnscontrolProviderProps {
    readonly providerName: string;
    readonly providerType?: string;
    readonly providerMetadata?: Record<string, string>;
}
export declare class DnscontrolProvider extends Construct {
    readonly providerName: string;
    readonly providerType: string;
    readonly providerMetadata?: Record<string, string> | undefined;
    constructor(scope: Construct, id: string, props: DnscontrolProviderProps);
    static isDnscontrolProvider(x: unknown): x is DnscontrolProvider;
}
