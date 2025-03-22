import { createReverseDnsName } from "../lib/domain-modifier/function/rev";
import { asIPv4Cidr } from "../lib/types/ipv4";
import { asIPv6Cidr } from "../lib/types/ipv6";

describe("RFC 2317 ipv4 reverse domain test", () => {
  test("ipv4 /32", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.107.14", prefixLength: 32 }),
        "Rfc2317",
      ),
    ).toStrictEqual("14.107.136.174.in-addr.arpa");
  });
  test("ipv4 /24", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.107.0", prefixLength: 24 }),
        "Rfc2317",
      ),
    ).toStrictEqual("107.136.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.107.1", prefixLength: 24 }),
        "Rfc2317",
      ),
    ).toStrictEqual("107.136.174.in-addr.arpa");
  });
  test("ipv4 /16", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.0.0", prefixLength: 16 }),
        "Rfc2317",
      ),
    ).toStrictEqual("136.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.43.0", prefixLength: 16 }),
        "Rfc2317",
      ),
    ).toStrictEqual("136.174.in-addr.arpa");
  });
  test("ipv4 /8", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.0.0.0", prefixLength: 8 }),
        "Rfc2317",
      ),
    ).toStrictEqual("174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.43.0", prefixLength: 8 }),
        "Rfc2317",
      ),
    ).toStrictEqual("174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.0.44", prefixLength: 8 }),
        "Rfc2317",
      ),
    ).toStrictEqual("174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.45.45", prefixLength: 8 }),
        "Rfc2317",
      ),
    ).toStrictEqual("174.in-addr.arpa");
  });
  test("RFC2317 examples", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "192.0.2.0", prefixLength: 25 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/25.2.0.192.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "192.0.2.128", prefixLength: 26 }),
        "Rfc2317",
      ),
    ).toStrictEqual("128/26.2.0.192.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "192.0.2.192", prefixLength: 26 }),
        "Rfc2317",
      ),
    ).toStrictEqual("192/26.2.0.192.in-addr.arpa");
  });
  test("RFC2317 all the base cases", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 25 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/25.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 26 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/26.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 27 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 28 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/28.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 29 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/29.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 30 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/30.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 31 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/31.0.1.174.in-addr.arpa");
  });
  test("RFC2317 /25", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 25 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/25.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.128", prefixLength: 25 }),
        "Rfc2317",
      ),
    ).toStrictEqual("128/25.0.1.174.in-addr.arpa");
  });
  test("RFC2317 /26", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 26 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/26.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.64", prefixLength: 26 }),
        "Rfc2317",
      ),
    ).toStrictEqual("64/26.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.128", prefixLength: 26 }),
        "Rfc2317",
      ),
    ).toStrictEqual("128/26.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.192", prefixLength: 26 }),
        "Rfc2317",
      ),
    ).toStrictEqual("192/26.0.1.174.in-addr.arpa");
  });
  test("RFC2317 /27", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 27 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.32", prefixLength: 27 }),
        "Rfc2317",
      ),
    ).toStrictEqual("32/27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.64", prefixLength: 27 }),
        "Rfc2317",
      ),
    ).toStrictEqual("64/27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.96", prefixLength: 27 }),
        "Rfc2317",
      ),
    ).toStrictEqual("96/27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.128", prefixLength: 27 }),
        "Rfc2317",
      ),
    ).toStrictEqual("128/27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.160", prefixLength: 27 }),
        "Rfc2317",
      ),
    ).toStrictEqual("160/27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.192", prefixLength: 27 }),
        "Rfc2317",
      ),
    ).toStrictEqual("192/27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.224", prefixLength: 27 }),
        "Rfc2317",
      ),
    ).toStrictEqual("224/27.0.1.174.in-addr.arpa");
  });
  test("RFC2317 /28", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 28 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/28.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.16", prefixLength: 28 }),
        "Rfc2317",
      ),
    ).toStrictEqual("16/28.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.224", prefixLength: 28 }),
        "Rfc2317",
      ),
    ).toStrictEqual("224/28.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.240", prefixLength: 28 }),
        "Rfc2317",
      ),
    ).toStrictEqual("240/28.0.1.174.in-addr.arpa");
  });
  test("RFC2317 /29", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 29 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/29.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.8", prefixLength: 29 }),
        "Rfc2317",
      ),
    ).toStrictEqual("8/29.0.1.174.in-addr.arpa");
  });
  test("RFC2317 /30", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 30 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/30.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.4", prefixLength: 30 }),
        "Rfc2317",
      ),
    ).toStrictEqual("4/30.0.1.174.in-addr.arpa");
  });
  test("RFC2317 /31", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 31 }),
        "Rfc2317",
      ),
    ).toStrictEqual("0/31.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.2", prefixLength: 31 }),
        "Rfc2317",
      ),
    ).toStrictEqual("2/31.0.1.174.in-addr.arpa");
  });
  test("RFC4183 for cases not covered by RFC2317", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.20.128.0", prefixLength: 23 }),
        "Rfc2317",
      ),
    ).toStrictEqual("128-23.20.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.192.0.0", prefixLength: 13 }),
        "Rfc2317",
      ),
    ).toStrictEqual("192-13.10.in-addr.arpa");
  });
  test("Error cases", () => {
    expect(() => {
      createReverseDnsName(
        asIPv4Cidr({ address: "0.0.0.0", prefixLength: 0 }),
        "Rfc2317",
      );
    }).toThrow();
    expect(() => {
      createReverseDnsName(
        asIPv4Cidr({ address: "2001::", prefixLength: 0 }),
        "Rfc2317",
      );
    }).toThrow();
    expect(() => {
      createReverseDnsName(
        asIPv4Cidr({ address: "4.5", prefixLength: 16 }),
        "Rfc2317",
      );
    }).toThrow();
    expect(() => {
      createReverseDnsName(
        asIPv4Cidr({ address: "foo.com", prefixLength: 0 }),
        "Rfc2317",
      );
    }).toThrow();
  });
});

