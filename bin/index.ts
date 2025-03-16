import { App } from "../lib/app";
import { DnscontrolStack } from "../lib/dnscontrol-stack";

const app = new App();

class TestStack extends DnscontrolStack {
  constructor(scope: App, id: string) {
    super(scope, id, {});
  }
}

new TestStack(app, "TestStack");
