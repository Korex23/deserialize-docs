"use client";

import React, { useState } from "react";
import Section from "@/components/Section";
import Endpoint from "@/components/Endpoints";
import CodeBlock from "@/components/Codeblocks";

export default function TokenScreenerTokens() {
  const sampleListResponse = `{
    "success": true,
    "data": [
      {
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
        "volume6h": 0,
        "volume1h": 0,
        "volume5m": 0,
        "txns24h": 4,
        "buys24h": 1,
        "sells24h": 3,
        "chartDataAvailable": true
      },
      {
        "address": "0x1f3aa82227281ca364bfb3d253b0f1af1da6473e",
        "symbol": "USDC.e",
        "name": "Bridged USDC",
        "decimals": 6,
        "chainId": "16661",
        "dexes": ["ZeroDEX"],
        "lastUpdated": 1761162695247,
        "price": 0.9946303137181003,
        "liquidity": 264410.56460936944,
        "marketCap": 825529.614708739,
        "fullyDilutedValuation": 825529.614708739,
        "volume24h": 19041.367419690563,
        "volume6h": 1423.246895887532,
        "volume1h": 0,
        "volume5m": 0,
        "txns24h": 267,
        "buys24h": 106,
        "sells24h": 161
      },
      {
        "address": "0x1dd33199e396287e8861632f01c9fd13e241dba2",
        "symbol": "PANDA",
        "name": "0G MASCOT",
        "decimals": 8,
        "chainId": "16661",
        "dexes": ["ZeroDEX"],
        "lastUpdated": 1761162084748,
        "price": 0,
        "liquidity": 0,
        "volume24h": 0,
        "volume6h": 0,
        "volume1h": 0,
        "volume5m": 0,
        "txns24h": 0,
        "buys24h": 0,
        "sells24h": 0
      },
      {
        "address": "0xbf557f06baec49c3d3012918117c3ea249882217",
        "symbol": "0AGI",
        "name": "0AGI",
        "decimals": 18,
        "chainId": "16661",
        "dexes": ["ZeroDEX"],
        "lastUpdated": 1761162084748,
        "price": 0,
        "liquidity": 0,
        "volume24h": 0,
        "volume6h": 0,
        "volume1h": 0,
        "volume5m": 0,
        "txns24h": 0,
        "buys24h": 0,
        "sells24h": 0
      },
      {
        "address": "0x76d51ba285a3dbc0108c605b06d663b9b15298e1",
        "symbol": "OFROG",
        "name": "OGFrog",
        "decimals": 18,
        "chainId": "16661",
        "dexes": ["ZeroDEX"],
        "lastUpdated": 1761162084748,
        "price": 0,
        "liquidity": 0,
        "volume24h": 0,
        "volume6h": 0,
        "volume1h": 0,
        "volume5m": 0,
        "txns24h": 0,
        "buys24h": 0,
        "sells24h": 0
      },
      {
        "address": "0x31f301b3478b4dfa44d106b3caf9bc065d86fd87",
        "symbol": "BITGO",
        "name": "BitGo",
        "decimals": 18,
        "chainId": "16661",
        "dexes": ["ZeroDEX"],
        "lastUpdated": 1761162084748,
        "price": 0,
        "liquidity": 0,
        "volume24h": 0,
        "volume6h": 0,
        "volume1h": 0,
        "volume5m": 0,
        "txns24h": 0,
        "buys24h": 0,
        "sells24h": 0
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
    "filters": {}
  }`;
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
      "volume6h": 0,
      "volume1h": 0,
      "volume5m": 0,
      "txns24h": 4,
      "buys24h": 1,
      "sells24h": 3
    }
  }`;
  const sampleDetailsError = `{
    "success": false,
    "error": "[\\n  {\\n    \\"origin\\": \\"string\\",\\n    \\"code\\": \\"invalid_format\\",\\n    \\"format\\": \\"regex\\",\\n    \\"pattern\\": \\"/^0x[a-fA-F0-9]{40}$/\\",\\n    \\"path\\": [\\n      \\"address\\"\\n    ],\\n    \\"message\\": \\"Invalid token address\\"\\n  }\\n]"
  }`;
  const sampleSearchResponse = `{
    "success": true,
    "data": [],
    "total": 0,
    "query": ":query"
  }`;

  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);
  const copyToClipboard = (code: string, index: string | number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  return (
    <div className="prose max-w-none w-full overflow-x-hidden">
      <h1>Tokens</h1>
  
      <Section id="token-list" title="Get Token List">
        <Endpoint method="GET" path="/tokens" />
        <p>Returns a paginated list of tokens with market and activity metrics.</p>
      </Section>
  
      <Section id="pagination" title="Pagination">
        <p>Pagination fields returned with every list response:</p>
        <CodeBlock
          index="ts-pagination-1"
          language="json"
          code={`{
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 28,
    "totalPages": 1,
    "hasNext": false,
    "hasPrev": false
  }
}`}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>
      <Section id="token-list-response" title="Token List Response">
        <CodeBlock
          index="ts-token-list-response"
          language="json"
          code={sampleListResponse}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>
  
      <Section id="token-details" title="Get Token List Details">
        <Endpoint method="GET" path="/tokens/:address" />
        <p>Retrieve a specific token’s latest metrics by address.</p>
        <CodeBlock
          index="ts-token-details-error"
          language="json"
          code={sampleDetailsError}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>
  
      <Section id="token-details-response" title="Token List Details Response">
        <CodeBlock
          index="ts-token-details-response"
          language="json"
          code={sampleDetailsResponse}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>
  
      <Section id="pagination" title="Pagination">
        <p>Pagination fields returned with every list response:</p>
        <CodeBlock
          index="ts-pagination-2"
          language="json"
          code={`{
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 28,
    "totalPages": 1,
    "hasNext": false,
    "hasPrev": false
  }
}`}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>
      <Section id="token-search" title="Search Tokens">
        <Endpoint method="GET" path="/tokens/search/:query" />
        <p>Search tokens by symbol or name, returns a paginated list.</p>
        <CodeBlock
          index="ts-token-search-response"
          language="json"
          code={sampleSearchResponse}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>
    </div>
  );
}