describe("RFC 2317 ipv6 reverse domain test", () => {
  test("ipv6 /16", () => {
    expect(
      createReverseDnsName(
        asIPv6Cidr({ address: "2001::", prefixLength: 16 }),
        "Rfc2317",
      ),
    ).toStrictEqual("1.0.0.2.ip6.arpa");
  });
  test("ipv6 /124", () => {
    expect(
      createReverseDnsName(
        asIPv6Cidr({
          address: "2001:0db8:0123:4567:89ab:cdef:1234:5670",
          prefixLength: 124,
        }),
        "Rfc2317",
      ),
    ).toStrictEqual(
      "7.6.5.4.3.2.1.f.e.d.c.b.a.9.8.7.6.5.4.3.2.1.0.8.b.d.0.1.0.0.2.ip6.arpa",
    );
  });
  test("ipv6 /128 test", () => {
    expect(
      createReverseDnsName(
        asIPv6Cidr({
          address: "2001:0db8:0123:4567:89ab:cdef:1234:5678",
          prefixLength: 128,
        }),
        "Rfc2317",
      ),
    ).toStrictEqual(
      "8.7.6.5.4.3.2.1.f.e.d.c.b.a.9.8.7.6.5.4.3.2.1.0.8.b.d.0.1.0.0.2.ip6.arpa",
    );
  });
  test("Error cases", () => {
    expect(() => {
      createReverseDnsName(
        asIPv6Cidr({ address: "0.0.0.0", prefixLength: 0 }),
        "Rfc2317",
      );
    }).toThrow();
    expect(() => {
      createReverseDnsName(
        asIPv6Cidr({ address: "2001::", prefixLength: 0 }),
        "Rfc2317",
      );
    }).toThrow();
    expect(() => {
      createReverseDnsName(
        asIPv6Cidr({ address: "4.5", prefixLength: 16 }),
        "Rfc2317",
      );
    }).toThrow();
    expect(() => {
      createReverseDnsName(
        asIPv6Cidr({ address: "foo.com", prefixLength: 0 }),
        "Rfc2317",
      );
    }).toThrow();
  });
});

