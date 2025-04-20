"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DNSKEY = DNSKEY;
const duration_1 = require("../../types/duration");
const dnskey_1 = require("../record/dnskey");
function DNSKEY(scope, label, target, flag, protocol, algorithm, publickey, ttl, isEnsuredAbsent, meta) {
    return new dnskey_1.DnscontrolDnskeyRecord(scope, `Dnskey:${label}:${target}:${flag}:${protocol}:${algorithm}`, {
        label: label,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
        flag: (() => {
            if (typeof flag === "number") {
                return (0, dnskey_1.getDnsKeyFlagStringFromValue)(flag);
            }
            return flag;
        })(),
        protocol: (() => {
            if (typeof protocol === "number") {
                return (0, dnskey_1.getDnsKeyProtocolStringFromValue)(protocol);
            }
            return protocol;
        })(),
        algorithm: (() => {
            if (typeof algorithm === "number") {
                return (0, dnskey_1.getDnsKeyAlgorithmStringFromValue)(algorithm);
            }
            return algorithm;
        })(),
        publickey: publickey,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG5za2V5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZG5za2V5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBWUEsd0JBeUNDO0FBcERELG1EQUFnRDtBQUNoRCw2Q0FRMEI7QUFFMUIsU0FBZ0IsTUFBTSxDQUNwQixLQUFnQixFQUNoQixLQUFhLEVBQ2IsTUFBYyxFQUNkLElBQXlCLEVBQ3pCLFFBQWlDLEVBQ2pDLFNBQW1DLEVBQ25DLFNBQWlCLEVBQ2pCLEdBQXFCLEVBQ3JCLGVBQXlCLEVBQ3pCLElBQTZCO0lBRTdCLE9BQU8sSUFBSSwrQkFBc0IsQ0FDL0IsS0FBSyxFQUNMLFVBQVUsS0FBSyxJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRSxFQUM1RDtRQUNFLEtBQUssRUFBRSxLQUFLO1FBQ1osR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUNoRCxlQUFlLEVBQUUsZUFBZTtRQUNoQyxJQUFJLEVBQUUsSUFBSTtRQUNWLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNWLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQzdCLE9BQU8sSUFBQSxxQ0FBNEIsRUFBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxDQUFDO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsRUFBRTtRQUNKLFFBQVEsRUFBRSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ2pDLE9BQU8sSUFBQSx5Q0FBZ0MsRUFBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxDQUFDO1lBQ0QsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQyxDQUFDLEVBQUU7UUFDSixTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUNsQyxPQUFPLElBQUEsMENBQWlDLEVBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEQsQ0FBQztZQUNELE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxFQUFFO1FBQ0osU0FBUyxFQUFFLFNBQVM7S0FDckIsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCB9IGZyb20gXCJjb25zdHJ1Y3RzXCI7XG5pbXBvcnQgeyBEdXJhdGlvbiB9IGZyb20gXCIuLi8uLi90eXBlcy9kdXJhdGlvblwiO1xuaW1wb3J0IHtcbiAgRG5zY29udHJvbERuc2tleVJlY29yZCxcbiAgRG5za2V5QWxnb3JpdGhtLFxuICBEbnNrZXlGbGFnLFxuICBEbnNrZXlQcm90b2NvbCxcbiAgZ2V0RG5zS2V5QWxnb3JpdGhtU3RyaW5nRnJvbVZhbHVlLFxuICBnZXREbnNLZXlGbGFnU3RyaW5nRnJvbVZhbHVlLFxuICBnZXREbnNLZXlQcm90b2NvbFN0cmluZ0Zyb21WYWx1ZSxcbn0gZnJvbSBcIi4uL3JlY29yZC9kbnNrZXlcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIEROU0tFWShcbiAgc2NvcGU6IENvbnN0cnVjdCxcbiAgbGFiZWw6IHN0cmluZyxcbiAgdGFyZ2V0OiBzdHJpbmcsXG4gIGZsYWc6IERuc2tleUZsYWcgfCBudW1iZXIsXG4gIHByb3RvY29sOiBEbnNrZXlQcm90b2NvbCB8IG51bWJlcixcbiAgYWxnb3JpdGhtOiBEbnNrZXlBbGdvcml0aG0gfCBudW1iZXIsXG4gIHB1YmxpY2tleTogc3RyaW5nLFxuICB0dGw/OiBudW1iZXIgfCBzdHJpbmcsXG4gIGlzRW5zdXJlZEFic2VudD86IGJvb2xlYW4sXG4gIG1ldGE/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuKTogRG5zY29udHJvbERuc2tleVJlY29yZCB7XG4gIHJldHVybiBuZXcgRG5zY29udHJvbERuc2tleVJlY29yZChcbiAgICBzY29wZSxcbiAgICBgRG5za2V5OiR7bGFiZWx9OiR7dGFyZ2V0fToke2ZsYWd9OiR7cHJvdG9jb2x9OiR7YWxnb3JpdGhtfWAsXG4gICAge1xuICAgICAgbGFiZWw6IGxhYmVsLFxuICAgICAgdHRsOiB0dGwgIT0gbnVsbCA/IG5ldyBEdXJhdGlvbih0dGwpIDogdW5kZWZpbmVkLFxuICAgICAgaXNFbnN1cmVkQWJzZW50OiBpc0Vuc3VyZWRBYnNlbnQsXG4gICAgICBtZXRhOiBtZXRhLFxuICAgICAgZmxhZzogKCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbGFnID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgcmV0dXJuIGdldERuc0tleUZsYWdTdHJpbmdGcm9tVmFsdWUoZmxhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZsYWc7XG4gICAgICB9KSgpLFxuICAgICAgcHJvdG9jb2w6ICgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvdG9jb2wgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICByZXR1cm4gZ2V0RG5zS2V5UHJvdG9jb2xTdHJpbmdGcm9tVmFsdWUocHJvdG9jb2wpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm90b2NvbDtcbiAgICAgIH0pKCksXG4gICAgICBhbGdvcml0aG06ICgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgYWxnb3JpdGhtID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgcmV0dXJuIGdldERuc0tleUFsZ29yaXRobVN0cmluZ0Zyb21WYWx1ZShhbGdvcml0aG0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhbGdvcml0aG07XG4gICAgICB9KSgpLFxuICAgICAgcHVibGlja2V5OiBwdWJsaWNrZXksXG4gICAgfSxcbiAgKTtcbn1cbiJdfQ==