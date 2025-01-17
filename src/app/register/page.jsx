"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, Terminal, User } from "lucide-react";

export default function Register() {
  const router = useRouter();
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await signUp(email, password, username);
      if (error) throw error;
      router.push("/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-md w-full mx-auto p-6 snippet-card">
        <div className="flex items-center justify-center mx-auto gap-2 mb-4">
          <div className="bg-blue-500/10 p-2 rounded-lg">
            <Terminal className="text-blue-500" size={24} />
          </div>
          <Link href="/" className="text-xl font-bold text-primary">
            CodeSnip
          </Link>
        </div>
        <h1 className="text-2xl font-bold text-primary mb-6">Register</h1>
        {error && (
          <div className="bg-red-500/10 text-red-500 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-secondary mb-2">Username</label>

            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <User size={20} />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field pl-10"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-secondary mb-2">Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <Mail size={20} />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field pl-10"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-secondary mb-2">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <Lock size={20} />
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field pl-10"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Register
          </button>
          <p className="text-center text-secondary mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:text-blue-400">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
