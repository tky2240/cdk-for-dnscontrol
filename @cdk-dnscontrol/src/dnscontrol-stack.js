"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolStack = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const constructs_1 = require("constructs");
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const dnscontrol_domain_1 = require("./dnscontrol-domain");
const dnscontrol_provider_1 = require("./dnscontrol-provider");
const dnscontrol_registrar_1 = require("./dnscontrol-registrar");
const DNS_CONTROL_STACK_SYMBOL = Symbol.for("DnscontrolStack");
class DnscontrolStack extends constructs_1.Construct {
    static [JSII_RTTI_SYMBOL_1] = { fqn: "@tky2240/cdk-for-dnscontrol.DnscontrolStack", version: "0.0.5" };
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
        const dnsConfig = renderDnsConfig(this);
        const renamedDnsConfig = renameKeys(dnsConfig);
        const jsonContent = JSON.stringify(renamedDnsConfig);
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
function renderDnsConfig(node, dnsConfig = {
    registrars: [],
    dnsProviders: [],
    domains: [],
}) {
    if (dnscontrol_registrar_1.DnscontrolRegistrar.isDnscontrolRegistrar(node)) {
        dnsConfig.registrars.push({
            name: node.registrarName,
            type: node.registrarType,
            meta: node.registrarMetadata,
        });
    }
    if (dnscontrol_provider_1.DnscontrolProvider.isDnscontrolProvider(node)) {
        dnsConfig.dnsProviders.push({
            name: node.providerName,
            type: node.providerType,
            meta: node.providerMetadata,
        });
    }
    if (dnscontrol_domain_1.DnscontrolDomain.isDnscontrolDomain(node)) {
        const domainConfig = node.renderDomainConfig();
        dnsConfig.domains.push(domainConfig);
    }
    for (const child of node.node.children) {
        renderDnsConfig(child, dnsConfig);
    }
    return dnsConfig;
}
function renameKeys(obj) {
    if (typeof obj !== "object" || obj == null) {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map((item) => renameKeys(item));
    }
    return Object.fromEntries(Object.entries(obj).map(([key, value]) => {
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
        if (key == "nameServers") {
            return ["nameserver", renameKeys(value)];
        }
        if (key == "recordAbsent") {
            return ["recordsabsent", renameKeys(value)];
        }
        if (key == "keepUnknown") {
            return ["keepunknown", renameKeys(value)];
        }
        if (key == "rawRecords") {
            return ["rawrecords", renameKeys(value)];
        }
        if (key == "recordType") {
            return ["type", renameKeys(value)];
        }
        if (key == "r53Alias") {
            return ["r53_alias", renameKeys(value)];
        }
        if (key == "zoneId") {
            return ["zone_id", renameKeys(value)];
        }
        if (key == "evaluateTargetHealth") {
            return ["evaluate_target_health", renameKeys(value)];
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
        if (key == "mxPreference") {
            return ["mxpreference", renameKeys(value)];
        }
        if (key == "tlsaMatchingType") {
            return ["tlsamatchingtype", renameKeys(value)];
        }
        if (key == "tlsaSelector") {
            return ["tlsaselector", renameKeys(value)];
        }
        if (key == "tlsaUsage") {
            return ["tlsausage", renameKeys(value)];
        }
        if (key == "caaFlag") {
            return ["caaflag", renameKeys(value)];
        }
        if (key == "caaTag") {
            return ["caatag", renameKeys(value)];
        }
        if (key == "srvPriority") {
            return ["srvpriority", renameKeys(value)];
        }
        if (key == "srvWeight") {
            return ["srvweight", renameKeys(value)];
        }
        if (key == "srvPort") {
            return ["srvport", renameKeys(value)];
        }
        if (key == "dnskeyFlags") {
            return ["dnskeyflags", renameKeys(value)];
        }
        if (key == "dnskeyProtocol") {
            return ["dnskeyprotocol", renameKeys(value)];
        }
        if (key == "dnskeyAlgorithm") {
            return ["dnskeyalgorithm", renameKeys(value)];
        }
        if (key == "dnskeyPublicKey") {
            return ["dnskeypublickey", renameKeys(value)];
        }
        if (key == "dsKeyTag") {
            return ["dskeytag", renameKeys(value)];
        }
        if (key == "dsAlgorithm") {
            return ["dsalgorithm", renameKeys(value)];
        }
        if (key == "dsDigestType") {
            return ["dsdigesttype", renameKeys(value)];
        }
        if (key == "dsDigest") {
            return ["dsdigest", renameKeys(value)];
        }
        if (key == "svcPriority") {
            return ["svcpriority", renameKeys(value)];
        }
        if (key == "svcParams") {
            return ["svcparams", renameKeys(value)];
        }
        if (key == "naptrOrder") {
            return ["naptrorder", renameKeys(value)];
        }
        if (key == "naptrPreference") {
            return ["naptrpreference", renameKeys(value)];
        }
        if (key == "naptrFlags") {
            return ["naptrflags", renameKeys(value)];
        }
        if (key == "naptrService") {
            return ["naptrservice", renameKeys(value)];
        }
        if (key == "naptrRegexp") {
            return ["naptrregexp", renameKeys(value)];
        }
        if (key == "soaMbox") {
            return ["soambox", renameKeys(value)];
        }
        if (key == "soaSerial") {
            return ["soaserial", renameKeys(value)];
        }
        if (key == "soaRefresh") {
            return ["soarefresh", renameKeys(value)];
        }
        if (key == "soaRetry") {
            return ["soaretry", renameKeys(value)];
        }
        if (key == "soaExpire") {
            return ["soaexpire", renameKeys(value)];
        }
        if (key == "soaMinTtl") {
            return ["soaminttl", renameKeys(value)];
        }
        if (key == "sshfpAlgorithm") {
            return ["sshfpalgorithm", renameKeys(value)];
        }
        if (key == "sshfpFingerprint") {
            return ["sshfpfingerprint", renameKeys(value)];
        }
        return [key, renameKeys(value)];
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5zY29udHJvbC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRuc2NvbnRyb2wtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFtRDtBQUNuRCx1Q0FBeUI7QUFDekIsZ0RBQXdCO0FBQ3hCLDJEQUF1RDtBQUN2RCwrREFBMkQ7QUFDM0QsaUVBQTZEO0FBTzdELE1BQU0sd0JBQXdCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRS9ELE1BQXNCLGVBQWdCLFNBQVEsc0JBQVM7O0lBQ3BDLGlCQUFpQixDQUFTO0lBQzNDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBMkI7UUFDbkUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLElBQUksV0FBVyxDQUFDO0lBQ2xFLENBQUM7SUFDTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBVTtRQUN4QyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLHdCQUF3QixJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBQ00sS0FBSyxDQUFDLE1BQWM7UUFDekIsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNyRCxNQUFNLFFBQVEsR0FBRyxjQUFJLENBQUMsSUFB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LENBQUM7WUFDdkIsT0FBTyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsSUFBSSxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7WUFDdkIsT0FBTyxDQUFDLFdBQVcsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsSUFBSSxHQUFHLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztZQUM1QixPQUFPLENBQUMsZ0JBQWdCLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNELElBQUksR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7WUFDOUIsT0FBTyxDQUFDLGtCQUFrQixFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUNILENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0LCBJQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IERuc2NvbnRyb2xEb21haW4gfSBmcm9tIFwiLi9kbnNjb250cm9sLWRvbWFpblwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFByb3ZpZGVyIH0gZnJvbSBcIi4vZG5zY29udHJvbC1wcm92aWRlclwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFJlZ2lzdHJhciB9IGZyb20gXCIuL2Ruc2NvbnRyb2wtcmVnaXN0cmFyXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sRG5zQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXMvZG5zY29udHJvbC1kbnMtY29uZmlnXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG5zY29udHJvbFN0YWNrUHJvcHMge1xuICByZWFkb25seSBzdGFja01ldGFkYXRhUGF0aD86IHN0cmluZztcbn1cblxuY29uc3QgRE5TX0NPTlRST0xfU1RBQ0tfU1lNQk9MID0gU3ltYm9sLmZvcihcIkRuc2NvbnRyb2xTdGFja1wiKTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERuc2NvbnRyb2xTdGFjayBleHRlbmRzIENvbnN0cnVjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhY2tNZXRhZGF0YVBhdGg6IHN0cmluZztcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERuc2NvbnRyb2xTdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgRE5TX0NPTlRST0xfU1RBQ0tfU1lNQk9MLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHRoaXMuc3RhY2tNZXRhZGF0YVBhdGggPSBwcm9wcy5zdGFja01ldGFkYXRhUGF0aCA/PyBcIm1ldGEuanNvblwiO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgaXNEbnNjb250cm9sU3RhY2soeDogdW5rbm93bik6IHggaXMgRG5zY29udHJvbFN0YWNrIHtcbiAgICByZXR1cm4geCAhPSBudWxsICYmIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIEROU19DT05UUk9MX1NUQUNLX1NZTUJPTCBpbiB4O1xuICB9XG4gIHB1YmxpYyBzeW50aChvdXRkaXI6IHN0cmluZykge1xuICAgIGNvbnN0IGRuc0NvbmZpZyA9IHJlbmRlckRuc0NvbmZpZyh0aGlzKTtcbiAgICBjb25zdCByZW5hbWVkRG5zQ29uZmlnID0gcmVuYW1lS2V5cyhkbnNDb25maWcpO1xuICAgIGNvbnN0IGpzb25Db250ZW50ID0gSlNPTi5zdHJpbmdpZnkocmVuYW1lZERuc0NvbmZpZyk7XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ob3V0ZGlyLCB0aGlzLnN0YWNrTWV0YWRhdGFQYXRoKTtcbiAgICBjb25zdCBkaXJQYXRoID0gcGF0aC5kaXJuYW1lKGZpbGVQYXRoKTtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZGlyUGF0aCkpIHtcbiAgICAgIGZzLm1rZGlyU3luYyhkaXJQYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICB9XG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwganNvbkNvbnRlbnQpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJEbnNDb25maWcoXG4gIG5vZGU6IElDb25zdHJ1Y3QsXG4gIGRuc0NvbmZpZzogRG5zY29udHJvbERuc0NvbmZpZyA9IHtcbiAgICByZWdpc3RyYXJzOiBbXSxcbiAgICBkbnNQcm92aWRlcnM6IFtdLFxuICAgIGRvbWFpbnM6IFtdLFxuICB9LFxuKTogRG5zY29udHJvbERuc0NvbmZpZyB7XG4gIGlmIChEbnNjb250cm9sUmVnaXN0cmFyLmlzRG5zY29udHJvbFJlZ2lzdHJhcihub2RlKSkge1xuICAgIGRuc0NvbmZpZy5yZWdpc3RyYXJzLnB1c2goe1xuICAgICAgbmFtZTogbm9kZS5yZWdpc3RyYXJOYW1lLFxuICAgICAgdHlwZTogbm9kZS5yZWdpc3RyYXJUeXBlLFxuICAgICAgbWV0YTogbm9kZS5yZWdpc3RyYXJNZXRhZGF0YSxcbiAgICB9KTtcbiAgfVxuICBpZiAoRG5zY29udHJvbFByb3ZpZGVyLmlzRG5zY29udHJvbFByb3ZpZGVyKG5vZGUpKSB7XG4gICAgZG5zQ29uZmlnLmRuc1Byb3ZpZGVycy5wdXNoKHtcbiAgICAgIG5hbWU6IG5vZGUucHJvdmlkZXJOYW1lLFxuICAgICAgdHlwZTogbm9kZS5wcm92aWRlclR5cGUsXG4gICAgICBtZXRhOiBub2RlLnByb3ZpZGVyTWV0YWRhdGEsXG4gICAgfSk7XG4gIH1cbiAgaWYgKERuc2NvbnRyb2xEb21haW4uaXNEbnNjb250cm9sRG9tYWluKG5vZGUpKSB7XG4gICAgY29uc3QgZG9tYWluQ29uZmlnID0gbm9kZS5yZW5kZXJEb21haW5Db25maWcoKTtcbiAgICBkbnNDb25maWcuZG9tYWlucy5wdXNoKGRvbWFpbkNvbmZpZyk7XG4gIH1cbiAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLm5vZGUuY2hpbGRyZW4pIHtcbiAgICByZW5kZXJEbnNDb25maWcoY2hpbGQsIGRuc0NvbmZpZyk7XG4gIH1cbiAgcmV0dXJuIGRuc0NvbmZpZztcbn1cblxuZnVuY3Rpb24gcmVuYW1lS2V5cyhvYmo6IG9iamVjdCk6IG9iamVjdCB7XG4gIGlmICh0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiIHx8IG9iaiA9PSBudWxsKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICByZXR1cm4gb2JqLm1hcCgoaXRlbSkgPT4gcmVuYW1lS2V5cyhpdGVtKSk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgIE9iamVjdC5lbnRyaWVzKG9iaikubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIGlmIChrZXkgPT0gXCJkbnNQcm92aWRlcnNcIikge1xuICAgICAgICByZXR1cm4gW1wiZG5zX3Byb3ZpZGVyc1wiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwidW5tYW5hZ2VkRGlzYWJsZVNhZmV0eUNoZWNrXCIpIHtcbiAgICAgICAgcmV0dXJuIFtcInVubWFuYWdlZF9kaXNhYmxlX3NhZmV0eV9jaGVja1wiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwiYXV0b0Ruc3NlY1wiKSB7XG4gICAgICAgIHJldHVybiBbXCJhdXRvX2Ruc3NlY1wiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwiZG5zUHJvdmlkZXJOYW1lc2VydmVyQ291bnRNYXBcIikge1xuICAgICAgICByZXR1cm4gW1wiZG5zUHJvdmlkZXJzXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJuYW1lU2VydmVyc1wiKSB7XG4gICAgICAgIHJldHVybiBbXCJuYW1lc2VydmVyXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJyZWNvcmRBYnNlbnRcIikge1xuICAgICAgICByZXR1cm4gW1wicmVjb3Jkc2Fic2VudFwiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwia2VlcFVua25vd25cIikge1xuICAgICAgICByZXR1cm4gW1wia2VlcHVua25vd25cIiwgcmVuYW1lS2V5cyh2YWx1ZSldO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PSBcInJhd1JlY29yZHNcIikge1xuICAgICAgICByZXR1cm4gW1wicmF3cmVjb3Jkc1wiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwicmVjb3JkVHlwZVwiKSB7XG4gICAgICAgIHJldHVybiBbXCJ0eXBlXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJyNTNBbGlhc1wiKSB7XG4gICAgICAgIHJldHVybiBbXCJyNTNfYWxpYXNcIiwgcmVuYW1lS2V5cyh2YWx1ZSldO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PSBcInpvbmVJZFwiKSB7XG4gICAgICAgIHJldHVybiBbXCJ6b25lX2lkXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJldmFsdWF0ZVRhcmdldEhlYWx0aFwiKSB7XG4gICAgICAgIHJldHVybiBbXCJldmFsdWF0ZV90YXJnZXRfaGVhbHRoXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJhenVyZUFsaWFzXCIpIHtcbiAgICAgICAgcmV0dXJuIFtcImF6dXJlX2FsaWFzXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJ1bmtvd25UeXBlTmFtZVwiKSB7XG4gICAgICAgIHJldHVybiBbXCJ1bmtub3duX3R5cGVfbmFtZVwiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwiY2xvdWRmbGFyZUFwaVJlZGlyZWN0XCIpIHtcbiAgICAgICAgcmV0dXJuIFtcImNsb3VkZmxhcmVhcGlfcmVkaXJlY3RcIiwgcmVuYW1lS2V5cyh2YWx1ZSldO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PSBcImxhYmVsUGF0dGVyblwiKSB7XG4gICAgICAgIHJldHVybiBbXCJsYWJlbF9wYXR0ZXJuXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJyVHlwZVBhdHRlcm5cIikge1xuICAgICAgICByZXR1cm4gW1wiclR5cGVfcGF0dGVyblwiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwidGFyZ2V0UGF0dGVyblwiKSB7XG4gICAgICAgIHJldHVybiBbXCJ0YXJnZXRfcGF0dGVyblwiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwibXhQcmVmZXJlbmNlXCIpIHtcbiAgICAgICAgcmV0dXJuIFtcIm14cHJlZmVyZW5jZVwiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwidGxzYU1hdGNoaW5nVHlwZVwiKSB7XG4gICAgICAgIHJldHVybiBbXCJ0bHNhbWF0Y2hpbmd0eXBlXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJ0bHNhU2VsZWN0b3JcIikge1xuICAgICAgICByZXR1cm4gW1widGxzYXNlbGVjdG9yXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJ0bHNhVXNhZ2VcIikge1xuICAgICAgICByZXR1cm4gW1widGxzYXVzYWdlXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJjYWFGbGFnXCIpIHtcbiAgICAgICAgcmV0dXJuIFtcImNhYWZsYWdcIiwgcmVuYW1lS2V5cyh2YWx1ZSldO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PSBcImNhYVRhZ1wiKSB7XG4gICAgICAgIHJldHVybiBbXCJjYWF0YWdcIiwgcmVuYW1lS2V5cyh2YWx1ZSldO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PSBcInNydlByaW9yaXR5XCIpIHtcbiAgICAgICAgcmV0dXJuIFtcInNydnByaW9yaXR5XCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJzcnZXZWlnaHRcIikge1xuICAgICAgICByZXR1cm4gW1wic3J2d2VpZ2h0XCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJzcnZQb3J0XCIpIHtcbiAgICAgICAgcmV0dXJuIFtcInNydnBvcnRcIiwgcmVuYW1lS2V5cyh2YWx1ZSldO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PSBcImRuc2tleUZsYWdzXCIpIHtcbiAgICAgICAgcmV0dXJuIFtcImRuc2tleWZsYWdzXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJkbnNrZXlQcm90b2NvbFwiKSB7XG4gICAgICAgIHJldHVybiBbXCJkbnNrZXlwcm90b2NvbFwiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwiZG5za2V5QWxnb3JpdGhtXCIpIHtcbiAgICAgICAgcmV0dXJuIFtcImRuc2tleWFsZ29yaXRobVwiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwiZG5za2V5UHVibGljS2V5XCIpIHtcbiAgICAgICAgcmV0dXJuIFtcImRuc2tleXB1YmxpY2tleVwiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwiZHNLZXlUYWdcIikge1xuICAgICAgICByZXR1cm4gW1wiZHNrZXl0YWdcIiwgcmVuYW1lS2V5cyh2YWx1ZSldO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PSBcImRzQWxnb3JpdGhtXCIpIHtcbiAgICAgICAgcmV0dXJuIFtcImRzYWxnb3JpdGhtXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJkc0RpZ2VzdFR5cGVcIikge1xuICAgICAgICByZXR1cm4gW1wiZHNkaWdlc3R0eXBlXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJkc0RpZ2VzdFwiKSB7XG4gICAgICAgIHJldHVybiBbXCJkc2RpZ2VzdFwiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwic3ZjUHJpb3JpdHlcIikge1xuICAgICAgICByZXR1cm4gW1wic3ZjcHJpb3JpdHlcIiwgcmVuYW1lS2V5cyh2YWx1ZSldO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PSBcInN2Y1BhcmFtc1wiKSB7XG4gICAgICAgIHJldHVybiBbXCJzdmNwYXJhbXNcIiwgcmVuYW1lS2V5cyh2YWx1ZSldO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PSBcIm5hcHRyT3JkZXJcIikge1xuICAgICAgICByZXR1cm4gW1wibmFwdHJvcmRlclwiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwibmFwdHJQcmVmZXJlbmNlXCIpIHtcbiAgICAgICAgcmV0dXJuIFtcIm5hcHRycHJlZmVyZW5jZVwiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwibmFwdHJGbGFnc1wiKSB7XG4gICAgICAgIHJldHVybiBbXCJuYXB0cmZsYWdzXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJuYXB0clNlcnZpY2VcIikge1xuICAgICAgICByZXR1cm4gW1wibmFwdHJzZXJ2aWNlXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJuYXB0clJlZ2V4cFwiKSB7XG4gICAgICAgIHJldHVybiBbXCJuYXB0cnJlZ2V4cFwiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwic29hTWJveFwiKSB7XG4gICAgICAgIHJldHVybiBbXCJzb2FtYm94XCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJzb2FTZXJpYWxcIikge1xuICAgICAgICByZXR1cm4gW1wic29hc2VyaWFsXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJzb2FSZWZyZXNoXCIpIHtcbiAgICAgICAgcmV0dXJuIFtcInNvYXJlZnJlc2hcIiwgcmVuYW1lS2V5cyh2YWx1ZSldO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PSBcInNvYVJldHJ5XCIpIHtcbiAgICAgICAgcmV0dXJuIFtcInNvYXJldHJ5XCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJzb2FFeHBpcmVcIikge1xuICAgICAgICByZXR1cm4gW1wic29hZXhwaXJlXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJzb2FNaW5UdGxcIikge1xuICAgICAgICByZXR1cm4gW1wic29hbWludHRsXCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT0gXCJzc2hmcEFsZ29yaXRobVwiKSB7XG4gICAgICAgIHJldHVybiBbXCJzc2hmcGFsZ29yaXRobVwiLCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09IFwic3NoZnBGaW5nZXJwcmludFwiKSB7XG4gICAgICAgIHJldHVybiBbXCJzc2hmcGZpbmdlcnByaW50XCIsIHJlbmFtZUtleXModmFsdWUpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBba2V5LCByZW5hbWVLZXlzKHZhbHVlKV07XG4gICAgfSksXG4gICk7XG59XG5cbi8vIGZ1bmN0aW9uIHNvcnRPYmplY3RLZXlzKG9iajogb2JqZWN0KTogb2JqZWN0IHtcbi8vICAgaWYgKHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgfHwgb2JqID09IG51bGwpIHtcbi8vICAgICByZXR1cm4gb2JqO1xuLy8gICB9XG5cbi8vICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuLy8gICAgIHJldHVybiBvYmoubWFwKChpdGVtKSA9PiBzb3J0T2JqZWN0S2V5cyhpdGVtKSk7XG4vLyAgIH1cblxuLy8gICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKFxuLy8gICAgIE9iamVjdC5lbnRyaWVzKG9iailcbi8vICAgICAgIC5zb3J0KChba2V5QV0sIFtrZXlCXSkgPT4ga2V5QS5sb2NhbGVDb21wYXJlKGtleUIpKVxuLy8gICAgICAgLm1hcCgoW2tleSwgdmFsdWVdKSA9PiBba2V5LCBzb3J0T2JqZWN0S2V5cyh2YWx1ZSldKSxcbi8vICAgKTtcbi8vIH1cbiJdfQ==