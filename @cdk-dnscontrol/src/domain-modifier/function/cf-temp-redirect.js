"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CF_TEMP_REDIRECT = CF_TEMP_REDIRECT;
const duration_1 = require("../../types/duration");
const cf_temp_redirect_1 = require("../record/cf-temp-redirect");
function CF_TEMP_REDIRECT(scope, source, destination, ttl, isEnsuredAbsent, meta) {
    return new cf_temp_redirect_1.DnscontrolCfTempRedirectRecord(scope, `CfTempRedirect:${source}:${destination}`, {
        source: source,
        destination: destination,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
    });
}
