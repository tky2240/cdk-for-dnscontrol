import { App } from "../lib/app";
import { TestStack } from "../test/stacks/test-stack";

const app = new App();

new TestStack(app, "TestStack");

app.synth();
