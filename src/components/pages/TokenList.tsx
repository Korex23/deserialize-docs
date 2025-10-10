"use client";

import React, { useState } from "react";
import Section from "../../components/Section";
import Endpoint from "../../components/Endpoints";
import CodeBlock from "../../components/Codeblocks";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function TokenListPage() {
  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);

  const copyToClipboard = (text: string, index: string | number): void => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Section id="tokens" title="Token List">
      <p className="text-gray-700 mb-4">
        Retrieve lists of available tokens on the platform.
      </p>

      <h3
        className="text-xl font-semibold text-green-700 mt-6 mb-3"
        id="get-token-list"
      >
        Get Token Addresses
      </h3>
      <Endpoint method="GET" path="/tokenList" />

      <h4
        className="text-lg font-semibold text-green-700 mt-4 mb-2"
        id="token-list-response"
      >
        Response
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

      <h3
        className="text-xl font-semibold text-green-700 mt-8 mb-3"
        id="get-token-list-details"
      >
        Get Tokens with Details
      </h3>
      <Endpoint method="GET" path="/tokenListWithDetails" />

      <h4
        className="text-lg font-semibold text-green-700 mt-4 mb-2"
        id="token-list-details-response"
      >
        Response
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
      <div className="grid grid-cols-2 gap-5 mt-8">
        <div>
          <Link
            href={"/docs/swap"}
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
              <span className="text-sm text-green-800 font-medium">Swap</span>
            </div>
          </Link>
        </div>
        <div>
          <Link
            href={"/docs/token-details"}
            className="flex items-center justify-between px-4 py-3 bg-green-100 hover:bg-green-200 border border-green-300 rounded-md transition-colors group"
          >
            <div className="flex flex-col">
              <span className="text-xs text-green-600 uppercase font-semibold">
                Next
              </span>
              <span className="text-sm text-green-800 font-medium">
                Token Details
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
