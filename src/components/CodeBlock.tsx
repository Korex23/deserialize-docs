"use client";

import React, { useState } from "react";

type CodeBlockProps = {
  code: string;
  language?: string;
  filename?: string;
};

export default function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <div className="relative my-4">
      {filename ? (
        <div className="text-xs text-gray-500 mb-1">{filename}</div>
      ) : null}
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-3 sm:p-4 overflow-x-auto text-xs sm:text-sm">
        <code>{code}</code>
      </pre>
      <button
        type="button"
        onClick={handleCopy}
        className="absolute top-2 right-2 text-xs px-2 py-1 rounded bg-gray-700 hover:bg-gray-600"
        aria-label="Copy code"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}