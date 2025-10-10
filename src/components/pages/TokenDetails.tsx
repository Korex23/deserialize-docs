"use client";

import React, { useState } from "react";
import Section from "../Section";
import Endpoint from "../Endpoints";
import CodeBlock from "../Codeblocks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function TokenDetailsPage() {
  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);

  const copyToClipboard = (text: string, index: string | number): void => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Section id="token-details" title="Token Details">
      <p className="text-gray-700 mb-4">
        Get detailed information about a specific token.
      </p>

      <Endpoint method="GET" path="/tokenDetails/:tokenAddress" />

      <h4
        className="text-lg font-semibold text-green-700 mt-4 mb-2"
        id="request-parameters"
      >
        Parameters
      </h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-green-100">
              <th className="border border-green-200 px-4 py-2 text-left text-sm font-semibold text-green-800">
                Parameter
              </th>
              <th className="border border-green-200 px-4 py-2 text-left text-sm font-semibold text-green-800">
                Type
              </th>
              <th className="border border-green-200 px-4 py-2 text-left text-sm font-semibold text-green-800">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-green-200 px-4 py-2 font-mono text-sm text-green-900">
                tokenAddress
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                string
              </td>
              <td className="border border-green-200 px-4 py-2 text-sm text-gray-700">
                Token contract address
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4
        className="text-lg font-semibold text-green-700 mt-6 mb-2"
        id="example-request"
      >
        Example Request
      </h4>
      <CodeBlock
        index="token-details-req"
        language="bash"
        copyToClipboard={copyToClipboard}
        copiedIndex={copiedIndex}
        code={`GET /tokenDetails/0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c`}
      />

      <h4
        className="text-lg font-semibold text-green-700 mt-4 mb-2"
        id="response"
      >
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

      <div className="grid grid-cols-2 gap-5 mt-8">
        <div>
          <Link
            href={"/docs/tokens"}
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
                Token List
              </span>
            </div>
          </Link>
        </div>
        <div>
          <Link
            href={"/docs/token-price"}
            className="flex items-center justify-between px-4 py-3 bg-green-100 hover:bg-green-200 border border-green-300 rounded-md transition-colors group"
          >
            <div className="flex flex-col">
              <span className="text-xs text-green-600 uppercase font-semibold">
                Next
              </span>
              <span className="text-sm text-green-800 font-medium">
                Token Price
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
