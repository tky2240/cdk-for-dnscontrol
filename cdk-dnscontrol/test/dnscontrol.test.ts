import { App } from "../lib/app";
import { TestStack } from "./stacks/test-stack";
describe("DnscontrolStack", () => {
  test("Empty Stack", () => {
    const app = new App();
    new TestStack(app, "MyTestStack");
    expect(app.synth()).toBeUndefined();
  });
});
