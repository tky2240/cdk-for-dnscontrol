// eslint-disable-next-line
const elementTypeStrings = [
  "Domain",
  "Provider",
  "Registrar",
  "Record",
] as const;

export type DnscontrolElementType = (typeof elementTypeStrings)[number];
