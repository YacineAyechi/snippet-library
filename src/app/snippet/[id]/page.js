"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CodeBlock from "@/components/CodeBlock";
import Navbar from "@/components/Navbar";
import { useEffect, useState, use } from "react";
import { supabase } from "@/lib/supabase";
import CopyButton from "@/components/CopyButton";

export default function SnippetPage({ params }) {
  const resolvedParams = use(params);
  const [snippet, setSnippet] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSnippet() {
      try {
        const { data, error } = await supabase
          .from("snippets")
          .select("*")
          .eq("id", resolvedParams.id)
          .single();

        if (error) throw error;
        setSnippet(data);
      } catch (error) {
        console.error("Error fetching snippet:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchSnippet();
  }, [resolvedParams.id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto p-6">
          <div className="animate-pulse">
            <div className="h-8 bg-card-bg rounded w-1/4 mb-6"></div>
            <div className="snippet-card p-6">
              <div className="h-8 bg-card-bg rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-card-bg rounded w-1/2"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!snippet) {
    return (
      <>
        <Navbar />
        <div className="max-w-4xl mx-auto p-6">
          <div className="snippet-card p-6 text-center">
            <h1 className="text-xl text-primary">Snippet not found</h1>
            <Link
              href="/"
              className="text-blue-500 hover:text-blue-400 mt-4 inline-block"
            >
              Return home
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-secondary hover:text-primary mb-6"
        >
          <ArrowLeft size={20} />
          Back to snippets
        </Link>

        <div className="snippet-card">
          <div className="p-6 border-b border-inherit">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-primary">
                {snippet.title}
              </h1>
              <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                {snippet.language}
              </span>
            </div>
            <p className="text-secondary mt-2">{snippet.description}</p>
          </div>

          <div className="bg-input-bg p-6">
            <CodeBlock
              code={snippet.code}
              language={snippet.language.toLowerCase()}
            />
          </div>

          <div className="p-4 bg-card-bg flex items-center justify-between border-t border-inherit">
            <span className="text-secondary text-sm">
              Added {new Date(snippet.created_at).toLocaleString()}
            </span>
            <CopyButton code={snippet.code} className="px-4 py-2" />
          </div>
        </div>
      </div>
    </>
  );
}
