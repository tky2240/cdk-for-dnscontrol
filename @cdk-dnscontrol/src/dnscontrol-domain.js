"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolDomain = void 0;
const constructs_1 = require("constructs");
const dnscontrol_domain_provider_1 = require("./dnscontrol-domain-provider");
const ignore_1 = require("./domain-modifier/management/ignore");
const dnscontrol_raw_record_1 = require("./domain-modifier/raw-record/dnscontrol-raw-record");
const dnscontrol_record_1 = require("./domain-modifier/record/dnscontrol-record");
const duration_1 = require("./types/duration");
const DNS_CONTROL_DOMAIN_SYMBOL = Symbol.for("DnscontrolDomain");
class DnscontrolDomain extends constructs_1.Construct {
    domainName;
    tag;
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
        this.tag = props.tag;
        this.registrarName = props.registrar?.registrarName ?? "none";
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
                    dnscontrol_uniquename: this.tag == null ? this.domainName : `${this.domainName}!${this.tag}`,
                };
                if (this.parentNameserverTtl != null) {
                    return {
                        ...meta,
                        ns_ttl: this.parentNameserverTtl.toSeconds().toString()
                    };
                }
                else {
                    return meta;
                }
            })(),
        };
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
        };
    }
    _renderDomainConfig(node, domainConfig) {
        if (dnscontrol_domain_provider_1.DnscontrolDomainProvider.isDnscontrolDomainProvider(node)) {
            domainConfig.dnsProviderNameserverCountMap[node.domainProviderName] =
                node.nameserverCount;
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
            if (domainConfig.rawRecords != null) {
                domainConfig.rawRecords.push(rawRecordConfig);
            }
            throw new Error("something went wrong");
        }
        if (ignore_1.DnscontrolIgnore.isDnscontrolIgnore(node)) {
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
exports.DnscontrolDomain = DnscontrolDomain;
