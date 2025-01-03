"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import CodeBlock from "@/components/CodeBlock";
import Navbar from "@/components/Navbar";
import { Search } from "lucide-react";
import Link from "next/link";
import CopyButton from "@/components/CopyButton";

export default function Home() {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("all");

  useEffect(() => {
    async function fetchSnippets() {
      try {
        const { data, error } = await supabase
          .from("snippets")
          .select("*")
          .order("created_at", { ascending: false });

        if (!error) {
          setSnippets(data);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchSnippets();
  }, []);

  const filteredSnippets = snippets.filter((snippet) => {
    const matchesSearch =
      snippet.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      snippet.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      snippet.code.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesLanguage =
      selectedLanguage === "all" ||
      snippet.language.toLowerCase() === selectedLanguage.toLowerCase();

    return matchesSearch && matchesLanguage;
  });

  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-between mt-6 px-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="text-gray-400" size={20} />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-10"
          />
        </div>

        <div>
          <div className="relative">
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="appearance-none dark:bg-gray-800 bg-gray-200 dark:text-gray-200 text-gray-600 px-6 py-2 rounded-lg dark:border-gray-700 border-gray-300 dark:focus:border-gray-600 focus:border-gray-400 focus:outline-none cursor-pointer pr-10"
            >
              <option value="all">All</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : filteredSnippets.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-12">
            <h3 className="text-xl text-gray-400 mb-4">No snippets found</h3>
            <Link
              href="/add-snippet"
              className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-gray-600"
            >
              Add a new snippet
            </Link>
          </div>
        ) : (
          filteredSnippets.map((snippet) => (
            <Link
              key={snippet.id}
              href={`/snippet/${snippet.id}`}
              className="block h-full"
            >
              <div className="snippet-card h-full flex flex-col">
                <div className="p-4 border-b border-inherit">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-primary truncate">
                      {snippet.title}
                    </h3>
                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex-shrink-0">
                      {snippet.language}
                    </span>
                  </div>
                  <p className="text-secondary text-sm mt-2 line-clamp-2">
                    {snippet.description}
                  </p>
                </div>

                <div className="bg-input-bg p-4 h-[200px] overflow-hidden">
                  <CodeBlock code={snippet.code} language={snippet.language} />
                </div>

                <div className="p-3 bg-card-bg flex items-center justify-between mt-auto border-t border-inherit">
                  <span className="text-secondary text-sm">
                    Added {new Date(snippet.created_at).toLocaleString()}
                  </span>
                  <div className="flex gap-2">
                    <CopyButton code={snippet.code} className="p-1.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
      <div className="p-4 border-b border-gray-700">
        <div className="animate-pulse">
          <div className="flex items-center justify-between">
            <div className="h-6 bg-gray-700 rounded w-1/2"></div>
            <div className="h-5 bg-gray-700 rounded w-16"></div>
          </div>
          <div className="h-4 bg-gray-700 rounded w-3/4 mt-2"></div>
        </div>
      </div>

      <div className="bg-gray-900 p-4">
        <div className="animate-pulse">
          <div className="h-24 bg-gray-700 rounded"></div>
        </div>
      </div>

      <div className="p-3 bg-gray-800 flex items-center justify-between">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-700 rounded w-32"></div>
        </div>
      </div>
    </div>
  );
}
