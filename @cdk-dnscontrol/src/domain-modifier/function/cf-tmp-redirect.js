"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CF_TMP_REDIRECT = CF_TMP_REDIRECT;
const duration_1 = require("../../types/duration");
const cf_tmp_redirect_1 = require("../record/cf-tmp-redirect");
function CF_TMP_REDIRECT(scope, source, destination, ttl) {
    return new cf_tmp_redirect_1.DnscontrolCfTmpRedirectRecord(scope, `CfTmpRedirect:${source}:${destination}`, {
        source: source,
        destination: destination,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2YtdG1wLXJlZGlyZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2YtdG1wLXJlZGlyZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsMENBZUM7QUFsQkQsbURBQWdEO0FBQ2hELCtEQUEwRTtBQUUxRSxTQUFnQixlQUFlLENBQzdCLEtBQWdCLEVBQ2hCLE1BQWMsRUFDZCxXQUFtQixFQUNuQixHQUFxQjtJQUVyQixPQUFPLElBQUksK0NBQTZCLENBQ3RDLEtBQUssRUFDTCxpQkFBaUIsTUFBTSxJQUFJLFdBQVcsRUFBRSxFQUN4QztRQUNFLE1BQU0sRUFBRSxNQUFNO1FBQ2QsV0FBVyxFQUFFLFdBQVc7UUFDeEIsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztLQUNqRCxDQUNGLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2R1cmF0aW9uXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sQ2ZUbXBSZWRpcmVjdFJlY29yZCB9IGZyb20gXCIuLi9yZWNvcmQvY2YtdG1wLXJlZGlyZWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBDRl9UTVBfUkVESVJFQ1QoXG4gIHNjb3BlOiBDb25zdHJ1Y3QsXG4gIHNvdXJjZTogc3RyaW5nLFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICB0dGw/OiBudW1iZXIgfCBzdHJpbmcsXG4pOiBEbnNjb250cm9sQ2ZUbXBSZWRpcmVjdFJlY29yZCB7XG4gIHJldHVybiBuZXcgRG5zY29udHJvbENmVG1wUmVkaXJlY3RSZWNvcmQoXG4gICAgc2NvcGUsXG4gICAgYENmVG1wUmVkaXJlY3Q6JHtzb3VyY2V9OiR7ZGVzdGluYXRpb259YCxcbiAgICB7XG4gICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgIGRlc3RpbmF0aW9uOiBkZXN0aW5hdGlvbixcbiAgICAgIHR0bDogdHRsICE9IG51bGwgPyBuZXcgRHVyYXRpb24odHRsKSA6IHVuZGVmaW5lZCxcbiAgICB9LFxuICApO1xufVxuIl19