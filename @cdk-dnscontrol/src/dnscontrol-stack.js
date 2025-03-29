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
function renderDnsConfig(node, dnsConfig = {
    registrars: [],
    dns_providers: [],
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
        dnsConfig.dns_providers.push({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5zY29udHJvbC1zdGFjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRuc2NvbnRyb2wtc3RhY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFtRDtBQUNuRCx1Q0FBeUI7QUFDekIsZ0RBQXdCO0FBQ3hCLDJEQUF1RDtBQUN2RCwrREFBMkQ7QUFDM0QsaUVBQTZEO0FBTzdELE1BQU0sd0JBQXdCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBRS9ELE1BQXNCLGVBQWdCLFNBQVEsc0JBQVM7O0lBQ3BDLGlCQUFpQixDQUFTO0lBQzNDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBMkI7UUFDbkUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSx3QkFBd0IsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUMsaUJBQWlCLElBQUksV0FBVyxDQUFDO0lBQ2xFLENBQUM7SUFDTSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBVTtRQUN4QyxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLHdCQUF3QixJQUFJLENBQUMsQ0FBQztJQUM3RSxDQUFDO0lBQ00sS0FBSyxDQUFDLE1BQWM7UUFDekIsTUFBTSxTQUFTLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDOUMsTUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDM0QsTUFBTSxPQUFPLEdBQUcsY0FBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUNELEVBQUUsQ0FBQyxhQUFhLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLE9BQU87SUFDVCxDQUFDOztBQXBCSCwwQ0FxQkM7QUFFRCxTQUFTLGVBQWUsQ0FDdEIsSUFBZ0IsRUFDaEIsWUFBaUM7SUFDL0IsVUFBVSxFQUFFLEVBQUU7SUFDZCxhQUFhLEVBQUUsRUFBRTtJQUNqQixPQUFPLEVBQUUsRUFBRTtDQUNaO0lBRUQsSUFBSSwwQ0FBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BELFNBQVMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO1lBQ3hCLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYTtZQUN4QixJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDN0IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNELElBQUksd0NBQWtCLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUNsRCxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQztZQUMzQixJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxJQUFJLG9DQUFnQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDOUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDL0MsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNELEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QyxlQUFlLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxPQUFPLFNBQVMsQ0FBQztBQUNuQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0LCBJQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IERuc2NvbnRyb2xEb21haW4gfSBmcm9tIFwiLi9kbnNjb250cm9sLWRvbWFpblwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFByb3ZpZGVyIH0gZnJvbSBcIi4vZG5zY29udHJvbC1wcm92aWRlclwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFJlZ2lzdHJhciB9IGZyb20gXCIuL2Ruc2NvbnRyb2wtcmVnaXN0cmFyXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sRG5zQ29uZmlnIH0gZnJvbSBcIi4vdHlwZXMvZG5zY29udHJvbC1kbnMtY29uZmlnXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG5zY29udHJvbFN0YWNrUHJvcHMge1xuICByZWFkb25seSBzdGFja01ldGFkYXRhUGF0aD86IHN0cmluZztcbn1cblxuY29uc3QgRE5TX0NPTlRST0xfU1RBQ0tfU1lNQk9MID0gU3ltYm9sLmZvcihcIkRuc2NvbnRyb2xTdGFja1wiKTtcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERuc2NvbnRyb2xTdGFjayBleHRlbmRzIENvbnN0cnVjdCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhY2tNZXRhZGF0YVBhdGg6IHN0cmluZztcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERuc2NvbnRyb2xTdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgRE5TX0NPTlRST0xfU1RBQ0tfU1lNQk9MLCB7IHZhbHVlOiB0cnVlIH0pO1xuICAgIHRoaXMuc3RhY2tNZXRhZGF0YVBhdGggPSBwcm9wcy5zdGFja01ldGFkYXRhUGF0aCA/PyBcIm1ldGEuanNvblwiO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgaXNEbnNjb250cm9sU3RhY2soeDogdW5rbm93bik6IHggaXMgRG5zY29udHJvbFN0YWNrIHtcbiAgICByZXR1cm4geCAhPSBudWxsICYmIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIEROU19DT05UUk9MX1NUQUNLX1NZTUJPTCBpbiB4O1xuICB9XG4gIHB1YmxpYyBzeW50aChvdXRkaXI6IHN0cmluZykge1xuICAgIGNvbnN0IGRuc0NvbmZpZyA9IHJlbmRlckRuc0NvbmZpZyh0aGlzKTtcbiAgICBjb25zdCBqc29uQ29udGVudCA9IEpTT04uc3RyaW5naWZ5KGRuc0NvbmZpZyk7XG4gICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ob3V0ZGlyLCB0aGlzLnN0YWNrTWV0YWRhdGFQYXRoKTtcbiAgICBjb25zdCBkaXJQYXRoID0gcGF0aC5kaXJuYW1lKGZpbGVQYXRoKTtcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoZGlyUGF0aCkpIHtcbiAgICAgIGZzLm1rZGlyU3luYyhkaXJQYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICB9XG4gICAgZnMud3JpdGVGaWxlU3luYyhmaWxlUGF0aCwganNvbkNvbnRlbnQpO1xuICAgIHJldHVybjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJEbnNDb25maWcoXG4gIG5vZGU6IElDb25zdHJ1Y3QsXG4gIGRuc0NvbmZpZzogRG5zY29udHJvbERuc0NvbmZpZyA9IHtcbiAgICByZWdpc3RyYXJzOiBbXSxcbiAgICBkbnNfcHJvdmlkZXJzOiBbXSxcbiAgICBkb21haW5zOiBbXSxcbiAgfSxcbik6IERuc2NvbnRyb2xEbnNDb25maWcge1xuICBpZiAoRG5zY29udHJvbFJlZ2lzdHJhci5pc0Ruc2NvbnRyb2xSZWdpc3RyYXIobm9kZSkpIHtcbiAgICBkbnNDb25maWcucmVnaXN0cmFycy5wdXNoKHtcbiAgICAgIG5hbWU6IG5vZGUucmVnaXN0cmFyTmFtZSxcbiAgICAgIHR5cGU6IG5vZGUucmVnaXN0cmFyVHlwZSxcbiAgICAgIG1ldGE6IG5vZGUucmVnaXN0cmFyTWV0YWRhdGEsXG4gICAgfSk7XG4gIH1cbiAgaWYgKERuc2NvbnRyb2xQcm92aWRlci5pc0Ruc2NvbnRyb2xQcm92aWRlcihub2RlKSkge1xuICAgIGRuc0NvbmZpZy5kbnNfcHJvdmlkZXJzLnB1c2goe1xuICAgICAgbmFtZTogbm9kZS5wcm92aWRlck5hbWUsXG4gICAgICB0eXBlOiBub2RlLnByb3ZpZGVyVHlwZSxcbiAgICAgIG1ldGE6IG5vZGUucHJvdmlkZXJNZXRhZGF0YSxcbiAgICB9KTtcbiAgfVxuICBpZiAoRG5zY29udHJvbERvbWFpbi5pc0Ruc2NvbnRyb2xEb21haW4obm9kZSkpIHtcbiAgICBjb25zdCBkb21haW5Db25maWcgPSBub2RlLnJlbmRlckRvbWFpbkNvbmZpZygpO1xuICAgIGRuc0NvbmZpZy5kb21haW5zLnB1c2goZG9tYWluQ29uZmlnKTtcbiAgfVxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUubm9kZS5jaGlsZHJlbikge1xuICAgIHJlbmRlckRuc0NvbmZpZyhjaGlsZCwgZG5zQ29uZmlnKTtcbiAgfVxuICByZXR1cm4gZG5zQ29uZmlnO1xufVxuIl19