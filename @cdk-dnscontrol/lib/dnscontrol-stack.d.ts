import { Construct } from "constructs";
export interface DnscontrolStackProps {
    stackMetadataPath?: string;
}
export declare abstract class DnscontrolStack extends Construct {
    private readonly stackMetadataPath;
    constructor(scope: Construct, id: string, props: DnscontrolStackProps);
    static isDnscontrolStack(x: unknown): x is DnscontrolStack;
    synth(outdir: string): void;
}
