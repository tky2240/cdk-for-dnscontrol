"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AAAA = AAAA;
const duration_1 = require("../../types/duration");
const ipv6_1 = require("../../types/ipv6");
const aaaa_1 = require("../record/aaaa");
function AAAA(scope, label, ip, ttl) {
    return new aaaa_1.DnscontrolAAAARecord(scope, `AAAA:${label}:${ip}`, {
        ip: (0, ipv6_1.asIPv6Address)(ip),
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWFhYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFhYWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxvQkFXQztBQWZELG1EQUFnRDtBQUNoRCwyQ0FBaUQ7QUFDakQseUNBQXNEO0FBRXRELFNBQWdCLElBQUksQ0FDbEIsS0FBZ0IsRUFDaEIsS0FBYSxFQUNiLEVBQVUsRUFDVixHQUFxQjtJQUVyQixPQUFPLElBQUksMkJBQW9CLENBQUMsS0FBSyxFQUFFLFFBQVEsS0FBSyxJQUFJLEVBQUUsRUFBRSxFQUFFO1FBQzVELEVBQUUsRUFBRSxJQUFBLG9CQUFhLEVBQUMsRUFBRSxDQUFDO1FBQ3JCLEtBQUssRUFBRSxLQUFLO1FBQ1osR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztLQUNqRCxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2R1cmF0aW9uXCI7XG5pbXBvcnQgeyBhc0lQdjZBZGRyZXNzIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2lwdjZcIjtcbmltcG9ydCB7IERuc2NvbnRyb2xBQUFBUmVjb3JkIH0gZnJvbSBcIi4uL3JlY29yZC9hYWFhXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBBQUFBKFxuICBzY29wZTogQ29uc3RydWN0LFxuICBsYWJlbDogc3RyaW5nLFxuICBpcDogc3RyaW5nLFxuICB0dGw/OiBudW1iZXIgfCBzdHJpbmcsXG4pOiBEbnNjb250cm9sQUFBQVJlY29yZCB7XG4gIHJldHVybiBuZXcgRG5zY29udHJvbEFBQUFSZWNvcmQoc2NvcGUsIGBBQUFBOiR7bGFiZWx9OiR7aXB9YCwge1xuICAgIGlwOiBhc0lQdjZBZGRyZXNzKGlwKSxcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgdHRsOiB0dGwgIT0gbnVsbCA/IG5ldyBEdXJhdGlvbih0dGwpIDogdW5kZWZpbmVkLFxuICB9KTtcbn1cbiJdfQ==