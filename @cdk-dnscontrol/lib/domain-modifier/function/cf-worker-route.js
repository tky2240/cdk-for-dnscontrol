"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CF_WORKER_ROUTE = CF_WORKER_ROUTE;
const duration_1 = require("../../types/duration");
const cf_worker_route_1 = require("../record/cf-worker-route");
function CF_WORKER_ROUTE(scope, pattern, script, ttl) {
    return new cf_worker_route_1.DnscontrolCfWorkerRouteRecord(scope, `CfWorkerRoute:${pattern}:${script}`, {
        pattern: pattern,
        script: script,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
