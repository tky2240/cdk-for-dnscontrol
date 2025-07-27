# DnscontrolDomain

## Overview

The `DnscontrolDomain` class represents a domain managed by DNSControl. It collects providers, records, and other settings for a domain and outputs a configuration compatible with DNSControl.

## Constructor

```typescript
new DnscontrolDomain(scope: DnscontrolStack, id: string, props: DnscontrolDomainProps)
```

- `scope`: The parent `DnscontrolStack`.
- `id`: Unique identifier for the domain.
- `props.domainName`: Domain name (required).
- `props.tag`: Optional tag for the domain.
    - This tag is used for split horizon DNS.
- `props.registrar`: Registrar construct (optional).
- `props.domainProviderPropsList`: List of provider properties (required).
    - Each item should be an instance of `DnscontrolDomainProviderProps` that specifies the provider name and optional nameserver count.
    - The provider name must match a registered `DnscontrolProvider`.
- `props.defaultTtl`: Default TTL for records (optional).
- `props.isEnabledAutoDnssec`: Enable DNSSEC (optional).
- `props.isDisabledIgnoreSafetyCheck`: Disable safety check (optional).
- `props.shouldKeepExistingRecord`: Keep unknown records (optional).
- `props.parentNameservers`: Parent nameservers (optional).
- `props.parentNameserverTtl`: TTL for parent nameservers (optional).
- `props.route53ZoneId`: Route53 zone ID (optional).

## Properties

- `domainName: string`
- `tag?: string`
- `registrarName: string`
- `defaultTtl: Duration`
- `isEnabledAutoDnssec?: boolean`
- `isDisabledIgnoreSafetyCheck?: boolean`
- `shouldKeepExistingRecord?: boolean`
- `parentNameservers?: string[]`
- `parentNameserverTtl?: Duration`
- `route53ZoneId?: string`

## Methods

### renderDomainConfig

```typescript
renderDomainConfig(): DnscontrolDomainConfig
```
Renders the domain configuration as a JSON-compatible object for DNSControl.

### isDnscontrolDomain

```typescript
static isDnscontrolDomain(x: unknown): x is DnscontrolDomain
```

Type guard to check if an object is a `DnscontrolDomain`.

## Example

```typescript
import { DnscontrolDomain, DnscontrolStack } from "@tky2240/cdk-for-dnscontrol";

class MyDnsStack extends DnscontrolStack {
  constructor(scope: Construct, id: string) {
    super(scope, id, {});
    const provider = new DnscontrolProvider(this, "MyProvider", {
      providerName: "bind",
    });
    const registrar = new DnscontrolRegistrar(this, "MyRegistrar", {
      registrarName: "none",
    });
    new DnscontrolDomain(this, "ExampleDomain", {
      domainName: "example.com",
      domainProviderPropsList: [
        { domainProviderName: provider.providerName }
      ],
      registrar: registrar,
    });
  }
}
```
