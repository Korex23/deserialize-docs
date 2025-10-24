"use client";

import React, { useState } from "react";
import Section from "@/components/Section";
import Endpoint from "@/components/Endpoints";
import CodeBlock from "@/components/Codeblocks";

export default function TokenScreenerStats() {
  const sampleStats = `{
  "success": true,
  "data": {
    "tokens": 28,
    "dexes": 1,
    "pools": 10,
    "lastUpdated": 1761162695247
  }
}`;

  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);
  const copyToClipboard = (code: string, index: string | number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="prose max-w-none">
      <h1>Stats</h1>

      <Section id="stats" title="Service Stats">
        <Endpoint method="GET" path="/stats" />
        <p>High-level system statistics for the Token Screener.</p>
        <CodeBlock
          index="ts-stats-response"
          language="json"
          code={sampleStats}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>
    </div>
  );
}