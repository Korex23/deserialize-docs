"use client";

import React, { useState } from "react";
import Section from "../../components/Section";
import Endpoint from "../../components/Endpoints";
import CodeBlock from "../../components/Codeblocks";
import Link from "next/link";

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

const TokenScreenerEndpoints: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);
  const copyToClipboard = (code: string, index: string | number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <>
      <Section id="endpoints" title="Token Screener API Endpoints">
        <p className="text-green-800 mb-4">
          Base URL: <code className="font-mono">https://screener.deserialize.xyz</code>
        </p>
        <div className="space-y-2">
          <Endpoint method="GET" path="/tokens" description="List tokens with market data" />
          <Endpoint method="GET" path="/tokens/:tokenAddress" description="Get token details and pools by address" />
        </div>
        <div className="mt-4 text-sm text-green-700">
          <p>
            Try it:
            {" "}
            <Link className="underline" href="https://screener.deserialize.xyz/tokens" target="_blank">
              https://screener.deserialize.xyz/tokens
            </Link>
            {" "}
            and
            {" "}
            <Link className="underline" href="https://screener.deserialize.xyz/tokens/0x59e6ff3943bbdfe2fb19565037ac85071223e94c" target="_blank">
              /tokens/:tokenAddress
            </Link>
          </p>
        </div>
      </Section>

      <Section id="request-examples" title="Request Examples">
        <h4 className="font-semibold text-green-800 mb-2">Fetch (browser/node)</h4>
        <CodeBlock
          language="ts"
          index="fetch-list"
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
          code={`const res = await fetch('https://screener.deserialize.xyz/tokens');
const json = await res.json();
console.log(json);`}
        />
        <CodeBlock
          language="ts"
          index="fetch-details"
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
          code={`const address = '0x59e6ff3943bbdfe2fb19565037ac85071223e94c';
const res = await fetch('https://screener.deserialize.xyz/tokens/' + address);
const json = await res.json();
console.log(json);`}
        />

        <h4 className="font-semibold text-green-800 mt-6 mb-2">cURL</h4>
        <CodeBlock
          language="bash"
          index="curl-list"
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
          code={`curl -s https://screener.deserialize.xyz/tokens | jq '.'`}
        />
        <CodeBlock
          language="bash"
          index="curl-details"
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
          code={`curl -s https://screener.deserialize.xyz/tokens/0x59e6ff3943bbdfe2fb19565037ac85071223e94c | jq '.'`}
        />
      </Section>

      <Section id="responses" title="Response Examples">
        <h4 className="font-semibold text-green-800 mb-2">List Tokens (200)</h4>
        <CodeBlock
          language="json"
          index="json-list"
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
          code={sampleListResponse}
        />

        <h4 className="font-semibold text-green-800 mt-6 mb-2">Token Details (200)</h4>
        <CodeBlock
          language="json"
          index="json-details"
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
          code={sampleDetailsResponse}
        />
      </Section>

      <div className="grid grid-cols-2 gap-5">
        <div>
          <Link
            href={"../overview"}
            className="flex items-center justify-between px-4 py-3 bg-green-100 hover:bg-green-200 border border-green-300 rounded-md transition-colors group"
          >
            <div className="flex flex-col">
              <span className="text-xs text-green-600 uppercase font-semibold">Previous</span>
              <span className="text-sm text-green-800 font-medium">Overview</span>
            </div>
            <span className="text-green-700 group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        <div />
      </div>
    </>
  );
};

export default TokenScreenerEndpoints;
