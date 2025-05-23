"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DnscontrolDomainProvider = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const constructs_1 = require("constructs");
const DNS_CONTROL_DOMAIN_PROVIDER_SYMBOL = Symbol.for("DnscontrolDomainProvider");
class DnscontrolDomainProvider extends constructs_1.Construct {
    static [JSII_RTTI_SYMBOL_1] = { fqn: "@tky2240/cdk-for-dnscontrol.DnscontrolDomainProvider", version: "0.1.0" };
    domainProviderName;
    nameserverCount;
    constructor(scope, id, props) {
        super(scope, id);
        Object.defineProperty(this, DNS_CONTROL_DOMAIN_PROVIDER_SYMBOL, {
            value: true,
        });
        this.domainProviderName = props.domainProviderName;
        this.nameserverCount = props.nameserverCount ?? -1;
    }
    static isDnscontrolDomainProvider(x) {
        return (x != null &&
            typeof x === "object" &&
            DNS_CONTROL_DOMAIN_PROVIDER_SYMBOL in x);
    }
}
exports.DnscontrolDomainProvider = DnscontrolDomainProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5zY29udHJvbC1kb21haW4tcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkbnNjb250cm9sLWRvbWFpbi1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsMkNBQXVDO0FBT3ZDLE1BQU0sa0NBQWtDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FDbkQsMEJBQTBCLENBQzNCLENBQUM7QUFFRixNQUFhLHdCQUF5QixTQUFRLHNCQUFTOztJQUNyQyxrQkFBa0IsQ0FBUztJQUMzQixlQUFlLENBQVM7SUFDeEMsWUFDRSxLQUFnQixFQUNoQixFQUFVLEVBQ1YsS0FBb0M7UUFFcEMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxrQ0FBa0MsRUFBRTtZQUM5RCxLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUMsa0JBQWtCLENBQUM7UUFDbkQsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsZUFBZSxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFDTSxNQUFNLENBQUMsMEJBQTBCLENBQ3RDLENBQVU7UUFFVixPQUFPLENBQ0wsQ0FBQyxJQUFJLElBQUk7WUFDVCxPQUFPLENBQUMsS0FBSyxRQUFRO1lBQ3JCLGtDQUFrQyxJQUFJLENBQUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7O0FBdkJILDREQXdCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRG5zY29udHJvbERvbWFpblByb3ZpZGVyUHJvcHMge1xuICByZWFkb25seSBkb21haW5Qcm92aWRlck5hbWU6IHN0cmluZztcbiAgcmVhZG9ubHkgbmFtZXNlcnZlckNvdW50PzogbnVtYmVyO1xufVxuXG5jb25zdCBETlNfQ09OVFJPTF9ET01BSU5fUFJPVklERVJfU1lNQk9MID0gU3ltYm9sLmZvcihcbiAgXCJEbnNjb250cm9sRG9tYWluUHJvdmlkZXJcIixcbik7XG5cbmV4cG9ydCBjbGFzcyBEbnNjb250cm9sRG9tYWluUHJvdmlkZXIgZXh0ZW5kcyBDb25zdHJ1Y3Qge1xuICBwdWJsaWMgcmVhZG9ubHkgZG9tYWluUHJvdmlkZXJOYW1lOiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSBuYW1lc2VydmVyQ291bnQ6IG51bWJlcjtcbiAgY29uc3RydWN0b3IoXG4gICAgc2NvcGU6IENvbnN0cnVjdCxcbiAgICBpZDogc3RyaW5nLFxuICAgIHByb3BzOiBEbnNjb250cm9sRG9tYWluUHJvdmlkZXJQcm9wcyxcbiAgKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgRE5TX0NPTlRST0xfRE9NQUlOX1BST1ZJREVSX1NZTUJPTCwge1xuICAgICAgdmFsdWU6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5kb21haW5Qcm92aWRlck5hbWUgPSBwcm9wcy5kb21haW5Qcm92aWRlck5hbWU7XG4gICAgdGhpcy5uYW1lc2VydmVyQ291bnQgPSBwcm9wcy5uYW1lc2VydmVyQ291bnQgPz8gLTE7XG4gIH1cbiAgcHVibGljIHN0YXRpYyBpc0Ruc2NvbnRyb2xEb21haW5Qcm92aWRlcihcbiAgICB4OiB1bmtub3duLFxuICApOiB4IGlzIERuc2NvbnRyb2xEb21haW5Qcm92aWRlciB7XG4gICAgcmV0dXJuIChcbiAgICAgIHggIT0gbnVsbCAmJlxuICAgICAgdHlwZW9mIHggPT09IFwib2JqZWN0XCIgJiZcbiAgICAgIEROU19DT05UUk9MX0RPTUFJTl9QUk9WSURFUl9TWU1CT0wgaW4geFxuICAgICk7XG4gIH1cbn1cbiJdfQ==