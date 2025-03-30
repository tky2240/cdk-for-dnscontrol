import { Construct, IConstruct } from "constructs";
import * as fs from "fs";
import path from "path";
import { DnscontrolDomain } from "./dnscontrol-domain";
import { DnscontrolProvider } from "./dnscontrol-provider";
import { DnscontrolRegistrar } from "./dnscontrol-registrar";
import { DnscontrolDnsConfig } from "./types/dnscontrol-dns-config";

export interface DnscontrolStackProps {
  readonly stackMetadataPath?: string;
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
    const dnsConfig = renderDnsConfig(this);
    const renamedDnsConfig = renameKeys(dnsConfig);
    const jsonContent = JSON.stringify(renamedDnsConfig);
    const filePath = path.join(outdir, this.stackMetadataPath);
    const dirPath = path.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, jsonContent);
    return;
  }
}

function renderDnsConfig(
  node: IConstruct,
  dnsConfig: DnscontrolDnsConfig = {
    registrars: [],
    dnsProviders: [],
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
    dnsConfig.dnsProviders.push({
      name: node.providerName,
      type: node.providerType,
      meta: node.providerMetadata,
    });
  }
  if (DnscontrolDomain.isDnscontrolDomain(node)) {
    const domainConfig = node.renderDomainConfig();
    dnsConfig.domains.push(domainConfig);
  }
  for (const child of node.node.children) {
    renderDnsConfig(child, dnsConfig);
  }
  return dnsConfig;
}

export function renameKeys(obj: object): object {
  // if (key == "nameServers") {
  //   return ["nameserver", value];
  // }
  // if (key == "recordAbsent") {
  //   return ["recordsabsent", value];
  // }
  // if (key == "keepUnknown") {
  //   return ["keepunknown", value];
  // }

  if (typeof obj !== "object" || obj == null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => renameKeys(item));
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => {
      if (key == "dnsProviders") {
        return ["dns_providers", renameKeys(value)];
      }
      if (key == "unmanagedDisableSafetyCheck") {
        return ["unmanaged_disable_safety_check", renameKeys(value)];
      }
      if (key == "autoDnssec") {
        return ["auto_dnssec", renameKeys(value)];
      }
      if (key == "dnsProviderNameserverCountMap") {
        return ["dnsProviders", renameKeys(value)];
      }
      // if (key == "rawRecords") {
      //   return ["rawrecords", value];
      // }
      if (key == "recordType") {
        return ["type", renameKeys(value)];
      }
      if (key == "r53Alias") {
        return ["r53_alias", renameKeys(value)];
      }
      if (key == "azureAlias") {
        return ["azure_alias", renameKeys(value)];
      }
      if (key == "unkownTypeName") {
        return ["unknown_type_name", renameKeys(value)];
      }
      if (key == "cloudflareApiRedirect") {
        return ["cloudflareapi_redirect", renameKeys(value)];
      }
      if (key == "labelPattern") {
        return ["label_pattern", renameKeys(value)];
      }
      if (key == "rTypePattern") {
        return ["rType_pattern", renameKeys(value)];
      }
      if (key == "targetPattern") {
        return ["target_pattern", renameKeys(value)];
      }
      return [key.toLowerCase(), renameKeys(value)];
    }),
  );
}
