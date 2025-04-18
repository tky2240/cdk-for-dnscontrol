"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolBunnyDnsRdrRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_BUNNY_DNS_RDR_RECORD_SYMBOL = Symbol.for("DnscontrolBunnyDnsRdrRecord");
class DnscontrolBunnyDnsRdrRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "BUNNY_DNS_RDR",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
    }
    static isDnscontrolBunnyDnsRdrRecord(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_BUNNY_DNS_RDR_RECORD_SYMBOL in x);
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
exports.DnscontrolBunnyDnsRdrRecord = DnscontrolBunnyDnsRdrRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVubnktZG5zLXJkci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1bm55LWRucy1yZHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0EsMkRBQXVEO0FBRXZELE1BQU0sdUNBQXVDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FDeEQsNkJBQTZCLENBQzlCLENBQUM7QUFRRixNQUFhLDJCQUE0QixTQUFRLG9DQUFnQjtJQUMvRCxZQUNFLEtBQWdCLEVBQ2hCLEVBQVUsRUFDVixLQUF1QztRQUV2QyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxlQUFlO1lBQzNCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1NBQ2YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNNLE1BQU0sQ0FBQyw2QkFBNkIsQ0FDekMsQ0FBVTtRQUVWLE9BQU8sQ0FDTCxDQUFDLElBQUksSUFBSTtZQUNULE9BQU8sQ0FBQyxLQUFLLFFBQVE7WUFDckIsdUNBQXVDLElBQUksQ0FBQyxDQUM3QyxDQUFDO0lBQ0osQ0FBQztJQUNNLGtCQUFrQjtRQUN2QixPQUFPO1lBQ0wsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUU7WUFDMUIsSUFBSSxFQUFFLEVBQUU7U0FDVCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBL0JELGtFQStCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sQnVubnlEbnNSZHJSZWNvcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZG5zY29udHJvbC1yZWNvcmQtY29uZmlnXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFJlY29yZCB9IGZyb20gXCIuL2Ruc2NvbnRyb2wtcmVjb3JkXCI7XG5cbmNvbnN0IEROU19DT05UUk9MX0JVTk5ZX0ROU19SRFJfUkVDT1JEX1NZTUJPTCA9IFN5bWJvbC5mb3IoXG4gIFwiRG5zY29udHJvbEJ1bm55RG5zUmRyUmVjb3JkXCIsXG4pO1xuXG5leHBvcnQgaW50ZXJmYWNlIERuc2NvbnRyb2xCdW5ueURuc1JkclJlY29yZFByb3BzIHtcbiAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgcmVhZG9ubHkgdGFyZ2V0OiBzdHJpbmc7XG4gIHJlYWRvbmx5IHR0bD86IER1cmF0aW9uIHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY2xhc3MgRG5zY29udHJvbEJ1bm55RG5zUmRyUmVjb3JkIGV4dGVuZHMgRG5zY29udHJvbFJlY29yZCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHNjb3BlOiBDb25zdHJ1Y3QsXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwcm9wczogRG5zY29udHJvbEJ1bm55RG5zUmRyUmVjb3JkUHJvcHMsXG4gICkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgcmVjb3JkVHlwZTogXCJCVU5OWV9ETlNfUkRSXCIsXG4gICAgICBsYWJlbDogcHJvcHMubGFiZWwsXG4gICAgICB0YXJnZXQ6IHByb3BzLnRhcmdldCxcbiAgICAgIHR0bDogcHJvcHMudHRsLFxuICAgIH0pO1xuICB9XG4gIHB1YmxpYyBzdGF0aWMgaXNEbnNjb250cm9sQnVubnlEbnNSZHJSZWNvcmQoXG4gICAgeDogdW5rbm93bixcbiAgKTogeCBpcyBEbnNjb250cm9sQnVubnlEbnNSZHJSZWNvcmQge1xuICAgIHJldHVybiAoXG4gICAgICB4ICE9IG51bGwgJiZcbiAgICAgIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmXG4gICAgICBETlNfQ09OVFJPTF9CVU5OWV9ETlNfUkRSX1JFQ09SRF9TWU1CT0wgaW4geFxuICAgICk7XG4gIH1cbiAgcHVibGljIHJlbmRlclJlY29yZENvbmZpZygpOiBEbnNjb250cm9sQnVubnlEbnNSZHJSZWNvcmRDb25maWcge1xuICAgIHJldHVybiB7XG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICB0YXJnZXQ6IHRoaXMudGFyZ2V0LFxuICAgICAgcmVjb3JkVHlwZTogdGhpcy5yZWNvcmRUeXBlLFxuICAgICAgdHRsOiB0aGlzLnR0bD8udG9TZWNvbmRzKCksXG4gICAgICBtZXRhOiB7fSxcbiAgICB9O1xuICB9XG59XG4iXX0=