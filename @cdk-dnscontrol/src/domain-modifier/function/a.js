"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = A;
const duration_1 = require("../../types/duration");
const ipv4_1 = require("../../types/ipv4");
const a_1 = require("../record/a");
function A(scope, label, ip, ttl, isEnsuredAbsent, meta) {
    return new a_1.DnscontrolARecord(scope, `A:${label}:${ip}`, {
        ip: (0, ipv4_1.asIPv4Address)(ip),
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxjQWVDO0FBbkJELG1EQUFnRDtBQUNoRCwyQ0FBaUQ7QUFDakQsbUNBQWdEO0FBRWhELFNBQWdCLENBQUMsQ0FDZixLQUFnQixFQUNoQixLQUFhLEVBQ2IsRUFBVSxFQUNWLEdBQXFCLEVBQ3JCLGVBQXlCLEVBQ3pCLElBQTZCO0lBRTdCLE9BQU8sSUFBSSxxQkFBaUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxLQUFLLElBQUksRUFBRSxFQUFFLEVBQUU7UUFDdEQsRUFBRSxFQUFFLElBQUEsb0JBQWEsRUFBQyxFQUFFLENBQUM7UUFDckIsS0FBSyxFQUFFLEtBQUs7UUFDWixHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ2hELGVBQWUsRUFBRSxlQUFlO1FBQ2hDLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHsgYXNJUHY0QWRkcmVzcyB9IGZyb20gXCIuLi8uLi90eXBlcy9pcHY0XCI7XG5pbXBvcnQgeyBEbnNjb250cm9sQVJlY29yZCB9IGZyb20gXCIuLi9yZWNvcmQvYVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQShcbiAgc2NvcGU6IENvbnN0cnVjdCxcbiAgbGFiZWw6IHN0cmluZyxcbiAgaXA6IHN0cmluZyxcbiAgdHRsPzogbnVtYmVyIHwgc3RyaW5nLFxuICBpc0Vuc3VyZWRBYnNlbnQ/OiBib29sZWFuLFxuICBtZXRhPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbik6IERuc2NvbnRyb2xBUmVjb3JkIHtcbiAgcmV0dXJuIG5ldyBEbnNjb250cm9sQVJlY29yZChzY29wZSwgYEE6JHtsYWJlbH06JHtpcH1gLCB7XG4gICAgaXA6IGFzSVB2NEFkZHJlc3MoaXApLFxuICAgIGxhYmVsOiBsYWJlbCxcbiAgICB0dGw6IHR0bCAhPSBudWxsID8gbmV3IER1cmF0aW9uKHR0bCkgOiB1bmRlZmluZWQsXG4gICAgaXNFbnN1cmVkQWJzZW50OiBpc0Vuc3VyZWRBYnNlbnQsXG4gICAgbWV0YTogbWV0YSxcbiAgfSk7XG59XG4iXX0=