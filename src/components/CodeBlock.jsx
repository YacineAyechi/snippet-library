"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-go";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-swift";

export default function CodeBlock({ code, language }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, [code, language]);

  const languageMap = {
    js: "javascript",
    ts: "typescript",
    py: "python",
    rb: "ruby",
    yml: "yaml",
    shell: "bash",
    sh: "bash",
    cpp: "cpp",
    "c-plus-plus": "cpp",
  };

  const normalizedLanguage =
    languageMap[language.toLowerCase()] || language.toLowerCase();

  return (
    <pre className="!bg-gray-900 !m-0 rounded-lg">
      <code className={`language-${normalizedLanguage}`}>{code}</code>
    </pre>
  );
}
