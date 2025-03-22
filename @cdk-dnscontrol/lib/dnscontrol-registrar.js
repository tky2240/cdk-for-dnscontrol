"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolRegistrar = void 0;
const constructs_1 = require("constructs");
const DNS_CONTROL_REGISTRAR_SYMBOL = Symbol.for("DnscontrolRegistrar");
class DnscontrolRegistrar extends constructs_1.Construct {
  registrarName;
  registrarType;
  registrarMetadata;
  constructor(scope, id, props) {
    super(scope, id);
    Object.defineProperty(this, DNS_CONTROL_REGISTRAR_SYMBOL, { value: true });
    this.registrarName = props.registrarName;
    this.registrarType = props.registrarType ?? "-";
    this.registrarMetadata = props?.registrarMetadata;
  }
  static isDnscontrolRegistrar(x) {
    return (
      x != null && typeof x === "object" && DNS_CONTROL_REGISTRAR_SYMBOL in x
    );
  }
}
exports.DnscontrolRegistrar = DnscontrolRegistrar;
