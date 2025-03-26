"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CF_TMP_REDIRECT = CF_TMP_REDIRECT;
const duration_1 = require("../../types/duration");
const cf_tmp_redirect_1 = require("../record/cf-tmp-redirect");
function CF_TMP_REDIRECT(scope, source, destination, ttl) {
    return new cf_tmp_redirect_1.DnscontrolCfTmpRedirectRecord(scope, `CfTmpRedirect:${source}:${destination}`, {
        source: source,
        destination: destination,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