describe("RFC 4183 ipv4 reverse domain test", () => {
  test("RFC 4183 examples", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.0", prefixLength: 26 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-26.2.100.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.192.0.0", prefixLength: 13 }),
        "Rfc4183",
      ),
    ).toStrictEqual("192-13.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.20.128.0", prefixLength: 23 }),
        "Rfc4183",
      ),
    ).toStrictEqual("128-23.20.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.20.129.0", prefixLength: 23 }),
        "Rfc4183",
      ),
    ).toStrictEqual("128-23.20.10.in-addr.arpa"); // Not in the RFC but should be!
  });
  test("ipv4 8-bit boundaries", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.0.0.0", prefixLength: 8 }),
        "Rfc4183",
      ),
    ).toStrictEqual("174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.43.0", prefixLength: 8 }),
        "Rfc4183",
      ),
    ).toStrictEqual("174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.0.44", prefixLength: 8 }),
        "Rfc4183",
      ),
    ).toStrictEqual("174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.45.45", prefixLength: 8 }),
        "Rfc4183",
      ),
    ).toStrictEqual("174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.0.0", prefixLength: 16 }),
        "Rfc4183",
      ),
    ).toStrictEqual("136.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.43.0", prefixLength: 16 }),
        "Rfc4183",
      ),
    ).toStrictEqual("136.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.44.255", prefixLength: 16 }),
        "Rfc4183",
      ),
    ).toStrictEqual("136.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.107.0", prefixLength: 24 }),
        "Rfc4183",
      ),
    ).toStrictEqual("107.136.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.107.1", prefixLength: 24 }),
        "Rfc4183",
      ),
    ).toStrictEqual("107.136.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.136.107.14", prefixLength: 32 }),
        "Rfc4183",
      ),
    ).toStrictEqual("14.107.136.174.in-addr.arpa");
  });
  test("ipv4 /25", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 25 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-25.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.128", prefixLength: 25 }),
        "Rfc4183",
      ),
    ).toStrictEqual("128-25.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.129", prefixLength: 25 }),
        "Rfc4183",
      ),
    ).toStrictEqual("128-25.0.1.174.in-addr.arpa"); // host bits
  });
  test("ipv4 /26", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 26 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-26.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 26 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-26.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.64", prefixLength: 26 }),
        "Rfc4183",
      ),
    ).toStrictEqual("64-26.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.128", prefixLength: 26 }),
        "Rfc4183",
      ),
    ).toStrictEqual("128-26.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.192", prefixLength: 26 }),
        "Rfc4183",
      ),
    ).toStrictEqual("192-26.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.194", prefixLength: 26 }),
        "Rfc4183",
      ),
    ).toStrictEqual("192-26.0.1.174.in-addr.arpa"); // host bits
  });
  test("ipv4 /27", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 27 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.32", prefixLength: 27 }),
        "Rfc4183",
      ),
    ).toStrictEqual("32-27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.64", prefixLength: 27 }),
        "Rfc4183",
      ),
    ).toStrictEqual("64-27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.96", prefixLength: 27 }),
        "Rfc4183",
      ),
    ).toStrictEqual("96-27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.128", prefixLength: 27 }),
        "Rfc4183",
      ),
    ).toStrictEqual("128-27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.160", prefixLength: 27 }),
        "Rfc4183",
      ),
    ).toStrictEqual("160-27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.192", prefixLength: 27 }),
        "Rfc4183",
      ),
    ).toStrictEqual("192-27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.224", prefixLength: 27 }),
        "Rfc4183",
      ),
    ).toStrictEqual("224-27.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.225", prefixLength: 27 }),
        "Rfc4183",
      ),
    ).toStrictEqual("224-27.0.1.174.in-addr.arpa"); // host bits
  });
  test("ipv4 /28", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 28 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-28.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.16", prefixLength: 28 }),
        "Rfc4183",
      ),
    ).toStrictEqual("16-28.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.224", prefixLength: 28 }),
        "Rfc4183",
      ),
    ).toStrictEqual("224-28.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.240", prefixLength: 28 }),
        "Rfc4183",
      ),
    ).toStrictEqual("240-28.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.241", prefixLength: 28 }),
        "Rfc4183",
      ),
    ).toStrictEqual("240-28.0.1.174.in-addr.arpa"); // host bits
  });
  test("ipv4 /29", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 29 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-29.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.8", prefixLength: 29 }),
        "Rfc4183",
      ),
    ).toStrictEqual("8-29.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.9", prefixLength: 29 }),
        "Rfc4183",
      ),
    ).toStrictEqual("8-29.0.1.174.in-addr.arpa"); // host bits
  });
  test("ipv4 /30", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 30 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-30.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.4", prefixLength: 30 }),
        "Rfc4183",
      ),
    ).toStrictEqual("4-30.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.5", prefixLength: 30 }),
        "Rfc4183",
      ),
    ).toStrictEqual("4-30.0.1.174.in-addr.arpa"); // host bits
  });
  test("ipv4 /31", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.0", prefixLength: 31 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-31.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.2", prefixLength: 31 }),
        "Rfc4183",
      ),
    ).toStrictEqual("2-31.0.1.174.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "174.1.0.3", prefixLength: 31 }),
        "Rfc4183",
      ),
    ).toStrictEqual("2-31.0.1.174.in-addr.arpa"); // host bits
  });
  test("ipv4 other cases", () => {
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 23 }),
        "Rfc4183",
      ),
    ).toStrictEqual("2-23.100.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 22 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-22.100.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 21 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-21.100.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 20 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-20.100.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 19 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-19.100.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 18 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-18.100.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 17 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-17.100.10.in-addr.arpa");
    //
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 15 }),
        "Rfc4183",
      ),
    ).toStrictEqual("100-15.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 14 }),
        "Rfc4183",
      ),
    ).toStrictEqual("100-14.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 13 }),
        "Rfc4183",
      ),
    ).toStrictEqual("96-13.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 12 }),
        "Rfc4183",
      ),
    ).toStrictEqual("96-12.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 11 }),
        "Rfc4183",
      ),
    ).toStrictEqual("96-11.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 10 }),
        "Rfc4183",
      ),
    ).toStrictEqual("64-10.10.in-addr.arpa");
    expect(
      createReverseDnsName(
        asIPv4Cidr({ address: "10.100.2.255", prefixLength: 9 }),
        "Rfc4183",
      ),
    ).toStrictEqual("0-9.10.in-addr.arpa");
  });
  test("Error cases", () => {
    expect(() => {
      createReverseDnsName(
        asIPv4Cidr({ address: "0.0.0.0", prefixLength: 0 }),
        "Rfc4183",
      );
    }).toThrow();
    expect(() => {
      createReverseDnsName(
        asIPv4Cidr({ address: "2001::", prefixLength: 0 }),
        "Rfc4183",
      );
    }).toThrow();
    expect(() => {
      createReverseDnsName(
        asIPv4Cidr({ address: "4.5", prefixLength: 16 }),
        "Rfc4183",
      );
    }).toThrow();
    expect(() => {
      createReverseDnsName(
        asIPv4Cidr({ address: "foo.com", prefixLength: 0 }),
        "Rfc4183",
      );
    }).toThrow();
  });
});

