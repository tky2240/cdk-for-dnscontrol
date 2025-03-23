"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = [];
          for (var k in o)
            if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
          return ar;
        };
      return ownKeys(o);
    };
    return function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null)
        for (var k = ownKeys(mod), i = 0; i < k.length; i++)
          if (k[i] !== "default") __createBinding(result, mod, k[i]);
      __setModuleDefault(result, mod);
      return result;
    };
  })();
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolStack = void 0;
const constructs_1 = require("constructs");
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const dnscontrol_domain_1 = require("./dnscontrol-domain");
const dnscontrol_provider_1 = require("./dnscontrol-provider");
const dnscontrol_registrar_1 = require("./dnscontrol-registrar");
const DNS_CONTROL_STACK_SYMBOL = Symbol.for("DnscontrolStack");
class DnscontrolStack extends constructs_1.Construct {
  stackMetadataPath;
  constructor(scope, id, props) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_STACK_SYMBOL, { value: true });
    this.stackMetadataPath = props.stackMetadataPath ?? "meta.json";
  }
  static isDnscontrolStack(x) {
    return x != null && typeof x === "object" && DNS_CONTROL_STACK_SYMBOL in x;
  }
  synth(outdir) {
    const dnsConfig = getDnsConfig(this);
    const jsonContent = JSON.stringify(dnsConfig);
    const filePath = path_1.default.join(outdir, this.stackMetadataPath);
    const dirPath = path_1.default.dirname(filePath);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    fs.writeFileSync(filePath, jsonContent);
    return;
  }
}
exports.DnscontrolStack = DnscontrolStack;
function getDnsConfig(
  node,
  dnsConfig = {
    registrars: [],
    dns_providers: [],
    domains: [],
  },
) {
  if (dnscontrol_registrar_1.DnscontrolRegistrar.isDnscontrolRegistrar(node)) {
    dnsConfig.registrars.push({
      name: node.registrarName,
      type: node.registrarType,
      meta: node.registrarMetadata,
    });
  }
  if (dnscontrol_provider_1.DnscontrolProvider.isDnscontrolProvider(node)) {
    dnsConfig.dns_providers.push({
      name: node.providerName,
      type: node.providerType,
      meta: node.providerMetadata,
    });
  }
  if (dnscontrol_domain_1.DnscontrolDomain.isDnscontrolDomain(node)) {
    const domainConfig = node.getDomainConfig();
    domainConfig.meta = domainConfig.meta ?? {};
    dnsConfig.domains.push(domainConfig);
  }
  for (const child of node.node.children) {
    getDnsConfig(child, dnsConfig);
  }
  return dnsConfig;
}
