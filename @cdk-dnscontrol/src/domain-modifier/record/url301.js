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
            meta: {},
        };
    }
}
exports.DnscontrolUrl301Record = DnscontrolUrl301Record;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsMzAxLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXJsMzAxLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLDJEQUF1RDtBQUV2RCxNQUFNLGdDQUFnQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQVE5RSxNQUFhLHNCQUF1QixTQUFRLG9DQUFnQjtJQUMxRCxZQUNFLEtBQWdCLEVBQ2hCLEVBQVUsRUFDVixLQUFrQztRQUVsQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxRQUFRO1lBQ3BCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyx3QkFBd0IsQ0FDcEMsQ0FBVTtRQUVWLE9BQU8sQ0FDTCxDQUFDLElBQUksSUFBSTtZQUNULE9BQU8sQ0FBQyxLQUFLLFFBQVE7WUFDckIsZ0NBQWdDLElBQUksQ0FBQyxDQUN0QyxDQUFDO0lBQ0osQ0FBQztJQUNNLGtCQUFrQjtRQUN2QixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUU7WUFDMUIsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBL0JELHdEQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sVXJsMzAxUmVjb3JkQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2Ruc2NvbnRyb2wtcmVjb3JkLWNvbmZpZ1wiO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXMvZHVyYXRpb25cIjtcbmltcG9ydCB7IERuc2NvbnRyb2xSZWNvcmQgfSBmcm9tIFwiLi9kbnNjb250cm9sLXJlY29yZFwiO1xuXG5jb25zdCBETlNfQ09OVFJPTF9VUkwzMDFfUkVDT1JEX1NZTUJPTCA9IFN5bWJvbC5mb3IoXCJEbnNjb250cm9sVXJsMzAxUmVjb3JkXCIpO1xuXG5leHBvcnQgaW50ZXJmYWNlIERuc2NvbnRyb2xVcmwzMDFSZWNvcmRQcm9wcyB7XG4gIHJlYWRvbmx5IGxhYmVsOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHRhcmdldDogc3RyaW5nO1xuICByZWFkb25seSB0dGw/OiBEdXJhdGlvbiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIERuc2NvbnRyb2xVcmwzMDFSZWNvcmQgZXh0ZW5kcyBEbnNjb250cm9sUmVjb3JkIHtcbiAgY29uc3RydWN0b3IoXG4gICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIHByb3BzOiBEbnNjb250cm9sVXJsMzAxUmVjb3JkUHJvcHMsXG4gICkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgcmVjb3JkVHlwZTogXCJVUkwzMDFcIixcbiAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCxcbiAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0LFxuICAgICAgdHRsOiBwcm9wcy50dGwsXG4gICAgfSk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpc0Ruc2NvbnRyb2xVcmwzMDFSZWNvcmQoXG4gICAgeDogdW5rbm93bixcbiAgKTogeCBpcyBEbnNjb250cm9sVXJsMzAxUmVjb3JkIHtcbiAgICByZXR1cm4gKFxuICAgICAgeCAhPSBudWxsICYmXG4gICAgICB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgRE5TX0NPTlRST0xfVVJMMzAxX1JFQ09SRF9TWU1CT0wgaW4geFxuICAgICk7XG4gIH1cbiAgcHVibGljIHJlbmRlclJlY29yZENvbmZpZygpOiBEbnNjb250cm9sVXJsMzAxUmVjb3JkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldCxcbiAgICAgIHJlY29yZFR5cGU6IHRoaXMucmVjb3JkVHlwZSxcbiAgICAgIHR0bDogdGhpcy50dGw/LnRvU2Vjb25kcygpLFxuICAgICAgbWV0YToge30sXG4gICAgfTtcbiAgfVxufVxuIl19