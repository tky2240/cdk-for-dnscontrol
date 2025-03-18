import { Construct } from "constructs";
import { DnscontrolAzureAliasRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_AZURE_ALIAS_RECORD_SYMBOL = Symbol.for(
  "DnscontrolAzureAliasRecord",
);

const azureAliasTypeString = ["A", "AAAA", "CNAME"] as const;

type AzureAliasType = (typeof azureAliasTypeString)[number];

export interface DnscontrolAzureAliasRecordProps {
  readonly label: string;
  readonly target: string;
  readonly azureAliasType: AzureAliasType;
  readonly ttl?: Duration;
}

export class DnscontrolAzureAliasRecord extends DnscontrolRecord {
  readonly azureAliasType: AzureAliasType;
  constructor(
    scope: Construct,
    id: string,
    props: DnscontrolAzureAliasRecordProps,
  ) {
    super(scope, id, {
      recordType: "AZURE_ALIAS",
      label: props.label,
      target: props.target,
      ttl: props.ttl,
    });
    this.azureAliasType = props.azureAliasType;
  }
  public static isDnscontrolAzureAliasRecord(
    x: unknown,
  ): x is DnscontrolAzureAliasRecord {
    return (
      x != null &&
      typeof x === "object" &&
      DNS_CONTROL_AZURE_ALIAS_RECORD_SYMBOL in x
    );
  }
  public getRecordConfig(): DnscontrolAzureAliasRecordConfig {
    return {
      name: this.name,
      target: this.target,
      type: this.recordType,
      ttl: this.ttl?.toSeconds(),
      azure_alias: {
        type: this.azureAliasType,
      },
      meta: {},
    };
  }
}
