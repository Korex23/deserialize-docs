"use client";

import React, { useState } from "react";
import Section from "../../components/Section";
import Endpoint from "../../components/Endpoints";
import CodeBlock from "../../components/Codeblocks";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function QuotePage() {
  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);

  const copyToClipboard = (text: string, index: string | number): void => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Section id="quote" title="Get Quote">
      <p className="text-gray-700 mb-4">
        Request a quote for swapping tokens. This endpoint calculates the
        optimal route and expected output amount.
      </p>

      <h3
        className="text-xl font-semibold text-green-700 mt-6 mb-3"
        id="endpoint"
      >
        Endpoint
      </h3>
      <Endpoint method="POST" path="/quote" description="Get swap quote" />

      <h4
        className="text-lg font-semibold text-green-700 mt-4 mb-2"
        id="request-body"
      >
        Request Body
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

      <h4
        className="text-lg font-semibold text-green-700 mt-6 mb-2"
        id="request-parameters"
      >
        Parameters
      </h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-100">
              <th className="border border-green-200 px-4 py-2 text-left text-sm font-semibold text-green-800">
                Field
              </th>
              <th className="border border-green-200 px-4 py-2 text-left text-sm font-semibold text-green-800">
                Type
              </th>
              <th className="border border-green-200 px-4 py-2 text-left text-sm font-semibold text-green-800">
                Required
              </th>
              <th className="border border-green-200 px-4 py-2 text-left text-sm font-semibold text-green-800">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-green-200 px-4 py-2 font-mono text-sm text-green-900">
                tokenA
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                string
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                <Check size={16} className="inline text-green-600" />
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                Input token address (use 0xEeee...EEeE for native token)
              </td>
            </tr>
            <tr>
              <td className="border border-green-200 px-4 py-2 font-mono text-sm text-green-900">
                tokenB
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                string
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                <Check size={16} className="inline text-green-600" />
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                Output token address
              </td>
            </tr>
            <tr>
              <td className="border border-green-200 px-4 py-2 font-mono text-sm text-green-900">
                dexId
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                string
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                <Check size={16} className="inline text-green-600" />
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                DEX identifier (e.g., &quot;ALL&quot;, &quot;ZERO_G&quot;)
              </td>
            </tr>
            <tr>
              <td className="border border-green-200 px-4 py-2 font-mono text-sm text-green-900">
                amountIn
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                string
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                <Check size={16} className="inline text-green-600" />
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                Amount to swap in wei (smallest unit)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3
        className="text-xl font-semibold text-green-700 mt-8 mb-3"
        id="response"
      >
        Response
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

      <h4
        className="text-lg font-semibold text-green-700 mt-6 mb-3"
        id="response-fields"
      >
        Response Fields
      </h4>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-3">
        <div>
          <span className="text-green-800 font-mono text-sm">amountOut:</span>
          <span className="text-gray-700 text-sm ml-2">
            The amount of tokens you will receive (in smallest unit). In this
            example, you&apos;ll get 2,429,260,061,494 units of the output
            token.
          </span>
        </div>
        <div>
          <span className="text-green-800 font-mono text-sm">tokenPrice:</span>
          <span className="text-gray-700 text-sm ml-2">
            The effective price rate for the swap (2436.74 output tokens per 1
            input token).
          </span>
        </div>
        <div>
          <span className="text-green-800 font-mono text-sm">routePlan:</span>
          <span className="text-gray-700 text-sm ml-2">
            The optimal swap path. May include multiple hops through different
            pools.
          </span>
        </div>
        <div>
          <span className="text-green-800 font-mono text-sm">aToB:</span>
          <span className="text-gray-700 text-sm ml-2">
            Direction of the swap in the pool (true = tokenA to tokenB).
          </span>
        </div>
        <div>
          <span className="text-green-800 font-mono text-sm">fee:</span>
          <span className="text-gray-700 text-sm ml-2">
            Pool fee in basis points (3000 = 0.3%).
          </span>
        </div>
        <div>
          <span className="text-green-800 font-mono text-sm">
            isNativeIn/isNativeOut:
          </span>
          <span className="text-gray-700 text-sm ml-2">
            Indicates if native token (0G) is being used as input or output.
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-8">
        <div>
          <Link
            href={"/docs/endpoints"}
            className="flex items-center justify-between px-4 py-3 bg-green-100 hover:bg-green-200 border border-green-300 rounded-md transition-colors group"
          >
            <ChevronLeft
              size={20}
              className="text-green-700 group-hover:translate-x-1 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-xs text-green-600 uppercase font-semibold">
                Previous
              </span>
              <span className="text-sm text-green-800 font-medium">
                Endpoints
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Link
            href={"/docs/swap"}
            className="flex items-center justify-between px-4 py-3 bg-green-100 hover:bg-green-200 border border-green-300 rounded-md transition-colors group"
          >
            <div className="flex flex-col">
              <span className="text-xs text-green-600 uppercase font-semibold">
                Next
              </span>
              <span className="text-sm text-green-800 font-medium">Swap</span>
            </div>
            <ChevronRight
              size={20}
              className="text-green-700 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </Section>
  );
}
