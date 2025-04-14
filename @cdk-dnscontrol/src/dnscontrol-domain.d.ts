import { Construct } from "constructs";
import { DnscontrolDomainProviderProps } from "./dnscontrol-domain-provider";
import { DnscontrolRegistrar } from "./dnscontrol-registrar";
import { DnscontrolStack } from "./dnscontrol-stack";
import { DnscontrolDomainConfig } from "./types/dnscontrol-domain-config";
import { Duration } from "./types/duration";
export interface DnscontrolDomainProps {
    readonly domainName: string;
    readonly tag?: string;
    readonly registrar?: DnscontrolRegistrar | undefined;
    readonly domainProviderPropsList: DnscontrolDomainProviderProps[];
    readonly defaultTtl?: Duration;
    readonly isEnabledAutoDnssec?: boolean;
    readonly isDisabledIgnoreSafetyCheck?: boolean;
    readonly shouldKeepExistingRecord?: boolean;
    readonly parentNameservers?: string[];
    readonly parentNameserverTtl?: Duration;
}
export declare abstract class DnscontrolDomain extends Construct {
    readonly domainName: string;
    readonly tag?: string | undefined;
    readonly registrarName: string;
    readonly defaultTtl: Duration;
    readonly isEnabledAutoDnssec?: boolean | undefined;
    readonly isDisabledIgnoreSafetyCheck?: boolean | undefined;
    readonly shouldKeepExistingRecord?: boolean | undefined;
    readonly parentNameservers?: string[] | undefined;
    readonly parentNameserverTtl?: Duration | undefined;
    constructor(scope: DnscontrolStack, id: string, props: DnscontrolDomainProps);
    static isDnscontrolDomain(x: unknown): x is DnscontrolDomain;
    renderDomainConfig(): DnscontrolDomainConfig;
    private _renderDomainConfig;
}
