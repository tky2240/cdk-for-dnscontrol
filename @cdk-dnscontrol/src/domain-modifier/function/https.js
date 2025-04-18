"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPS = HTTPS;
const duration_1 = require("../../types/duration");
const https_1 = require("../record/https");
function HTTPS(scope, label, priority, target, params, ttl) {
    return new https_1.DnscontrolHttpsRecord(scope, `Https:${label}:${priority}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        priority: priority,
        params: params,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLHNCQW1CQztBQXRCRCxtREFBZ0Q7QUFDaEQsMkNBQXdEO0FBRXhELFNBQWdCLEtBQUssQ0FDbkIsS0FBZ0IsRUFDaEIsS0FBYSxFQUNiLFFBQWdCLEVBQ2hCLE1BQWMsRUFDZCxNQUFjLEVBQ2QsR0FBcUI7SUFFckIsT0FBTyxJQUFJLDZCQUFxQixDQUM5QixLQUFLLEVBQ0wsU0FBUyxLQUFLLElBQUksUUFBUSxJQUFJLE1BQU0sRUFBRSxFQUN0QztRQUNFLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO1FBQ2hELFFBQVEsRUFBRSxRQUFRO1FBQ2xCLE1BQU0sRUFBRSxNQUFNO0tBQ2YsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHsgRG5zY29udHJvbEh0dHBzUmVjb3JkIH0gZnJvbSBcIi4uL3JlY29yZC9odHRwc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gSFRUUFMoXG4gIHNjb3BlOiBDb25zdHJ1Y3QsXG4gIGxhYmVsOiBzdHJpbmcsXG4gIHByaW9yaXR5OiBudW1iZXIsXG4gIHRhcmdldDogc3RyaW5nLFxuICBwYXJhbXM6IHN0cmluZyxcbiAgdHRsPzogbnVtYmVyIHwgc3RyaW5nLFxuKTogRG5zY29udHJvbEh0dHBzUmVjb3JkIHtcbiAgcmV0dXJuIG5ldyBEbnNjb250cm9sSHR0cHNSZWNvcmQoXG4gICAgc2NvcGUsXG4gICAgYEh0dHBzOiR7bGFiZWx9OiR7cHJpb3JpdHl9OiR7dGFyZ2V0fWAsXG4gICAge1xuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICB0dGw6IHR0bCAhPSBudWxsID8gbmV3IER1cmF0aW9uKHR0bCkgOiB1bmRlZmluZWQsXG4gICAgICBwcmlvcml0eTogcHJpb3JpdHksXG4gICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICB9LFxuICApO1xufVxuIl19