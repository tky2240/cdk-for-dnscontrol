"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolCfSingleRedirectRawRecord =
  exports.DnscontrolUrl301Record =
  exports.DnscontrolUrlRecord =
  exports.DnscontrolTxtRecord =
  exports.DnscontrolTlsaRecord =
  exports.DnscontrolSvcbRecord =
  exports.DnscontrolSshfpRecord =
  exports.DnscontrolSrvRecord =
  exports.DnscontrolSoaRecord =
  exports.DnscontrolR53AliasRecord =
  exports.DnscontrolPtrRecord =
  exports.DnscontrolPorkbunUrlfwdRecord =
  exports.DnscontrolNsRecord =
  exports.DnscontrolNaptrRecord =
  exports.DnscontrolMxRecord =
  exports.DnscontrolHttpsRecord =
  exports.DnscontrolFrameRecord =
  exports.DnscontrolDnskeyRecord =
  exports.DnscontrolDnameRecord =
  exports.DnscontrolDhcidRecord =
  exports.DnscontrolCnameRecord =
  exports.DnscontrolCloudnsWrRecord =
  exports.DnscontrolCfWorkerRouteRecord =
  exports.DnscontrolCfTmpRedirectRecord =
  exports.DnscontrolCfRedirectRecord =
  exports.DnscontrolCaaRecord =
  exports.DnscontrolBunnyDnsRdrRecord =
  exports.DnscontrolAzureAliasRecord =
  exports.DnscontrolAliasRecord =
  exports.DnscontrolAkamaiCdnRecord =
  exports.DnscontrolAAAARecord =
  exports.DnscontrolARecord =
  exports.DnscontrolIgnore =
  exports.createReverseDnsName =
  exports.asMxPreference =
  exports.asIPv6PrefixLength =
  exports.asIPv6Cidr =
  exports.asIPv6Address =
  exports.asIPv4PrefixLength =
  exports.asIPv4Cidr =
  exports.asIPv4Address =
  exports.DurationUnit =
  exports.Duration =
  exports.DnscontrolDomain =
  exports.DnscontrolDomainProvider =
  exports.DnscontrolProvider =
  exports.DnscontrolRegistrar =
  exports.DnscontrolStack =
  exports.App =
    void 0;
