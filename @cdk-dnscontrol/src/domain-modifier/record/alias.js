"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolAliasRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_ALIAS_RECORD_SYMBOL = Symbol.for("DnscontrolAliasRecord");
class DnscontrolAliasRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "ALIAS",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            isEnsuredAbsent: props.isEnsuredAbsent,
            meta: props.meta,
        });
    }
    static isDnscontrolARecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_ALIAS_RECORD_SYMBOL in x);
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
exports.DnscontrolAliasRecord = DnscontrolAliasRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxpYXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbGlhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSwyREFBdUQ7QUFFdkQsTUFBTSwrQkFBK0IsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFVNUUsTUFBYSxxQkFBc0IsU0FBUSxvQ0FBZ0I7SUFDekQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFpQztRQUN6RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxPQUFPO1lBQ25CLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQVU7UUFDMUMsT0FBTyxDQUNMLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLCtCQUErQixJQUFJLENBQUMsQ0FDM0UsQ0FBQztJQUNKLENBQUM7SUFDTSxrQkFBa0I7UUFDdkIsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBekJELHNEQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sQWxpYXNSZWNvcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZG5zY29udHJvbC1yZWNvcmQtY29uZmlnXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFJlY29yZCB9IGZyb20gXCIuL2Ruc2NvbnRyb2wtcmVjb3JkXCI7XG5cbmNvbnN0IEROU19DT05UUk9MX0FMSUFTX1JFQ09SRF9TWU1CT0wgPSBTeW1ib2wuZm9yKFwiRG5zY29udHJvbEFsaWFzUmVjb3JkXCIpO1xuXG5leHBvcnQgaW50ZXJmYWNlIERuc2NvbnRyb2xBbGlhc1JlY29yZFByb3BzIHtcbiAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgcmVhZG9ubHkgdGFyZ2V0OiBzdHJpbmc7XG4gIHJlYWRvbmx5IHR0bD86IER1cmF0aW9uIHwgdW5kZWZpbmVkO1xuICByZWFkb25seSBpc0Vuc3VyZWRBYnNlbnQ/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICByZWFkb25seSBtZXRhPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIERuc2NvbnRyb2xBbGlhc1JlY29yZCBleHRlbmRzIERuc2NvbnRyb2xSZWNvcmQge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRG5zY29udHJvbEFsaWFzUmVjb3JkUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHJlY29yZFR5cGU6IFwiQUxJQVNcIixcbiAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCxcbiAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0LFxuICAgICAgdHRsOiBwcm9wcy50dGwsXG4gICAgICBpc0Vuc3VyZWRBYnNlbnQ6IHByb3BzLmlzRW5zdXJlZEFic2VudCxcbiAgICAgIG1ldGE6IHByb3BzLm1ldGEsXG4gICAgfSk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpc0Ruc2NvbnRyb2xBUmVjb3JkKHg6IHVua25vd24pOiB4IGlzIERuc2NvbnRyb2xBbGlhc1JlY29yZCB7XG4gICAgcmV0dXJuIChcbiAgICAgIHggIT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJiBETlNfQ09OVFJPTF9BTElBU19SRUNPUkRfU1lNQk9MIGluIHhcbiAgICApO1xuICB9XG4gIHB1YmxpYyByZW5kZXJSZWNvcmRDb25maWcoKTogRG5zY29udHJvbEFsaWFzUmVjb3JkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldCxcbiAgICAgIHJlY29yZFR5cGU6IHRoaXMucmVjb3JkVHlwZSxcbiAgICAgIHR0bDogdGhpcy50dGw/LnRvU2Vjb25kcygpLFxuICAgICAgbWV0YTogdGhpcy5tZXRhLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==