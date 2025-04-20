"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolAkamaiCdnRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_AKAMAICDN_RECORD_SYMBOL = Symbol.for("DnscontrolAkamaiCdnRecord");
class DnscontrolAkamaiCdnRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "AKAMAICDN",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            isEnsuredAbsent: props.isEnsuredAbsent,
            meta: props.meta,
        });
    }
    static isDnscontrolAkamaiCdnRecord(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_AKAMAICDN_RECORD_SYMBOL in x);
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
exports.DnscontrolAkamaiCdnRecord = DnscontrolAkamaiCdnRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWthbWFpLWNkbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFrYW1haS1jZG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsMkRBQXVEO0FBRXZELE1BQU0sbUNBQW1DLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FDcEQsMkJBQTJCLENBQzVCLENBQUM7QUFVRixNQUFhLHlCQUEwQixTQUFRLG9DQUFnQjtJQUM3RCxZQUNFLEtBQWdCLEVBQ2hCLEVBQVUsRUFDVixLQUFxQztRQUVyQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxXQUFXO1lBQ3ZCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLDJCQUEyQixDQUN2QyxDQUFVO1FBRVYsT0FBTyxDQUNMLENBQUMsSUFBSSxJQUFJO1lBQ1QsT0FBTyxDQUFDLEtBQUssUUFBUTtZQUNyQixtQ0FBbUMsSUFBSSxDQUFDLENBQ3pDLENBQUM7SUFDSixDQUFDO0lBQ00sa0JBQWtCO1FBQ3ZCLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRTtZQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7U0FDaEIsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQWpDRCw4REFpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRG5zY29udHJvbEFrYW1haUNkblJlY29yZENvbmZpZyB9IGZyb20gXCIuLi8uLi90eXBlcy9kbnNjb250cm9sLXJlY29yZC1jb25maWdcIjtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2R1cmF0aW9uXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sUmVjb3JkIH0gZnJvbSBcIi4vZG5zY29udHJvbC1yZWNvcmRcIjtcblxuY29uc3QgRE5TX0NPTlRST0xfQUtBTUFJQ0ROX1JFQ09SRF9TWU1CT0wgPSBTeW1ib2wuZm9yKFxuICBcIkRuc2NvbnRyb2xBa2FtYWlDZG5SZWNvcmRcIixcbik7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG5zY29udHJvbEFrYW1haUNkblJlY29yZFByb3BzIHtcbiAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgcmVhZG9ubHkgdGFyZ2V0OiBzdHJpbmc7XG4gIHJlYWRvbmx5IHR0bD86IER1cmF0aW9uIHwgdW5kZWZpbmVkO1xuICByZWFkb25seSBpc0Vuc3VyZWRBYnNlbnQ/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICByZWFkb25seSBtZXRhPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIERuc2NvbnRyb2xBa2FtYWlDZG5SZWNvcmQgZXh0ZW5kcyBEbnNjb250cm9sUmVjb3JkIHtcbiAgY29uc3RydWN0b3IoXG4gICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIHByb3BzOiBEbnNjb250cm9sQWthbWFpQ2RuUmVjb3JkUHJvcHMsXG4gICkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgcmVjb3JkVHlwZTogXCJBS0FNQUlDRE5cIixcbiAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCxcbiAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0LFxuICAgICAgdHRsOiBwcm9wcy50dGwsXG4gICAgICBpc0Vuc3VyZWRBYnNlbnQ6IHByb3BzLmlzRW5zdXJlZEFic2VudCxcbiAgICAgIG1ldGE6IHByb3BzLm1ldGEsXG4gICAgfSk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpc0Ruc2NvbnRyb2xBa2FtYWlDZG5SZWNvcmQoXG4gICAgeDogdW5rbm93bixcbiAgKTogeCBpcyBEbnNjb250cm9sQWthbWFpQ2RuUmVjb3JkIHtcbiAgICByZXR1cm4gKFxuICAgICAgeCAhPSBudWxsICYmXG4gICAgICB0eXBlb2YgeCA9PT0gXCJvYmplY3RcIiAmJlxuICAgICAgRE5TX0NPTlRST0xfQUtBTUFJQ0ROX1JFQ09SRF9TWU1CT0wgaW4geFxuICAgICk7XG4gIH1cbiAgcHVibGljIHJlbmRlclJlY29yZENvbmZpZygpOiBEbnNjb250cm9sQWthbWFpQ2RuUmVjb3JkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgdGFyZ2V0OiB0aGlzLnRhcmdldCxcbiAgICAgIHJlY29yZFR5cGU6IHRoaXMucmVjb3JkVHlwZSxcbiAgICAgIHR0bDogdGhpcy50dGw/LnRvU2Vjb25kcygpLFxuICAgICAgbWV0YTogdGhpcy5tZXRhLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==