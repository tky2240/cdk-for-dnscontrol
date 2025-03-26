# CDK for dnscontrol

CDK for [dnscontrol](https://github.com/StackExchange/dnscontrol) simplifies DNS management using the Cloud Development Kit (CDK).

## Requirements

- Node.js >= 22
- Go >= 1.23.0

## Installation

Install the CLI and library:

```sh
# Install CLI
go install github.com/tky2240/cdk-for-dnscontrol/cdk-dnscontrol-cli@latest

# Install CDK library
npm install @tky2240/cdk-for-dnscontrol
```

## Usage

This example is based on [the official dnscontrol tutorial](https://docs.dnscontrol.org/getting-started/getting-started#id-3.-create-the-initial-dnsconfig.js).

### 1. Create a Stack

Create `lib/example-stack.ts`:

```typescript
// filepath: ./lib/example-stack.ts
import { Construct } from "constructs";
import {
  DnscontrolDomain,
  DnscontrolDomainProps,
  DnscontrolProvider,
  DnscontrolDomainProviderProps,
  DnscontrolRegistrar,
  DnscontrolStack,
  asIPv4Address,
} from "@tky2240/cdk-for-dnscontrol";

import { DnscontrolARecord } from "@cdk-dnscontrol/lib/domain-modifier/record";

import { A } from "@cdk-dnscontrol/lib/domain-modifier/function"

export class ExampleStack extends DnscontrolStack {
  constructor(scope: Construct, id: string) {
    super(scope, id, {});

    const provider = new DnscontrolProvider(this, "MyProvider", {
      providerName: "bind",
    });
    const registrar = new DnscontrolRegistrar(this, "MyRegistrar", {
      registrarName: "none",
    });

    new ExampleDomain(this, "MyDomain", {
      domainName: "example.com",
      registrar: registrar,
      domainProviderPropsList: [
        {
          domainProviderName: provider.providerName,
        },
      ],
    });
  }
}

interface ExampleDomainProps extends DnscontrolDomainProps {
  readonly domainName: string;
  readonly registrar: DnscontrolRegistrar;
  readonly domainProviderPropsList: readonly DnscontrolDomainProviderProps[];
}

export class ExampleDomain extends DnscontrolDomain {
  constructor(scope: DnscontrolStack, id: string, props: ExampleDomainProps) {
    super(scope, id, props);
    // CDK style
    new DnscontrolARecord(this, "MyARecord", {
      label: "@",
      ip: asIPv4Address("1.2.3.4"),
    });
    // or you can use dnscontrol style
    A(this, "@", "2.3.4.5")
  }
}
```

### 2. Create an Entry Point

Create `bin/index.ts`:

```typescript
// filepath: ./bin/index.ts
import { App } from "@tky2240/cdk-for-dnscontrol";
import { ExampleStack } from "../lib/example-stack";

const app = new App();

new ExampleStack(app, "ExampleStack");

app.synth();
```

### 3. Add Credentials

Create `creds.json`:

```json
// filepath: ./creds.json
{
  "bind": {
    "TYPE": "BIND"
  }
}
```

### 4. Apply DNS Configurations

Use the following commands to manage DNS configurations:

```sh
# Show configuration differences
cdk-dnscontrol-cli diff

# Apply DNS configurations
cdk-dnscontrol-cli apply
```

After applying, the zone file will be generated in the output directory.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## TODO
- [x] cdk: add helper function
- [ ] cdk: remove prefix at class name
- [ ] cli: remove hardcoded paths
- [x] add CI action