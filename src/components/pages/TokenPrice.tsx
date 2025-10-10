"use client";

import React, { useState } from "react";
import Section from "../Section";
import Endpoint from "../Endpoints";
import CodeBlock from "../Codeblocks";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TokenPricePage() {
  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);

  const copyToClipboard = (text: string, index: string | number): void => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Section id="token-price" title="Token Price">
      <p className="text-gray-700 mb-4">Get the current price of a token.</p>

      <Endpoint method="GET" path="/tokenPrice/:tokenAddress" />

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
        index="token-price-req"
        language="bash"
        copyToClipboard={copyToClipboard}
        copiedIndex={copiedIndex}
        code={`GET /tokenPrice/0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c`}
      />

      <h4
        className="text-lg font-semibold text-green-700 mt-4 mb-2"
        id="response"
      >
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

      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
        <p className="text-gray-700 text-sm">
          <span className="text-green-700 font-semibold">Note:</span> The price
          is returned as a decimal number representing the token&apos;s value in
          USD.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-8">
        <div>
          <Link
            href={"/docs/token-details"}
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
                Token Details
              </span>
            </div>
          </Link>
        </div>
        <div></div>
      </div>
    </Section>
  );
}
