import { Construct } from "constructs";
import { AzureAliasType, DnscontrolAzureAliasRecord } from "../record/azure-alias";
import { Duration } from "../../types/duration";

export function AZURE_ALIAS(
  scope: Construct,
  label: string,
  azureAliasType: AzureAliasType,
  target: string,
  ttl?: number | string
): DnscontrolAzureAliasRecord {
  return new DnscontrolAzureAliasRecord(scope, `AzureAlias:${label}:${target}`, {
    target: target,
    label: label,
    ttl: ttl != null ? new Duration(ttl) : undefined,
    azureAliasType: azureAliasType,
  });
}
