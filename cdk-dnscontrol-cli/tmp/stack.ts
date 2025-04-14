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

    

    

    
    
    new A9993e364706816aba3e25717850c26c9cd0d89dDomain(this, "a9993e364706816aba3e25717850c26c9cd0d89d", {
      domainName: "a9993e364706816aba3e25717850c26c9cd0d89d",
      
      domainProviderPropsList: [
        
      ],
      
      
      
      
    });
    
  }
}



interface A9993e364706816aba3e25717850c26c9cd0d89dDomainProps extends DnscontrolDomainProps {
  readonly domainName: string;
  readonly registrar?: DnscontrolRegistrar;
  readonly domainProviderPropsList: DnscontrolDomainProviderProps[];
}

export class A9993e364706816aba3e25717850c26c9cd0d89dDomain extends DnscontrolDomain {
  constructor(scope: DnscontrolStack, id: string, props: A9993e364706816aba3e25717850c26c9cd0d89dDomainProps) {
    super(scope, id, props);
    
  }
}


const app = new App();

new MigrationStack(app, "MigrationStack");
app.synth();