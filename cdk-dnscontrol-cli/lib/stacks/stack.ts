// filepath: ./lib/example-stack.ts
// import { Construct } from "constructs";
// import {
//   DnscontrolDomain,
//   DnscontrolDomainProps,
//   DnscontrolProvider,
//   DnscontrolDomainProviderProps,
//   DnscontrolRegistrar,
//   DnscontrolStack,
//   App,
// } from "@tky2240/cdk-for-dnscontrol";

// import * as record from "@cdk-dnscontrol/lib/domain-modifier/record";

// import * as recordFunction from "@cdk-dnscontrol/lib/domain-modifier/function"

import { Construct } from "../../@cdk-dnscontrol/node_modules/constructs";
import {
  DnscontrolDomain,
  DnscontrolDomainProps,
  DnscontrolProvider,
  DnscontrolDomainProviderProps,
  DnscontrolRegistrar,
  DnscontrolStack,
  App,
} from "../../@cdk-dnscontrol/src";

import * as recordFunction from "../../@cdk-dnscontrol/src/domain-modifier/function";

export class MigrationStack extends DnscontrolStack {
  constructor(scope: Construct, id: string) {
    super(scope, id, {});

    
    const providerCloudflare = new DnscontrolProvider(this, "Cloudflare-CLOUDFLAREAPI-0", {
      providerName: "Cloudflare",
      providerType: "CLOUDFLAREAPI",
      providerMetadata: {
        
      },
    });
    

    
    const registrarThirdparty = new DnscontrolRegistrar(this, "Third-Party-NONE-0", {
      registrarName: "Third-Party",
      registrarType: "NONE",
      registrarMetadata: {
        
      },
    });
    

    
    new FoocomDomain(this, "foo.com", {
      domainName: "foo.com",
      registrar: registrarThirdparty,
      domainProviderPropsList: [
        
        {
          domainProviderName: providerCloudflare.providerName,
          nameserverCount: -1,
        },
        
      ],
      isEnabledAutoDnssec: false,
      isDisabledIgnoreSafetyCheck: false,
      shouldKeepExistingRecord: false,
      parentNameservers: [
      
      ],
    });
    
  }
}



interface FoocomDomainProps extends DnscontrolDomainProps {
  readonly domainName: string;
  readonly registrar: DnscontrolRegistrar;
  readonly domainProviderPropsList: DnscontrolDomainProviderProps[];
}

export class FoocomDomain extends DnscontrolDomain {
  constructor(scope: DnscontrolStack, id: string, props: FoocomDomainProps) {
    super(scope, id, props);
    
      
    recordFunction.A(this, "@", "1.2.3.4", 300, {
        
    });
      
    
  }
}


const app = new App();

new MigrationStack(app, "MigrationStack");
app.synth();