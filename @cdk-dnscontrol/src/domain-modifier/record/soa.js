"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolSoaRecord = void 0;
const dnscontrol_record_1 = require("./dnscontrol-record");
const DNS_CONTROL_SOA_RECORD_SYMBOL = Symbol.for("DnscontrolSoaRecord");
class DnscontrolSoaRecord extends dnscontrol_record_1.DnscontrolRecord {
    mbox;
    refresh;
    retry;
    expire;
    minttl;
    constructor(scope, id, props) {
        super(scope, id, {
            recordType: "SOA",
            label: props.label,
            target: props.target,
            ttl: props.ttl,
        });
        this.mbox = props.mbox;
        this.refresh = props.refresh;
        this.retry = props.retry;
        this.expire = props.expire;
        this.minttl = props.minttl;
    }
    static isDnscontrolSoaRecord(x) {
        return (x != null && typeof x === "object" && DNS_CONTROL_SOA_RECORD_SYMBOL in x);
    }
    renderRecordConfig() {
        return {
            name: this.name,
            target: this.target,
            recordType: this.recordType,
            ttl: this.ttl?.toSeconds(),
            soaMbox: this.mbox,
            soaRefresh: this.refresh,
            soaRetry: this.retry,
            soaExpire: this.expire,
            soaMinTtl: this.minttl,
            meta: {},
        };
    }
}
exports.DnscontrolSoaRecord = DnscontrolSoaRecord;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLDJEQUF1RDtBQUV2RCxNQUFNLDZCQUE2QixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztBQWF4RSxNQUFhLG1CQUFvQixTQUFRLG9DQUFnQjtJQUN2QyxJQUFJLENBQVM7SUFDYixPQUFPLENBQVM7SUFDaEIsS0FBSyxDQUFTO0lBQ2QsTUFBTSxDQUFTO0lBQ2YsTUFBTSxDQUFTO0lBQy9CLFlBQVksS0FBZ0IsRUFBRSxFQUFVLEVBQUUsS0FBK0I7UUFDdkUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixVQUFVLEVBQUUsS0FBSztZQUNqQixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNO1lBQ3BCLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRztTQUNmLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDN0IsQ0FBQztJQUNNLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFVO1FBQzVDLE9BQU8sQ0FDTCxDQUFDLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSw2QkFBNkIsSUFBSSxDQUFDLENBQ3pFLENBQUM7SUFDSixDQUFDO0lBQ00sa0JBQWtCO1FBQ3ZCLE9BQU87WUFDTCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRTtZQUMxQixPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDbEIsVUFBVSxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3hCLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNwQixTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDdEIsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ3RCLElBQUksRUFBRSxFQUFFO1NBQ1QsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQXRDRCxrREFzQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRG5zY29udHJvbFNvYVJlY29yZENvbmZpZyB9IGZyb20gXCIuLi8uLi90eXBlcy9kbnNjb250cm9sLXJlY29yZC1jb25maWdcIjtcbmltcG9ydCB7IER1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3R5cGVzL2R1cmF0aW9uXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sUmVjb3JkIH0gZnJvbSBcIi4vZG5zY29udHJvbC1yZWNvcmRcIjtcblxuY29uc3QgRE5TX0NPTlRST0xfU09BX1JFQ09SRF9TWU1CT0wgPSBTeW1ib2wuZm9yKFwiRG5zY29udHJvbFNvYVJlY29yZFwiKTtcblxuZXhwb3J0IGludGVyZmFjZSBEbnNjb250cm9sU29hUmVjb3JkUHJvcHMge1xuICByZWFkb25seSBsYWJlbDogc3RyaW5nO1xuICByZWFkb25seSB0YXJnZXQ6IHN0cmluZztcbiAgcmVhZG9ubHkgbWJveDogc3RyaW5nO1xuICByZWFkb25seSByZWZyZXNoOiBudW1iZXI7XG4gIHJlYWRvbmx5IHJldHJ5OiBudW1iZXI7XG4gIHJlYWRvbmx5IGV4cGlyZTogbnVtYmVyO1xuICByZWFkb25seSBtaW50dGw6IG51bWJlcjtcbiAgcmVhZG9ubHkgdHRsPzogRHVyYXRpb24gfCB1bmRlZmluZWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBEbnNjb250cm9sU29hUmVjb3JkIGV4dGVuZHMgRG5zY29udHJvbFJlY29yZCB7XG4gIHB1YmxpYyByZWFkb25seSBtYm94OiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSByZWZyZXNoOiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSByZXRyeTogbnVtYmVyO1xuICBwdWJsaWMgcmVhZG9ubHkgZXhwaXJlOiBudW1iZXI7XG4gIHB1YmxpYyByZWFkb25seSBtaW50dGw6IG51bWJlcjtcbiAgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IERuc2NvbnRyb2xTb2FSZWNvcmRQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgcmVjb3JkVHlwZTogXCJTT0FcIixcbiAgICAgIGxhYmVsOiBwcm9wcy5sYWJlbCxcbiAgICAgIHRhcmdldDogcHJvcHMudGFyZ2V0LFxuICAgICAgdHRsOiBwcm9wcy50dGwsXG4gICAgfSk7XG4gICAgdGhpcy5tYm94ID0gcHJvcHMubWJveDtcbiAgICB0aGlzLnJlZnJlc2ggPSBwcm9wcy5yZWZyZXNoO1xuICAgIHRoaXMucmV0cnkgPSBwcm9wcy5yZXRyeTtcbiAgICB0aGlzLmV4cGlyZSA9IHByb3BzLmV4cGlyZTtcbiAgICB0aGlzLm1pbnR0bCA9IHByb3BzLm1pbnR0bDtcbiAgfVxuICBwdWJsaWMgc3RhdGljIGlzRG5zY29udHJvbFNvYVJlY29yZCh4OiB1bmtub3duKTogeCBpcyBEbnNjb250cm9sU29hUmVjb3JkIHtcbiAgICByZXR1cm4gKFxuICAgICAgeCAhPSBudWxsICYmIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiICYmIEROU19DT05UUk9MX1NPQV9SRUNPUkRfU1lNQk9MIGluIHhcbiAgICApO1xuICB9XG4gIHB1YmxpYyByZW5kZXJSZWNvcmRDb25maWcoKTogRG5zY29udHJvbFNvYVJlY29yZENvbmZpZyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIHRhcmdldDogdGhpcy50YXJnZXQsXG4gICAgICByZWNvcmRUeXBlOiB0aGlzLnJlY29yZFR5cGUsXG4gICAgICB0dGw6IHRoaXMudHRsPy50b1NlY29uZHMoKSxcbiAgICAgIHNvYU1ib3g6IHRoaXMubWJveCxcbiAgICAgIHNvYVJlZnJlc2g6IHRoaXMucmVmcmVzaCxcbiAgICAgIHNvYVJldHJ5OiB0aGlzLnJldHJ5LFxuICAgICAgc29hRXhwaXJlOiB0aGlzLmV4cGlyZSxcbiAgICAgIHNvYU1pblR0bDogdGhpcy5taW50dGwsXG4gICAgICBtZXRhOiB7fSxcbiAgICB9O1xuICB9XG59XG4iXX0=