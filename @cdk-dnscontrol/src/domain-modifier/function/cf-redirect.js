"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CF_REDIRECT = CF_REDIRECT;
const duration_1 = require("../../types/duration");
const cf_redirect_1 = require("../record/cf-redirect");
function CF_REDIRECT(scope, source, destination, ttl, isEnsuredAbsent, meta) {
    return new cf_redirect_1.DnscontrolCfRedirectRecord(scope, `CfRedirect:${source}:${destination}`, {
        source: source,
        destination: destination,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
    });
}
