const MX_PREFERENCE_SYMBOL = Symbol.for("MxPreference");

export type MxPreference = number & { [MX_PREFERENCE_SYMBOL]: unknown };

function isMxPreference(value: unknown): value is MxPreference {
  if (value == null) {
    return false;
  }
  if (typeof value !== "number") {
    return false;
  }
  return Number.isInteger(value) && value >= 0 && value <= 65535;
}

export function asMxPreference(value: number): MxPreference {
  if (!isMxPreference(value)) {
    throw new Error(`Expected an MX preference but got '${value}'`);
  }
  return value;
}
