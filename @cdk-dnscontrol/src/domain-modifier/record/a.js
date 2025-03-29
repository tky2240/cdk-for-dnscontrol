"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolARecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_A_RECORD_SYMBOL = Symbol.for("DnscontrolARecord");
class DnscontrolARecord extends dnscontrol_record_1.DnscontrolRecord {
    ip;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "A",
            label: props.label,
            target: props.ip,
            ttl: props.ttl,
        });
        this.ip = props.ip;
    }
    static isDnscontrolARecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_A_RECORD_SYMBOL in x);
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
exports.DnscontrolARecord = DnscontrolARecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsMkRBQXVEO0FBRXZELE1BQU0sMkJBQTJCLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBUXBFLE1BQWEsaUJBQWtCLFNBQVEsb0NBQWdCO0lBQ3JDLEVBQUUsQ0FBYztJQUNoQyxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQTZCO1FBQ3JFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YsVUFBVSxFQUFFLEdBQUc7WUFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQ2hCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztTQUNmLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ00sTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQVU7UUFDMUMsT0FBTyxDQUNMLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLDJCQUEyQixJQUFJLENBQUMsQ0FDdkUsQ0FBQztJQUNKLENBQUM7SUFDTSxrQkFBa0I7UUFDdkIsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFO1lBQzFCLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXpCRCw4Q0F5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRG5zY29udHJvbEFSZWNvcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZG5zY29udHJvbC1yZWNvcmQtY29uZmlnXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHsgSVB2NEFkZHJlc3MgfSBmcm9tIFwiLi4vLi4vdHlwZXMvaXB2NFwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFJlY29yZCB9IGZyb20gXCIuL2Ruc2NvbnRyb2wtcmVjb3JkXCI7XG5cbmNvbnN0IEROU19DT05UUk9MX0FfUkVDT1JEX1NZTUJPTCA9IFN5bWJvbC5mb3IoXCJEbnNjb250cm9sQVJlY29yZFwiKTtcblxuZXhwb3J0IGludGVyZmFjZSBEbnNjb250cm9sQVJlY29yZFByb3BzIHtcbiAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgcmVhZG9ubHkgaXA6IElQdjRBZGRyZXNzO1xuICByZWFkb25seSB0dGw/OiBEdXJhdGlvbiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIERuc2NvbnRyb2xBUmVjb3JkIGV4dGVuZHMgRG5zY29udHJvbFJlY29yZCB7XG4gIHB1YmxpYyByZWFkb25seSBpcDogSVB2NEFkZHJlc3M7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBEbnNjb250cm9sQVJlY29yZFByb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCB7XG4gICAgICByZWNvcmRUeXBlOiBcIkFcIixcbiAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCxcbiAgICAgIHRhcmdldDogcHJvcHMuaXAsXG4gICAgICB0dGw6IHByb3BzLnR0bCxcbiAgICB9KTtcbiAgICB0aGlzLmlwID0gcHJvcHMuaXA7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpc0Ruc2NvbnRyb2xBUmVjb3JkKHg6IHVua25vd24pOiB4IGlzIERuc2NvbnRyb2xBUmVjb3JkIHtcbiAgICByZXR1cm4gKFxuICAgICAgeCAhPSBudWxsICYmIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIEROU19DT05UUk9MX0FfUkVDT1JEX1NZTUJPTCBpbiB4XG4gICAgKTtcbiAgfVxuICBwdWJsaWMgcmVuZGVyUmVjb3JkQ29uZmlnKCk6IERuc2NvbnRyb2xBUmVjb3JkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldCxcbiAgICAgIHJlY29yZFR5cGU6IHRoaXMucmVjb3JkVHlwZSxcbiAgICAgIHR0bDogdGhpcy50dGw/LnRvU2Vjb25kcygpLFxuICAgICAgbWV0YToge30sXG4gICAgfTtcbiAgfVxufVxuIl19