"use client";

import React, { useState } from "react";
import Section from "@/components/Section";
import Endpoint from "@/components/Endpoints";
import CodeBlock from "@/components/Codeblocks";

export default function TokenScreenerHealth() {
  const sampleHealth = `{
  "success": true,
  "status": "ok",
  "service": "token-screener",
  "version": "1.0.0",
  "timestamp": 1761162695247
}`;

  const [copiedIndex, setCopiedIndex] = useState<string | number | null>(null);
  const copyToClipboard = (code: string, index: string | number) => {
    navigator.clipboard.writeText(code);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="prose max-w-none">
      <h1>Health</h1>

      <Section id="health" title="Service Health">
        <Endpoint method="GET" path="/health" />
        <p>Basic readiness check for the Token Screener service.</p>
        <CodeBlock
          index="ts-health-response"
          language="json"
          code={sampleHealth}
          copiedIndex={copiedIndex}
          copyToClipboard={copyToClipboard}
        />
      </Section>
    </div>
  );
}