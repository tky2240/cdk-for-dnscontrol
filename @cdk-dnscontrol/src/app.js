"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const constructs_1 = require("constructs");
const dnscontrol_stack_1 = require("./dnscontrol-stack");
class App extends constructs_1.Construct {
    static [JSII_RTTI_SYMBOL_1] = { fqn: "@tky2240/cdk-for-dnscontrol.App", version: "0.0.5" };
    outDir;
    constructor(config = {}) {
        // eslint-disable-next-line
        super(undefined, "");
        this.outDir = config.outDir ?? "cdk.out";
    }
    synth() {
        const stacks = getStacks(this);
        for (const stack of stacks) {
            stack.synth(this.outDir);
        }
    }
}
exports.App = App;
function getStacks(node, stacks = []) {
    if (dnscontrol_stack_1.DnscontrolStack.isDnscontrolStack(node)) {
        stacks.push(node);
    }
    for (const child of node.node.children) {
        getStacks(child, stacks);
    }
    return stacks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSwyQ0FBbUQ7QUFDbkQseURBQXFEO0FBTXJELE1BQWEsR0FBSSxTQUFRLHNCQUFTOztJQUNoQixNQUFNLENBQVM7SUFDL0IsWUFBWSxTQUFvQixFQUFFO1FBQ2hDLDJCQUEyQjtRQUMzQixLQUFLLENBQUMsU0FBZ0IsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxDQUFDO0lBQzNDLENBQUM7SUFDTSxLQUFLO1FBQ1YsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9CLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFLENBQUM7WUFDM0IsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0IsQ0FBQztJQUNILENBQUM7O0FBWkgsa0JBYUM7QUFFRCxTQUFTLFNBQVMsQ0FDaEIsSUFBZ0IsRUFDaEIsU0FBNEIsRUFBRTtJQUU5QixJQUFJLGtDQUFlLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFDRCxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCwgSUNvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEbnNjb250cm9sU3RhY2sgfSBmcm9tIFwiLi9kbnNjb250cm9sLXN0YWNrXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBwQ29uZmlnIHtcbiAgcmVhZG9ubHkgb3V0RGlyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgQXBwIGV4dGVuZHMgQ29uc3RydWN0IHtcbiAgcHVibGljIHJlYWRvbmx5IG91dERpcjogc3RyaW5nO1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IEFwcENvbmZpZyA9IHt9KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgc3VwZXIodW5kZWZpbmVkIGFzIGFueSwgXCJcIik7XG4gICAgdGhpcy5vdXREaXIgPSBjb25maWcub3V0RGlyID8/IFwiY2RrLm91dFwiO1xuICB9XG4gIHB1YmxpYyBzeW50aCgpOiB2b2lkIHtcbiAgICBjb25zdCBzdGFja3MgPSBnZXRTdGFja3ModGhpcyk7XG4gICAgZm9yIChjb25zdCBzdGFjayBvZiBzdGFja3MpIHtcbiAgICAgIHN0YWNrLnN5bnRoKHRoaXMub3V0RGlyKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U3RhY2tzKFxuICBub2RlOiBJQ29uc3RydWN0LFxuICBzdGFja3M6IERuc2NvbnRyb2xTdGFja1tdID0gW10sXG4pOiBEbnNjb250cm9sU3RhY2tbXSB7XG4gIGlmIChEbnNjb250cm9sU3RhY2suaXNEbnNjb250cm9sU3RhY2sobm9kZSkpIHtcbiAgICBzdGFja3MucHVzaChub2RlKTtcbiAgfVxuICBmb3IgKGNvbnN0IGNoaWxkIG9mIG5vZGUubm9kZS5jaGlsZHJlbikge1xuICAgIGdldFN0YWNrcyhjaGlsZCwgc3RhY2tzKTtcbiAgfVxuICByZXR1cm4gc3RhY2tzO1xufVxuIl19