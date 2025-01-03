"use client";

import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-java";

export default function CodeBlock({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <pre className="!bg-gray-900 !m-0 rounded-lg">
      <code className={`language-${language}`}>{code}</code>
    </pre>
  );
}
