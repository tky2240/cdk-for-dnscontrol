"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CF_REDIRECT = CF_REDIRECT;
const duration_1 = require("../../types/duration");
const cf_redirect_1 = require("../record/cf-redirect");
function CF_REDIRECT(scope, source, destination, ttl) {
    return new cf_redirect_1.DnscontrolCfRedirectRecord(scope, `CfRedirect:${source}:${destination}`, {
        source: source,
        destination: destination,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2YtcmVkaXJlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZi1yZWRpcmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLGtDQWVDO0FBbEJELG1EQUFnRDtBQUNoRCx1REFBbUU7QUFFbkUsU0FBZ0IsV0FBVyxDQUN6QixLQUFnQixFQUNoQixNQUFjLEVBQ2QsV0FBbUIsRUFDbkIsR0FBcUI7SUFFckIsT0FBTyxJQUFJLHdDQUEwQixDQUNuQyxLQUFLLEVBQ0wsY0FBYyxNQUFNLElBQUksV0FBVyxFQUFFLEVBQ3JDO1FBQ0UsTUFBTSxFQUFFLE1BQU07UUFDZCxXQUFXLEVBQUUsV0FBVztRQUN4QixHQUFHLEVBQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxtQkFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0tBQ2pELENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXMvZHVyYXRpb25cIjtcbmltcG9ydCB7IERuc2NvbnRyb2xDZlJlZGlyZWN0UmVjb3JkIH0gZnJvbSBcIi4uL3JlY29yZC9jZi1yZWRpcmVjdFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ0ZfUkVESVJFQ1QoXG4gIHNjb3BlOiBDb25zdHJ1Y3QsXG4gIHNvdXJjZTogc3RyaW5nLFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICB0dGw/OiBudW1iZXIgfCBzdHJpbmcsXG4pOiBEbnNjb250cm9sQ2ZSZWRpcmVjdFJlY29yZCB7XG4gIHJldHVybiBuZXcgRG5zY29udHJvbENmUmVkaXJlY3RSZWNvcmQoXG4gICAgc2NvcGUsXG4gICAgYENmUmVkaXJlY3Q6JHtzb3VyY2V9OiR7ZGVzdGluYXRpb259YCxcbiAgICB7XG4gICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgIGRlc3RpbmF0aW9uOiBkZXN0aW5hdGlvbixcbiAgICAgIHR0bDogdHRsICE9IG51bGwgPyBuZXcgRHVyYXRpb24odHRsKSA6IHVuZGVmaW5lZCxcbiAgICB9LFxuICApO1xufVxuIl19