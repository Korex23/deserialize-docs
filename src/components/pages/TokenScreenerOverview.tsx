"use client";

import React, { useState } from "react";
import Section from "../../components/Section";
import Endpoint from "../../components/Endpoints";
import CodeBlock from "../../components/Codeblocks";

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
      "lastUpdated": 1760398732651,
      "price": 2.36165534,
      "liquidity": 10235171.5487652,
      "totalSupply": "11982574049235445073686898",
      "circulatingSupply": "11982574049235445073686898",
      "marketCap": 28298709.9903223,
      "fullyDilutedValuation": 28298709.9903223,
      "volume24h": 0,
      "volume6h": 0,
      "volume1h": 0,
      "volume5m": 0,
      "txns24h": 0,
      "buys24h": 0,
      "sells24h": 0,
      "chartDataAvailable": true
    }
  ]
}`;

const sampleDetailsResponse = `{
  "success": true,
  "data": {
    "address": "0x59e6ff3943bbdfe2fb19565037ac85071223e94c",
    "symbol": "PAI",
    "name": "Panda AI",
    "decimals": 9,
    "chainId": "16661",
    "dexes": ["ZeroDEX"],
    "lastUpdated": 1760399305129,
    "price": 0.0009473571626935,
    "liquidity": 0.01069510860513666,
    "totalSupply": "1000000000000000",
    "circulatingSupply": "1000000000000000",
    "marketCap": 947035.371620636,
    "fullyDilutedValuation": 947035.371620636,
    "volume24h": 0.281270639332542,
    "volume6h": 0,
    "volume1h": 0,
    "volume5m": 0,
    "txns24h": 1,
    "buys24h": 0,
    "sells24h": 1,
    "pools": [
      {
        "poolAddress": "0x224D0891D8c3A8e6DD9B8846552C27034503a5E76",
        "token0": "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
        "token1": "0x59e6ff3943bbdfe2fb19565037ac85071223e94c",
        "fee": "3000",
        "liquidity": "22576718656795617587",
        "sqrtPriceX96": "142899213224472585537529664",
        "dexName": "ZeroDEX",
        "chainId": "16661",
        "blockNumber": "6514778",
        "lastUpdated": 1760399305123
      }
    ]
  }
}`;

export default function TokenScreenerOverview() {
  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);
  const copyToClipboard = (code: string, index: string | number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <>
      <Section id="tokens" title="Token List">
        <p className="text-gray-700 mb-4">
          Retrieve the list of tokens with market data.
        </p>
        <Endpoint method="GET" path="/tokens" description="List tokens with market data" />
        <h4 className="text-lg font-semibold text-green-700 mt-4 mb-2">Response Example</h4>
        <CodeBlock
          index="ts-list-response"
          language="json"
          code={sampleListResponse}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>

      <Section id="token-details" title="Token Details">
        <p className="text-gray-700 mb-4">
          Get detailed information for a specific token by contract address, including pools.
        </p>
        <Endpoint method="GET" path="/tokens/:tokenAddress" description="Get token details and pools by address" />
        <h4 className="text-lg font-semibold text-green-700 mt-4 mb-2">Response Example</h4>
        <CodeBlock
          index="ts-details-response"
          language="json"
          code={sampleDetailsResponse}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>
    </>
  );
}