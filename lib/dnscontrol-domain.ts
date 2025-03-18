import { Construct, IConstruct } from "constructs";
import {
  DnscontrolDomainProvider,
  DnscontrolDomainProviderProps,
} from "./dnscontrol-domain-provider";
import { DnscontrolStack } from "./dnscontrol-stack";
import { DnscontrolRawRecord } from "./domain-modifier/record/dnscontrol-raw-record";
import { DnscontrolRecord } from "./domain-modifier/record/dnscontrol-record";
import { DnscontrolDomainConfig } from "./types/dnscontrol-domain-config";
import { Duration } from "./types/duration";

const DNS_CONTROL_DOMAIN_SYMBOL = Symbol.for("DnscontrolDomain");

export interface DnscontrolDomainProps {
  readonly domainName: string;
  readonly registrarName: string;
  readonly providerPropsList: readonly DnscontrolDomainProviderProps[];
  readonly defaultTtl?: Duration;
  readonly isEnabledAutoDnssec?: boolean;
}

export abstract class DnscontrolDomain extends Construct {
  public readonly domainName: string;
  public readonly registrarName: string;
  public readonly defaultTtl: Duration;
  public readonly isEnabledAutoDnssec?: boolean | undefined;
  constructor(
    scope: DnscontrolStack,
    id: string,
    props: DnscontrolDomainProps,
  ) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_DOMAIN_SYMBOL, { value: true });
    this.domainName = props.domainName;
    this.registrarName = props.registrarName;
    this.defaultTtl = props.defaultTtl ?? new Duration(300);
    this.isEnabledAutoDnssec = props.isEnabledAutoDnssec;
    for (const providerProps of props.providerPropsList) {
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
          return "false";
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
    };

    return this._getDomainConfig(this, initialDomainConfig);
  }
  private _getDomainConfig(
    node: IConstruct,
    domainConfig: DnscontrolDomainConfig,
  ): DnscontrolDomainConfig {
    if (DnscontrolDomainProvider.isDnscontrolDomainProvider(node)) {
      domainConfig.dnsProviders = {
        ...domainConfig.dnsProviders,
        [node.domainProviderName]: node.nameserverCount,
      };
    }
    if (DnscontrolRecord.isDnscontrolRecord(node)) {
      const recordConfig = node.getRecordConfig();
      recordConfig.ttl = recordConfig?.ttl ?? this.defaultTtl.toSeconds();
      domainConfig.records.push(recordConfig);
    }
    if (DnscontrolRawRecord.isDnscontrolRawRecord(node)) {
      const rawRecordConfig = node.getRawRecordConfig();
      domainConfig.rawrecords?.push(rawRecordConfig);
    }
    for (const child of node.node.children) {
      this._getDomainConfig(child, domainConfig);
    }
    return domainConfig;
  }
}
