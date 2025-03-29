import { Construct, IConstruct } from "constructs";
import {
  DnscontrolDomainProvider,
  DnscontrolDomainProviderProps,
} from "./dnscontrol-domain-provider";
import { DnscontrolRegistrar } from "./dnscontrol-registrar";
import { DnscontrolStack } from "./dnscontrol-stack";
import { DnscontrolIgnore } from "./domain-modifier/management/ignore";
import { DnscontrolRawRecord } from "./domain-modifier/raw-record/dnscontrol-raw-record";
import { DnscontrolRecord } from "./domain-modifier/record/dnscontrol-record";
import { DnscontrolDomainConfig } from "./types/dnscontrol-domain-config";
import { Duration } from "./types/duration";

const DNS_CONTROL_DOMAIN_SYMBOL = Symbol.for("DnscontrolDomain");

export interface DnscontrolDomainProps {
  readonly domainName: string;
  readonly registrar: DnscontrolRegistrar;
  readonly domainProviderPropsList: DnscontrolDomainProviderProps[];
  readonly defaultTtl?: Duration;
  readonly isEnabledAutoDnssec?: boolean;
  readonly isDisabledIgnoreSafetyCheck?: boolean;
  readonly shouldKeepExistingRecord?: boolean;
  readonly parentNameservers?: string[];
  readonly parentNameserverTtl?: Duration;
}

export abstract class DnscontrolDomain extends Construct {
  public readonly domainName: string;
  public readonly registrarName: string;
  public readonly defaultTtl: Duration;
  public readonly isEnabledAutoDnssec?: boolean | undefined;
  public readonly isDisabledIgnoreSafetyCheck?: boolean | undefined;
  public readonly shouldKeepExistingRecord?: boolean | undefined;
  public readonly parentNameservers?: string[] | undefined;
  public readonly parentNameserverTtl?: Duration | undefined;
  constructor(
    scope: DnscontrolStack,
    id: string,
    props: DnscontrolDomainProps,
  ) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_DOMAIN_SYMBOL, { value: true });
    this.domainName = props.domainName;
    this.registrarName = props.registrar.registrarName;
    this.defaultTtl = props.defaultTtl ?? new Duration(300);
    this.isEnabledAutoDnssec = props.isEnabledAutoDnssec;
    this.isDisabledIgnoreSafetyCheck = props.isDisabledIgnoreSafetyCheck;
    this.shouldKeepExistingRecord = props.shouldKeepExistingRecord;
    this.parentNameservers = props.parentNameservers;
    this.parentNameserverTtl = props.parentNameserverTtl;
    for (const providerProps of props.domainProviderPropsList) {
      new DnscontrolDomainProvider(
        this,
        providerProps.domainProviderName,
        providerProps,
      );
    }
  }

  public static isDnscontrolDomain(x: unknown): x is DnscontrolDomain {
    return x != null && typeof x === "object" && DNS_CONTROL_DOMAIN_SYMBOL in x;
  }

  public getDomainConfig(): DnscontrolDomainConfig {
    const autoDnssec = (() => {
      switch (this.isEnabledAutoDnssec) {
        case undefined:
          return "";
        case null:
          return "";
        case true:
          return "on";
        case false:
          return "off";
        default:
          throw new Error(
            `Invalid auto dessec, got ${this.isEnabledAutoDnssec}`,
          );
      }
    })();
    const initialDomainConfig = {
      name: this.domainName,
      registrar: this.registrarName,
      dnsProviders: {},
      records: [],
      rawrecords: [],
      auto_dnssec: autoDnssec,
      unmanaged_disable_safety_check: this.isDisabledIgnoreSafetyCheck,
      keepunknown: this.shouldKeepExistingRecord,
      unmanaged: [],
      nameservers: this.parentNameservers?.map((nameserver) => ({
        name: nameserver,
      })),
      meta:
        this.parentNameserverTtl == null
          ? undefined
          : { ns_ttl: this.parentNameserverTtl.toSeconds().toString() },
    } satisfies DnscontrolDomainConfig;

    return this._getDomainConfig(this, initialDomainConfig);
  }
  private _getDomainConfig(
    node: IConstruct,
    domainConfig: DnscontrolDomainConfig,
  ): DnscontrolDomainConfig {
    if (DnscontrolDomainProvider.isDnscontrolDomainProvider(node)) {
      domainConfig.dnsProviders[node.domainProviderName] = node.nameserverCount;
    }
    if (DnscontrolRecord.isDnscontrolRecord(node)) {
      const recordConfig = node.getRecordConfig();
      domainConfig.records.push({
        ...recordConfig,
        ttl: recordConfig?.ttl ?? this.defaultTtl.toSeconds(),
      });
    }
    if (DnscontrolRawRecord.isDnscontrolRawRecord(node)) {
      const rawRecordConfig = node.getRawRecordConfig();
      domainConfig.rawrecords.push(rawRecordConfig);
    }
    if (DnscontrolIgnore.isDnscontrolIgnore(node)) {
      const unmanagedConfig = node.getUnmanagedConfig();
      domainConfig.unmanaged.push(unmanagedConfig);
    }
    for (const child of node.node.children) {
      this._getDomainConfig(child, domainConfig);
    }
    return domainConfig;
  }
}
