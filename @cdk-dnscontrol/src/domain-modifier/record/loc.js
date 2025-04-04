"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolLocRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_LOC_RECORD_SYMBOL = Symbol.for("DnscontrolLocRecord");
class DnscontrolLocRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "LOC",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
        throw new Error("Not implemented yet");
    }
    static isDnscontrolLocRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_LOC_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            meta: {},
        };
    }
}
exports.DnscontrolLocRecord = DnscontrolLocRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLDJEQUF1RDtBQUV2RCxNQUFNLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQVF4RSxNQUFhLG1CQUFvQixTQUFRLG9DQUFnQjtJQUN2RCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQStCO1FBQ3ZFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YsVUFBVSxFQUFFLEtBQUs7WUFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7U0FDZixDQUFDLENBQUM7UUFDSCxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNNLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFVO1FBQzVDLE9BQU8sQ0FDTCxDQUFDLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSw2QkFBNkIsSUFBSSxDQUFDLENBQ3pFLENBQUM7SUFDSixDQUFDO0lBQ00sa0JBQWtCO1FBQ3ZCLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRTtZQUMxQixJQUFJLEVBQUUsRUFBRTtTQUNULENBQUM7SUFDSixDQUFDO0NBQ0Y7QUF4QkQsa0RBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IERuc2NvbnRyb2xMb2NSZWNvcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZG5zY29udHJvbC1yZWNvcmQtY29uZmlnXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFJlY29yZCB9IGZyb20gXCIuL2Ruc2NvbnRyb2wtcmVjb3JkXCI7XG5cbmNvbnN0IEROU19DT05UUk9MX0xPQ19SRUNPUkRfU1lNQk9MID0gU3ltYm9sLmZvcihcIkRuc2NvbnRyb2xMb2NSZWNvcmRcIik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG5zY29udHJvbExvY1JlY29yZFByb3BzIHtcbiAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgcmVhZG9ubHkgdGFyZ2V0OiBzdHJpbmc7XG4gIHJlYWRvbmx5IHR0bD86IER1cmF0aW9uIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY2xhc3MgRG5zY29udHJvbExvY1JlY29yZCBleHRlbmRzIERuc2NvbnRyb2xSZWNvcmQge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRG5zY29udHJvbExvY1JlY29yZFByb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICByZWNvcmRUeXBlOiBcIkxPQ1wiLFxuICAgICAgbGFiZWw6IHByb3BzLmxhYmVsLFxuICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXQsXG4gICAgICB0dGw6IHByb3BzLnR0bCxcbiAgICB9KTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgaXNEbnNjb250cm9sTG9jUmVjb3JkKHg6IHVua25vd24pOiB4IGlzIERuc2NvbnRyb2xMb2NSZWNvcmQge1xuICAgIHJldHVybiAoXG4gICAgICB4ICE9IG51bGwgJiYgdHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiYgRE5TX0NPTlRST0xfTE9DX1JFQ09SRF9TWU1CT0wgaW4geFxuICAgICk7XG4gIH1cbiAgcHVibGljIHJlbmRlclJlY29yZENvbmZpZygpOiBEbnNjb250cm9sTG9jUmVjb3JkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldCxcbiAgICAgIHJlY29yZFR5cGU6IHRoaXMucmVjb3JkVHlwZSxcbiAgICAgIHR0bDogdGhpcy50dGw/LnRvU2Vjb25kcygpLFxuICAgICAgbWV0YToge30sXG4gICAgfTtcbiAgfVxufVxuIl19