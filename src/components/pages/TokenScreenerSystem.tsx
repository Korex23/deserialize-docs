"use client";

import React, { useState } from "react";
import Section from "@/components/Section";
import Endpoint from "@/components/Endpoints";
import CodeBlock from "@/components/Codeblocks";

export default function TokenScreenerSystem() {
  const sampleHealth = `{
  "status": "healthy",
  "redis": "connected",
  "timestamp": "2025-10-23T11:17:30.740Z",
  "uptime": 437377.043962978
}`;
  const sampleStats = `{
  "success": true,
  "data": {
    "chainId": "16661",
    "dexName": "ZeroDEX",
    "totalTokens": 28,
    "totalPools": 37,
    "timestamp": "2025-10-23T11:18:04.891Z"
  }
}`;
  const sampleLastUpdate = `{
  "success": true,
  "data": {
    "lastUpdated": 1761162695247,
    "source": "aggregator"
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
      <h1>System</h1>

      <Section id="health" title="Health">
        <Endpoint method="GET" path="/health" />
        <p>Service readiness and connectivity status.</p>
        <CodeBlock
          index="ts-system-health-response"
          language="json"
          code={sampleHealth}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>

      <Section id="stats" title="Stats">
        <Endpoint method="GET" path="/stats" />
        <p>High-level counts for tokens and pools.</p>
        <CodeBlock
          index="ts-system-stats-response"
          language="json"
          code={sampleStats}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>

      <Section id="last-update" title="Last Update">
        <Endpoint method="GET" path="/last-update" />
        <p>Latest ingestion timestamp and age in minutes.</p>
        <CodeBlock
          index="ts-system-last-update-response"
          language="json"
          code={sampleLastUpdate}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>
    </div>
  );
}