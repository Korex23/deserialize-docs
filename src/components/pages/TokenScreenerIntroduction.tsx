"use client";

import React, { useState } from "react";
import Section from "../../components/Section";
import Endpoint from "../../components/Endpoints";
import CodeBlock from "../../components/Codeblocks";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";

export default function TokenScreenerIntroduction() {
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
          The Token Screener API provides endpoints to list tokens with market data
          and retrieve detailed information for specific tokens on the 0G blockchain.
          Use it to power token pages, market overviews, and analytics.
        </p>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 my-6 rounded">
          <h4 className="font-semibold text-green-700 mb-2">Base URL</h4>
          <code className="text-green-800">https://screener.deserialize.xyz</code>
        </div>

        <h3 className="text-xl font-semibold text-green-700 mt-6 mb-3">Getting Started</h3>
        <div className="flex items-center gap-3">
          <Link
            href="https://screener.deserialize.xyz/tokens"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-green-100 border border-green-300 text-green-700 hover:bg-green-200 transition-colors"
          >
            <ExternalLink size={16} />
            Open token list
          </Link>
          <span className="text-sm text-gray-600">Public endpoint to explore available tokens.</span>
        </div>
      </Section>

      <Section id="quick-example" title="Quick Example">
        <p className="text-gray-700 mb-4">
          Fetch tokens and details using simple HTTP requests.
        </p>
        <h4 className="text-lg font-semibold text-green-700 mt-2 mb-2">List Tokens</h4>
        <CodeBlock
          index="ts-intro-list"
          language="ts"
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
          code={`const res = await fetch('https://screener.deserialize.xyz/tokens');
const json = await res.json();
console.log(json);`}
        />
        <h4 className="text-lg font-semibold text-green-700 mt-6 mb-2">Token Details</h4>
        <CodeBlock
          index="ts-intro-details"
          language="ts"
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
          code={`const address = '0x59e6ff3943bbdfe2fb19565037ac85071223e94c';
const res = await fetch('https://screener.deserialize.xyz/tokens/' + address);
const json = await res.json();
console.log(json);`}
        />
      </Section>

      <Section id="endpoints" title="Available Endpoints">
        <div className="space-y-2">
          <Endpoint method="GET" path="/tokens" description="List tokens with market data" />
          <Endpoint method="GET" path="/tokens/:tokenAddress" description="Get token details and pools by address" />
        </div>
      </Section>

      <Section id="key-concepts" title="Key Concepts">
        <div className="space-y-3 text-gray-700">
          <p><span className="font-semibold text-green-700">price</span>: Current token price in USD.</p>
          <p><span className="font-semibold text-green-700">liquidity</span>: Aggregate liquidity across known pools.</p>
          <h4 className="text-lg font-semibold text-green-700 mt-6 mb-2">Token Address Requirements</h4>
          <p className="text-gray-700">
            Path pattern: <code className="bg-green-50 text-green-800 px-1 rounded">https://screener.deserialize.xyz/tokens/:tokenAddress</code>
          </p>
          <p className="text-gray-700">
            <code className="bg-green-50 text-green-800 px-1 rounded">tokenAddress</code> is required and must be an EVM address on 0G
            (<code className="bg-green-50 text-green-800 px-1 rounded">chainId: 16661</code>).
            Format: <code className="bg-green-50 text-green-800 px-1 rounded">0x</code> + 40 hex characters (mixed-case checksum or lowercase allowed).
            Validates against <code className="bg-green-50 text-green-800 px-1 rounded">^0x[a-fA-F0-9]{40}$</code>.
          </p>
          <p className="text-gray-700">Token ID equals the contract address string.</p>
          <div className="bg-green-50 p-3 rounded border border-green-200 text-sm text-green-800">
            <div className="mb-1">Examples:</div>
            <code className="block">0x59e6ff3943bbdfe2fb19565037ac85071223e94c</code>
            <code className="block">0x1cd0690ff9a693f5ef2dd976660a8dafc81a109c</code>
          </div>
        </div>
      </Section>

      <p><span className="font-semibold text-green-700">volume24h</span>: Trading volume over the last 24 hours.</p>
      <p><span className="font-semibold text-green-700">marketCap</span>: Circulating supply × price.</p>
      <p><span className="font-semibold text-green-700">dexes</span>: Exchanges where the token is listed.</p>
      <p><span className="font-semibold text-green-700">pools</span>: Pool-level data including addresses, fees, and liquidity.</p>
    </div>
  );
}