"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolElement = void 0;
const constructs_1 = require("constructs");
class DnscontrolElement extends constructs_1.Construct {
  elementType;
  constructor(scope, id, elementType) {
    super(scope, id);
    this.elementType = elementType;
  }
}
exports.DnscontrolElement = DnscontrolElement;
