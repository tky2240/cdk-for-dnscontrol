"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolAzureAliasRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_AZURE_ALIAS_RECORD_SYMBOL = Symbol.for("DnscontrolAzureAliasRecord");
// eslint-disable-next-line
const azureAliasTypeString = ["A", "AAAA", "CNAME"];
class DnscontrolAzureAliasRecord extends dnscontrol_record_1.DnscontrolRecord {
    azureAliasType;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "AZURE_ALIAS",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            isEnsuredAbsent: props.isEnsuredAbsent,
            meta: props.meta,
        });
        this.azureAliasType = props.azureAliasType;
    }
    static isDnscontrolAzureAliasRecord(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_AZURE_ALIAS_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            azureAlias: {
                type: this.azureAliasType,
            },
            meta: {
                ...this.meta,
                orig_custom_type: "AZURE_ALIAS",
            },
        };
    }
}
exports.DnscontrolAzureAliasRecord = DnscontrolAzureAliasRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXp1cmUtYWxpYXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhenVyZS1hbGlhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSwyREFBdUQ7QUFFdkQsTUFBTSxxQ0FBcUMsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUN0RCw0QkFBNEIsQ0FDN0IsQ0FBQztBQUVGLDJCQUEyQjtBQUMzQixNQUFNLG9CQUFvQixHQUFHLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQVUsQ0FBQztBQWE3RCxNQUFhLDBCQUEyQixTQUFRLG9DQUFnQjtJQUNyRCxjQUFjLENBQWlCO0lBQ3hDLFlBQ0UsS0FBZ0IsRUFDaEIsRUFBVSxFQUNWLEtBQXNDO1FBRXRDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YsVUFBVSxFQUFFLGFBQWE7WUFDekIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFDZCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDLGNBQWMsQ0FBQztJQUM3QyxDQUFDO0lBQ00sTUFBTSxDQUFDLDRCQUE0QixDQUN4QyxDQUFVO1FBRVYsT0FBTyxDQUNMLENBQUMsSUFBSSxJQUFJO1lBQ1QsT0FBTyxDQUFDLEtBQUssUUFBUTtZQUNyQixxQ0FBcUMsSUFBSSxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDO0lBQ00sa0JBQWtCO1FBQ3ZCLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRTtZQUMxQixVQUFVLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjO2FBQzFCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLEdBQUcsSUFBSSxDQUFDLElBQUk7Z0JBQ1osZ0JBQWdCLEVBQUUsYUFBYTthQUNoQztTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUF6Q0QsZ0VBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IERuc2NvbnRyb2xBenVyZUFsaWFzUmVjb3JkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Ruc2NvbnRyb2wtcmVjb3JkLWNvbmZpZ1wiO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXMvZHVyYXRpb25cIjtcbmltcG9ydCB7IERuc2NvbnRyb2xSZWNvcmQgfSBmcm9tIFwiLi9kbnNjb250cm9sLXJlY29yZFwiO1xuXG5jb25zdCBETlNfQ09OVFJPTF9BWlVSRV9BTElBU19SRUNPUkRfU1lNQk9MID0gU3ltYm9sLmZvcihcbiAgXCJEbnNjb250cm9sQXp1cmVBbGlhc1JlY29yZFwiLFxuKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG5jb25zdCBhenVyZUFsaWFzVHlwZVN0cmluZyA9IFtcIkFcIiwgXCJBQUFBXCIsIFwiQ05BTUVcIl0gYXMgY29uc3Q7XG5cbmV4cG9ydCB0eXBlIEF6dXJlQWxpYXNUeXBlID0gKHR5cGVvZiBhenVyZUFsaWFzVHlwZVN0cmluZylbbnVtYmVyXTtcblxuZXhwb3J0IGludGVyZmFjZSBEbnNjb250cm9sQXp1cmVBbGlhc1JlY29yZFByb3BzIHtcbiAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgcmVhZG9ubHkgdGFyZ2V0OiBzdHJpbmc7XG4gIHJlYWRvbmx5IGF6dXJlQWxpYXNUeXBlOiBBenVyZUFsaWFzVHlwZTtcbiAgcmVhZG9ubHkgdHRsPzogRHVyYXRpb24gfCB1bmRlZmluZWQ7XG4gIHJlYWRvbmx5IGlzRW5zdXJlZEFic2VudD86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIHJlYWRvbmx5IG1ldGE/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY2xhc3MgRG5zY29udHJvbEF6dXJlQWxpYXNSZWNvcmQgZXh0ZW5kcyBEbnNjb250cm9sUmVjb3JkIHtcbiAgcmVhZG9ubHkgYXp1cmVBbGlhc1R5cGU6IEF6dXJlQWxpYXNUeXBlO1xuICBjb25zdHJ1Y3RvcihcbiAgICBzY29wZTogQ29uc3RydWN0LFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJvcHM6IERuc2NvbnRyb2xBenVyZUFsaWFzUmVjb3JkUHJvcHMsXG4gICkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgcmVjb3JkVHlwZTogXCJBWlVSRV9BTElBU1wiLFxuICAgICAgbGFiZWw6IHByb3BzLmxhYmVsLFxuICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXQsXG4gICAgICB0dGw6IHByb3BzLnR0bCxcbiAgICAgIGlzRW5zdXJlZEFic2VudDogcHJvcHMuaXNFbnN1cmVkQWJzZW50LFxuICAgICAgbWV0YTogcHJvcHMubWV0YSxcbiAgICB9KTtcbiAgICB0aGlzLmF6dXJlQWxpYXNUeXBlID0gcHJvcHMuYXp1cmVBbGlhc1R5cGU7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpc0Ruc2NvbnRyb2xBenVyZUFsaWFzUmVjb3JkKFxuICAgIHg6IHVua25vd24sXG4gICk6IHggaXMgRG5zY29udHJvbEF6dXJlQWxpYXNSZWNvcmQge1xuICAgIHJldHVybiAoXG4gICAgICB4ICE9IG51bGwgJiZcbiAgICAgIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmXG4gICAgICBETlNfQ09OVFJPTF9BWlVSRV9BTElBU19SRUNPUkRfU1lNQk9MIGluIHhcbiAgICApO1xuICB9XG4gIHB1YmxpYyByZW5kZXJSZWNvcmRDb25maWcoKTogRG5zY29udHJvbEF6dXJlQWxpYXNSZWNvcmRDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0LFxuICAgICAgcmVjb3JkVHlwZTogdGhpcy5yZWNvcmRUeXBlLFxuICAgICAgdHRsOiB0aGlzLnR0bD8udG9TZWNvbmRzKCksXG4gICAgICBhenVyZUFsaWFzOiB7XG4gICAgICAgIHR5cGU6IHRoaXMuYXp1cmVBbGlhc1R5cGUsXG4gICAgICB9LFxuICAgICAgbWV0YToge1xuICAgICAgICAuLi50aGlzLm1ldGEsXG4gICAgICAgIG9yaWdfY3VzdG9tX3R5cGU6IFwiQVpVUkVfQUxJQVNcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuIl19