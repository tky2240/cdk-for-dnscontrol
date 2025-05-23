"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SRV = SRV;
const duration_1 = require("../../types/duration");
const srv_1 = require("../record/srv");
function SRV(scope, label, priority, weight, port, target, ttl, isEnsuredAbsent, meta) {
    return new srv_1.DnscontrolSrvRecord(scope, `Srv:${label}:${priority}:${weight}:${port}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
        priority: priority,
        weight: weight,
        port: port,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3J2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3J2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsa0JBeUJDO0FBNUJELG1EQUFnRDtBQUNoRCx1Q0FBb0Q7QUFFcEQsU0FBZ0IsR0FBRyxDQUNqQixLQUFnQixFQUNoQixLQUFhLEVBQ2IsUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLElBQVksRUFDWixNQUFjLEVBQ2QsR0FBcUIsRUFDckIsZUFBeUIsRUFDekIsSUFBNkI7SUFFN0IsT0FBTyxJQUFJLHlCQUFtQixDQUM1QixLQUFLLEVBQ0wsT0FBTyxLQUFLLElBQUksUUFBUSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFLEVBQ3REO1FBQ0UsS0FBSyxFQUFFLEtBQUs7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDaEQsZUFBZSxFQUFFLGVBQWU7UUFDaEMsSUFBSSxFQUFFLElBQUk7UUFDVixRQUFRLEVBQUUsUUFBUTtRQUNsQixNQUFNLEVBQUUsTUFBTTtRQUNkLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFNydlJlY29yZCB9IGZyb20gXCIuLi9yZWNvcmQvc3J2XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTUlYoXG4gIHNjb3BlOiBDb25zdHJ1Y3QsXG4gIGxhYmVsOiBzdHJpbmcsXG4gIHByaW9yaXR5OiBudW1iZXIsXG4gIHdlaWdodDogbnVtYmVyLFxuICBwb3J0OiBudW1iZXIsXG4gIHRhcmdldDogc3RyaW5nLFxuICB0dGw/OiBudW1iZXIgfCBzdHJpbmcsXG4gIGlzRW5zdXJlZEFic2VudD86IGJvb2xlYW4sXG4gIG1ldGE/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuKTogRG5zY29udHJvbFNydlJlY29yZCB7XG4gIHJldHVybiBuZXcgRG5zY29udHJvbFNydlJlY29yZChcbiAgICBzY29wZSxcbiAgICBgU3J2OiR7bGFiZWx9OiR7cHJpb3JpdHl9OiR7d2VpZ2h0fToke3BvcnR9OiR7dGFyZ2V0fWAsXG4gICAge1xuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICB0dGw6IHR0bCAhPSBudWxsID8gbmV3IER1cmF0aW9uKHR0bCkgOiB1bmRlZmluZWQsXG4gICAgICBpc0Vuc3VyZWRBYnNlbnQ6IGlzRW5zdXJlZEFic2VudCxcbiAgICAgIG1ldGE6IG1ldGEsXG4gICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICB3ZWlnaHQ6IHdlaWdodCxcbiAgICAgIHBvcnQ6IHBvcnQsXG4gICAgfSxcbiAgKTtcbn1cbiJdfQ==