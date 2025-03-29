"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = A;
const duration_1 = require("../../types/duration");
const ipv4_1 = require("../../types/ipv4");
const a_1 = require("../record/a");
function A(scope, label, ip, ttl) {
    return new a_1.DnscontrolARecord(scope, `A:${label}:${ip}`, {
        ip: (0, ipv4_1.asIPv4Address)(ip),
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxjQVdDO0FBZkQsbURBQWdEO0FBQ2hELDJDQUFpRDtBQUNqRCxtQ0FBZ0Q7QUFFaEQsU0FBZ0IsQ0FBQyxDQUNmLEtBQWdCLEVBQ2hCLEtBQWEsRUFDYixFQUFVLEVBQ1YsR0FBcUI7SUFFckIsT0FBTyxJQUFJLHFCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLEtBQUssSUFBSSxFQUFFLEVBQUUsRUFBRTtRQUN0RCxFQUFFLEVBQUUsSUFBQSxvQkFBYSxFQUFDLEVBQUUsQ0FBQztRQUNyQixLQUFLLEVBQUUsS0FBSztRQUNaLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7S0FDakQsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHsgYXNJUHY0QWRkcmVzcyB9IGZyb20gXCIuLi8uLi90eXBlcy9pcHY0XCI7XG5pbXBvcnQgeyBEbnNjb250cm9sQVJlY29yZCB9IGZyb20gXCIuLi9yZWNvcmQvYVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQShcbiAgc2NvcGU6IENvbnN0cnVjdCxcbiAgbGFiZWw6IHN0cmluZyxcbiAgaXA6IHN0cmluZyxcbiAgdHRsPzogbnVtYmVyIHwgc3RyaW5nLFxuKTogRG5zY29udHJvbEFSZWNvcmQge1xuICByZXR1cm4gbmV3IERuc2NvbnRyb2xBUmVjb3JkKHNjb3BlLCBgQToke2xhYmVsfToke2lwfWAsIHtcbiAgICBpcDogYXNJUHY0QWRkcmVzcyhpcCksXG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHR0bDogdHRsICE9IG51bGwgPyBuZXcgRHVyYXRpb24odHRsKSA6IHVuZGVmaW5lZCxcbiAgfSk7XG59XG4iXX0=