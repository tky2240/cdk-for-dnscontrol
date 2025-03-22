import { Construct, IConstruct } from "constructs";
import * as fs from "fs";
import path from "path";
import { DnscontrolDomain } from "./dnscontrol-domain";
import { DnscontrolProvider } from "./dnscontrol-provider";
import { DnscontrolRegistrar } from "./dnscontrol-registrar";
import { DnscontrolDnsConfig } from "./types/dnscontrol-dns-config";

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
  if (DnscontrolDomain.isDnscontrolDomain(node)) {
    const domainConfig = node.getDomainConfig();
    domainConfig.meta = domainConfig.meta ?? {};
    dnsConfig.domains.push(domainConfig);
  }
  for (const child of node.node.children) {
    getDnsConfig(child, dnsConfig);
  }
  return dnsConfig;
}
