"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolPtrRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_PTR_RECORD_SYMBOL = Symbol.for("DnscontrolPtrRecord");
class DnscontrolPtrRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "PTR",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            isEnsuredAbsent: props.isEnsuredAbsent,
            meta: props.meta,
        });
    }
    static isDnscontrolPtrRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_PTR_RECORD_SYMBOL in x);
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
exports.DnscontrolPtrRecord = DnscontrolPtrRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHRyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHRyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLDJEQUF1RDtBQUV2RCxNQUFNLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQVV4RSxNQUFhLG1CQUFvQixTQUFRLG9DQUFnQjtJQUN2RCxZQUFZLEtBQWdCLEVBQUUsRUFBVSxFQUFFLEtBQStCO1FBQ3ZFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YsVUFBVSxFQUFFLEtBQUs7WUFDakIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO1lBQ2xCLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTTtZQUNwQixHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFDZCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ2pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDTSxNQUFNLENBQUMscUJBQXFCLENBQUMsQ0FBVTtRQUM1QyxPQUFPLENBQ0wsQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksNkJBQTZCLElBQUksQ0FBQyxDQUN6RSxDQUFDO0lBQ0osQ0FBQztJQUNNLGtCQUFrQjtRQUN2QixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUU7WUFDMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUF6QkQsa0RBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc3RydWN0IH0gZnJvbSBcImNvbnN0cnVjdHNcIjtcbmltcG9ydCB7IERuc2NvbnRyb2xQdHJSZWNvcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZG5zY29udHJvbC1yZWNvcmQtY29uZmlnXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFJlY29yZCB9IGZyb20gXCIuL2Ruc2NvbnRyb2wtcmVjb3JkXCI7XG5cbmNvbnN0IEROU19DT05UUk9MX1BUUl9SRUNPUkRfU1lNQk9MID0gU3ltYm9sLmZvcihcIkRuc2NvbnRyb2xQdHJSZWNvcmRcIik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG5zY29udHJvbFB0clJlY29yZFByb3BzIHtcbiAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgcmVhZG9ubHkgdGFyZ2V0OiBzdHJpbmc7XG4gIHJlYWRvbmx5IHR0bD86IER1cmF0aW9uIHwgdW5kZWZpbmVkO1xuICByZWFkb25seSBpc0Vuc3VyZWRBYnNlbnQ/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICByZWFkb25seSBtZXRhPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIERuc2NvbnRyb2xQdHJSZWNvcmQgZXh0ZW5kcyBEbnNjb250cm9sUmVjb3JkIHtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERuc2NvbnRyb2xQdHJSZWNvcmRQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgcmVjb3JkVHlwZTogXCJQVFJcIixcbiAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCxcbiAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0LFxuICAgICAgdHRsOiBwcm9wcy50dGwsXG4gICAgICBpc0Vuc3VyZWRBYnNlbnQ6IHByb3BzLmlzRW5zdXJlZEFic2VudCxcbiAgICAgIG1ldGE6IHByb3BzLm1ldGEsXG4gICAgfSk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpc0Ruc2NvbnRyb2xQdHJSZWNvcmQoeDogdW5rbm93bik6IHggaXMgRG5zY29udHJvbFB0clJlY29yZCB7XG4gICAgcmV0dXJuIChcbiAgICAgIHggIT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiBETlNfQ09OVFJPTF9QVFJfUkVDT1JEX1NZTUJPTCBpbiB4XG4gICAgKTtcbiAgfVxuICBwdWJsaWMgcmVuZGVyUmVjb3JkQ29uZmlnKCk6IERuc2NvbnRyb2xQdHJSZWNvcmRDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0LFxuICAgICAgcmVjb3JkVHlwZTogdGhpcy5yZWNvcmRUeXBlLFxuICAgICAgdHRsOiB0aGlzLnR0bD8udG9TZWNvbmRzKCksXG4gICAgICBtZXRhOiB0aGlzLm1ldGEsXG4gICAgfTtcbiAgfVxufVxuIl19