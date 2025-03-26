"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CF_SINGLE_REDIRECT = CF_SINGLE_REDIRECT;
const duration_1 = require("../../types/duration");
const cf_single_redirect_1 = require("../raw-record/cf-single-redirect");
function CF_SINGLE_REDIRECT(scope, name, code, when, then, ttl) {
    return new cf_single_redirect_1.DnscontrolCfSingleRedirectRawRecord(scope, `CfSingleRedirect:${name}:${code}`, {
        name: name,
        code: code,
        when: when,
        then: then,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
