import { Construct, IConstruct } from "constructs";
import * as fs from "fs";
import path from "path";
import { DnscontrolDomain } from "./dnscontrol-domain";
import { DnscontrolDomainProvider } from "./dnscontrol-domain-provider";
import { DnscontrolProvider } from "./dnscontrol-provider";
import { DnscontrolRegistrar } from "./dnscontrol-registrar";
import { DnscontrolRecord } from "./domain-modifier/record/dnscontrol-record";
import { DnscontrolDnsConfig } from "./types/dnscontrol-dns-config";
import { DnscontrolDomainConfig } from "./types/dnscontrol-domain-config";
import { Duration } from "./types/duration";
import { DnscontrolRawRecord } from "./domain-modifier/record/dnscontrol-raw-record";

export interface DnscontrolStackProps {
  stackMetadataPath?: string;
}

const DNS_CONTROL_STACK_SYMBOL = Symbol.for("DnscontrolStack");

export abstract class DnscontrolStack extends Construct {
  private readonly stackMetadataPath: string;
  constructor(scope: Construct, id: string, props: DnscontrolStackProps) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_STACK_SYMBOL, { value: true });
    this.stackMetadataPath = props.stackMetadataPath ?? "meta.json";
  }
  public static isDnscontrolStack(x: unknown): x is DnscontrolStack {
    return x != null && typeof x === "object" && DNS_CONTROL_STACK_SYMBOL in x;
  }
  public synth(outdir: string) {
    const dnsConfig = getDnsConfig(this);
    const domains = getDomains(this);
    for (const domain of domains) {
      const initialDomainConfig = {
        name: domain.domainName,
        registrar: domain.registrarName,
        dnsProviders: {},
        records: [],
        rawrecords: [],
      } satisfies DnscontrolDomainConfig;
      const domainConfig = getDomainConfig(
        domain,
        initialDomainConfig,
        domain.defaultTtl,
      );
      dnsConfig.domains.push(domainConfig);
    }
    const jsonContent = JSON.stringify(dnsConfig);
    const filePath = path.join(outdir, this.stackMetadataPath);
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, jsonContent);
    return;
  }
}

function getDomains(
  node: IConstruct,
  domains: DnscontrolDomain[] = [],
): DnscontrolDomain[] {
  if (DnscontrolDomain.isDnscontrolDomain(node)) {
    domains.push(node);
  }
  for (const child of node.node.children) {
    getDomains(child, domains);
  }
  return domains;
}

function getDomainConfig(
  node: IConstruct,
  domainConfig: DnscontrolDomainConfig,
  defaultTtl: Duration,
): DnscontrolDomainConfig {
  if (DnscontrolDomainProvider.isDnscontrolDomainProvider(node)) {
    domainConfig.dnsProviders = {
      ...domainConfig.dnsProviders,
      [node.domainProviderName]: node.nameserverCount,
    };
  }
  if (DnscontrolRecord.isDnscontrolRecord(node)) {
    const recordConfig = node.getRecordConfig()
    recordConfig.ttl = recordConfig?.ttl ?? defaultTtl.toSeconds()
    domainConfig.records.push(recordConfig);
  }
  if (DnscontrolRawRecord.isDnscontrolRawRecord(node)) {
    const rawRecordConfig = node.getRawRecordConfig();
    domainConfig.rawrecords?.push(rawRecordConfig);
  }
  for (const child of node.node.children) {
    getDomainConfig(child, domainConfig, defaultTtl);
  }
  return domainConfig;
}

function getDnsConfig(
  node: IConstruct,
  dnsConfig: DnscontrolDnsConfig = {
    registrars: [],
    dns_providers: [],
    domains: [],
  },
): DnscontrolDnsConfig {
  if (DnscontrolRegistrar.isDnscontrolRegistrar(node)) {
    dnsConfig.registrars.push({
      name: node.registrarName,
      type: node.registrarType,
      meta: node.registrarMetadata,
    });
  }
  if (DnscontrolProvider.isDnscontrolProvider(node)) {
    dnsConfig.dns_providers.push({
      name: node.providerName,
      type: node.providerType,
      meta: node.providerMetadata,
    });
  }
  for (const child of node.node.children) {
    getDnsConfig(child, dnsConfig);
  }
  return dnsConfig;
}
