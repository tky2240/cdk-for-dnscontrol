"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLOUDNS_WR = CLOUDNS_WR;
const duration_1 = require("../../types/duration");
const cloudns_wr_1 = require("../record/cloudns-wr");
function CLOUDNS_WR(scope, label, target, ttl) {
    return new cloudns_wr_1.DnscontrolCloudnsWrRecord(scope, `CloudnsWr:${label}:${target}`, {
        target: target,
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRucy13ci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb3VkbnMtd3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxnQ0FXQztBQWRELG1EQUFnRDtBQUNoRCxxREFBaUU7QUFFakUsU0FBZ0IsVUFBVSxDQUN4QixLQUFnQixFQUNoQixLQUFhLEVBQ2IsTUFBYyxFQUNkLEdBQXFCO0lBRXJCLE9BQU8sSUFBSSxzQ0FBeUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxLQUFLLElBQUksTUFBTSxFQUFFLEVBQUU7UUFDMUUsTUFBTSxFQUFFLE1BQU07UUFDZCxLQUFLLEVBQUUsS0FBSztRQUNaLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7S0FDakQsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHsgRG5zY29udHJvbENsb3VkbnNXclJlY29yZCB9IGZyb20gXCIuLi9yZWNvcmQvY2xvdWRucy13clwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ0xPVUROU19XUihcbiAgc2NvcGU6IENvbnN0cnVjdCxcbiAgbGFiZWw6IHN0cmluZyxcbiAgdGFyZ2V0OiBzdHJpbmcsXG4gIHR0bD86IG51bWJlciB8IHN0cmluZyxcbik6IERuc2NvbnRyb2xDbG91ZG5zV3JSZWNvcmQge1xuICByZXR1cm4gbmV3IERuc2NvbnRyb2xDbG91ZG5zV3JSZWNvcmQoc2NvcGUsIGBDbG91ZG5zV3I6JHtsYWJlbH06JHt0YXJnZXR9YCwge1xuICAgIHRhcmdldDogdGFyZ2V0LFxuICAgIGxhYmVsOiBsYWJlbCxcbiAgICB0dGw6IHR0bCAhPSBudWxsID8gbmV3IER1cmF0aW9uKHR0bCkgOiB1bmRlZmluZWQsXG4gIH0pO1xufVxuIl19