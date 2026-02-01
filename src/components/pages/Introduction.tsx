"use client";

import React, { useState } from "react";
import Section from "../../components/Section";
import Endpoint from "../../components/Endpoints";
import CodeBlock from "../../components/Codeblocks";
import Link from "next/link";
import { ChevronRight, Check, Zap } from "lucide-react";

export default function IntroductionPage() {
  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);

  const copyToClipboard = (text: string, index: string | number): void => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div>
      <Section id="introduction" title="Introduction">
        <p className="text-gray-700 text-md mb-4">
          The Deserialize API provides comprehensive endpoints for token swaps,
          market data, and account information on the 0G blockchain. Whether
          you&apos;re building a DEX, wallet, or trading interface, our API
          offers everything you need.
        </p>
        <div className="flex items-center text-green-700">
          <Zap size={20} className="mr-2" />
          Fast, reliable, and developer-friendly
        </div>
        <h3 className="text-xl font-semibold text-green-700 mt-8 mb-4">
          Getting Started
        </h3>
        <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6 rounded">
          <h4 className="font-semibold text-green-700 mb-2">Base URL</h4>
          <code className="text-green-800">
            https://evm-api.deserialize.xyz/:networkId
          </code>
        </div>

        <p className="text-gray-700 mb-4">
          Follow these steps to integrate with our API:
        </p>

        <div className="space-y-4 mb-6">
          <div className="flex items-start">
            <div className="bg-green-100 text-green-700 rounded-full p-2 mr-4">
              <Check size={16} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">
                1. Get Token Information
              </h4>
              <p className="text-gray-600 text-sm">
                Use the token list endpoints to discover available tokens and
                their details.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 text-green-700 rounded-full p-2 mr-4">
              <Check size={16} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">
                2. Request a Quote
              </h4>
              <p className="text-gray-600 text-sm">
                Get optimal swap routes and expected output amounts before
                executing trades.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 text-green-700 rounded-full p-2 mr-4">
              <Check size={16} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-1">
                3. Execute Swaps
              </h4>
              <p className="text-gray-600 text-sm">
                Use the quote to execute transactions with your preferred
                slippage tolerance.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="quick-example" title="Quick Example">
        <p className="text-gray-700 mb-4">
          Here&apos;s a complete example showing how to swap native token for
          W0G:
        </p>

        <h4 className="text-lg font-semibold text-green-700 mt-6 mb-2">
          1. Get Token Details
        </h4>
        <Endpoint method="GET" path="/tokenListWithDetails" />
        <CodeBlock
          index="intro-token-list"
          language="json"
          copyToClipboard={copyToClipboard}
          copiedIndex={copiedIndex}
          code={`{
  "result": [
    {
      "address": "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
      "decimals": 18,
      "symbol": "W0G",
      "name": "Wrapped 0G"
    }
  ]
}`}
        />

        <h4 className="text-lg font-semibold text-green-700 mt-6 mb-2">
          2. Get Swap Quote
        </h4>
        <Endpoint method="POST" path="/quote" />
        <CodeBlock
          index="intro-quote"
          language="json"
          copyToClipboard={copyToClipboard}
          copiedIndex={copiedIndex}
          code={`{
  "tokenA": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
  "tokenB": "0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c",
  "dexId": "ALL",
  "amountIn": "1000000000000000000"
}`}
        />

        <h4 className="text-lg font-semibold text-green-700 mt-6 mb-2">
          3. Execute Swap
        </h4>
        <Endpoint method="POST" path="/swap" />
        <CodeBlock
          index="intro-swap"
          language="json"
          copyToClipboard={copyToClipboard}
          copiedIndex={copiedIndex}
          code={`{
  "publicKey": "0xe0918C56A2C7a216644B6d890c80d164417A70E3",
  "quote": { /* quote from step 2 */ },
  "slippage": 1
}`}
        />
      </Section>

      <Section id="endpoints" title="Available Endpoints">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-100">
                <th className="border border-green-200 px-4 py-3 text-left text-sm font-semibold text-green-800">
                  Endpoint
                </th>
                <th className="border border-green-200 px-4 py-3 text-left text-sm font-semibold text-green-800">
                  Method
                </th>
                <th className="border border-green-200 px-4 py-3 text-left text-sm font-semibold text-green-800">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-green-200 px-4 py-3 font-mono text-sm text-green-900">
                  /quote
                </td>
                <td className="border border-green-200 px-4 py-3 text-sm text-gray-700">
                  POST
                </td>
                <td className="border border-green-200 px-4 py-3 text-sm text-gray-700">
                  Get swap quote with optimal routing
                </td>
              </tr>
              <tr>
                <td className="border border-green-200 px-4 py-3 font-mono text-sm text-green-900">
                  /swap
                </td>
                <td className="border border-green-200 px-4 py-3 text-sm text-gray-700">
                  POST
                </td>
                <td className="border border-green-200 px-4 py-3 text-sm text-gray-700">
                  Execute swap transaction
                </td>
              </tr>
              <tr>
                <td className="border border-green-200 px-4 py-3 font-mono text-sm text-green-900">
                  /tokenList
                </td>
                <td className="border border-green-200 px-4 py-3 text-sm text-gray-700">
                  GET
                </td>
                <td className="border border-green-200 px-4 py-3 text-sm text-gray-700">
                  Get list of available token addresses
                </td>
              </tr>
              <tr>
                <td className="border border-green-200 px-4 py-3 font-mono text-sm text-green-900">
                  /tokenListWithDetails
                </td>
                <td className="border border-green-200 px-4 py-3 text-sm text-gray-700">
                  GET
                </td>
                <td className="border border-green-200 px-4 py-3 text-sm text-gray-700">
                  Get tokens with full metadata
                </td>
              </tr>
              <tr>
                <td className="border border-green-200 px-4 py-3 font-mono text-sm text-green-900">
                  /tokenDetails/:address
                </td>
                <td className="border border-green-200 px-4 py-3 text-sm text-gray-700">
                  GET
                </td>
                <td className="border border-green-200 px-4 py-3 text-sm text-gray-700">
                  Get detailed token information
                </td>
              </tr>
              <tr>
                <td className="border border-green-200 px-4 py-3 font-mono text-sm text-green-900">
                  /tokenPrice/:address
                </td>
                <td className="border border-green-200 px-4 py-3 text-sm text-gray-700">
                  GET
                </td>
                <td className="border border-green-200 px-4 py-3 text-sm text-gray-700">
                  Get current token price in USD
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="key-concepts" title="Key Concepts">
        <h4 className="text-lg font-semibold text-green-700 mt-6 mb-3">
          Token Addresses
        </h4>
        <p className="text-gray-700 mb-4">
          Use{" "}
          <code className="bg-green-50 text-green-800 px-1 rounded">
            0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE
          </code>{" "}
          to represent the native token (0G) in swap operations.
        </p>

        <h4 className="text-lg font-semibold text-green-700 mt-6 mb-3">
          Amount Format
        </h4>
        <p className="text-gray-700 mb-4">
          All amounts are specified in wei (the smallest unit). For example, 1
          0G = 1000000000000000000 wei.
        </p>

        <h4 className="text-lg font-semibold text-green-700 mt-6 mb-3">
          Slippage Tolerance
        </h4>
        <p className="text-gray-700 mb-4">
          Specify slippage as a percentage (e.g., 1 = 1%). This protects against
          price movements during transaction confirmation.
        </p>

        <h4 className="text-lg font-semibold text-green-700 mt-6 mb-3">
          DEX Support
        </h4>
        <p className="text-gray-700">
          Use{" "}
          <code className="bg-green-50 text-green-800 px-1 rounded">
            &quot;ALL&quot;
          </code>{" "}
          for dexId to automatically find the best route across all supported
          DEXs.
        </p>
      </Section>

      <div className="grid grid-cols-2 gap-5 mt-8">
        <div></div>
        <div>
          <Link
            href={"/docs/overview"}
            className="flex items-center justify-between px-4 py-3 bg-green-100 hover:bg-green-200 border border-green-300 rounded-md transition-colors group"
          >
            <div className="flex flex-col">
              <span className="text-xs text-green-600 uppercase font-semibold">
                Next
              </span>
              <span className="text-sm text-green-800 font-medium">
                Overview
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
