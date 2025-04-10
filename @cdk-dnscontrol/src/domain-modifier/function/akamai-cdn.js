"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AKAMAI_CDN = AKAMAI_CDN;
const duration_1 = require("../../types/duration");
const akamai_cdn_1 = require("../record/akamai-cdn");
function AKAMAI_CDN(scope, label, target, ttl) {
    return new akamai_cdn_1.DnscontrolAkamaiCdnRecord(scope, `AkamaiCdn:${label}:${target}`, {
        target: target,
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWthbWFpLWNkbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFrYW1haS1jZG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxnQ0FXQztBQWRELG1EQUFnRDtBQUNoRCxxREFBaUU7QUFFakUsU0FBZ0IsVUFBVSxDQUN4QixLQUFnQixFQUNoQixLQUFhLEVBQ2IsTUFBYyxFQUNkLEdBQXFCO0lBRXJCLE9BQU8sSUFBSSxzQ0FBeUIsQ0FBQyxLQUFLLEVBQUUsYUFBYSxLQUFLLElBQUksTUFBTSxFQUFFLEVBQUU7UUFDMUUsTUFBTSxFQUFFLE1BQU07UUFDZCxLQUFLLEVBQUUsS0FBSztRQUNaLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7S0FDakQsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHsgRG5zY29udHJvbEFrYW1haUNkblJlY29yZCB9IGZyb20gXCIuLi9yZWNvcmQvYWthbWFpLWNkblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQUtBTUFJX0NETihcbiAgc2NvcGU6IENvbnN0cnVjdCxcbiAgbGFiZWw6IHN0cmluZyxcbiAgdGFyZ2V0OiBzdHJpbmcsXG4gIHR0bD86IG51bWJlciB8IHN0cmluZyxcbik6IERuc2NvbnRyb2xBa2FtYWlDZG5SZWNvcmQge1xuICByZXR1cm4gbmV3IERuc2NvbnRyb2xBa2FtYWlDZG5SZWNvcmQoc2NvcGUsIGBBa2FtYWlDZG46JHtsYWJlbH06JHt0YXJnZXR9YCwge1xuICAgIHRhcmdldDogdGFyZ2V0LFxuICAgIGxhYmVsOiBsYWJlbCxcbiAgICB0dGw6IHR0bCAhPSBudWxsID8gbmV3IER1cmF0aW9uKHR0bCkgOiB1bmRlZmluZWQsXG4gIH0pO1xufVxuIl19