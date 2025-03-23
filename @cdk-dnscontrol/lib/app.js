"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const constructs_1 = require("constructs");
const dnscontrol_stack_1 = require("./dnscontrol-stack");
class App extends constructs_1.Construct {
    outDir;
    constructor(config = {}) {
        super(undefined, "");
        this.outDir = config.outDir ?? "cdk.out";
    }
    synth() {
        const stacks = getStacks(this);
        for (const stack of stacks) {
            stack.synth(this.outDir);
        }
    }
}
exports.App = App;
function getStacks(node, stacks = []) {
    if (dnscontrol_stack_1.DnscontrolStack.isDnscontrolStack(node)) {
        stacks.push(node);
    }
    for (const child of node.node.children) {
        getStacks(child, stacks);
    }
    return stacks;
}
