import Section from "@/components/Section";
import Endpoint from "@/components/Endpoints";
import CodeBlock from "@/components/CodeBlock";

export default function TokenScreenerTokenDetails() {
  const sampleDetailsResponse = `{
  "success": true,
  "data": {
    "address": "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
    "symbol": "W0G",
    "name": "Wrapped 0G",
    "decimals": 18,
    "chainId": "16661",
    "dexes": ["ZeroDEX"],
    "lastUpdated": 1761162695247,
    "price": 1.8389,
    "liquidity": 305490.6995503565,
    "marketCap": 21412944.54758285,
    "fullyDilutedValuation": 21412944.54758285,
    "volume24h": 1542.0543925437087,
    "txns24h": 4,
    "buys24h": 1,
    "sells24h": 3
  }
}`;

  return (
    <div className="prose max-w-none">
      <h1>Token Details</h1>

      <Section id="token-details" title="Get Token Details">
        <Endpoint method="GET" path="/tokens/:address" />
        <p>Retrieve a specific token’s latest market and activity metrics.</p>
        <CodeBlock code={sampleDetailsResponse} language="json" />
      </Section>
    </div>
  );
}