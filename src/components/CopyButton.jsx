"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({ code, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      className={`flex items-center gap-2 dark:hover:bg-gray-700 hover:bg-gray-300 rounded-lg transition-colors ${className}`}
      onClick={handleCopy}
    >
      {copied ? (
        <>
          <Check size={16} className="text-green-500" />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy size={16} />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}
