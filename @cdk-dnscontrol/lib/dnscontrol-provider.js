"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolProvider = void 0;
const constructs_1 = require("constructs");
const DNS_CONTROL_PROVIDER_SYMBOL = Symbol.for("DnscontrolProvider");
class DnscontrolProvider extends constructs_1.Construct {
  providerName;
  providerType;
  providerMetadata;
  constructor(scope, id, props) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_PROVIDER_SYMBOL, { value: true });
    this.providerName = props.providerName;
    this.providerType = props.providerType ?? "-";
    this.providerMetadata = props.providerMetadata;
  }
  static isDnscontrolProvider(x) {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_PROVIDER_SYMBOL in x
    );
  }
}
exports.DnscontrolProvider = DnscontrolProvider;
