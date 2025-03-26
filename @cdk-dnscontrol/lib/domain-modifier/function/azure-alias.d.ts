import { Construct } from "constructs";
import { AzureAliasType, DnscontrolAzureAliasRecord } from "../record/azure-alias";
export declare function AZURE_ALIAS(scope: Construct, label: string, azureAliasType: AzureAliasType, target: string, ttl?: number | string): DnscontrolAzureAliasRecord;
