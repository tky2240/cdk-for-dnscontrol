"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSHFP = SSHFP;
const duration_1 = require("../../types/duration");
const sshfp_1 = require("../record/sshfp");
function SSHFP(scope, label, algorithm, fingerprintFormat, value, ttl, isEnsuredAbsent, meta) {
    return new sshfp_1.DnscontrolSshfpRecord(scope, `Sshfp:${label}:${algorithm}:${fingerprintFormat}`, {
        label: label,
        value: value,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        isEnsuredAbsent: isEnsuredAbsent,
        meta: meta,
        algorithm: (() => {
            if (typeof algorithm === "number") {
                return (0, sshfp_1.getSshfpAlgorithmStringFromValue)(algorithm);
            }
            return algorithm;
        })(),
        fingerprintFormat: (() => {
            if (typeof fingerprintFormat === "number") {
                return (0, sshfp_1.getSshfpFingerprintFormatStringFromValue)(fingerprintFormat);
            }
            return fingerprintFormat;
        })(),
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3NoZnAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzc2hmcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQVVBLHNCQWlDQztBQTFDRCxtREFBZ0Q7QUFDaEQsMkNBTXlCO0FBRXpCLFNBQWdCLEtBQUssQ0FDbkIsS0FBZ0IsRUFDaEIsS0FBYSxFQUNiLFNBQWtDLEVBQ2xDLGlCQUFrRCxFQUNsRCxLQUFhLEVBQ2IsR0FBcUIsRUFDckIsZUFBeUIsRUFDekIsSUFBNkI7SUFFN0IsT0FBTyxJQUFJLDZCQUFxQixDQUM5QixLQUFLLEVBQ0wsU0FBUyxLQUFLLElBQUksU0FBUyxJQUFJLGlCQUFpQixFQUFFLEVBQ2xEO1FBQ0UsS0FBSyxFQUFFLEtBQUs7UUFDWixLQUFLLEVBQUUsS0FBSztRQUNaLEdBQUcsRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLG1CQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDaEQsZUFBZSxFQUFFLGVBQWU7UUFDaEMsSUFBSSxFQUFFLElBQUk7UUFDVixTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLE9BQU8sU0FBUyxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUNsQyxPQUFPLElBQUEsd0NBQWdDLEVBQUMsU0FBUyxDQUFDLENBQUM7WUFDckQsQ0FBQztZQUNELE9BQU8sU0FBUyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxFQUFFO1FBQ0osaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLEVBQUU7WUFDdkIsSUFBSSxPQUFPLGlCQUFpQixLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUMxQyxPQUFPLElBQUEsZ0RBQXdDLEVBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNyRSxDQUFDO1lBQ0QsT0FBTyxpQkFBaUIsQ0FBQztRQUMzQixDQUFDLENBQUMsRUFBRTtLQUNMLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXMvZHVyYXRpb25cIjtcbmltcG9ydCB7XG4gIERuc2NvbnRyb2xTc2hmcFJlY29yZCxcbiAgU3NoZnBBbGdvcml0aG0sXG4gIFNzaGZwRmluZ2VycHJpbnRGb3JtYXQsXG4gIGdldFNzaGZwQWxnb3JpdGhtU3RyaW5nRnJvbVZhbHVlLFxuICBnZXRTc2hmcEZpbmdlcnByaW50Rm9ybWF0U3RyaW5nRnJvbVZhbHVlLFxufSBmcm9tIFwiLi4vcmVjb3JkL3NzaGZwXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBTU0hGUChcbiAgc2NvcGU6IENvbnN0cnVjdCxcbiAgbGFiZWw6IHN0cmluZyxcbiAgYWxnb3JpdGhtOiBTc2hmcEFsZ29yaXRobSB8IG51bWJlcixcbiAgZmluZ2VycHJpbnRGb3JtYXQ6IFNzaGZwRmluZ2VycHJpbnRGb3JtYXQgfCBudW1iZXIsXG4gIHZhbHVlOiBzdHJpbmcsXG4gIHR0bD86IG51bWJlciB8IHN0cmluZyxcbiAgaXNFbnN1cmVkQWJzZW50PzogYm9vbGVhbixcbiAgbWV0YT86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4pOiBEbnNjb250cm9sU3NoZnBSZWNvcmQge1xuICByZXR1cm4gbmV3IERuc2NvbnRyb2xTc2hmcFJlY29yZChcbiAgICBzY29wZSxcbiAgICBgU3NoZnA6JHtsYWJlbH06JHthbGdvcml0aG19OiR7ZmluZ2VycHJpbnRGb3JtYXR9YCxcbiAgICB7XG4gICAgICBsYWJlbDogbGFiZWwsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICB0dGw6IHR0bCAhPSBudWxsID8gbmV3IER1cmF0aW9uKHR0bCkgOiB1bmRlZmluZWQsXG4gICAgICBpc0Vuc3VyZWRBYnNlbnQ6IGlzRW5zdXJlZEFic2VudCxcbiAgICAgIG1ldGE6IG1ldGEsXG4gICAgICBhbGdvcml0aG06ICgoKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgYWxnb3JpdGhtID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFNzaGZwQWxnb3JpdGhtU3RyaW5nRnJvbVZhbHVlKGFsZ29yaXRobSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFsZ29yaXRobTtcbiAgICAgIH0pKCksXG4gICAgICBmaW5nZXJwcmludEZvcm1hdDogKCgpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBmaW5nZXJwcmludEZvcm1hdCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIHJldHVybiBnZXRTc2hmcEZpbmdlcnByaW50Rm9ybWF0U3RyaW5nRnJvbVZhbHVlKGZpbmdlcnByaW50Rm9ybWF0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmluZ2VycHJpbnRGb3JtYXQ7XG4gICAgICB9KSgpLFxuICAgIH0sXG4gICk7XG59XG4iXX0=