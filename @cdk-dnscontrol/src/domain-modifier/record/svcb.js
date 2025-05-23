"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolSvcbRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_SVCB_RECORD_SYMBOL = Symbol.for("DnscontrolSvcbRecord");
class DnscontrolSvcbRecord extends dnscontrol_record_1.DnscontrolRecord {
    priority;
    params;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "SVCB",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            isEnsuredAbsent: props.isEnsuredAbsent,
            meta: props.meta,
        });
        this.priority = props.priority;
        this.params = props.params;
    }
    static isDnscontrolSvcbRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_SVCB_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            svcPriority: this.priority,
            svcParams: this.params,
            meta: this.meta,
        };
    }
}
exports.DnscontrolSvcbRecord = DnscontrolSvcbRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ZjYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN2Y2IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsMkRBQXVEO0FBRXZELE1BQU0sOEJBQThCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBWTFFLE1BQWEsb0JBQXFCLFNBQVEsb0NBQWdCO0lBQ3hDLFFBQVEsQ0FBUztJQUNqQixNQUFNLENBQVM7SUFDL0IsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFnQztRQUN4RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNqQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFDTSxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBVTtRQUM3QyxPQUFPLENBQ0wsQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksOEJBQThCLElBQUksQ0FBQyxDQUMxRSxDQUFDO0lBQ0osQ0FBQztJQUNNLGtCQUFrQjtRQUN2QixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUU7WUFDMUIsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQzFCLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTTtZQUN0QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQS9CRCxvREErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRG5zY29udHJvbFN2Y2JSZWNvcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZG5zY29udHJvbC1yZWNvcmQtY29uZmlnXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFJlY29yZCB9IGZyb20gXCIuL2Ruc2NvbnRyb2wtcmVjb3JkXCI7XG5cbmNvbnN0IEROU19DT05UUk9MX1NWQ0JfUkVDT1JEX1NZTUJPTCA9IFN5bWJvbC5mb3IoXCJEbnNjb250cm9sU3ZjYlJlY29yZFwiKTtcblxuZXhwb3J0IGludGVyZmFjZSBEbnNjb250cm9sU3ZjYlJlY29yZFByb3BzIHtcbiAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgcmVhZG9ubHkgdGFyZ2V0OiBzdHJpbmc7XG4gIHJlYWRvbmx5IHByaW9yaXR5OiBudW1iZXI7XG4gIHJlYWRvbmx5IHBhcmFtczogc3RyaW5nO1xuICByZWFkb25seSB0dGw/OiBEdXJhdGlvbiB8IHVuZGVmaW5lZDtcbiAgcmVhZG9ubHkgaXNFbnN1cmVkQWJzZW50PzogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgcmVhZG9ubHkgbWV0YT86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBEbnNjb250cm9sU3ZjYlJlY29yZCBleHRlbmRzIERuc2NvbnRyb2xSZWNvcmQge1xuICBwdWJsaWMgcmVhZG9ubHkgcHJpb3JpdHk6IG51bWJlcjtcbiAgcHVibGljIHJlYWRvbmx5IHBhcmFtczogc3RyaW5nO1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRG5zY29udHJvbFN2Y2JSZWNvcmRQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgcmVjb3JkVHlwZTogXCJTVkNCXCIsXG4gICAgICBsYWJlbDogcHJvcHMubGFiZWwsXG4gICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldCxcbiAgICAgIHR0bDogcHJvcHMudHRsLFxuICAgICAgaXNFbnN1cmVkQWJzZW50OiBwcm9wcy5pc0Vuc3VyZWRBYnNlbnQsXG4gICAgICBtZXRhOiBwcm9wcy5tZXRhLFxuICAgIH0pO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcm9wcy5wcmlvcml0eTtcbiAgICB0aGlzLnBhcmFtcyA9IHByb3BzLnBhcmFtcztcbiAgfVxuICBwdWJsaWMgc3RhdGljIGlzRG5zY29udHJvbFN2Y2JSZWNvcmQoeDogdW5rbm93bik6IHggaXMgRG5zY29udHJvbFN2Y2JSZWNvcmQge1xuICAgIHJldHVybiAoXG4gICAgICB4ICE9IG51bGwgJiYgdHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiYgRE5TX0NPTlRST0xfU1ZDQl9SRUNPUkRfU1lNQk9MIGluIHhcbiAgICApO1xuICB9XG4gIHB1YmxpYyByZW5kZXJSZWNvcmRDb25maWcoKTogRG5zY29udHJvbFN2Y2JSZWNvcmRDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0LFxuICAgICAgcmVjb3JkVHlwZTogdGhpcy5yZWNvcmRUeXBlLFxuICAgICAgdHRsOiB0aGlzLnR0bD8udG9TZWNvbmRzKCksXG4gICAgICBzdmNQcmlvcml0eTogdGhpcy5wcmlvcml0eSxcbiAgICAgIHN2Y1BhcmFtczogdGhpcy5wYXJhbXMsXG4gICAgICBtZXRhOiB0aGlzLm1ldGEsXG4gICAgfTtcbiAgfVxufVxuIl19