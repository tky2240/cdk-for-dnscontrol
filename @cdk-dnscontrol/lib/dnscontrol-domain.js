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
        this.registrarName = props.registrarName;
        this.defaultTtl = props.defaultTtl ?? new duration_1.Duration(300);
        this.isEnabledAutoDnssec = props.isEnabledAutoDnssec;
        this.isDisabledIgnoreSafetyCheck = props.isDisabledIgnoreSafetyCheck;
        this.shouldKeepExistingRecord = props.shouldKeepExistingRecord;
        this.parentNameservers = props.parentNameservers;
        this.parentNameserverTtl = props.parentNameserverTtl;
        for (const providerProps of props.providerPropsList) {
            new dnscontrol_domain_provider_1.DnscontrolDomainProvider(this, providerProps.domainProviderName, providerProps);
        }
    }
    static isDnscontrolDomain(x) {
        return x != null && typeof x === "object" && DNS_CONTROL_DOMAIN_SYMBOL in x;
    }
    getDomainConfig() {
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
            rawrecords: [],
            auto_dnssec: autoDnssec,
            unmanaged_disable_safety_check: this.isDisabledIgnoreSafetyCheck,
            keepunknown: this.shouldKeepExistingRecord,
            unmanaged: [],
            nameservers: this.parentNameservers?.map((nameserver) => ({
                name: nameserver,
            })),
            meta: this.parentNameserverTtl == null
                ? {}
                : { ns_ttl: this.parentNameserverTtl.toSeconds().toString() },
        };
        return this._getDomainConfig(this, initialDomainConfig);
    }
    _getDomainConfig(node, domainConfig) {
        if (dnscontrol_domain_provider_1.DnscontrolDomainProvider.isDnscontrolDomainProvider(node)) {
            domainConfig.dnsProviders = {
                ...domainConfig.dnsProviders,
                [node.domainProviderName]: node.nameserverCount,
            };
        }
        if (dnscontrol_record_1.DnscontrolRecord.isDnscontrolRecord(node)) {
            const recordConfig = node.getRecordConfig();
            recordConfig.ttl = recordConfig?.ttl ?? this.defaultTtl.toSeconds();
            domainConfig.records.push(recordConfig);
        }
        if (dnscontrol_raw_record_1.DnscontrolRawRecord.isDnscontrolRawRecord(node)) {
            const rawRecordConfig = node.getRawRecordConfig();
            domainConfig.rawrecords.push(rawRecordConfig);
        }
        if (ignore_1.DnscontrolIgnore.isDnscontrolIgnore(node)) {
            const unmanagedConfig = node.getUnmanagedConfig();
            domainConfig.unmanaged.push(unmanagedConfig);
        }
        for (const child of node.node.children) {
            this._getDomainConfig(child, domainConfig);
        }
        return domainConfig;
    }
}
exports.DnscontrolDomain = DnscontrolDomain;
