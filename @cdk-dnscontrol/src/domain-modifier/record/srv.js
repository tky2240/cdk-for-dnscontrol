"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolSrvRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_SRV_RECORD_SYMBOL = Symbol.for("DnscontrolSrvRecord");
class DnscontrolSrvRecord extends dnscontrol_record_1.DnscontrolRecord {
    priority;
    weight;
    port;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "SRV",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
        this.priority = props.priority;
        this.weight = props.weight;
        this.port = props.port;
    }
    static isDnscontrolSrvRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_SRV_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            srvPriority: this.priority,
            srvWeight: this.weight,
            srvPort: this.port,
            meta: {},
        };
    }
}
exports.DnscontrolSrvRecord = DnscontrolSrvRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3J2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3J2LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLDJEQUF1RDtBQUV2RCxNQUFNLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQVd4RSxNQUFhLG1CQUFvQixTQUFRLG9DQUFnQjtJQUN2QyxRQUFRLENBQVM7SUFDakIsTUFBTSxDQUFTO0lBQ2YsSUFBSSxDQUFTO0lBQzdCLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBK0I7UUFDdkUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixVQUFVLEVBQUUsS0FBSztZQUNqQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztTQUNmLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0lBQ3pCLENBQUM7SUFDTSxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBVTtRQUM1QyxPQUFPLENBQ0wsQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksNkJBQTZCLElBQUksQ0FBQyxDQUN6RSxDQUFDO0lBQ0osQ0FBQztJQUNNLGtCQUFrQjtRQUN2QixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUU7WUFDMUIsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQzFCLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTTtZQUN0QixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDbEIsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBaENELGtEQWdDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sU3J2UmVjb3JkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Ruc2NvbnRyb2wtcmVjb3JkLWNvbmZpZ1wiO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXMvZHVyYXRpb25cIjtcbmltcG9ydCB7IERuc2NvbnRyb2xSZWNvcmQgfSBmcm9tIFwiLi9kbnNjb250cm9sLXJlY29yZFwiO1xuXG5jb25zdCBETlNfQ09OVFJPTF9TUlZfUkVDT1JEX1NZTUJPTCA9IFN5bWJvbC5mb3IoXCJEbnNjb250cm9sU3J2UmVjb3JkXCIpO1xuXG5leHBvcnQgaW50ZXJmYWNlIERuc2NvbnRyb2xTcnZSZWNvcmRQcm9wcyB7XG4gIHJlYWRvbmx5IGxhYmVsOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHRhcmdldDogc3RyaW5nO1xuICByZWFkb25seSBwcmlvcml0eTogbnVtYmVyO1xuICByZWFkb25seSB3ZWlnaHQ6IG51bWJlcjtcbiAgcmVhZG9ubHkgcG9ydDogbnVtYmVyO1xuICByZWFkb25seSB0dGw/OiBEdXJhdGlvbiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIERuc2NvbnRyb2xTcnZSZWNvcmQgZXh0ZW5kcyBEbnNjb250cm9sUmVjb3JkIHtcbiAgcHVibGljIHJlYWRvbmx5IHByaW9yaXR5OiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSB3ZWlnaHQ6IG51bWJlcjtcbiAgcHVibGljIHJlYWRvbmx5IHBvcnQ6IG51bWJlcjtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERuc2NvbnRyb2xTcnZSZWNvcmRQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgcmVjb3JkVHlwZTogXCJTUlZcIixcbiAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCxcbiAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0LFxuICAgICAgdHRsOiBwcm9wcy50dGwsXG4gICAgfSk7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByb3BzLnByaW9yaXR5O1xuICAgIHRoaXMud2VpZ2h0ID0gcHJvcHMud2VpZ2h0O1xuICAgIHRoaXMucG9ydCA9IHByb3BzLnBvcnQ7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpc0Ruc2NvbnRyb2xTcnZSZWNvcmQoeDogdW5rbm93bik6IHggaXMgRG5zY29udHJvbFNydlJlY29yZCB7XG4gICAgcmV0dXJuIChcbiAgICAgIHggIT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiBETlNfQ09OVFJPTF9TUlZfUkVDT1JEX1NZTUJPTCBpbiB4XG4gICAgKTtcbiAgfVxuICBwdWJsaWMgcmVuZGVyUmVjb3JkQ29uZmlnKCk6IERuc2NvbnRyb2xTcnZSZWNvcmRDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0LFxuICAgICAgcmVjb3JkVHlwZTogdGhpcy5yZWNvcmRUeXBlLFxuICAgICAgdHRsOiB0aGlzLnR0bD8udG9TZWNvbmRzKCksXG4gICAgICBzcnZQcmlvcml0eTogdGhpcy5wcmlvcml0eSxcbiAgICAgIHNydldlaWdodDogdGhpcy53ZWlnaHQsXG4gICAgICBzcnZQb3J0OiB0aGlzLnBvcnQsXG4gICAgICBtZXRhOiB7fSxcbiAgICB9O1xuICB9XG59XG4iXX0=