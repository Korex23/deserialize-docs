"use client";

import React from "react";
import { Copy, CheckCircle2 } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  index: string | number;
  copiedIndex: string | number | null;
  copyToClipboard: (code: string, index: string | number) => void;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = "json",
  index,
  copiedIndex,
  copyToClipboard,
}) => (
  <div className="relative bg-green-50 rounded-lg overflow-hidden my-4 border border-green-200">
    <div className="flex items-center justify-between px-4 py-2 bg-green-100 border-b border-green-200">
      <span className="text-xs text-green-700 uppercase">{language}</span>
      <button
        onClick={() => copyToClipboard(code, index)}
        className="flex items-center gap-1 text-xs text-green-700 hover:text-green-800 transition-colors"
      >
        {copiedIndex === index ? (
          <>
            <CheckCircle2 size={14} />
            Copied
          </>
        ) : (
          <>
            <Copy size={14} />
            Copy
          </>
        )}
      </button>
    </div>
    <pre className="p-4 overflow-x-auto text-sm">
      <code className="text-green-900">{code}</code>
    </pre>
  </div>
);

export default CodeBlock;
