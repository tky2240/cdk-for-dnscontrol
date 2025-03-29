export declare class DurationUnit {
    readonly value: number;
    readonly name: string;
    constructor(value: number, name: string);
}
export declare const second: DurationUnit;
export declare const minute: DurationUnit;
export declare const hour: DurationUnit;
export declare const day: DurationUnit;
export declare const week: DurationUnit;
export declare const nonth: DurationUnit;
export declare const year: DurationUnit;
export declare class Duration {
    readonly value: number;
    readonly unit: DurationUnit;
    constructor(value: string | number);
    private to;
    toSeconds(): number;
}
