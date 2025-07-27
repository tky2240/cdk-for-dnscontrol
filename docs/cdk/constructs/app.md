# App

## Overview

The `App` class is the entry point for a cdk-for-dnscontrol application. It manages the output directory and synthesizes all DNSControl stacks defined in the construct tree.

## Constructor

```typescript
new App(config?: AppConfig)
```

- `config.outDir` (optional): Output directory for generated files. Defaults to `"cdk.out"`.

## Properties

- `outDir: string`  
  The output directory for synthesized files.

## Methods

### synth

```typescript
app.synth(): void
```

Synthesizes all `DnscontrolStack` instances in the construct tree and writes their IR files to the output directory.

## Usage Example

```typescript
import { App, DnscontrolStack } from "@tky2240/cdk-for-dnscontrol";

const app = new App({ outDir: "output" });
new MyDnsStack(app, "MyStack", { /* stack props */ });
app.synth();
```
