import { Construct } from "constructs";
export interface AppConfig {
  outDir?: string;
}
export declare class App extends Construct {
  readonly outDir: string;
  constructor(config?: AppConfig);
  synth(): void;
}
