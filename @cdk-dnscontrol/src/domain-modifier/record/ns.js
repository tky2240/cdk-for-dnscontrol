"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolNsRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_NS_RECORD_SYMBOL = Symbol.for("DnscontrolNsRecord");
class DnscontrolNsRecord extends dnscontrol_record_1.DnscontrolRecord {
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "NS",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
            isEnsuredAbsent: props.isEnsuredAbsent,
            meta: props.meta,
        });
    }
    static isDnscontrolNsRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_NS_RECORD_SYMBOL in x);
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
exports.DnscontrolNsRecord = DnscontrolNsRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQSwyREFBdUQ7QUFFdkQsTUFBTSw0QkFBNEIsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFVdEUsTUFBYSxrQkFBbUIsU0FBUSxvQ0FBZ0I7SUFDdEQsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUE4QjtRQUN0RSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSztZQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07WUFDcEIsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHO1lBQ2QsZUFBZSxFQUFFLEtBQUssQ0FBQyxlQUFlO1lBQ3RDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNqQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ00sTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQVU7UUFDM0MsT0FBTyxDQUNMLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLDRCQUE0QixJQUFJLENBQUMsQ0FDeEUsQ0FBQztJQUNKLENBQUM7SUFDTSxrQkFBa0I7UUFDdkIsT0FBTztZQUNMLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtTQUNoQixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBekJELGdEQXlCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sTnNSZWNvcmRDb25maWcgfSBmcm9tIFwiLi4vLi4vdHlwZXMvZG5zY29udHJvbC1yZWNvcmQtY29uZmlnXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHsgRG5zY29udHJvbFJlY29yZCB9IGZyb20gXCIuL2Ruc2NvbnRyb2wtcmVjb3JkXCI7XG5cbmNvbnN0IEROU19DT05UUk9MX05TX1JFQ09SRF9TWU1CT0wgPSBTeW1ib2wuZm9yKFwiRG5zY29udHJvbE5zUmVjb3JkXCIpO1xuXG5leHBvcnQgaW50ZXJmYWNlIERuc2NvbnRyb2xOc1JlY29yZFByb3BzIHtcbiAgcmVhZG9ubHkgbGFiZWw6IHN0cmluZztcbiAgcmVhZG9ubHkgdGFyZ2V0OiBzdHJpbmc7XG4gIHJlYWRvbmx5IHR0bD86IER1cmF0aW9uIHwgdW5kZWZpbmVkO1xuICByZWFkb25seSBpc0Vuc3VyZWRBYnNlbnQ/OiBib29sZWFuIHwgdW5kZWZpbmVkO1xuICByZWFkb25seSBtZXRhPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIERuc2NvbnRyb2xOc1JlY29yZCBleHRlbmRzIERuc2NvbnRyb2xSZWNvcmQge1xuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRG5zY29udHJvbE5zUmVjb3JkUHJvcHMpIHtcbiAgICBzdXBlcihzY29wZSwgaWQsIHtcbiAgICAgIHJlY29yZFR5cGU6IFwiTlNcIixcbiAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCxcbiAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0LFxuICAgICAgdHRsOiBwcm9wcy50dGwsXG4gICAgICBpc0Vuc3VyZWRBYnNlbnQ6IHByb3BzLmlzRW5zdXJlZEFic2VudCxcbiAgICAgIG1ldGE6IHByb3BzLm1ldGEsXG4gICAgfSk7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpc0Ruc2NvbnRyb2xOc1JlY29yZCh4OiB1bmtub3duKTogeCBpcyBEbnNjb250cm9sTnNSZWNvcmQge1xuICAgIHJldHVybiAoXG4gICAgICB4ICE9IG51bGwgJiYgdHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiYgRE5TX0NPTlRST0xfTlNfUkVDT1JEX1NZTUJPTCBpbiB4XG4gICAgKTtcbiAgfVxuICBwdWJsaWMgcmVuZGVyUmVjb3JkQ29uZmlnKCk6IERuc2NvbnRyb2xOc1JlY29yZENvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHRhcmdldDogdGhpcy50YXJnZXQsXG4gICAgICByZWNvcmRUeXBlOiB0aGlzLnJlY29yZFR5cGUsXG4gICAgICB0dGw6IHRoaXMudHRsPy50b1NlY29uZHMoKSxcbiAgICAgIG1ldGE6IHRoaXMubWV0YSxcbiAgICB9O1xuICB9XG59XG4iXX0=