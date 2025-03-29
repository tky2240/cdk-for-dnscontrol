"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolDomain = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const constructs_1 = require("constructs");
const dnscontrol_domain_provider_1 = require("./dnscontrol-domain-provider");
const ignore_1 = require("./domain-modifier/management/ignore");
const dnscontrol_raw_record_1 = require("./domain-modifier/raw-record/dnscontrol-raw-record");
const dnscontrol_record_1 = require("./domain-modifier/record/dnscontrol-record");
const duration_1 = require("./types/duration");
const DNS_CONTROL_DOMAIN_SYMBOL = Symbol.for("DnscontrolDomain");
class DnscontrolDomain extends constructs_1.Construct {
    static [JSII_RTTI_SYMBOL_1] = { fqn: "@tky2240/cdk-for-dnscontrol.DnscontrolDomain", version: "0.0.5" };
    domainName;
    registrarName;
    defaultTtl;
    isEnabledAutoDnssec;
    isDisabledIgnoreSafetyCheck;
    shouldKeepExistingRecord;
    parentNameservers;
    parentNameserverTtl;
    constructor(scope, id, props) {
        super(scope, id);
        Object.defineProperty(this, DNS_CONTROL_DOMAIN_SYMBOL, { value: true });
        this.domainName = props.domainName;
        this.registrarName = props.registrar.registrarName;
        this.defaultTtl = props.defaultTtl ?? new duration_1.Duration(300);
        this.isEnabledAutoDnssec = props.isEnabledAutoDnssec;
        this.isDisabledIgnoreSafetyCheck = props.isDisabledIgnoreSafetyCheck;
        this.shouldKeepExistingRecord = props.shouldKeepExistingRecord;
        this.parentNameservers = props.parentNameservers;
        this.parentNameserverTtl = props.parentNameserverTtl;
        for (const providerProps of props.domainProviderPropsList) {
            new dnscontrol_domain_provider_1.DnscontrolDomainProvider(this, providerProps.domainProviderName, providerProps);
        }
    }
    static isDnscontrolDomain(x) {
        return x != null && typeof x === "object" && DNS_CONTROL_DOMAIN_SYMBOL in x;
    }
    renderDomainConfig() {
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
                    throw new Error(`Invalid auto dessec, got ${this.isEnabledAutoDnssec}`);
            }
        })();
        const initialDomainConfig = {
            name: this.domainName,
            registrar: this.registrarName,
            dnsProviders: {},
            records: [],
            rawRecords: [],
            autoDnssec: autoDnssec,
            unmanagedDisableSafetyCheck: this.isDisabledIgnoreSafetyCheck,
            keepUnknown: this.shouldKeepExistingRecord,
            unmanaged: [],
            nameServers: this.parentNameservers?.map((nameserver) => ({
                name: nameserver,
            })),
            meta: this.parentNameserverTtl == null
                ? undefined
                : { ns_ttl: this.parentNameserverTtl.toSeconds().toString() },
        };
        return this._renderDomainConfig(this, initialDomainConfig);
    }
    _renderDomainConfig(node, domainConfig) {
        if (dnscontrol_domain_provider_1.DnscontrolDomainProvider.isDnscontrolDomainProvider(node)) {
            domainConfig.dnsProviders[node.domainProviderName] = node.nameserverCount;
        }
        if (dnscontrol_record_1.DnscontrolRecord.isDnscontrolRecord(node)) {
            const recordConfig = node.renderRecordConfig();
            domainConfig.records.push({
                ...recordConfig,
                ttl: recordConfig?.ttl ?? this.defaultTtl.toSeconds(),
            });
        }
        if (dnscontrol_raw_record_1.DnscontrolRawRecord.isDnscontrolRawRecord(node)) {
            const rawRecordConfig = node.renderRawRecordConfig();
            domainConfig.rawRecords.push(rawRecordConfig);
        }
        if (ignore_1.DnscontrolIgnore.isDnscontrolIgnore(node)) {
            const unmanagedConfig = node.renderUnmanagedConfig();
            domainConfig.unmanaged.push(unmanagedConfig);
        }
        for (const child of node.node.children) {
            this._renderDomainConfig(child, domainConfig);
        }
        return domainConfig;
    }
}
exports.DnscontrolDomain = DnscontrolDomain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5zY29udHJvbC1kb21haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkbnNjb250cm9sLWRvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMkNBQW1EO0FBQ25ELDZFQUdzQztBQUd0QyxnRUFBdUU7QUFDdkUsOEZBQXlGO0FBQ3pGLGtGQUE4RTtBQUU5RSwrQ0FBNEM7QUFFNUMsTUFBTSx5QkFBeUIsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFjakUsTUFBc0IsZ0JBQWlCLFNBQVEsc0JBQVM7O0lBQ3RDLFVBQVUsQ0FBUztJQUNuQixhQUFhLENBQVM7SUFDdEIsVUFBVSxDQUFXO0lBQ3JCLG1CQUFtQixDQUF1QjtJQUMxQywyQkFBMkIsQ0FBdUI7SUFDbEQsd0JBQXdCLENBQXVCO0lBQy9DLGlCQUFpQixDQUF3QjtJQUN6QyxtQkFBbUIsQ0FBd0I7SUFDM0QsWUFDRSxLQUFzQixFQUN0QixFQUFVLEVBQ1YsS0FBNEI7UUFFNUIsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSx5QkFBeUIsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLFVBQVUsSUFBSSxJQUFJLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQztRQUNyRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsS0FBSyxDQUFDLDJCQUEyQixDQUFDO1FBQ3JFLElBQUksQ0FBQyx3QkFBd0IsR0FB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RSxDQUFDO1lBQ3BELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ3JELFlBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDRCxJQUFJLHlCQUFnQixDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDOUMsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDckQsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUNELEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOztBQXJHSCw0Q0FzR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QsIElDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHtcbiAgRG5zY29udHJvbERvbWFpblByb3ZpZGVyLFxuICBEbnNjb250cm9sRG9tYWluUHJvdmlkZXJQcm9wcyxcbn0gZnJvbSBcIi4vZG5zY29udHJvbC1kb21haW4tcHJvdmlkZXJcIjtcbmltcG9ydCB7IERuc2NvbnRyb2xSZWdpc3RyYXIgfSBmcm9tIFwiLi9kbnNjb250cm9sLXJlZ2lzdHJhclwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFN0YWNrIH0gZnJvbSBcIi4vZG5zY29udHJvbC1zdGFja1wiO1xuaW1wb3J0IHsgRG5zY29udHJvbElnbm9yZSB9IGZyb20gXCIuL2RvbWFpbi1tb2RpZmllci9tYW5hZ2VtZW50L2lnbm9yZVwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFJhd1JlY29yZCB9IGZyb20gXCIuL2RvbWFpbi1tb2RpZmllci9yYXctcmVjb3JkL2Ruc2NvbnRyb2wtcmF3LXJlY29yZFwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFJlY29yZCB9IGZyb20gXCIuL2RvbWFpbi1tb2RpZmllci9yZWNvcmQvZG5zY29udHJvbC1yZWNvcmRcIjtcbmltcG9ydCB7IERuc2NvbnRyb2xEb21haW5Db25maWcgfSBmcm9tIFwiLi90eXBlcy9kbnNjb250cm9sLWRvbWFpbi1jb25maWdcIjtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIi4vdHlwZXMvZHVyYXRpb25cIjtcblxuY29uc3QgRE5TX0NPTlRST0xfRE9NQUlOX1NZTUJPTCA9IFN5bWJvbC5mb3IoXCJEbnNjb250cm9sRG9tYWluXCIpO1xuXG5leHBvcnQgaW50ZXJmYWNlIERuc2NvbnRyb2xEb21haW5Qcm9wcyB7XG4gIHJlYWRvbmx5IGRvbWFpbk5hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgcmVnaXN0cmFyOiBEbnNjb250cm9sUmVnaXN0cmFyO1xuICByZWFkb25seSBkb21haW5Qcm92aWRlclByb3BzTGlzdDogRG5zY29udHJvbERvbWFpblByb3ZpZGVyUHJvcHNbXTtcbiAgcmVhZG9ubHkgZGVmYXVsdFR0bD86IER1cmF0aW9uO1xuICByZWFkb25seSBpc0VuYWJsZWRBdXRvRG5zc2VjPzogYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNEaXNhYmxlZElnbm9yZVNhZmV0eUNoZWNrPzogYm9vbGVhbjtcbiAgcmVhZG9ubHkgc2hvdWxkS2VlcEV4aXN0aW5nUmVjb3JkPzogYm9vbGVhbjtcbiAgcmVhZG9ubHkgcGFyZW50TmFtZXNlcnZlcnM/OiBzdHJpbmdbXTtcbiAgcmVhZG9ubHkgcGFyZW50TmFtZXNlcnZlclR0bD86IER1cmF0aW9uO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRG5zY29udHJvbERvbWFpbiBleHRlbmRzIENvbnN0cnVjdCB7XG4gIHB1YmxpYyByZWFkb25seSBkb21haW5OYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSByZWdpc3RyYXJOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSBkZWZhdWx0VHRsOiBEdXJhdGlvbjtcbiAgcHVibGljIHJlYWRvbmx5IGlzRW5hYmxlZEF1dG9EbnNzZWM/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBwdWJsaWMgcmVhZG9ubHkgaXNEaXNhYmxlZElnbm9yZVNhZmV0eUNoZWNrPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgcHVibGljIHJlYWRvbmx5IHNob3VsZEtlZXBFeGlzdGluZ1JlY29yZD86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIHB1YmxpYyByZWFkb25seSBwYXJlbnROYW1lc2VydmVycz86IHN0cmluZ1tdIHwgdW5kZWZpbmVkO1xuICBwdWJsaWMgcmVhZG9ubHkgcGFyZW50TmFtZXNlcnZlclR0bD86IER1cmF0aW9uIHwgdW5kZWZpbmVkO1xuICBjb25zdHJ1Y3RvcihcbiAgICBzY29wZTogRG5zY29udHJvbFN0YWNrLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJvcHM6IERuc2NvbnRyb2xEb21haW5Qcm9wcyxcbiAgKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgRE5TX0NPTlRST0xfRE9NQUlOX1NZTUJPTCwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmRvbWFpbk5hbWUgPSBwcm9wcy5kb21haW5OYW1lO1xuICAgIHRoaXMucmVnaXN0cmFyTmFtZSA9IHByb3BzLnJlZ2lzdHJhci5yZWdpc3RyYXJOYW1lO1xuICAgIHRoaXMuZGVmYXVsdFR0bCA9IHByb3BzLmRlZmF1bHRUdGwgPz8gbmV3IER1cmF0aW9uKDMwMCk7XG4gICAgdGhpcy5pc0VuYWJsZWRBdXRvRG5zc2VjID0gcHJvcHMuaXNFbmFibGVkQXV0b0Ruc3NlYztcbiAgICB0aGlzLmlzRGlzYWJsZWRJZ25vcmVTYWZldHlDaGVjayA9IHByb3BzLmlzRGlzYWJsZWRJZ25vcmVTYWZldHlDaGVjaztcbiAgICB0aGlzLnNob3VsZEtlZXBFeGlzdGluZ1JlY29yZCA9IHByb3BzLnNob3VsZEtlZXBFeGlzdGluZ1JlY29yZDtcbiAgICB0aGlzLnBhcmVudE5hbWVzZXJ2ZXJzID0gcHJvcHMucGFyZW50TmFtZXNlcnZlcnM7XG4gICAgdGhpcy5wYXJlbnROYW1lc2VydmVyVHRsID0gcHJvcHMucGFyZW50TmFtZXNlcnZlclR0bDtcbiAgICBmb3IgKGNvbnN0IHByb3ZpZGVyUHJvcHMgb2YgcHJvcHMuZG9tYWluUHJvdmlkZXJQcm9wc0xpc3QpIHtcbiAgICAgIG5ldyBEbnNjb250cm9sRG9tYWluUHJvdmlkZXIoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHByb3ZpZGVyUHJvcHMuZG9tYWluUHJvdmlkZXJOYW1lLFxuICAgICAgICBwcm92aWRlclByb3BzLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzRG5zY29udHJvbERvbWFpbih4OiB1bmtub3duKTogeCBpcyBEbnNjb250cm9sRG9tYWluIHtcbiAgICByZXR1cm4geCAhPSBudWxsICYmIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIEROU19DT05UUk9MX0RPTUFJTl9TWU1CT0wgaW4geDtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJEb21haW5Db25maWcoKTogRG5zY29udHJvbERvbWFpbkNvbmZpZyB7XG4gICAgY29uc3QgYXV0b0Ruc3NlYyA9ICgoKSA9PiB7XG4gICAgICBzd2l0Y2ggKHRoaXMuaXNFbmFibGVkQXV0b0Ruc3NlYykge1xuICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgICByZXR1cm4gXCJcIjtcbiAgICAgICAgY2FzZSBudWxsOlxuICAgICAgICAgIHJldHVybiBcIlwiO1xuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgcmV0dXJuIFwib25cIjtcbiAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICByZXR1cm4gXCJvZmZcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBhdXRvIGRlc3NlYywgZ290ICR7dGhpcy5pc0VuYWJsZWRBdXRvRG5zc2VjfWAsXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuICAgIGNvbnN0IGluaXRpYWxEb21haW5Db25maWcgPSB7XG4gICAgICBuYW1lOiB0aGlzLmRvbWFpbk5hbWUsXG4gICAgICByZWdpc3RyYXI6IHRoaXMucmVnaXN0cmFyTmFtZSxcbiAgICAgIGRuc1Byb3ZpZGVyczoge30sXG4gICAgICByZWNvcmRzOiBbXSxcbiAgICAgIHJhd1JlY29yZHM6IFtdLFxuICAgICAgYXV0b0Ruc3NlYzogYXV0b0Ruc3NlYyxcbiAgICAgIHVubWFuYWdlZERpc2FibGVTYWZldHlDaGVjazogdGhpcy5pc0Rpc2FibGVkSWdub3JlU2FmZXR5Q2hlY2ssXG4gICAgICBrZWVwVW5rbm93bjogdGhpcy5zaG91bGRLZWVwRXhpc3RpbmdSZWNvcmQsXG4gICAgICB1bm1hbmFnZWQ6IFtdLFxuICAgICAgbmFtZVNlcnZlcnM6IHRoaXMucGFyZW50TmFtZXNlcnZlcnM/Lm1hcCgobmFtZXNlcnZlcikgPT4gKHtcbiAgICAgICAgbmFtZTogbmFtZXNlcnZlcixcbiAgICAgIH0pKSxcbiAgICAgIG1ldGE6XG4gICAgICAgIHRoaXMucGFyZW50TmFtZXNlcnZlclR0bCA9PSBudWxsXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IHsgbnNfdHRsOiB0aGlzLnBhcmVudE5hbWVzZXJ2ZXJUdGwudG9TZWNvbmRzKCkudG9TdHJpbmcoKSB9LFxuICAgIH0gc2F0aXNmaWVzIERuc2NvbnRyb2xEb21haW5Db25maWc7XG5cbiAgICByZXR1cm4gdGhpcy5fcmVuZGVyRG9tYWluQ29uZmlnKHRoaXMsIGluaXRpYWxEb21haW5Db25maWcpO1xuICB9XG4gIHByaXZhdGUgX3JlbmRlckRvbWFpbkNvbmZpZyhcbiAgICBub2RlOiBJQ29uc3RydWN0LFxuICAgIGRvbWFpbkNvbmZpZzogRG5zY29udHJvbERvbWFpbkNvbmZpZyxcbiAgKTogRG5zY29udHJvbERvbWFpbkNvbmZpZyB7XG4gICAgaWYgKERuc2NvbnRyb2xEb21haW5Qcm92aWRlci5pc0Ruc2NvbnRyb2xEb21haW5Qcm92aWRlcihub2RlKSkge1xuICAgICAgZG9tYWluQ29uZmlnLmRuc1Byb3ZpZGVyc1tub2RlLmRvbWFpblByb3ZpZGVyTmFtZV0gPSBub2RlLm5hbWVzZXJ2ZXJDb3VudDtcbiAgICB9XG4gICAgaWYgKERuc2NvbnRyb2xSZWNvcmQuaXNEbnNjb250cm9sUmVjb3JkKG5vZGUpKSB7XG4gICAgICBjb25zdCByZWNvcmRDb25maWcgPSBub2RlLnJlbmRlclJlY29yZENvbmZpZygpO1xuICAgICAgZG9tYWluQ29uZmlnLnJlY29yZHMucHVzaCh7XG4gICAgICAgIC4uLnJlY29yZENvbmZpZyxcbiAgICAgICAgdHRsOiByZWNvcmRDb25maWc/LnR0bCA/PyB0aGlzLmRlZmF1bHRUdGwudG9TZWNvbmRzKCksXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKERuc2NvbnRyb2xSYXdSZWNvcmQuaXNEbnNjb250cm9sUmF3UmVjb3JkKG5vZGUpKSB7XG4gICAgICBjb25zdCByYXdSZWNvcmRDb25maWcgPSBub2RlLnJlbmRlclJhd1JlY29yZENvbmZpZygpO1xuICAgICAgZG9tYWluQ29uZmlnLnJhd1JlY29yZHMucHVzaChyYXdSZWNvcmRDb25maWcpO1xuICAgIH1cbiAgICBpZiAoRG5zY29udHJvbElnbm9yZS5pc0Ruc2NvbnRyb2xJZ25vcmUobm9kZSkpIHtcbiAgICAgIGNvbnN0IHVubWFuYWdlZENvbmZpZyA9IG5vZGUucmVuZGVyVW5tYW5hZ2VkQ29uZmlnKCk7XG4gICAgICBkb21haW5Db25maWcudW5tYW5hZ2VkLnB1c2godW5tYW5hZ2VkQ29uZmlnKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBjaGlsZCBvZiBub2RlLm5vZGUuY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMuX3JlbmRlckRvbWFpbkNvbmZpZyhjaGlsZCwgZG9tYWluQ29uZmlnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbWFpbkNvbmZpZztcbiAgfVxufVxuIl19