"use client";

import React, { useState } from "react";
import Section from "../../components/Section";
import Endpoint from "../../components/Endpoints";
import CodeBlock from "../../components/Codeblocks";
import Link from "next/link";
import { Check, ChevronLeft, ChevronRight, Cross, X } from "lucide-react";

export default function SwapPage() {
  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);

  const copyToClipboard = (text: string, index: string | number): void => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Section id="swap" title="Execute Swap">
      <p className="text-gray-700 mb-4">
        Execute a token swap transaction using a quote obtained from the quote
        endpoint.
      </p>

      <h3
        className="text-xl font-semibold text-green-700 mt-6 mb-3"
        id="endpoint"
      >
        Endpoint
      </h3>
      <Endpoint
        method="POST"
        path="/swap"
        description="Execute swap transaction"
      />

      <h4
        className="text-lg font-semibold text-green-700 mt-4 mb-2"
        id="request-body"
      >
        Request Body
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
                publicKey
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                string
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                <Check size={16} className="inline text-green-600" />
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                User&apos;s wallet address
              </td>
            </tr>
            <tr>
              <td className="border border-green-200 px-4 py-2 font-mono text-sm text-green-900">
                quote
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                object
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                <Check size={16} className="inline text-green-600" />
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                Quote object from /quote endpoint
              </td>
            </tr>
            <tr>
              <td className="border border-green-200 px-4 py-2 font-mono text-sm text-green-900">
                slippage
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                number
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                <Check size={16} className="inline text-green-600" />
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                Slippage tolerance percentage (e.g., 1 = 1%)
              </td>
            </tr>
            <tr>
              <td className="border border-green-200 px-4 py-2 font-mono text-sm text-green-900">
                partnerFees
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                object (optional)
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                <X size={16} className="inline text-red-600" />
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                Partner fee details
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

      <h4
        className="text-lg font-semibold text-green-700 mt-6 mb-3"
        id="response-fields"
      >
        Response Fields
      </h4>
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 space-y-3">
        <div>
          <span className="text-green-800 font-mono text-sm">
            transactions:
          </span>
          <span className="text-gray-700 text-sm ml-2">
            Array of transaction objects ready to be signed and sent to the
            blockchain.
          </span>
        </div>
        <div>
          <span className="text-green-800 font-mono text-sm">from:</span>
          <span className="text-gray-700 text-sm ml-2">
            Your wallet address (matches the publicKey from request).
          </span>
        </div>
        <div>
          <span className="text-green-800 font-mono text-sm">to:</span>
          <span className="text-gray-700 text-sm ml-2">
            The smart contract address that will execute the swap.
          </span>
        </div>
        <div>
          <span className="text-green-800 font-mono text-sm">data:</span>
          <span className="text-gray-700 text-sm ml-2">
            Encoded function call data containing swap parameters and routing
            information.
          </span>
        </div>
        <div>
          <span className="text-green-800 font-mono text-sm">value:</span>
          <span className="text-gray-700 text-sm ml-2">
            Amount of native token to send with the transaction (in wei). Only
            present when swapping native token.
          </span>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 my-6 rounded">
        <h4 className="font-semibold text-yellow-700 mb-2">⚠️ Important</h4>
        <p className="text-yellow-700 text-sm">
          You must sign and broadcast this transaction using your wallet. The
          transaction will fail if the price moves beyond your slippage
          tolerance before it&apos;s mined.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-8">
        <div>
          <Link
            href={"/docs/quote"}
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
              <span className="text-sm text-green-800 font-medium">Quote</span>
            </div>
          </Link>
        </div>
        <div>
          <Link
            href={"/docs/tokens"}
            className="flex items-center justify-between px-4 py-3 bg-green-100 hover:bg-green-200 border border-green-300 rounded-md transition-colors group"
          >
            <div className="flex flex-col">
              <span className="text-xs text-green-600 uppercase font-semibold">
                Next
              </span>
              <span className="text-sm text-green-800 font-medium">
                Token List
              </span>
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
