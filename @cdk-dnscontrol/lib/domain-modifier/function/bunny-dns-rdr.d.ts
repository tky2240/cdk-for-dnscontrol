import { Construct } from "constructs";
import { DnscontrolBunnyDnsRdrRecord } from "../record/bunny-dns-rdr";
export declare function BUNNY_DNS_RDR(scope: Construct, label: string, target: string, ttl?: number | string): DnscontrolBunnyDnsRdrRecord;
