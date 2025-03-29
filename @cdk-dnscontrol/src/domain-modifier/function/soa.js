"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOA = SOA;
const duration_1 = require("../../types/duration");
const soa_1 = require("../record/soa");
function SOA(scope, label, target, mbox, refresh, retry, expire, minttl, ttl) {
    return new soa_1.DnscontrolSoaRecord(scope, `Soa:${label}:${target}:${mbox}:${refresh}:${refresh}:${expire}:${minttl}`, {
        label: label,
        target: target,
        ttl: ttl != null ? new duration_1.Duration(ttl) : undefined,
        mbox: mbox,
        refresh: refresh,
        retry: retry,
        expire: expire,
        minttl: minttl,
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic29hLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsa0JBeUJDO0FBNUJELG1EQUFnRDtBQUNoRCx1Q0FBb0Q7QUFFcEQsU0FBZ0IsR0FBRyxDQUNqQixLQUFnQixFQUNoQixLQUFhLEVBQ2IsTUFBYyxFQUNkLElBQVksRUFDWixPQUFlLEVBQ2YsS0FBYSxFQUNiLE1BQWMsRUFDZCxNQUFjLEVBQ2QsR0FBcUI7SUFFckIsT0FBTyxJQUFJLHlCQUFtQixDQUM1QixLQUFLLEVBQ0wsT0FBTyxLQUFLLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksT0FBTyxJQUFJLE1BQU0sSUFBSSxNQUFNLEVBQUUsRUFDMUU7UUFDRSxLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sRUFBRSxNQUFNO1FBQ2QsR0FBRyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksbUJBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUNoRCxJQUFJLEVBQUUsSUFBSTtRQUNWLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFLE1BQU07UUFDZCxNQUFNLEVBQUUsTUFBTTtLQUNmLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgRHVyYXRpb24gfSBmcm9tIFwiLi4vLi4vdHlwZXMvZHVyYXRpb25cIjtcbmltcG9ydCB7IERuc2NvbnRyb2xTb2FSZWNvcmQgfSBmcm9tIFwiLi4vcmVjb3JkL3NvYVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gU09BKFxuICBzY29wZTogQ29uc3RydWN0LFxuICBsYWJlbDogc3RyaW5nLFxuICB0YXJnZXQ6IHN0cmluZyxcbiAgbWJveDogc3RyaW5nLFxuICByZWZyZXNoOiBudW1iZXIsXG4gIHJldHJ5OiBudW1iZXIsXG4gIGV4cGlyZTogbnVtYmVyLFxuICBtaW50dGw6IG51bWJlcixcbiAgdHRsPzogbnVtYmVyIHwgc3RyaW5nLFxuKTogRG5zY29udHJvbFNvYVJlY29yZCB7XG4gIHJldHVybiBuZXcgRG5zY29udHJvbFNvYVJlY29yZChcbiAgICBzY29wZSxcbiAgICBgU29hOiR7bGFiZWx9OiR7dGFyZ2V0fToke21ib3h9OiR7cmVmcmVzaH06JHtyZWZyZXNofToke2V4cGlyZX06JHttaW50dGx9YCxcbiAgICB7XG4gICAgICBsYWJlbDogbGFiZWwsXG4gICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgIHR0bDogdHRsICE9IG51bGwgPyBuZXcgRHVyYXRpb24odHRsKSA6IHVuZGVmaW5lZCxcbiAgICAgIG1ib3g6IG1ib3gsXG4gICAgICByZWZyZXNoOiByZWZyZXNoLFxuICAgICAgcmV0cnk6IHJldHJ5LFxuICAgICAgZXhwaXJlOiBleHBpcmUsXG4gICAgICBtaW50dGw6IG1pbnR0bCxcbiAgICB9LFxuICApO1xufVxuIl19