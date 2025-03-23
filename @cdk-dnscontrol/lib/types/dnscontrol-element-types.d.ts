declare const elementTypeStrings: readonly ["Domain", "Provider", "Registrar", "Record"];
export type DnscontrolElementType = (typeof elementTypeStrings)[number];
export {};
