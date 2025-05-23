"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL301 = URL301;
const duration_1 = require("../../types/duration");
const url301_1 = require("../record/url301");
function URL301(scope, label, target, ttl, isEnsuredAbsent, meta) {
    return new url301_1.DnscontrolUrl301Record(scope, `Url301:${label}:${target}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsMzAxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXJsMzAxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsd0JBZUM7QUFsQkQsbURBQWdEO0FBQ2hELDZDQUEwRDtBQUUxRCxTQUFnQixNQUFNLENBQ3BCLEtBQWdCLEVBQ2hCLEtBQWEsRUFDYixNQUFjLEVBQ2QsR0FBcUIsRUFDckIsZUFBeUIsRUFDekIsSUFBNkI7SUFFN0IsT0FBTyxJQUFJLCtCQUFzQixDQUFDLEtBQUssRUFBRSxVQUFVLEtBQUssSUFBSSxNQUFNLEVBQUUsRUFBRTtRQUNwRSxLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sRUFBRSxNQUFNO1FBQ2QsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUNoRCxlQUFlLEVBQUUsZUFBZTtRQUNoQyxJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXMvZHVyYXRpb25cIjtcbmltcG9ydCB7IERuc2NvbnRyb2xVcmwzMDFSZWNvcmQgfSBmcm9tIFwiLi4vcmVjb3JkL3VybDMwMVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gVVJMMzAxKFxuICBzY29wZTogQ29uc3RydWN0LFxuICBsYWJlbDogc3RyaW5nLFxuICB0YXJnZXQ6IHN0cmluZyxcbiAgdHRsPzogbnVtYmVyIHwgc3RyaW5nLFxuICBpc0Vuc3VyZWRBYnNlbnQ/OiBib29sZWFuLFxuICBtZXRhPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPixcbik6IERuc2NvbnRyb2xVcmwzMDFSZWNvcmQge1xuICByZXR1cm4gbmV3IERuc2NvbnRyb2xVcmwzMDFSZWNvcmQoc2NvcGUsIGBVcmwzMDE6JHtsYWJlbH06JHt0YXJnZXR9YCwge1xuICAgIGxhYmVsOiBsYWJlbCxcbiAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICB0dGw6IHR0bCAhPSBudWxsID8gbmV3IER1cmF0aW9uKHR0bCkgOiB1bmRlZmluZWQsXG4gICAgaXNFbnN1cmVkQWJzZW50OiBpc0Vuc3VyZWRBYnNlbnQsXG4gICAgbWV0YTogbWV0YSxcbiAgfSk7XG59XG4iXX0=