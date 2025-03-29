"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolCloudnsWrRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_CLOUDNS_WR_RECORD_SYMBOL = Symbol.for("DnscontrolCloudnsWrRecord");
class DnscontrolCloudnsWrRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "CLOUDNS_WR",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
    }
    static isDnscontrolCloudnsWrRecord(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_CLOUDNS_WR_RECORD_SYMBOL in x);
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
exports.DnscontrolCloudnsWrRecord = DnscontrolCloudnsWrRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvdWRucy13ci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNsb3VkbnMtd3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsMkRBQXVEO0FBRXZELE1BQU0sb0NBQW9DLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FDckQsMkJBQTJCLENBQzVCLENBQUM7QUFRRixNQUFhLHlCQUEwQixTQUFRLG9DQUFnQjtJQUM3RCxZQUNFLEtBQWdCLEVBQ2hCLEVBQVUsRUFDVixLQUFxQztRQUVyQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxZQUFZO1lBQ3hCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQywyQkFBMkIsQ0FDdkMsQ0FBVTtRQUVWLE9BQU8sQ0FDTCxDQUFDLElBQUksSUFBSTtZQUNULE9BQU8sQ0FBQyxLQUFLLFFBQVE7WUFDckIsb0NBQW9DLElBQUksQ0FBQyxDQUMxQyxDQUFDO0lBQ0osQ0FBQztJQUNNLGtCQUFrQjtRQUN2QixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUU7WUFDMUIsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBL0JELDhEQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sQ2xvdWRuc1dyUmVjb3JkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Ruc2NvbnRyb2wtcmVjb3JkLWNvbmZpZ1wiO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXMvZHVyYXRpb25cIjtcbmltcG9ydCB7IERuc2NvbnRyb2xSZWNvcmQgfSBmcm9tIFwiLi9kbnNjb250cm9sLXJlY29yZFwiO1xuXG5jb25zdCBETlNfQ09OVFJPTF9DTE9VRE5TX1dSX1JFQ09SRF9TWU1CT0wgPSBTeW1ib2wuZm9yKFxuICBcIkRuc2NvbnRyb2xDbG91ZG5zV3JSZWNvcmRcIixcbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG5zY29udHJvbENsb3VkbnNXclJlY29yZFByb3BzIHtcbiAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgcmVhZG9ubHkgdGFyZ2V0OiBzdHJpbmc7XG4gIHJlYWRvbmx5IHR0bD86IER1cmF0aW9uIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY2xhc3MgRG5zY29udHJvbENsb3VkbnNXclJlY29yZCBleHRlbmRzIERuc2NvbnRyb2xSZWNvcmQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBzY29wZTogQ29uc3RydWN0LFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcHJvcHM6IERuc2NvbnRyb2xDbG91ZG5zV3JSZWNvcmRQcm9wcyxcbiAgKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICByZWNvcmRUeXBlOiBcIkNMT1VETlNfV1JcIixcbiAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCxcbiAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0LFxuICAgICAgdHRsOiBwcm9wcy50dGwsXG4gICAgfSk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpc0Ruc2NvbnRyb2xDbG91ZG5zV3JSZWNvcmQoXG4gICAgeDogdW5rbm93bixcbiAgKTogeCBpcyBEbnNjb250cm9sQ2xvdWRuc1dyUmVjb3JkIHtcbiAgICByZXR1cm4gKFxuICAgICAgeCAhPSBudWxsICYmXG4gICAgICB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgRE5TX0NPTlRST0xfQ0xPVUROU19XUl9SRUNPUkRfU1lNQk9MIGluIHhcbiAgICApO1xuICB9XG4gIHB1YmxpYyByZW5kZXJSZWNvcmRDb25maWcoKTogRG5zY29udHJvbENsb3VkbnNXclJlY29yZENvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHRhcmdldDogdGhpcy50YXJnZXQsXG4gICAgICByZWNvcmRUeXBlOiB0aGlzLnJlY29yZFR5cGUsXG4gICAgICB0dGw6IHRoaXMudHRsPy50b1NlY29uZHMoKSxcbiAgICAgIG1ldGE6IHt9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==