import { Construct, IConstruct } from "constructs";
import { DnscontrolStack } from "./dnscontrol-stack";

export interface AppConfig {
  readonly outDir?: string;
}

export class App extends Construct {
  public readonly outDir: string;
  constructor(config: AppConfig = {}) {
    // eslint-disable-next-line
    super(undefined as any, "");
    this.outDir = config.outDir ?? "cdk.out";
  }
  public synth(): void {
    const stacks = getStacks(this);
    for (const stack of stacks) {
      stack.synth(this.outDir);
    }
  }
}

function getStacks(
  node: IConstruct,
  stacks: DnscontrolStack[] = [],
): DnscontrolStack[] {
  if (DnscontrolStack.isDnscontrolStack(node)) {
    stacks.push(node);
  }
  for (const child of node.node.children) {
    getStacks(child, stacks);
  }
  return stacks;
}