var app_1 = require("./app");
Object.defineProperty(exports, "App", {
  enumerable: true,
  get: function () {
    return app_1.App;
  },
});
var dnscontrol_stack_1 = require("./dnscontrol-stack");
Object.defineProperty(exports, "DnscontrolStack", {
  enumerable: true,
  get: function () {
    return dnscontrol_stack_1.DnscontrolStack;
  },
});
var dnscontrol_registrar_1 = require("./dnscontrol-registrar");
Object.defineProperty(exports, "DnscontrolRegistrar", {
  enumerable: true,
  get: function () {
    return dnscontrol_registrar_1.DnscontrolRegistrar;
  },
});
var dnscontrol_provider_1 = require("./dnscontrol-provider");
Object.defineProperty(exports, "DnscontrolProvider", {
  enumerable: true,
  get: function () {
    return dnscontrol_provider_1.DnscontrolProvider;
  },
});
var dnscontrol_domain_provider_1 = require("./dnscontrol-domain-provider");
Object.defineProperty(exports, "DnscontrolDomainProvider", {
  enumerable: true,
  get: function () {
    return dnscontrol_domain_provider_1.DnscontrolDomainProvider;
  },
});
var dnscontrol_domain_1 = require("./dnscontrol-domain");
Object.defineProperty(exports, "DnscontrolDomain", {
  enumerable: true,
  get: function () {
    return dnscontrol_domain_1.DnscontrolDomain;
  },
});
var duration_1 = require("./types/duration");
Object.defineProperty(exports, "Duration", {
  enumerable: true,
  get: function () {
    return duration_1.Duration;
  },
});
Object.defineProperty(exports, "DurationUnit", {
  enumerable: true,
  get: function () {
    return duration_1.DurationUnit;
  },
});
var ipv4_1 = require("./types/ipv4");
Object.defineProperty(exports, "asIPv4Address", {
  enumerable: true,
  get: function () {
    return ipv4_1.asIPv4Address;
  },
});
Object.defineProperty(exports, "asIPv4Cidr", {
  enumerable: true,
  get: function () {
    return ipv4_1.asIPv4Cidr;
  },
});
Object.defineProperty(exports, "asIPv4PrefixLength", {
  enumerable: true,
  get: function () {
    return ipv4_1.asIPv4PrefixLength;
  },
});
var ipv6_1 = require("./types/ipv6");
Object.defineProperty(exports, "asIPv6Address", {
  enumerable: true,
  get: function () {
    return ipv6_1.asIPv6Address;
  },
});
Object.defineProperty(exports, "asIPv6Cidr", {
  enumerable: true,
  get: function () {
    return ipv6_1.asIPv6Cidr;
  },
});
Object.defineProperty(exports, "asIPv6PrefixLength", {
  enumerable: true,
  get: function () {
    return ipv6_1.asIPv6PrefixLength;
  },
});
var mx_preference_1 = require("./types/mx-preference");
Object.defineProperty(exports, "asMxPreference", {
  enumerable: true,
  get: function () {
    return mx_preference_1.asMxPreference;
  },
});
var rev_1 = require("./domain-modifier/function/rev");
Object.defineProperty(exports, "createReverseDnsName", {
  enumerable: true,
  get: function () {
    return rev_1.createReverseDnsName;
  },
});
var ignore_1 = require("./domain-modifier/management/ignore");
Object.defineProperty(exports, "DnscontrolIgnore", {
  enumerable: true,
  get: function () {
    return ignore_1.DnscontrolIgnore;
  },
});
var a_1 = require("./domain-modifier/record/a");
Object.defineProperty(exports, "DnscontrolARecord", {
  enumerable: true,
  get: function () {
    return a_1.DnscontrolARecord;
  },
});
var aaaa_1 = require("./domain-modifier/record/aaaa");
Object.defineProperty(exports, "DnscontrolAAAARecord", {
  enumerable: true,
  get: function () {
    return aaaa_1.DnscontrolAAAARecord;
  },
});
var akamai_cdn_1 = require("./domain-modifier/record/akamai-cdn");
Object.defineProperty(exports, "DnscontrolAkamaiCdnRecord", {
  enumerable: true,
  get: function () {
    return akamai_cdn_1.DnscontrolAkamaiCdnRecord;
  },
});
var alias_1 = require("./domain-modifier/record/alias");
Object.defineProperty(exports, "DnscontrolAliasRecord", {
  enumerable: true,
  get: function () {
    return alias_1.DnscontrolAliasRecord;
  },
});
var azure_alias_1 = require("./domain-modifier/record/azure-alias");
Object.defineProperty(exports, "DnscontrolAzureAliasRecord", {
  enumerable: true,
  get: function () {
    return azure_alias_1.DnscontrolAzureAliasRecord;
  },
});
var bunny_dns_rdr_1 = require("./domain-modifier/record/bunny-dns-rdr");
Object.defineProperty(exports, "DnscontrolBunnyDnsRdrRecord", {
  enumerable: true,
  get: function () {
    return bunny_dns_rdr_1.DnscontrolBunnyDnsRdrRecord;
  },
});
var caa_1 = require("./domain-modifier/record/caa");
Object.defineProperty(exports, "DnscontrolCaaRecord", {
  enumerable: true,
  get: function () {
    return caa_1.DnscontrolCaaRecord;
  },
});
var cf_redirect_1 = require("./domain-modifier/record/cf-redirect");
Object.defineProperty(exports, "DnscontrolCfRedirectRecord", {
  enumerable: true,
  get: function () {
    return cf_redirect_1.DnscontrolCfRedirectRecord;
  },
});
var cf_tmp_redirect_1 = require("./domain-modifier/record/cf-tmp-redirect");
Object.defineProperty(exports, "DnscontrolCfTmpRedirectRecord", {
  enumerable: true,
  get: function () {
    return cf_tmp_redirect_1.DnscontrolCfTmpRedirectRecord;
  },
});
var cf_worker_route_1 = require("./domain-modifier/record/cf-worker-route");
Object.defineProperty(exports, "DnscontrolCfWorkerRouteRecord", {
  enumerable: true,
  get: function () {
    return cf_worker_route_1.DnscontrolCfWorkerRouteRecord;
  },
});
var cloudns_wr_1 = require("./domain-modifier/record/cloudns-wr");
Object.defineProperty(exports, "DnscontrolCloudnsWrRecord", {
  enumerable: true,
  get: function () {
    return cloudns_wr_1.DnscontrolCloudnsWrRecord;
  },
});
var cname_1 = require("./domain-modifier/record/cname");
Object.defineProperty(exports, "DnscontrolCnameRecord", {
  enumerable: true,
  get: function () {
    return cname_1.DnscontrolCnameRecord;
  },
});
var dhcid_1 = require("./domain-modifier/record/dhcid");
Object.defineProperty(exports, "DnscontrolDhcidRecord", {
  enumerable: true,
  get: function () {
    return dhcid_1.DnscontrolDhcidRecord;
  },
});
var dname_1 = require("./domain-modifier/record/dname");
Object.defineProperty(exports, "DnscontrolDnameRecord", {
  enumerable: true,
  get: function () {
    return dname_1.DnscontrolDnameRecord;
  },
});
var dnskey_1 = require("./domain-modifier/record/dnskey");
Object.defineProperty(exports, "DnscontrolDnskeyRecord", {
  enumerable: true,
  get: function () {
    return dnskey_1.DnscontrolDnskeyRecord;
  },
});
var frame_1 = require("./domain-modifier/record/frame");
Object.defineProperty(exports, "DnscontrolFrameRecord", {
  enumerable: true,
  get: function () {
    return frame_1.DnscontrolFrameRecord;
  },
});
var https_1 = require("./domain-modifier/record/https");
Object.defineProperty(exports, "DnscontrolHttpsRecord", {
  enumerable: true,
  get: function () {
    return https_1.DnscontrolHttpsRecord;
  },
});
// export { DnscontrolLocRecord } from "./domain-modifier/record/loc" // not implemented yet
var mx_1 = require("./domain-modifier/record/mx");
Object.defineProperty(exports, "DnscontrolMxRecord", {
  enumerable: true,
  get: function () {
    return mx_1.DnscontrolMxRecord;
  },
});
var naptr_1 = require("./domain-modifier/record/naptr");
Object.defineProperty(exports, "DnscontrolNaptrRecord", {
  enumerable: true,
  get: function () {
    return naptr_1.DnscontrolNaptrRecord;
  },
});
var ns_1 = require("./domain-modifier/record/ns");
Object.defineProperty(exports, "DnscontrolNsRecord", {
  enumerable: true,
  get: function () {
    return ns_1.DnscontrolNsRecord;
  },
});
var porkbun_urlfwd_1 = require("./domain-modifier/record/porkbun-urlfwd");
Object.defineProperty(exports, "DnscontrolPorkbunUrlfwdRecord", {
  enumerable: true,
  get: function () {
    return porkbun_urlfwd_1.DnscontrolPorkbunUrlfwdRecord;
  },
});
var ptr_1 = require("./domain-modifier/record/ptr");
Object.defineProperty(exports, "DnscontrolPtrRecord", {
  enumerable: true,
  get: function () {
    return ptr_1.DnscontrolPtrRecord;
  },
});
var r53_alias_1 = require("./domain-modifier/record/r53-alias");
Object.defineProperty(exports, "DnscontrolR53AliasRecord", {
  enumerable: true,
  get: function () {
    return r53_alias_1.DnscontrolR53AliasRecord;
  },
});
var soa_1 = require("./domain-modifier/record/soa");
Object.defineProperty(exports, "DnscontrolSoaRecord", {
  enumerable: true,
  get: function () {
    return soa_1.DnscontrolSoaRecord;
  },
});
var srv_1 = require("./domain-modifier/record/srv");
Object.defineProperty(exports, "DnscontrolSrvRecord", {
  enumerable: true,
  get: function () {
    return srv_1.DnscontrolSrvRecord;
  },
});
var sshfp_1 = require("./domain-modifier/record/sshfp");
Object.defineProperty(exports, "DnscontrolSshfpRecord", {
  enumerable: true,
  get: function () {
    return sshfp_1.DnscontrolSshfpRecord;
  },
});
var svcb_1 = require("./domain-modifier/record/svcb");
Object.defineProperty(exports, "DnscontrolSvcbRecord", {
  enumerable: true,
  get: function () {
    return svcb_1.DnscontrolSvcbRecord;
  },
});
var tlsa_1 = require("./domain-modifier/record/tlsa");
Object.defineProperty(exports, "DnscontrolTlsaRecord", {
  enumerable: true,
  get: function () {
    return tlsa_1.DnscontrolTlsaRecord;
  },
});
var txt_1 = require("./domain-modifier/record/txt");
Object.defineProperty(exports, "DnscontrolTxtRecord", {
  enumerable: true,
  get: function () {
    return txt_1.DnscontrolTxtRecord;
  },
});
var url_1 = require("./domain-modifier/record/url");
Object.defineProperty(exports, "DnscontrolUrlRecord", {
  enumerable: true,
  get: function () {
    return url_1.DnscontrolUrlRecord;
  },
});
var url301_1 = require("./domain-modifier/record/url301");
Object.defineProperty(exports, "DnscontrolUrl301Record", {
  enumerable: true,
  get: function () {
    return url301_1.DnscontrolUrl301Record;
  },
});
var cf_single_redirect_1 = require("./domain-modifier/raw-record/cf-single-redirect");
Object.defineProperty(exports, "DnscontrolCfSingleRedirectRawRecord", {
  enumerable: true,
  get: function () {
    return cf_single_redirect_1.DnscontrolCfSingleRedirectRawRecord;
  },
});
