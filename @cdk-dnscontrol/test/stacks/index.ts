import { App } from "../../src/app";
import { TestStack } from "./test-stack";

const app = new App();

new TestStack(app, "TestStack");

app.synth();
