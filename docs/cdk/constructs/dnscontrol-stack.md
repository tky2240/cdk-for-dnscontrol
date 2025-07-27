# DnscontrolStack

## Overview

The `DnscontrolStack` class represents a stack for managing DNSControl configuration. It collects domain, provider, and registrar constructs and outputs a IR file.

## Constructor

```typescript
new DnscontrolStack(scope: Construct, id: string, props?: DnscontrolStackProps)
```

- `scope`: Parent construct.
- `id`: Unique identifier for the stack.
- `props.stackMetadataPath` (optional): Output file name for the stack metadata (default: `"meta.json"`).

## Methods

### synth

```typescript
synth(outdir: string): void
```

Synthesizes the DNSControl configuration and writes it as IR to the specified output directory.
This method usually should be called by the `App` class.

## Usage Example

```typescript
import { App, DnscontrolStack } from "@tky2240/cdk-for-dnscontrol";

const app = new App();
class MyDnsStack extends DnscontrolStack {
  // define domains, providers, registrars here
}
new MyDnsStack(app, "MyStack");
app.synth();
```

## Notes

- All domains, providers, and registrars added to the stack will be included in the output.
- The output file will be placed in the directory specified by `App.outDir`.
