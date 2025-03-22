import { Construct } from "constructs";
export interface DnscontrolDomainProviderProps {
    readonly domainProviderName: string;
    readonly nameserverCount?: number;
}
export declare class DnscontrolDomainProvider extends Construct {
    readonly domainProviderName: string;
    readonly nameserverCount: number;
    constructor(scope: Construct, id: string, props: DnscontrolDomainProviderProps);
    static isDnscontrolDomainProvider(x: unknown): x is DnscontrolDomainProvider;
}
