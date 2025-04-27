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

### Write CDK

This example is based on [the official dnscontrol tutorial](https://docs.dnscontrol.org/getting-started/getting-started#id-3.-create-the-initial-dnsconfig.js).

#### 1. Create a Stack

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

import { DnscontrolARecord } from "@tky2240/cdk-for-dnscontrol/domain-modifier/record";

import * as recordFunction from "@tky2240/cdk-for-dnscontrol/domain-modifier/function"

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
    recordFunction.A(this, "@", "2.3.4.5");
  }
}
```

#### 2. Create an Entry Point

Create `bin/index.ts`:

```typescript
// filepath: ./bin/index.ts
import { App } from "@tky2240/cdk-for-dnscontrol";
import { ExampleStack } from "../lib/example-stack";

const app = new App();

new ExampleStack(app, "ExampleStack");

app.synth();
```

#### 3. Add Credentials

Create `creds.json`:

```json
// filepath: ./creds.json
{
  "bind": {
    "TYPE": "BIND"
  }
}
```

#### 4. Apply DNS Configurations

Use the following commands to manage DNS configurations:

```sh
# Show configuration differences
cdk-dnscontrol-cli diff

# Deploy DNS configurations
cdk-dnscontrol-cli deploy
```

After applying, the zone file will be generated in the output directory.

### Migrate from dnsconfig.js

#### Limitations

- Cannot use `IMPORT` and `TRANSFORM`.
- The following functions are not supported:
  - `FETCH`
  - `HASH`
  - `PANIC`
  - `getConfiguredDomains`
- Cannot use `require` and `require_glob`.
- If you use `D_EXTEND`, records are flattened in the CDK code.
  - It is recommended to split records into constructs instead of using `D_EXTEND`.

#### 1. Migrate from dnsconfig.js

Use the following command to migrate from `dnsconfig.js`:

```bash
cdk-dnscontrol migrate
```

#### 2. Create an Entry Point

Create `bin/index.ts`:

```typescript
// filepath: ./bin/index.ts
import { App } from "@tky2240/cdk-for-dnscontrol";
import { MigrationStack } from "../lib/stacks";

const app = new App();

new MigrationStack(app, "MigrationStack");

app.synth();
```

#### 3. Add Credentials

Create `creds.json`:

```json
// filepath: ./creds.json
{
  "bind": {
    "TYPE": "BIND"
  }
}
```

#### 4. Apply DNS Configurations

Use the following commands to manage DNS configurations:

```sh
# Show configuration differences
cdk-dnscontrol-cli diff

# Deploy DNS configurations
cdk-dnscontrol-cli deploy
```

After applying, the zone file will be generated in the output directory.

## CLI Options

### diff

The `diff` command compares the current DNS configurations with the desired state defined in your CDK code. It synthesizes the CDK application and displays the differences without applying any changes.

```sh
cdk-dnscontrol-cli diff
```

Use the `--cdk-entry-point` (or `-i`) flag to specify a custom entry point for the CDK application:

```sh
cdk-dnscontrol-cli diff --cdk-entry-point ./custom-entry.ts
```

### deploy

The `deploy` command applies the desired DNS configurations defined in your CDK code. It synthesizes the CDK application and pushes the changes to the DNS provider.

```sh
cdk-dnscontrol-cli deploy
```

Use the `--cdk-entry-point` (or `-i`) flag to specify a custom entry point for the CDK application:

```sh
cdk-dnscontrol-cli deploy --cdk-entry-point ./custom-entry.ts
```

### migrate

The `migrate` command helps convert an existing `dnsconfig.js` file into CDK code. It generates CDK constructs and stacks based on the DNS configurations defined in the `dnsconfig.js` file.

```sh
cdk-dnscontrol-cli migrate
```

Use the following flags to customize the migration process:

- `--dnsconfig` (or `-d`): Specify the path to the `dnsconfig.js` file. Defaults to `./dnsconfig.js`.
- `--outputDir` (or `-o`): Specify the output directory for the generated CDK code. Defaults to `./lib/stacks`.

Example:

```sh
cdk-dnscontrol-cli migrate --dnsconfig ./path/to/dnsconfig.js --outputDir ./custom/output/dir
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Roadmap

- **General**
  - [ ] Publish jsii packages
  - [ ] Write documentation:
    - [ ] Examples
    - [ ] API docs
    - [ ] Migration guide
    - [ ] Tutorial
    - [ ] FAQ
  - [ ] Add CI/CD
- **CDK**
  - [ ] Add Aspects
  - [ ] Add CDK constructs
- **CLI**
  - [ ] Support other languages
  - [ ] Add options for `creds.json`
