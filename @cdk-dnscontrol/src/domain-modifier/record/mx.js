"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolMxRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_MX_RECORD_SYMBOL = Symbol.for("DnscontrolMxRecord");
class DnscontrolMxRecord extends dnscontrol_record_1.DnscontrolRecord {
    mxPreference;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "MX",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
        this.mxPreference = props.mxPreference;
    }
    static isDnscontrolMxRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_MX_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            mxPreference: this.mxPreference,
            ttl: this.ttl?.toSeconds(),
            meta: {},
        };
    }
}
exports.DnscontrolMxRecord = DnscontrolMxRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSwyREFBdUQ7QUFFdkQsTUFBTSw0QkFBNEIsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFTdEUsTUFBYSxrQkFBbUIsU0FBUSxvQ0FBZ0I7SUFDdEMsWUFBWSxDQUFlO0lBQzNDLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBOEI7UUFDdEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixVQUFVLEVBQUUsSUFBSTtZQUNoQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztTQUNmLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDO0lBQ00sTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQVU7UUFDM0MsT0FBTyxDQUNMLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLDRCQUE0QixJQUFJLENBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7SUFDTSxrQkFBa0I7UUFDdkIsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRTtZQUMxQixJQUFJLEVBQUUsRUFBRTtTQUNULENBQUM7SUFDSixDQUFDO0NBQ0Y7QUExQkQsZ0RBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IERuc2NvbnRyb2xNeFJlY29yZENvbmZpZyB9IGZyb20gXCIuLi8uLi90eXBlcy9kbnNjb250cm9sLXJlY29yZC1jb25maWdcIjtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2R1cmF0aW9uXCI7XG5pbXBvcnQgeyBNeFByZWZlcmVuY2UgfSBmcm9tIFwiLi4vLi4vdHlwZXMvbXgtcHJlZmVyZW5jZVwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFJlY29yZCB9IGZyb20gXCIuL2Ruc2NvbnRyb2wtcmVjb3JkXCI7XG5cbmNvbnN0IEROU19DT05UUk9MX01YX1JFQ09SRF9TWU1CT0wgPSBTeW1ib2wuZm9yKFwiRG5zY29udHJvbE14UmVjb3JkXCIpO1xuXG5leHBvcnQgaW50ZXJmYWNlIERuc2NvbnRyb2xNeFJlY29yZFByb3BzIHtcbiAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgcmVhZG9ubHkgbXhQcmVmZXJlbmNlOiBNeFByZWZlcmVuY2U7XG4gIHJlYWRvbmx5IHRhcmdldDogc3RyaW5nO1xuICByZWFkb25seSB0dGw/OiBEdXJhdGlvbiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIERuc2NvbnRyb2xNeFJlY29yZCBleHRlbmRzIERuc2NvbnRyb2xSZWNvcmQge1xuICBwdWJsaWMgcmVhZG9ubHkgbXhQcmVmZXJlbmNlOiBNeFByZWZlcmVuY2U7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBEbnNjb250cm9sTXhSZWNvcmRQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgcmVjb3JkVHlwZTogXCJNWFwiLFxuICAgICAgbGFiZWw6IHByb3BzLmxhYmVsLFxuICAgICAgdGFyZ2V0OiBwcm9wcy50YXJnZXQsXG4gICAgICB0dGw6IHByb3BzLnR0bCxcbiAgICB9KTtcbiAgICB0aGlzLm14UHJlZmVyZW5jZSA9IHByb3BzLm14UHJlZmVyZW5jZTtcbiAgfVxuICBwdWJsaWMgc3RhdGljIGlzRG5zY29udHJvbE14UmVjb3JkKHg6IHVua25vd24pOiB4IGlzIERuc2NvbnRyb2xNeFJlY29yZCB7XG4gICAgcmV0dXJuIChcbiAgICAgIHggIT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiBETlNfQ09OVFJPTF9NWF9SRUNPUkRfU1lNQk9MIGluIHhcbiAgICApO1xuICB9XG4gIHB1YmxpYyByZW5kZXJSZWNvcmRDb25maWcoKTogRG5zY29udHJvbE14UmVjb3JkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldCxcbiAgICAgIHJlY29yZFR5cGU6IHRoaXMucmVjb3JkVHlwZSxcbiAgICAgIG14UHJlZmVyZW5jZTogdGhpcy5teFByZWZlcmVuY2UsXG4gICAgICB0dGw6IHRoaXMudHRsPy50b1NlY29uZHMoKSxcbiAgICAgIG1ldGE6IHt9LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==