"use client";

import React, { useState } from "react";
import Section from "@/components/Section";
import Endpoint from "@/components/Endpoints";
import CodeBlock from "@/components/Codeblocks";

export default function TokenScreenerScreening() {
  const sampleTrending = `{
  "success": true,
  "message": "Trending tokens by volume",
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 0,
    "totalPages": 0,
    "hasNext": false,
    "hasPrev": false
  }
}`;
  const sampleGainers = `{
  "success": true,
  "message": "24h top gainers",
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 0,
    "totalPages": 0,
    "hasNext": false,
    "hasPrev": false
  },
  "filters": {
    "minLiquidity": 1000
  }
}`;
  const sampleLosers = `{
  "success": true,
  "message": "24h top losers",
  "data": [],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 0,
    "totalPages": 0,
    "hasNext": false,
    "hasPrev": false
  },
  "filters": {
    "minLiquidity": 1000
  }
}`;
  const sampleHighLiquidity = `{
  "success": true,
  "message": "Highest liquidity tokens",
  "data": [
    {
      "address": "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
      "symbol": "W0G",
      "name": "Wrapped 0G",
      "decimals": 18,
      "chainId": "16661",
      "dexes": ["ZeroDEX"],
      "lastUpdated": 1761218192828,
      "price": 1.78369335,
      "liquidity": 297509.595965657,
      "totalSupply": "11238749360130683240898349",
      "circulatingSupply": "11238749360130683240898349",
      "marketCap": 20046482.4959819,
      "fullyDilutedValuation": 20046482.4959819
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 1,
    "totalPages": 1,
    "hasNext": false,
    "hasPrev": false
  }
}`;
  const sampleNew = `{
  "data": [
    {
      "address": "0x98cb9e5d0c7baa31a8ab7df2f1cb9ba7981c4ba0",
      "symbol": "SCAMMER",
      "name": "Michael Heinrich (Ø,G)",
      "decimals": 18,
      "chainId": "16661",
      "dexes": ["ZeroDEX"],
      "lastUpdated": 1761219409973,
      "price": 1.93696362974268e-11,
      "liquidity": 18.5947250788621,
      "totalSupply": "1000000000000000000000000000000",
      "circulatingSupply": "1000000000000000000000000000000",
      "marketCap": 19.3696362974268,
      "fullyDilutedValuation": 19.3696362974268,
      "volume24h": 0,
      "volume6h": 0,
      "volume1h": 0,
      "volume5m": 0,
      "txns24h": 0,
      "buys24h": 0,
      "sells24h": 0
    },
    {
      "address": "0xf99504aac95b8cc14627a903aba7971b9b22fe8c",
      "symbol": "JC",
      "name": "JC loves testers",
      "decimals": 18,
      "chainId": "16661",
      "dexes": ["ZeroDEX"],
      "lastUpdated": 1761219409973,
      "price": 0.0125514850043142,
      "liquidity": 2.50489226391327,
      "totalSupply": "1000000000000000000000",
      "circulatingSupply": "1000000000000000000000",
      "marketCap": 12.5514850043142,
      "fullyDilutedValuation": 12.5514850043142,
      "volume24h": 0,
      "volume6h": 0,
      "volume1h": 0,
      "volume5m": 0,
      "txns24h": 0,
      "buys24h": 0,
      "sells24h": 0
    },
    {
      "address": "0xb6dc1297a789ef31813c8602f0673e2d61759fb0",
      "symbol": "JC",
      "name": "JC loves testers",
      "decimals": 18,
      "chainId": "16661",
      "dexes": ["ZeroDEX"],
      "lastUpdated": 1761219409973,
      "price": 0.000595219009590688,
      "liquidity": 0.546788284117497,
      "totalSupply": "1000000000000000000000",
      "circulatingSupply": "1000000000000000000000",
      "marketCap": 0.595219009590688,
      "fullyDilutedValuation": 0.595219009590688,
      "volume24h": 0,
      "volume6h": 0,
      "volume1h": 0,
      "volume5m": 0,
      "txns24h": 0,
      "buys24h": 0,
      "sells24h": 0
    },
    {
      "address": "0xddc3f033588f60c6cb4c725767f50ed43335bbfd",
      "symbol": "JC",
      "name": "JC loves testers",
      "decimals": 18,
      "chainId": "16661",
      "dexes": ["ZeroDEX"],
      "lastUpdated": 1761219409973,
      "price": 0.000520021100614293,
      "liquidity": 0.516006985580714,
      "totalSupply": "1000000000000000000000",
      "circulatingSupply": "1000000000000000000000",
      "marketCap": 0.520021100614294,
      "fullyDilutedValuation": 0.520021100614294,
      "volume24h": 0,
      "volume6h": 0,
      "volume1h": 0,
      "volume5m": 0,
      "txns24h": 0,
      "buys24h": 0,
      "sells24h": 0
    },
    {
      "address": "0x9a4d6b83a0ec47cc98b21abe36f591e68a8b8405",
      "symbol": "JC",
      "name": "JC loves testers",
      "decimals": 18,
      "chainId": "16661",
      "dexes": ["ZeroDEX"],
      "lastUpdated": 1761219409973,
      "price": 0.000544545669199888,
      "liquidity": 0.540459365937985,
      "totalSupply": "1000000000000000000000",
      "circulatingSupply": "1000000000000000000000",
      "marketCap": 0.544545669199889,
      "fullyDilutedValuation": 0.544545669199889,
      "volume24h": 0,
      "volume6h": 0,
      "volume1h": 0,
      "volume5m": 0,
      "txns24h": 0,
      "buys24h": 0,
      "sells24h": 0
    },
    {
      "address": "0xd2f6af1e4d8384b6b20956354ce3739c6da7fd0c",
      "symbol": "JC",
      "name": "JC loves testers",
      "decimals": 18,
      "chainId": "16661",
      "dexes": ["ZeroDEX"],
      "lastUpdated": 1761219409973,
      "price": 0.000544545669199888,
      "liquidity": 0.521723808555737,
      "totalSupply": "1000000000000000000000",
      "circulatingSupply": "1000000000000000000000",
      "marketCap": 0.544545669199889,
      "fullyDilutedValuation": 0.544545669199889,
      "volume24h": 0,
      "volume6h": 0,
      "volume1h": 0,
      "volume5m": 0,
      "txns24h": 0,
      "buys24h": 0,
      "sells24h": 0
    },
    {
      "address": "0x285f0100a8ff2ff81bfb020d7239c3323aa20021",
      "symbol": "reze",
      "name": "i love u reze",
      "decimals": 18,
      "chainId": "16661",
      "dexes": ["ZeroDEX"],
      "lastUpdated": 1761219409973,
      "price": 0.000509182353464253,
      "liquidity": 0.509181944090999,
      "totalSupply": "1000000000000000000000",
      "circulatingSupply": "1000000000000000000000",
      "marketCap": 0.509182353464254,
      "fullyDilutedValuation": 0.509182353464254,
      "volume24h": 0,
      "volume6h": 0,
      "volume1h": 0,
      "volume5m": 0,
      "txns24h": 0,
      "buys24h": 0,
      "sells24h": 0
    },
    {
      "address": "0x1c9b800b253b8c37cf0c3a169d593a510de7f083",
      "symbol": "0G",
      "name": "0G is coming",
      "decimals": 18,
      "chainId": "16661",
      "dexes": ["ZeroDEX"],
      "lastUpdated": 1761219409973,
      "price": 0.000509033924301502,
      "liquidity": 0.509033515047582,
      "totalSupply": "1000000000000000000000",
      "circulatingSupply": "1000000000000000000000",
      "marketCap": 0.509033924301502,
      "fullyDilutedValuation": 0.509033924301502,
      "volume24h": 0,
      "volume6h": 0,
      "volume1h": 0,
      "volume5m": 0,
      "txns24h": 0,
      "buys24h": 0,
      "sells24h": 0
    },
    {
      "address": "0x4ba0649b9bcd625cf8333dbc78432ab4f0423abb",
      "symbol": "sp0nge",
      "name": "sp0nge",
      "decimals": 18,
      "chainId": "16661",
      "dexes": ["ZeroDEX"]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 28,
    "totalPages": 1,
    "hasNext": false,
    "hasPrev": false
  },
  "filters": {
    "hoursAgo": 24
  }
}`;
  const sampleList = `{
  "success": true,
  "data": [
    {
      "address": "0x0000000000000000000000000000000000000000",
      "symbol": "TOKEN",
      "name": "Example Token",
      "decimals": 18,
      "chainId": "16661",
      "dexes": ["ZeroDEX"],
      "lastUpdated": 1761162695247,
      "price": 0,
      "liquidity": 0,
      "marketCap": 0,
      "volume24h": 0,
      "txns24h": 0
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 0,
    "totalPages": 1,
    "hasNext": false,
    "hasPrev": false
  },
  "filters": {}
}`;

  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);
  const copyToClipboard = (code: string, index: string | number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="prose max-w-none">
      <h1>Screening</h1>

      <Section id="screening-trending" title="Trending">
        <Endpoint method="GET" path="/screening/trending" />
        <p>Tokens trending by volume or activity.</p>
        <CodeBlock
          index="screening-trending-response"
          language="json"
          code={sampleTrending}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>

      <Section id="screening-gainers" title="Gainers">
        <Endpoint method="GET" path="/screening/gainers" />
        <p>Top gainers over the last 24 hours.</p>
        <CodeBlock
          index="screening-gainers-response"
          language="json"
          code={sampleGainers}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>

      <Section id="screening-losers" title="Losers">
        <Endpoint method="GET" path="/screening/losers" />
        <p>Top losers over the last 24 hours.</p>
        <CodeBlock
          index="screening-losers-response"
          language="json"
          code={sampleLosers}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>

      <Section id="screening-high-liquidity" title="High Liquidity">
        <Endpoint method="GET" path="/screening/high-liquidity" />
        <p>Tokens ranked by highest available liquidity.</p>
        <CodeBlock
          index="screening-high-liquidity-response"
          language="json"
          code={sampleHighLiquidity}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>

      <Section id="screening-new" title="New">
        <Endpoint method="GET" path="/screening/new" />
        <p>Newly listed tokens in the last 24 hours.</p>
        <CodeBlock
          index="screening-new-response"
          language="json"
          code={sampleNew}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>
      {/* Add High Liquidity and New sections when responses are provided */}
    </div>
  );
}