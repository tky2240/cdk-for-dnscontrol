import { TestStack } from "../bin/test-stack";
import { App } from "../lib/app";
describe("DnscontrolStack", () => {
  test("Empty Stack", () => {
    const app = new App();
    new TestStack(app, "MyTestStack");
    // expect(stack).toMatchObject({ hoge: "fuga" });
    expect(app.synth()).toBeUndefined();
  });
});
