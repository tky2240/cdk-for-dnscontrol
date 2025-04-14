"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AZURE_ALIAS = AZURE_ALIAS;
const duration_1 = require("../../types/duration");
const azure_alias_1 = require("../record/azure-alias");
function AZURE_ALIAS(scope, label, azureAliasType, target, ttl, meta) {
    return new azure_alias_1.DnscontrolAzureAliasRecord(scope, `AzureAlias:${label}:${target}`, {
        target: target,
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        meta: meta,
        azureAliasType: azureAliasType,
    });
}
