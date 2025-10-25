"use client";

import React, { useState } from "react";
import Section from "@/components/Section";
import Endpoint from "@/components/Endpoints";
import CodeBlock from "@/components/Codeblocks";

export default function TokenScreenerPools() {
  const samplePoolsList = `{
  "success": true,
  "data": [
    {
      "poolAddress": "0xe590C6E04F198B0cf0f2F6f84ca3C760E5817C44",
      "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
      "token1": "0x7bBC63D01CA42491c3E084C941c3E86e55951404",
      "fee": 10000,
      "liquidity": "74611883362805384229934",
      "sqrtPriceX96": "75727653163298763027345513086",
      "dexName": "ZeroDEX",
      "chainId": "16661",
      "blockNumber": "6395774",
      "lastUpdated": 1761222454166
    },
   ....
  ],
  "pagination": {
    "page": 1,
    "limit": 50,
    "total": 37,
    "totalPages": 1,
    "hasNext": false,
    "hasPrev": false
  }
}`;

  const samplePoolDetails = `{
  "success": true,
  "data": {
    "poolAddress": "0xe590C6E04F198B0cf0f2F6f84ca3C760E5817C44"
    "token0": "0x1Cd0690fF9a693f5EF2dD976660a8dAFc81A109c",
    "token1": "0x7bBC63D01CA42491c3E084C941c3E86e55951404",
    "fee": 10000,
    "liquidity": "82373042894297765426811",
    "sqrtPriceX96": "75727653163298763027345513086",
    "dexName": "ZeroDEX",
    "chainId": "16661",
    "blockNumber": "6395774",
    "lastUpdated": 1761383954438,
    "token0Details": {
      "address": "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
      "symbol": "W0G",
      "name": "Wrapped 0G",
      "decimals": 18,
      "chainId": "16661",
      "dexes": [
        "ZeroDEX"
      ],
      "lastUpdated": 1761383338116,
      "price": 1.755,
      "liquidity": 255946.163680269,
      "totalSupply": "11197670828928091637040909",
      "circulatingSupply": "11197670828928091637040909",
      "marketCap": 19651912.3047688,
      "fullyDilutedValuation": 19651912.3047688,
      "volume24h": 28.08,
      "volume6h": 8.775,
      "volume1h": 8.775,
      "volume5m": 0,
      "txns24h": 3,
      "buys24h": 0,
      "sells24h": 3,
      "chartDataAvailable": true
    },
    "token1Details": {
      "address": "0x7bbc63d01ca42491c3e084c941c3e86e55951404",
      "symbol": "st0G",
      "name": "Gimo Staked 0G",
      "decimals": 18,
      "chainId": "16661",
      "dexes": [
        "ZeroDEX"
      ],
      "lastUpdated": 1761383338116,
      "price": 1.92792465223156,
      "liquidity": 216143.109873989,
      "totalSupply": "206496821220943144325547",
      "circulatingSupply": "206496821220943144325547",
      "marketCap": 398110.31223931,
      "fullyDilutedValuation": 398110.31223931,
      "volume24h": 27.9926654626283,
      "volume6h": 8.74768657330054,
      "volume1h": 8.74768657330054,
      "volume5m": 0,
      "txns24h": 3,
      "buys24h": 0,
      "sells24h": 3,
      "chartDataAvailable": true
    }
  }
}`;

  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);
  const copyToClipboard = (code: string, index: string | number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="prose max-w-none w-full overflow-x-hidden">
      <h1>Pools</h1>

      <Section id="pools-list" title="Pools List">
        <Endpoint method="GET" path="/pools" />
        <p>Returns a paginated list of pools and metrics.</p>
        <CodeBlock
          index="pools-list"
          language="json"
          code={samplePoolsList}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>

      <Section id="pool-details" title="Pool Details">
        <Endpoint method="GET" path="/pools/:address" />
        <p>Retrieve specific pool details by pool address.</p>
        <CodeBlock
          index="pool-details"
          language="json"
          code={samplePoolDetails}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>
    </div>
  );
}
