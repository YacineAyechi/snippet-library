"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Code2,
  Search,
  Shield,
  ArrowRight,
  Github,
  Mail,
  Terminal,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-card-border">
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500/10 p-2 rounded-lg">
                <Terminal className="text-blue-500" size={24} />
              </div>
              <Link href="/" className="text-xl font-bold text-primary">
                CodeSnip
              </Link>
            </div>
            <div className="flex items-center gap-6">
              <Link
                href="/login"
                className="text-secondary hover:text-primary transition-all hover:scale-105"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                className="bg-blue-600/90 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center relative"
        >
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />

          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-500 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              Modern Code Snippet Manager
            </span>

            <h1 className="text-4xl sm:text-6xl font-bold text-primary mb-6 tracking-tight">
              Store Your Code Snippets
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Beautifully
              </span>
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
              A modern way to save, organize, and share your code snippets with
              syntax highlighting and powerful search capabilities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex gap-4 justify-center"
          >
            <Link
              href="/register"
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/20"
            >
              Get Started <ArrowRight size={20} />
            </Link>
            <Link
              href="/login"
              className="border border-card-border hover:border-hover-border px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
            >
              Sign In
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group snippet-card p-8 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
          >
            <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code2 className="text-blue-500" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Syntax Highlighting
            </h3>
            <p className="text-secondary leading-relaxed">
              Support for over 12 programming languages with beautiful syntax
              highlighting.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group snippet-card p-8 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
          >
            <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Search className="text-blue-500" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Smart Search
            </h3>
            <p className="text-secondary leading-relaxed">
              Quickly find your snippets with powerful search and filtering
              options.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="group snippet-card p-8 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
          >
            <div className="bg-blue-500/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Shield className="text-blue-500" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-primary mb-3">
              Secure Storage
            </h3>
            <p className="text-secondary leading-relaxed">
              Your code snippets are securely stored and accessible only to you.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-32 relative"
        >
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full h-80 bg-gradient-to-b from-blue-500/5 to-transparent blur-3xl -z-10" />
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Beautiful Interface
            </h2>
            <p className="text-secondary max-w-2xl mx-auto">
              A clean and intuitive interface that makes managing your code
              snippets a breeze.
            </p>
          </div>
          <div className="snippet-card overflow-hidden shadow-2xl">
            <Image
              src="/preview.png"
              width={3000}
              height={3000}
              alt="Image"
              className="w-full rounded-lg transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>

      <footer className="mt-32 border-t border-card-border relative">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <Terminal className="text-blue-500" size={20} />
                </div>
                <h3 className="text-lg font-semibold text-primary">CodeSnip</h3>
              </div>
              <p className="text-secondary leading-relaxed">
                A modern code snippet manager built with Next.js and Supabase.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/register"
                    className="text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    Get Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/login"
                    className="text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">Connect</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="https://github.com/yourusername/codesnip"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <Github
                      size={16}
                      className="group-hover:scale-110 transition-transform"
                    />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:support@codesnip.com"
                    className="text-secondary hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <Mail
                      size={16}
                      className="group-hover:scale-110 transition-transform"
                    />
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-card-border mt-12 pt-8 text-center text-secondary">
            <p>
              © {new Date().getFullYear()} CodeSnip. All rights reserved. Made
              with Love by{" "}
              <a href="https://www.yacineayachi.tn" target="_blank">
                Yacine Ayachi
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
