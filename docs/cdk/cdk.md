# cdk-for-dnscontrol API Documentation

## Classes & Functions

### App

- Entry point for the CDK application.
- `new App(config: AppConfig)`

### DnscontrolStack

- Stack for managing DNSControl configuration.
- `new DnscontrolStack(scope, id, props)`
- `synth(outdir: string)`: Generates the DNSControl IR file.

### DnscontrolDomain

- Manages domain configuration.
- `new DnscontrolDomain(scope, id, props)`
- `renderDomainConfig()`: Gets the domain configuration.

### DnscontrolRecord

- Abstract class for DNS records.
- Inherited by each record type (A, CNAME, MX, TXT, etc.).

### Record Creation Functions

- `A(scope, label, target, ...)`
- `CNAME(scope, label, target, ...)`
- `MX(scope, label, target, preference, ...)`
- `TXT(scope, label, target, ...)`
- `DNSKEY(scope, label, target, flag, protocol, algorithm, publickey, ...)`
- Many others

### Type Definitions

- `DnscontrolDnsConfig`: Type for overall DNSControl configuration
- `DnscontrolDomainConfig`: Type for domain configuration
- `DnscontrolRecordConfig`: Type for record configuration

## Reference

- For details, see the TypeScript type definition files and each record implementation.