describe("RFC 4183 ipv6 reverse domain test", () => {
  test("ipv6 /16", () => {
    expect(
      createReverseDnsName(
        asIPv6Cidr({ address: "2001::", prefixLength: 16 }),
        "Rfc4183",
      ),
    ).toStrictEqual("1.0.0.2.ip6.arpa");
  });
  test("ipv6 /64", () => {
    expect(
      createReverseDnsName(
        asIPv6Cidr({
          address: "2001:0db8:0123:4567:89ab:cdef:1234:5670",
          prefixLength: 64,
        }),
        "Rfc4183",
      ),
    ).toStrictEqual("7.6.5.4.3.2.1.0.8.b.d.0.1.0.0.2.ip6.arpa");
  });
  test("ipv6 /68", () => {
    expect(
      createReverseDnsName(
        asIPv6Cidr({
          address: "2001:0db8:0123:4567:89ab:cdef:1234:5670",
          prefixLength: 68,
        }),
        "Rfc4183",
      ),
    ).toStrictEqual("8.7.6.5.4.3.2.1.0.8.b.d.0.1.0.0.2.ip6.arpa");
  });
  test("ipv6 /124", () => {
    expect(
      createReverseDnsName(
        asIPv6Cidr({
          address: "2001:0db8:0123:4567:89ab:cdef:1234:5670",
          prefixLength: 124,
        }),
        "Rfc4183",
      ),
    ).toStrictEqual(
      "7.6.5.4.3.2.1.f.e.d.c.b.a.9.8.7.6.5.4.3.2.1.0.8.b.d.0.1.0.0.2.ip6.arpa",
    );
  });
  test("ipv6 /128 test", () => {
    expect(
      createReverseDnsName(
        asIPv6Cidr({
          address: "2001:0db8:0123:4567:89ab:cdef:1234:5678",
          prefixLength: 128,
        }),
        "Rfc4183",
      ),
    ).toStrictEqual(
      "8.7.6.5.4.3.2.1.f.e.d.c.b.a.9.8.7.6.5.4.3.2.1.0.8.b.d.0.1.0.0.2.ip6.arpa",
    );
  });
  test("Error cases", () => {
    expect(() => {
      createReverseDnsName(
        asIPv6Cidr({ address: "0.0.0.0", prefixLength: 0 }),
        "Rfc4183",
      );
    }).toThrow();
    expect(() => {
      createReverseDnsName(
        asIPv6Cidr({ address: "2001::", prefixLength: 0 }),
        "Rfc4183",
      );
    }).toThrow();
    expect(() => {
      createReverseDnsName(
        asIPv6Cidr({ address: "4.5", prefixLength: 16 }),
        "Rfc4183",
      );
    }).toThrow();
    expect(() => {
      createReverseDnsName(
        asIPv6Cidr({ address: "foo.com", prefixLength: 0 }),
        "Rfc4183",
      );
    }).toThrow();
  });
});
