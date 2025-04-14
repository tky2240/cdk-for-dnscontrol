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

export abstract class DnscontrolDomain extends Construct {
  public readonly domainName: string;
  public readonly tag?: string | undefined;
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
    this.tag = props.tag;
    this.registrarName = props.registrar?.registrarName ?? "none";
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

  public renderDomainConfig(): DnscontrolDomainConfig {
    const autoDnssec = (() => {
      switch (this.isEnabledAutoDnssec) {
        case undefined:
          return undefined;
        case null:
          return undefined;
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
      dnsProviderNameserverCountMap: {},
      records: [],
      rawRecords: [],
      autoDnssec: autoDnssec,
      unmanagedDisableSafetyCheck: this.isDisabledIgnoreSafetyCheck,
      keepUnknown: this.shouldKeepExistingRecord,
      unmanaged: [],
      nameServers: this.parentNameservers?.map((nameserver) => ({
        name: nameserver,
      })),
      meta: (() => {
        const meta = { 
          dnscontrol_tag: this.tag ?? "" ,
          dnscontrol_uniquename: this.tag == null ? this.domainName : `${this.domainName}!${this.tag}`,
        }
        if ( this.parentNameserverTtl != null) {
          return {
            ...meta,
            ns_ttl: this.parentNameserverTtl.toSeconds().toString()
          } 
        } else {
            return meta;
        }
      })(),
    } satisfies DnscontrolDomainConfig;

    const domainConfig = this._renderDomainConfig(this, initialDomainConfig);

    if (domainConfig.rawRecords == null) {
      throw new Error("renderDomainConfig: rawRecords is null");
    }

    if (domainConfig.unmanaged == null) {
      throw new Error("renderDomainConfig: unmanaged is null");
    }

    return {
      ...domainConfig,
      rawRecords: domainConfig.rawRecords.length == 0 ? undefined : domainConfig.rawRecords,
      unmanaged: domainConfig.unmanaged.length == 0 ? undefined : domainConfig.unmanaged,
    }
    
  }
  private _renderDomainConfig(
    node: IConstruct,
    domainConfig: DnscontrolDomainConfig,
  ): DnscontrolDomainConfig {
    if (DnscontrolDomainProvider.isDnscontrolDomainProvider(node)) {
      domainConfig.dnsProviderNameserverCountMap[node.domainProviderName] =
        node.nameserverCount;
    }
    if (DnscontrolRecord.isDnscontrolRecord(node)) {
      const recordConfig = node.renderRecordConfig();
      domainConfig.records.push({
        ...recordConfig,
        ttl: recordConfig?.ttl ?? this.defaultTtl.toSeconds(),
      });
    }
    if (DnscontrolRawRecord.isDnscontrolRawRecord(node)) {
      const rawRecordConfig = node.renderRawRecordConfig();
      if (domainConfig.rawRecords != null) {
        domainConfig.rawRecords.push(rawRecordConfig);
      }
      throw new Error("something went wrong");
    }
    if (DnscontrolIgnore.isDnscontrolIgnore(node)) {
      const unmanagedConfig = node.renderUnmanagedConfig();
      if (domainConfig.unmanaged != null) {
        domainConfig.unmanaged.push(unmanagedConfig);
      }
      throw new Error("something went wrong");
    }
    for (const child of node.node.children) {
      this._renderDomainConfig(child, domainConfig);
    }
    return domainConfig;
  }
}
