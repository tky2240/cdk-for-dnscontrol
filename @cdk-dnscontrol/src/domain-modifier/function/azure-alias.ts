import { Construct } from "constructs";
import { Duration } from "../../types/duration";
import {
  AzureAliasType,
  DnscontrolAzureAliasRecord,
} from "../record/azure-alias";

export function AZURE_ALIAS(
  scope: Construct,
  label: string,
  azureAliasType: AzureAliasType,
  target: string,
  ttl?: number | string,
  meta?: Record<string, string>,
): DnscontrolAzureAliasRecord {
  return new DnscontrolAzureAliasRecord(
    scope,
    `AzureAlias:${label}:${target}`,
    {
      target: target,
      label: label,
      ttl: ttl != null ? new Duration(ttl) : undefined,
      meta: meta,
      azureAliasType: azureAliasType,
    },
  );
}
