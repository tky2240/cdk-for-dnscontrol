"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolUrl301Record = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_URL301_RECORD_SYMBOL = Symbol.for("DnscontrolUrl301Record");
class DnscontrolUrl301Record extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "URL301",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            isEnsuredAbsent: props.isEnsuredAbsent,
            meta: props.meta,
        });
    }
    static isDnscontrolUrl301Record(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_URL301_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            meta: this.meta,
        };
    }
}
exports.DnscontrolUrl301Record = DnscontrolUrl301Record;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsMzAxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXJsMzAxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLDJEQUF1RDtBQUV2RCxNQUFNLGdDQUFnQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQVU5RSxNQUFhLHNCQUF1QixTQUFRLG9DQUFnQjtJQUMxRCxZQUNFLEtBQWdCLEVBQ2hCLEVBQVUsRUFDVixLQUFrQztRQUVsQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLHdCQUF3QixDQUNwQyxDQUFVO1FBRVYsT0FBTyxDQUNMLENBQUMsSUFBSSxJQUFJO1lBQ1QsT0FBTyxDQUFDLEtBQUssUUFBUTtZQUNyQixnQ0FBZ0MsSUFBSSxDQUFDLENBQ3RDLENBQUM7SUFDSixDQUFDO0lBQ00sa0JBQWtCO1FBQ3ZCLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRTtZQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQWpDRCx3REFpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRG5zY29udHJvbFVybDMwMVJlY29yZENvbmZpZyB9IGZyb20gXCIuLi8uLi90eXBlcy9kbnNjb250cm9sLXJlY29yZC1jb25maWdcIjtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2R1cmF0aW9uXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sUmVjb3JkIH0gZnJvbSBcIi4vZG5zY29udHJvbC1yZWNvcmRcIjtcblxuY29uc3QgRE5TX0NPTlRST0xfVVJMMzAxX1JFQ09SRF9TWU1CT0wgPSBTeW1ib2wuZm9yKFwiRG5zY29udHJvbFVybDMwMVJlY29yZFwiKTtcblxuZXhwb3J0IGludGVyZmFjZSBEbnNjb250cm9sVXJsMzAxUmVjb3JkUHJvcHMge1xuICByZWFkb25seSBsYWJlbDogc3RyaW5nO1xuICByZWFkb25seSB0YXJnZXQ6IHN0cmluZztcbiAgcmVhZG9ubHkgdHRsPzogRHVyYXRpb24gfCB1bmRlZmluZWQ7XG4gIHJlYWRvbmx5IGlzRW5zdXJlZEFic2VudD86IGJvb2xlYW4gfCB1bmRlZmluZWQ7XG4gIHJlYWRvbmx5IG1ldGE/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY2xhc3MgRG5zY29udHJvbFVybDMwMVJlY29yZCBleHRlbmRzIERuc2NvbnRyb2xSZWNvcmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBzY29wZTogQ29uc3RydWN0LFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJvcHM6IERuc2NvbnRyb2xVcmwzMDFSZWNvcmRQcm9wcyxcbiAgKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICByZWNvcmRUeXBlOiBcIlVSTDMwMVwiLFxuICAgICAgbGFiZWw6IHByb3BzLmxhYmVsLFxuICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXQsXG4gICAgICB0dGw6IHByb3BzLnR0bCxcbiAgICAgIGlzRW5zdXJlZEFic2VudDogcHJvcHMuaXNFbnN1cmVkQWJzZW50LFxuICAgICAgbWV0YTogcHJvcHMubWV0YSxcbiAgICB9KTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIGlzRG5zY29udHJvbFVybDMwMVJlY29yZChcbiAgICB4OiB1bmtub3duLFxuICApOiB4IGlzIERuc2NvbnRyb2xVcmwzMDFSZWNvcmQge1xuICAgIHJldHVybiAoXG4gICAgICB4ICE9IG51bGwgJiZcbiAgICAgIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmXG4gICAgICBETlNfQ09OVFJPTF9VUkwzMDFfUkVDT1JEX1NZTUJPTCBpbiB4XG4gICAgKTtcbiAgfVxuICBwdWJsaWMgcmVuZGVyUmVjb3JkQ29uZmlnKCk6IERuc2NvbnRyb2xVcmwzMDFSZWNvcmRDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0LFxuICAgICAgcmVjb3JkVHlwZTogdGhpcy5yZWNvcmRUeXBlLFxuICAgICAgdHRsOiB0aGlzLnR0bD8udG9TZWNvbmRzKCksXG4gICAgICBtZXRhOiB0aGlzLm1ldGEsXG4gICAgfTtcbiAgfVxufVxuIl19