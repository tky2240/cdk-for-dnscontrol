"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SRV = SRV;
const duration_1 = require("../../types/duration");
const srv_1 = require("../record/srv");
function SRV(scope, label, priority, weight, port, target, ttl) {
    return new srv_1.DnscontrolSrvRecord(scope, `Srv:${label}:${priority}:${weight}:${port}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        priority: priority,
        weight: weight,
        port: port,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3J2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3J2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsa0JBcUJDO0FBeEJELG1EQUFnRDtBQUNoRCx1Q0FBb0Q7QUFFcEQsU0FBZ0IsR0FBRyxDQUNqQixLQUFnQixFQUNoQixLQUFhLEVBQ2IsUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLElBQVksRUFDWixNQUFjLEVBQ2QsR0FBcUI7SUFFckIsT0FBTyxJQUFJLHlCQUFtQixDQUM1QixLQUFLLEVBQ0wsT0FBTyxLQUFLLElBQUksUUFBUSxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFLEVBQ3REO1FBQ0UsS0FBSyxFQUFFLEtBQUs7UUFDWixNQUFNLEVBQUUsTUFBTTtRQUNkLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDaEQsUUFBUSxFQUFFLFFBQVE7UUFDbEIsTUFBTSxFQUFFLE1BQU07UUFDZCxJQUFJLEVBQUUsSUFBSTtLQUNYLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXMvZHVyYXRpb25cIjtcbmltcG9ydCB7IERuc2NvbnRyb2xTcnZSZWNvcmQgfSBmcm9tIFwiLi4vcmVjb3JkL3NydlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gU1JWKFxuICBzY29wZTogQ29uc3RydWN0LFxuICBsYWJlbDogc3RyaW5nLFxuICBwcmlvcml0eTogbnVtYmVyLFxuICB3ZWlnaHQ6IG51bWJlcixcbiAgcG9ydDogbnVtYmVyLFxuICB0YXJnZXQ6IHN0cmluZyxcbiAgdHRsPzogbnVtYmVyIHwgc3RyaW5nLFxuKTogRG5zY29udHJvbFNydlJlY29yZCB7XG4gIHJldHVybiBuZXcgRG5zY29udHJvbFNydlJlY29yZChcbiAgICBzY29wZSxcbiAgICBgU3J2OiR7bGFiZWx9OiR7cHJpb3JpdHl9OiR7d2VpZ2h0fToke3BvcnR9OiR7dGFyZ2V0fWAsXG4gICAge1xuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICB0dGw6IHR0bCAhPSBudWxsID8gbmV3IER1cmF0aW9uKHR0bCkgOiB1bmRlZmluZWQsXG4gICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICB3ZWlnaHQ6IHdlaWdodCxcbiAgICAgIHBvcnQ6IHBvcnQsXG4gICAgfSxcbiAgKTtcbn1cbiJdfQ==