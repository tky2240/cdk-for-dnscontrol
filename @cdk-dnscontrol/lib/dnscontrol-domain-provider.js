"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolDomainProvider = void 0;
const constructs_1 = require("constructs");
const DNS_CONTROL_DOMAIN_PROVIDER_SYMBOL = Symbol.for(
  "DnscontrolDomainProvider",
);
class DnscontrolDomainProvider extends constructs_1.Construct {
  domainProviderName;
  nameserverCount;
  constructor(scope, id, props) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_DOMAIN_PROVIDER_SYMBOL, {
      value: true,
    });
    this.domainProviderName = props.domainProviderName;
    this.nameserverCount = props.nameserverCount ?? -1;
  }
  static isDnscontrolDomainProvider(x) {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_DOMAIN_PROVIDER_SYMBOL in x
    );
  }
}
exports.DnscontrolDomainProvider = DnscontrolDomainProvider;
