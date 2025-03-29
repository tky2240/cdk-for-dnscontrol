import { Construct } from "constructs";
import { DnscontrolAzureAliasRecordConfig } from "../../types/dnscontrol-record-config";
import { Duration } from "../../types/duration";
import { DnscontrolRecord } from "./dnscontrol-record";

const DNS_CONTROL_AZURE_ALIAS_RECORD_SYMBOL = Symbol.for(
  "DnscontrolAzureAliasRecord",
);

// eslint-disable-next-line
const azureAliasTypeString = ["A", "AAAA", "CNAME"] as const;

export type AzureAliasType = (typeof azureAliasTypeString)[number];

export interface DnscontrolAzureAliasRecordProps {
  readonly label: string;
  readonly target: string;
  readonly azureAliasType: AzureAliasType;
  readonly ttl?: Duration | undefined;
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
  public renderRecordConfig(): DnscontrolAzureAliasRecordConfig {
    return {
      name: this.name,
      target: this.target,
      recordType: this.recordType,
      ttl: this.ttl?.toSeconds(),
      azureAlias: {
        type: this.azureAliasType,
      },
      meta: {
        orig_custom_type: "AZURE_ALIAS",
      },
    };
  }
}
