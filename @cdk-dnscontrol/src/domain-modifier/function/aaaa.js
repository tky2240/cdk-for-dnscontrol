"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AAAA = AAAA;
const duration_1 = require("../../types/duration");
const ipv6_1 = require("../../types/ipv6");
const aaaa_1 = require("../record/aaaa");
function AAAA(scope, label, ip, ttl, isEnsuredAbsent, meta) {
    return new aaaa_1.DnscontrolAAAARecord(scope, `AAAA:${label}:${ip}`, {
        ip: (0, ipv6_1.asIPv6Address)(ip),
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFhYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFhYWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxvQkFlQztBQW5CRCxtREFBZ0Q7QUFDaEQsMkNBQWlEO0FBQ2pELHlDQUFzRDtBQUV0RCxTQUFnQixJQUFJLENBQ2xCLEtBQWdCLEVBQ2hCLEtBQWEsRUFDYixFQUFVLEVBQ1YsR0FBcUIsRUFDckIsZUFBeUIsRUFDekIsSUFBNkI7SUFFN0IsT0FBTyxJQUFJLDJCQUFvQixDQUFDLEtBQUssRUFBRSxRQUFRLEtBQUssSUFBSSxFQUFFLEVBQUUsRUFBRTtRQUM1RCxFQUFFLEVBQUUsSUFBQSxvQkFBYSxFQUFDLEVBQUUsQ0FBQztRQUNyQixLQUFLLEVBQUUsS0FBSztRQUNaLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDaEQsZUFBZSxFQUFFLGVBQWU7UUFDaEMsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2R1cmF0aW9uXCI7XG5pbXBvcnQgeyBhc0lQdjZBZGRyZXNzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2lwdjZcIjtcbmltcG9ydCB7IERuc2NvbnRyb2xBQUFBUmVjb3JkIH0gZnJvbSBcIi4uL3JlY29yZC9hYWFhXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBQUFBKFxuICBzY29wZTogQ29uc3RydWN0LFxuICBsYWJlbDogc3RyaW5nLFxuICBpcDogc3RyaW5nLFxuICB0dGw/OiBudW1iZXIgfCBzdHJpbmcsXG4gIGlzRW5zdXJlZEFic2VudD86IGJvb2xlYW4sXG4gIG1ldGE/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuKTogRG5zY29udHJvbEFBQUFSZWNvcmQge1xuICByZXR1cm4gbmV3IERuc2NvbnRyb2xBQUFBUmVjb3JkKHNjb3BlLCBgQUFBQToke2xhYmVsfToke2lwfWAsIHtcbiAgICBpcDogYXNJUHY2QWRkcmVzcyhpcCksXG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHR0bDogdHRsICE9IG51bGwgPyBuZXcgRHVyYXRpb24odHRsKSA6IHVuZGVmaW5lZCxcbiAgICBpc0Vuc3VyZWRBYnNlbnQ6IGlzRW5zdXJlZEFic2VudCxcbiAgICBtZXRhOiBtZXRhLFxuICB9KTtcbn1cbiJdfQ==