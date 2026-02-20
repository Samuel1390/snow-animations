"use client";

import { CSSProperties, useEffect, useState } from "react";

interface CodeBlockProps {
  code: string;
  type?: "html" | "css" | "js" | "ts" | "tsx" | "jsx";
  maxWidth: number;
  maxHeight: number;
}

export default function CodeBlock({
  code,
  type,
  maxHeight,
  maxWidth,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 overflow-y-hidden bg-neutral-200 overflow-x-auto dark:bg-neutral-900 border border-gray-300 dark:border-gray-600 rounded-lg">
      <div className="w-full p-2">
        <h3 className="font-semibold text-neutral-700 dark:text-gray-300">
          {type}
        </h3>
      </div>
      <div
        style={{ maxWidth: maxWidth + "px", maxHeight: maxHeight + "px" }}
        className="relative h-full group"
      >
        <pre
          style={{ scrollbarColor: "#fafafa77 transparent" }}
          className="bg-gray-800 h-full overflow-auto dark:bg-gray-950 border border-gray-400 dark:border-gray-800 p-3 text-neutral-50 rounded-lg text-sm "
        >
          <code>{code}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 px-3 py-1 text-xs font-medium bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
