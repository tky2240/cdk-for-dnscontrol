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
    tag;
    registrarName;
    defaultTtl;
    isEnabledAutoDnssec;
    isDisabledIgnoreSafetyCheck;
    shouldKeepExistingRecord;
    parentNameservers;
    parentNameserverTtl;
    route53ZoneId;
    constructor(scope, id, props) {
        super(scope, id);
        Object.defineProperty(this, DNS_CONTROL_DOMAIN_SYMBOL, { value: true });
        this.domainName = props.domainName;
        this.tag = props.tag;
        this.registrarName = props.registrar?.registrarName ?? "none";
        this.defaultTtl = props.defaultTtl ?? new duration_1.Duration(300);
        this.isEnabledAutoDnssec = props.isEnabledAutoDnssec;
        this.isDisabledIgnoreSafetyCheck = props.isDisabledIgnoreSafetyCheck;
        this.shouldKeepExistingRecord = props.shouldKeepExistingRecord;
        this.parentNameservers = props.parentNameservers;
        this.parentNameserverTtl = props.parentNameserverTtl;
        this.route53ZoneId = props.route53ZoneId;
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
                    return undefined;
                case null:
                    return undefined;
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
            dnsProviderNameserverCountMap: {},
            records: [],
            recordsAbsent: [],
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
                    dnscontrol_tag: this.tag ?? "",
                    dnscontrol_uniquename: this.tag == null
                        ? this.domainName
                        : `${this.domainName}!${this.tag}`,
                };
                const ttlAddedMeta = this.parentNameserverTtl != null
                    ? {
                        ...meta,
                        ns_ttl: this.parentNameserverTtl.toSeconds().toString(),
                    }
                    : meta;
                const zoneIdAddedMeta = this.route53ZoneId != null
                    ? {
                        ...ttlAddedMeta,
                        zone_id: this.route53ZoneId,
                    }
                    : ttlAddedMeta;
                return zoneIdAddedMeta;
            })(),
        };
        const domainConfig = this._renderDomainConfig(this, initialDomainConfig);
        if (domainConfig.rawRecords == null) {
            throw new Error("renderDomainConfig: rawRecords is null");
        }
        if (domainConfig.unmanaged == null) {
            throw new Error("renderDomainConfig: unmanaged is null");
        }
        if (domainConfig.recordsAbsent == null) {
            throw new Error("renderDomainConfig: recordsAbsent is null");
        }
        return {
            ...domainConfig,
            rawRecords: domainConfig.rawRecords.length === 0
                ? undefined
                : domainConfig.rawRecords,
            unmanaged: domainConfig.unmanaged.length === 0
                ? undefined
                : domainConfig.unmanaged,
            recordsAbsent: domainConfig.recordsAbsent.length === 0
                ? undefined
                : domainConfig.recordsAbsent,
        };
    }
    _renderDomainConfig(node, domainConfig) {
        if (dnscontrol_domain_provider_1.DnscontrolDomainProvider.isDnscontrolDomainProvider(node)) {
            domainConfig.dnsProviderNameserverCountMap[node.domainProviderName] =
                node.nameserverCount;
        }
        if (dnscontrol_record_1.DnscontrolRecord.isDnscontrolRecord(node)) {
            const recordConfig = node.renderRecordConfig();
            if (node.isEnsuredAbsent) {
                if (domainConfig.recordsAbsent == null) {
                    throw new Error("something went wrong");
                }
                domainConfig.recordsAbsent.push({
                    ...recordConfig,
                    ttl: recordConfig?.ttl ?? this.defaultTtl.toSeconds(),
                });
            }
            else {
                domainConfig.records.push({
                    ...recordConfig,
                    ttl: recordConfig?.ttl ?? this.defaultTtl.toSeconds(),
                });
            }
        }
        if (dnscontrol_raw_record_1.DnscontrolRawRecord.isDnscontrolRawRecord(node)) {
            const rawRecordConfig = node.renderRawRecordConfig();
            if (domainConfig.rawRecords == null) {
                throw new Error("something went wrong");
            }
            domainConfig.rawRecords.push(rawRecordConfig);
        }
        if (ignore_1.DnscontrolIgnore.isDnscontrolIgnore(node)) {
            const unmanagedConfig = node.renderUnmanagedConfig();
            if (domainConfig.unmanaged == null) {
                throw new Error("something went wrong");
            }
            domainConfig.unmanaged.push(unmanagedConfig);
        }
        for (const child of node.node.children) {
            this._renderDomainConfig(child, domainConfig);
        }
        return domainConfig;
    }
}
exports.DnscontrolDomain = DnscontrolDomain;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5zY29udHJvbC1kb21haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkbnNjb250cm9sLWRvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMkNBQW1EO0FBQ25ELDZFQUdzQztBQUd0QyxnRUFBdUU7QUFDdkUsOEZBQXlGO0FBQ3pGLGtGQUE4RTtBQUU5RSwrQ0FBNEM7QUFFNUMsTUFBTSx5QkFBeUIsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFnQmpFLE1BQXNCLGdCQUFpQixTQUFRLHNCQUFTOztJQUN0QyxVQUFVLENBQVM7SUFDbkIsR0FBRyxDQUFzQjtJQUN6QixhQUFhLENBQVM7SUFDdEIsVUFBVSxDQUFXO0lBQ3JCLG1CQUFtQixDQUF1QjtJQUMxQywyQkFBMkIsQ0FBdUI7SUFDbEQsd0JBQXdCLENBQXVCO0lBQy9DLGlCQUFpQixDQUF3QjtJQUN6QyxtQkFBbUIsQ0FBd0I7SUFDM0MsYUFBYSxDQUFzQjtJQUNuRCxZQUNFLEtBQXNCLEVBQ3RCLEVBQVUsRUFDVixLQUE0QjtRQUU1QixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLHlCQUF5QixFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxTQUFTLEVBQUUsYUFBYSxJQUFJLE1BQU0sQ0FBQztRQUM5RCxJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksSUFBSSxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLENB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QUFDO1FBQ0QsSUFBSSx5QkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzlDLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ3JELElBQUksWUFBWSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQzFDLENBQUM7WUFDRCxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQ0QsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDaEQsQ0FBQztRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7O0FBM0tILDRDQTRLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCwgSUNvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQge1xuICBEbnNjb250cm9sRG9tYWluUHJvdmlkZXIsXG4gIERuc2NvbnRyb2xEb21haW5Qcm92aWRlclByb3BzLFxufSBmcm9tIFwiLi9kbnNjb250cm9sLWRvbWFpbi1wcm92aWRlclwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFJlZ2lzdHJhciB9IGZyb20gXCIuL2Ruc2NvbnRyb2wtcmVnaXN0cmFyXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sU3RhY2sgfSBmcm9tIFwiLi9kbnNjb250cm9sLXN0YWNrXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sSWdub3JlIH0gZnJvbSBcIi4vZG9tYWluLW1vZGlmaWVyL21hbmFnZW1lbnQvaWdub3JlXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sUmF3UmVjb3JkIH0gZnJvbSBcIi4vZG9tYWluLW1vZGlmaWVyL3Jhdy1yZWNvcmQvZG5zY29udHJvbC1yYXctcmVjb3JkXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sUmVjb3JkIH0gZnJvbSBcIi4vZG9tYWluLW1vZGlmaWVyL3JlY29yZC9kbnNjb250cm9sLXJlY29yZFwiO1xuaW1wb3J0IHsgRG5zY29udHJvbERvbWFpbkNvbmZpZyB9IGZyb20gXCIuL3R5cGVzL2Ruc2NvbnRyb2wtZG9tYWluLWNvbmZpZ1wiO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tIFwiLi90eXBlcy9kdXJhdGlvblwiO1xuXG5jb25zdCBETlNfQ09OVFJPTF9ET01BSU5fU1lNQk9MID0gU3ltYm9sLmZvcihcIkRuc2NvbnRyb2xEb21haW5cIik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG5zY29udHJvbERvbWFpblByb3BzIHtcbiAgcmVhZG9ubHkgZG9tYWluTmFtZTogc3RyaW5nO1xuICByZWFkb25seSB0YWc/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IHJlZ2lzdHJhcj86IERuc2NvbnRyb2xSZWdpc3RyYXIgfCB1bmRlZmluZWQ7XG4gIHJlYWRvbmx5IGRvbWFpblByb3ZpZGVyUHJvcHNMaXN0OiBEbnNjb250cm9sRG9tYWluUHJvdmlkZXJQcm9wc1tdO1xuICByZWFkb25seSBkZWZhdWx0VHRsPzogRHVyYXRpb247XG4gIHJlYWRvbmx5IGlzRW5hYmxlZEF1dG9EbnNzZWM/OiBib29sZWFuO1xuICByZWFkb25seSBpc0Rpc2FibGVkSWdub3JlU2FmZXR5Q2hlY2s/OiBib29sZWFuO1xuICByZWFkb25seSBzaG91bGRLZWVwRXhpc3RpbmdSZWNvcmQ/OiBib29sZWFuO1xuICByZWFkb25seSBwYXJlbnROYW1lc2VydmVycz86IHN0cmluZ1tdO1xuICByZWFkb25seSBwYXJlbnROYW1lc2VydmVyVHRsPzogRHVyYXRpb247XG4gIHJlYWRvbmx5IHJvdXRlNTNab25lSWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEbnNjb250cm9sRG9tYWluIGV4dGVuZHMgQ29uc3RydWN0IHtcbiAgcHVibGljIHJlYWRvbmx5IGRvbWFpbk5hbWU6IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IHRhZz86IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcHVibGljIHJlYWRvbmx5IHJlZ2lzdHJhck5hbWU6IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IGRlZmF1bHRUdGw6IER1cmF0aW9uO1xuICBwdWJsaWMgcmVhZG9ubHkgaXNFbmFibGVkQXV0b0Ruc3NlYz86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIHB1YmxpYyByZWFkb25seSBpc0Rpc2FibGVkSWdub3JlU2FmZXR5Q2hlY2s/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICBwdWJsaWMgcmVhZG9ubHkgc2hvdWxkS2VlcEV4aXN0aW5nUmVjb3JkPzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgcHVibGljIHJlYWRvbmx5IHBhcmVudE5hbWVzZXJ2ZXJzPzogc3RyaW5nW10gfCB1bmRlZmluZWQ7XG4gIHB1YmxpYyByZWFkb25seSBwYXJlbnROYW1lc2VydmVyVHRsPzogRHVyYXRpb24gfCB1bmRlZmluZWQ7XG4gIHB1YmxpYyByZWFkb25seSByb3V0ZTUzWm9uZUlkPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb25zdHJ1Y3RvcihcbiAgICBzY29wZTogRG5zY29udHJvbFN0YWNrLFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJvcHM6IERuc2NvbnRyb2xEb21haW5Qcm9wcyxcbiAgKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgRE5TX0NPTlRST0xfRE9NQUlOX1NZTUJPTCwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiAgICB0aGlzLmRvbWFpbk5hbWUgPSBwcm9wcy5kb21haW5OYW1lO1xuICAgIHRoaXMudGFnID0gcHJvcHMudGFnO1xuICAgIHRoaXMucmVnaXN0cmFyTmFtZSA9IHByb3BzLnJlZ2lzdHJhcj8ucmVnaXN0cmFyTmFtZSA/PyBcIm5vbmVcIjtcbiAgICB0aGlzLmRlZmF1bHRUdGwgPSBwcm9wcy5kZWZhdWx0VHRsID8/IG5ldyBEdXJhdGlvbigzMDApO1xuICAgIHRoaXMuaXNFbmFibGVkQXV0b0Ruc3NlYyA9IHByb3BzLmlzRW5hYmxlZEF1dG9EbnNzZWM7XG4gICAgdGhpcy5pc0Rpc2FibGVkSWdub3JlU2FmZXR5Q2hlY2sgPSBwcm9wcy5pc0Rpc2FibGVkSWdub3JlU2FmZXR5Q2hlY2s7XG4gICAgdGhpcy5zaG91bGRLZWVwRXhpc3RpbmdSZWNvcmQgPSBwcm9wcy5zaG91bGRLZWVwRXhpc3RpbmdSZWNvcmQ7XG4gICAgdGhpcy5wYXJlbnROYW1lc2VydmVycyA9IHByb3BzLnBhcmVudE5hbWVzZXJ2ZXJzO1xuICAgIHRoaXMucGFyZW50TmFtZXNlcnZlclR0bCA9IHByb3BzLnBhcmVudE5hbWVzZXJ2ZXJUdGw7XG4gICAgdGhpcy5yb3V0ZTUzWm9uZUlkID0gcHJvcHMucm91dGU1M1pvbmVJZDtcbiAgICBmb3IgKGNvbnN0IHByb3ZpZGVyUHJvcHMgb2YgcHJvcHMuZG9tYWluUHJvdmlkZXJQcm9wc0xpc3QpIHtcbiAgICAgIG5ldyBEbnNjb250cm9sRG9tYWluUHJvdmlkZXIoXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHByb3ZpZGVyUHJvcHMuZG9tYWluUHJvdmlkZXJOYW1lLFxuICAgICAgICBwcm92aWRlclByb3BzLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlzRG5zY29udHJvbERvbWFpbih4OiB1bmtub3duKTogeCBpcyBEbnNjb250cm9sRG9tYWluIHtcbiAgICByZXR1cm4geCAhPSBudWxsICYmIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIEROU19DT05UUk9MX0RPTUFJTl9TWU1CT0wgaW4geDtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJEb21haW5Db25maWcoKTogRG5zY29udHJvbERvbWFpbkNvbmZpZyB7XG4gICAgY29uc3QgYXV0b0Ruc3NlYyA9ICgoKSA9PiB7XG4gICAgICBzd2l0Y2ggKHRoaXMuaXNFbmFibGVkQXV0b0Ruc3NlYykge1xuICAgICAgICBjYXNlIHVuZGVmaW5lZDpcbiAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICBjYXNlIG51bGw6XG4gICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgIHJldHVybiBcIm9uXCI7XG4gICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgcmV0dXJuIFwib2ZmXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgYXV0byBkZXNzZWMsIGdvdCAke3RoaXMuaXNFbmFibGVkQXV0b0Ruc3NlY31gLFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfSkoKTtcbiAgICBjb25zdCBpbml0aWFsRG9tYWluQ29uZmlnID0ge1xuICAgICAgbmFtZTogdGhpcy5kb21haW5OYW1lLFxuICAgICAgcmVnaXN0cmFyOiB0aGlzLnJlZ2lzdHJhck5hbWUsXG4gICAgICBkbnNQcm92aWRlck5hbWVzZXJ2ZXJDb3VudE1hcDoge30sXG4gICAgICByZWNvcmRzOiBbXSxcbiAgICAgIHJlY29yZHNBYnNlbnQ6IFtdLFxuICAgICAgcmF3UmVjb3JkczogW10sXG4gICAgICBhdXRvRG5zc2VjOiBhdXRvRG5zc2VjLFxuICAgICAgdW5tYW5hZ2VkRGlzYWJsZVNhZmV0eUNoZWNrOiB0aGlzLmlzRGlzYWJsZWRJZ25vcmVTYWZldHlDaGVjayxcbiAgICAgIGtlZXBVbmtub3duOiB0aGlzLnNob3VsZEtlZXBFeGlzdGluZ1JlY29yZCxcbiAgICAgIHVubWFuYWdlZDogW10sXG4gICAgICBuYW1lU2VydmVyczogdGhpcy5wYXJlbnROYW1lc2VydmVycz8ubWFwKChuYW1lc2VydmVyKSA9PiAoe1xuICAgICAgICBuYW1lOiBuYW1lc2VydmVyLFxuICAgICAgfSkpLFxuICAgICAgbWV0YTogKCgpID0+IHtcbiAgICAgICAgY29uc3QgbWV0YSA9IHtcbiAgICAgICAgICBkbnNjb250cm9sX3RhZzogdGhpcy50YWcgPz8gXCJcIixcbiAgICAgICAgICBkbnNjb250cm9sX3VuaXF1ZW5hbWU6XG4gICAgICAgICAgICB0aGlzLnRhZyA9PSBudWxsXG4gICAgICAgICAgICAgID8gdGhpcy5kb21haW5OYW1lXG4gICAgICAgICAgICAgIDogYCR7dGhpcy5kb21haW5OYW1lfSEke3RoaXMudGFnfWAsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHR0bEFkZGVkTWV0YSA9XG4gICAgICAgICAgdGhpcy5wYXJlbnROYW1lc2VydmVyVHRsICE9IG51bGxcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgIC4uLm1ldGEsXG4gICAgICAgICAgICAgICAgbnNfdHRsOiB0aGlzLnBhcmVudE5hbWVzZXJ2ZXJUdGwudG9TZWNvbmRzKCkudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBtZXRhO1xuICAgICAgICBjb25zdCB6b25lSWRBZGRlZE1ldGEgPVxuICAgICAgICAgIHRoaXMucm91dGU1M1pvbmVJZCAhPSBudWxsXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAuLi50dGxBZGRlZE1ldGEsXG4gICAgICAgICAgICAgICAgem9uZV9pZDogdGhpcy5yb3V0ZTUzWm9uZUlkLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHR0bEFkZGVkTWV0YTtcbiAgICAgICAgcmV0dXJuIHpvbmVJZEFkZGVkTWV0YTtcbiAgICAgIH0pKCksXG4gICAgfSBzYXRpc2ZpZXMgRG5zY29udHJvbERvbWFpbkNvbmZpZztcblxuICAgIGNvbnN0IGRvbWFpbkNvbmZpZyA9IHRoaXMuX3JlbmRlckRvbWFpbkNvbmZpZyh0aGlzLCBpbml0aWFsRG9tYWluQ29uZmlnKTtcblxuICAgIGlmIChkb21haW5Db25maWcucmF3UmVjb3JkcyA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZW5kZXJEb21haW5Db25maWc6IHJhd1JlY29yZHMgaXMgbnVsbFwiKTtcbiAgICB9XG5cbiAgICBpZiAoZG9tYWluQ29uZmlnLnVubWFuYWdlZCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZW5kZXJEb21haW5Db25maWc6IHVubWFuYWdlZCBpcyBudWxsXCIpO1xuICAgIH1cblxuICAgIGlmIChkb21haW5Db25maWcucmVjb3Jkc0Fic2VudCA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJyZW5kZXJEb21haW5Db25maWc6IHJlY29yZHNBYnNlbnQgaXMgbnVsbFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4uZG9tYWluQ29uZmlnLFxuICAgICAgcmF3UmVjb3JkczpcbiAgICAgICAgZG9tYWluQ29uZmlnLnJhd1JlY29yZHMubGVuZ3RoID09PSAwXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGRvbWFpbkNvbmZpZy5yYXdSZWNvcmRzLFxuICAgICAgdW5tYW5hZ2VkOlxuICAgICAgICBkb21haW5Db25maWcudW5tYW5hZ2VkLmxlbmd0aCA9PT0gMFxuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBkb21haW5Db25maWcudW5tYW5hZ2VkLFxuICAgICAgcmVjb3Jkc0Fic2VudDpcbiAgICAgICAgZG9tYWluQ29uZmlnLnJlY29yZHNBYnNlbnQubGVuZ3RoID09PSAwXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGRvbWFpbkNvbmZpZy5yZWNvcmRzQWJzZW50LFxuICAgIH07XG4gIH1cbiAgcHJpdmF0ZSBfcmVuZGVyRG9tYWluQ29uZmlnKFxuICAgIG5vZGU6IElDb25zdHJ1Y3QsXG4gICAgZG9tYWluQ29uZmlnOiBEbnNjb250cm9sRG9tYWluQ29uZmlnLFxuICApOiBEbnNjb250cm9sRG9tYWluQ29uZmlnIHtcbiAgICBpZiAoRG5zY29udHJvbERvbWFpblByb3ZpZGVyLmlzRG5zY29udHJvbERvbWFpblByb3ZpZGVyKG5vZGUpKSB7XG4gICAgICBkb21haW5Db25maWcuZG5zUHJvdmlkZXJOYW1lc2VydmVyQ291bnRNYXBbbm9kZS5kb21haW5Qcm92aWRlck5hbWVdID1cbiAgICAgICAgbm9kZS5uYW1lc2VydmVyQ291bnQ7XG4gICAgfVxuICAgIGlmIChEbnNjb250cm9sUmVjb3JkLmlzRG5zY29udHJvbFJlY29yZChub2RlKSkge1xuICAgICAgY29uc3QgcmVjb3JkQ29uZmlnID0gbm9kZS5yZW5kZXJSZWNvcmRDb25maWcoKTtcbiAgICAgIGlmIChub2RlLmlzRW5zdXJlZEFic2VudCkge1xuICAgICAgICBpZiAoZG9tYWluQ29uZmlnLnJlY29yZHNBYnNlbnQgPT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xuICAgICAgICB9XG4gICAgICAgIGRvbWFpbkNvbmZpZy5yZWNvcmRzQWJzZW50LnB1c2goe1xuICAgICAgICAgIC4uLnJlY29yZENvbmZpZyxcbiAgICAgICAgICB0dGw6IHJlY29yZENvbmZpZz8udHRsID8/IHRoaXMuZGVmYXVsdFR0bC50b1NlY29uZHMoKSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb21haW5Db25maWcucmVjb3Jkcy5wdXNoKHtcbiAgICAgICAgICAuLi5yZWNvcmRDb25maWcsXG4gICAgICAgICAgdHRsOiByZWNvcmRDb25maWc/LnR0bCA/PyB0aGlzLmRlZmF1bHRUdGwudG9TZWNvbmRzKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoRG5zY29udHJvbFJhd1JlY29yZC5pc0Ruc2NvbnRyb2xSYXdSZWNvcmQobm9kZSkpIHtcbiAgICAgIGNvbnN0IHJhd1JlY29yZENvbmZpZyA9IG5vZGUucmVuZGVyUmF3UmVjb3JkQ29uZmlnKCk7XG4gICAgICBpZiAoZG9tYWluQ29uZmlnLnJhd1JlY29yZHMgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgIH1cbiAgICAgIGRvbWFpbkNvbmZpZy5yYXdSZWNvcmRzLnB1c2gocmF3UmVjb3JkQ29uZmlnKTtcbiAgICB9XG4gICAgaWYgKERuc2NvbnRyb2xJZ25vcmUuaXNEbnNjb250cm9sSWdub3JlKG5vZGUpKSB7XG4gICAgICBjb25zdCB1bm1hbmFnZWRDb25maWcgPSBub2RlLnJlbmRlclVubWFuYWdlZENvbmZpZygpO1xuICAgICAgaWYgKGRvbWFpbkNvbmZpZy51bm1hbmFnZWQgPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcbiAgICAgIH1cbiAgICAgIGRvbWFpbkNvbmZpZy51bm1hbmFnZWQucHVzaCh1bm1hbmFnZWRDb25maWcpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUubm9kZS5jaGlsZHJlbikge1xuICAgICAgdGhpcy5fcmVuZGVyRG9tYWluQ29uZmlnKGNoaWxkLCBkb21haW5Db25maWcpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tYWluQ29uZmlnO1xuICB9XG59XG4iXX0=