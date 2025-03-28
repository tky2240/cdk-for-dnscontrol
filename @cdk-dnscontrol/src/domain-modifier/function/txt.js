"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TXT = TXT;
const duration_1 = require("../../types/duration");
const txt_1 = require("../record/txt");
function TXT(scope, label, target, ttl) {
    return new txt_1.DnscontrolTxtRecord(scope, `Txt:${label}:${target}`, {
        label: label,
        txtStrings: Array.isArray(target) ? target : [target],
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHh0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidHh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsa0JBV0M7QUFkRCxtREFBZ0Q7QUFDaEQsdUNBQW9EO0FBRXBELFNBQWdCLEdBQUcsQ0FDakIsS0FBZ0IsRUFDaEIsS0FBYSxFQUNiLE1BQWtDLEVBQ2xDLEdBQXFCO0lBRXJCLE9BQU8sSUFBSSx5QkFBbUIsQ0FBQyxLQUFLLEVBQUUsT0FBTyxLQUFLLElBQUksTUFBTSxFQUFFLEVBQUU7UUFDOUQsS0FBSyxFQUFFLEtBQUs7UUFDWixVQUFVLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNyRCxHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0tBQ2pELENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXMvZHVyYXRpb25cIjtcbmltcG9ydCB7IERuc2NvbnRyb2xUeHRSZWNvcmQgfSBmcm9tIFwiLi4vcmVjb3JkL3R4dFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gVFhUKFxuICBzY29wZTogQ29uc3RydWN0LFxuICBsYWJlbDogc3RyaW5nLFxuICB0YXJnZXQ6IHN0cmluZyB8IHJlYWRvbmx5IHN0cmluZ1tdLFxuICB0dGw/OiBudW1iZXIgfCBzdHJpbmcsXG4pOiBEbnNjb250cm9sVHh0UmVjb3JkIHtcbiAgcmV0dXJuIG5ldyBEbnNjb250cm9sVHh0UmVjb3JkKHNjb3BlLCBgVHh0OiR7bGFiZWx9OiR7dGFyZ2V0fWAsIHtcbiAgICBsYWJlbDogbGFiZWwsXG4gICAgdHh0U3RyaW5nczogQXJyYXkuaXNBcnJheSh0YXJnZXQpID8gdGFyZ2V0IDogW3RhcmdldF0sXG4gICAgdHRsOiB0dGwgIT0gbnVsbCA/IG5ldyBEdXJhdGlvbih0dGwpIDogdW5kZWZpbmVkLFxuICB9KTtcbn1cbiJdfQ==