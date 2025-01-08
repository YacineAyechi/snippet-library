"use client";

import { ArrowLeft, Type, FileText, Code, Languages } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import Navbar from "@/components/Navbar";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function AddSnippet() {
  const router = useRouter();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [snippet, setSnippet] = useState({
    title: "",
    description: "",
    language: "javascript",
    code: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("snippets")
        .insert([
          {
            title: snippet.title,
            description: snippet.description,
            language: snippet.language,
            code: snippet.code,
            user_id: user.id,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      router.push(`/snippet/${data.id}`);
    } catch (error) {
      console.error("Error saving snippet:", error);
      alert("Error saving snippet");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-200 mb-6"
        >
          <ArrowLeft size={20} />
          Back to snippets
        </Link>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="snippet-card p-6">
            <h1 className="text-2xl font-bold text-primary mb-6">
              Add New Snippet
            </h1>

            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-secondary mb-2">
                  Title
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                    <Type size={20} />
                  </div>
                  <input
                    type="text"
                    id="title"
                    value={snippet.title}
                    onChange={(e) =>
                      setSnippet({ ...snippet, title: e.target.value })
                    }
                    className="input-field pl-10"
                    placeholder="Enter snippet title"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-secondary mb-2"
                >
                  Description
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                    <FileText size={20} />
                  </div>
                  <input
                    type="text"
                    id="description"
                    value={snippet.description}
                    onChange={(e) =>
                      setSnippet({ ...snippet, description: e.target.value })
                    }
                    className="input-field pl-10"
                    placeholder="Enter snippet description"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="language" className="block text-secondary mb-2">
                  Language
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                    <Languages size={20} />
                  </div>
                  <select
                    id="language"
                    value={snippet.language}
                    onChange={(e) =>
                      setSnippet({ ...snippet, language: e.target.value })
                    }
                    className="input-field pl-10"
                  >
                    <option value="javascript">JavaScript</option>
                    <option value="typescript">TypeScript</option>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                    <option value="csharp">C#</option>
                    <option value="c">C</option>
                    <option value="ruby">Ruby</option>
                    <option value="rust">Rust</option>
                    <option value="go">Go</option>
                    <option value="kotlin">Kotlin</option>
                    <option value="swift">Swift</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="code" className="block text-secondary mb-2">
                  Code
                </label>
                <div className="relative">
                  <div className="absolute mt-3 left-3 flex items-center pointer-events-none text-gray-400">
                    <Code size={20} />
                  </div>
                  <textarea
                    id="code"
                    value={snippet.code}
                    onChange={(e) =>
                      setSnippet({ ...snippet, code: e.target.value })
                    }
                    rows={8}
                    className="input-field font-mono pl-10"
                    placeholder="Enter your code here"
                  />
                </div>
              </div>

              {snippet.code && (
                <div>
                  <label className="block text-secondary mb-2">Preview</label>
                  <div className="bg-input-bg rounded-lg border border-inherit">
                    <CodeBlock
                      code={snippet.code}
                      language={snippet.language}
                    />
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              Save Snippet
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
