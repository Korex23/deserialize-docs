"use client";

import React, { useState } from "react";
import Section from "../../components/Section";
import Endpoint from "../../components/Endpoints";
import CodeBlock from "../../components/Codeblocks";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function SwapAPIDocumentation() {
  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);

  const copyToClipboard = (text: string, index: string | number): void => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div>
      <Section id="overview" title="Overview">
        <p className="text-gray-700 mb-4">
          The Deserialize API provides several endpoints for token swaps, market
          data, and account information on the 0G blockchain.
        </p>
        <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6 rounded">
          <h4 className="font-semibold text-green-700 mb-2">Base URL</h4>
          <code className="text-green-800">
            https://evm-api.deserialize.xyz/:networkId
          </code>
        </div>
      </Section>

      <Section id="networks" title="Supported Networks">
        <p className="text-gray-700 mb-4">
          The Deserialize API currently supports the following networks:
        </p>

        <ul className="list-disc list-inside text-gray-700">
          <li>0G Mainnet (networkId: 0G)</li>
          <li>Base (networkId: BASE)</li>
        </ul>
      </Section>

      <Section id="quote" title="Get Quote">
        <p className="text-gray-700 mb-4">
          Request a quote for swapping tokens. This endpoint calculates the
          optimal route and expected output amount.
        </p>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
          Request
        </h3>
        <Endpoint method="POST" path="/quote" description="Get swap quote" />

        <h4 className="text-lg font-semibold text-green-700 mt-4 mb-2">
          Request Example
        </h4>
        <CodeBlock
          index="quote-req"
          language="json"
          code={`{
  "tokenA": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  "tokenB": "0x59ef6f3943bbdfe2fb19565037ac85071223e94c",
  "dexId": "ALL",
  "amountIn": "1000000000000000000"
}`}
          copyToClipboard={copyToClipboard}
          copiedIndex={copiedIndex}
        />

        <h3 className="text-xl font-semibold text-green-700 mt-8 mb-3">
          Response Example
        </h3>
        <CodeBlock
          index="quote-res"
          language="json"
          copyToClipboard={copyToClipboard}
          copiedIndex={copiedIndex}
          code={`{
  "tokenA": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  "tokenB": "0x59ef6f3943bbdfe2fb19565037ac85071223e94c",
  "amountIn": "1000000000000000000",
  "amountOut": "2429260061494",
  "tokenPrice": "2436.737744408513",
  "routePlan": [
    {
      "tokenA": "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
      "tokenB": "0x59ef6f3943bbdfe2fb19565037ac85071223e94c",
      "dexId": "ZERO_G",
      "poolAddress": "0x224D0891D63Ca83e6DD98B4653C27034503a5E76",
      "aToB": true,
      "fee": 3000
    }
  ],
  "dexId": "ALL",
  "dexFactory": "0x9bdcA5798E52e592A08e3b34d3F18EeF76Af7ef4",
  "isNativeIn": true,
  "isNativeOut": false
}`}
        />
      </Section>

      <Section id="swap" title="Execute Swap">
        <p className="text-gray-700 mb-4">
          Execute a token swap transaction using a quote obtained from the quote
          endpoint.
        </p>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
          Request
        </h3>
        <Endpoint
          method="POST"
          path="/swap"
          description="Execute swap transaction"
        />

        <h4 className="text-lg font-semibold text-green-700 mt-4 mb-2">
          Request Example
        </h4>
        <CodeBlock
          index="swap-req"
          language="json"
          copyToClipboard={copyToClipboard}
          copiedIndex={copiedIndex}
          code={`{
  "publicKey": "0xe0918C56A2C7a216644B6d890c80d164417A70E3",
  "quote": {
    "tokenA": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    "tokenB": "0x59ef6f3943bbdfe2fb19565037ac85071223e94c",
    "amountIn": "1000000000000000000",
    "amountOut": "2429260061494",
    "tokenPrice": "2436.737744408513",
    "routePlan": [
      {
        "tokenA": "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
        "tokenB": "0x59ef6f3943bbdfe2fb19565037ac85071223e94c",
        "dexId": "ZERO_G",
        "poolAddress": "0x224D0891D63Ca83e6DD98B4653C27034503a5E76",
        "aToB": true,
        "fee": 3000
      }
    ],
    "dexId": "ALL",
    "dexFactory": "0x9bdcA5798E52e592A08e3b34d3F18EeF76Af7ef4",
    "isNativeIn": true,
    "isNativeOut": false
  },
  "slippage": 1
  "partnerFees": {
    "fee": 50,
    "recipient": "0x1234567890123456789012345678901234567890"
  }
}`}
        />

        <h3 className="text-xl font-semibold text-green-700 mt-8 mb-3">
          Response Example
        </h3>
        <CodeBlock
          index="swap-res"
          language="json"
          copyToClipboard={copyToClipboard}
          copiedIndex={copiedIndex}
          code={`{
  "transactions": [
    {
      "from": "0xe0918C56A2C7a216644B6d890c80d164417A70E3",
      "to": "0x228864aeAAE12Ee8000D9543d9cCfB538F46Da3b",
      "data": "0x5a18dddd00000000000000000000000000000000...",
      "value": "1000000000000000000"
    }
  ]
}`}
        />
      </Section>

      <Section id="tokens" title="Token List">
        <p className="text-gray-700 mb-4">
          Retrieve lists of available tokens on the platform.
        </p>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">
          Get Token Addresses
        </h3>
        <Endpoint method="GET" path="/tokenList" />

        <h4 className="text-lg font-semibold text-green-700 mt-4 mb-2">
          Response Example
        </h4>
        <CodeBlock
          index="token-list"
          language="json"
          copyToClipboard={copyToClipboard}
          copiedIndex={copiedIndex}
          code={`{
  "result": [
    "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
    "0x7bbc63d01ca42491c3e084c941c3e86e55951404",
    "0x2c81a9883f9570266ab734a9671412e72e7a615d",
    ...
  ]
}`}
        />

        <h3 className="text-xl font-semibold text-green-700 mt-8 mb-3">
          Get Tokens with Details
        </h3>
        <Endpoint method="GET" path="/tokenListWithDetails" />

        <h4 className="text-lg font-semibold text-green-700 mt-4 mb-2">
          Response Example
        </h4>
        <CodeBlock
          index="token-list-details"
          language="json"
          copyToClipboard={copyToClipboard}
          copiedIndex={copiedIndex}
          code={`{
  "result": [
    {
      "address": "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
      "decimals": 18,
      "symbol": "W0G",
      "name": "Wrapped 0G",
      "contractAddress": "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c"
    },
    ...
  ]
}`}
        />
      </Section>

      <Section id="token-details" title="Token Details">
        <p className="text-gray-700 mb-4">
          Get detailed information about a specific token.
        </p>

        <Endpoint method="GET" path="/tokenDetails/:tokenAddress" />

        <h4 className="text-lg font-semibold text-green-700 mt-6 mb-2">
          Example Request
        </h4>
        <CodeBlock
          index="token-details-req"
          language="bash"
          copyToClipboard={copyToClipboard}
          copiedIndex={copiedIndex}
          code={`GET /tokenDetails/0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c`}
        />

        <h4 className="text-lg font-semibold text-green-700 mt-4 mb-2">
          Response
        </h4>
        <CodeBlock
          index="token-details-res"
          language="json"
          copyToClipboard={copyToClipboard}
          copiedIndex={copiedIndex}
          code={`{
  "result": {
    "address": "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
    "decimals": 18,
    "symbol": "W0G",
    "name": "Wrapped 0G",
    "contractAddress": "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c"
  }
}`}
        />
      </Section>

      <Section id="token-price" title="Token Price">
        <p className="text-gray-700 mb-4">Get the current price of a token.</p>

        <Endpoint method="GET" path="/tokenPrice/:tokenAddress" />

        <h4 className="text-lg font-semibold text-green-700 mt-6 mb-2">
          Example Request
        </h4>
        <CodeBlock
          index="token-price-req"
          language="bash"
          copyToClipboard={copyToClipboard}
          copiedIndex={copiedIndex}
          code={`GET /tokenPrice/0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c`}
        />

        <h4 className="text-lg font-semibold text-green-700 mt-4 mb-2">
          Response
        </h4>
        <CodeBlock
          index="token-price-res"
          language="json"
          copyToClipboard={copyToClipboard}
          copiedIndex={copiedIndex}
          code={`{
  "result": 2.5629232
}`}
        />
      </Section>

      <div className="grid grid-cols-2 gap-5">
        <div></div>
        <div>
          <Link
            href={"../endpoints"}
            className="flex items-center justify-between px-4 py-3 bg-green-100 hover:bg-green-200 border border-green-300 rounded-md transition-colors group"
          >
            <div className="flex flex-col">
              <span className="text-xs text-green-600 uppercase font-semibold">
                Next
              </span>
              <span className="text-sm text-green-800 font-medium">
                Endpoints
              </span>
            </div>
            <ChevronRight
              size={20}
              className="text-green-700 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
