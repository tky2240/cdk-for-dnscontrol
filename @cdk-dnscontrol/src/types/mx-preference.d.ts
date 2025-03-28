declare const MX_PREFERENCE_SYMBOL: unique symbol;
export type MxPreference = number & {
    [MX_PREFERENCE_SYMBOL]: unknown;
};
export declare function asMxPreference(value: number): MxPreference;
export {};
