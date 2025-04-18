"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOC = LOC;
const duration_1 = require("../../types/duration");
const loc_1 = require("../record/loc");
function LOC(scope, label, target, ttl) {
    return new loc_1.DnscontrolLocRecord(scope, `Loc:${label}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsa0JBV0M7QUFkRCxtREFBZ0Q7QUFDaEQsdUNBQW9EO0FBRXBELFNBQWdCLEdBQUcsQ0FDakIsS0FBZ0IsRUFDaEIsS0FBYSxFQUNiLE1BQWMsRUFDZCxHQUFxQjtJQUVyQixPQUFPLElBQUkseUJBQW1CLENBQUMsS0FBSyxFQUFFLE9BQU8sS0FBSyxJQUFJLE1BQU0sRUFBRSxFQUFFO1FBQzlELEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0tBQ2pELENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXMvZHVyYXRpb25cIjtcbmltcG9ydCB7IERuc2NvbnRyb2xMb2NSZWNvcmQgfSBmcm9tIFwiLi4vcmVjb3JkL2xvY1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gTE9DKFxuICBzY29wZTogQ29uc3RydWN0LFxuICBsYWJlbDogc3RyaW5nLFxuICB0YXJnZXQ6IHN0cmluZyxcbiAgdHRsPzogbnVtYmVyIHwgc3RyaW5nLFxuKTogRG5zY29udHJvbExvY1JlY29yZCB7XG4gIHJldHVybiBuZXcgRG5zY29udHJvbExvY1JlY29yZChzY29wZSwgYExvYzoke2xhYmVsfToke3RhcmdldH1gLCB7XG4gICAgbGFiZWw6IGxhYmVsLFxuICAgIHRhcmdldDogdGFyZ2V0LFxuICAgIHR0bDogdHRsICE9IG51bGwgPyBuZXcgRHVyYXRpb24odHRsKSA6IHVuZGVmaW5lZCxcbiAgfSk7XG59XG4iXX0=