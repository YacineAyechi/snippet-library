"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await signIn(email, password);

      if (error) throw error;
      if (data?.session) {
        router.push("/");
      } else {
        console.log("No session in response");
      }
    } catch (error) {
      console.log("Error during sign in:", error);
      setError(error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 snippet-card">
      <h1 className="text-2xl font-bold text-primary mb-6">Login</h1>
      {error && (
        <div className="bg-red-500/10 text-red-500 p-3 rounded-lg mb-4">
          {error}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-secondary mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <div>
          <label className="block text-secondary mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Login
        </button>

        <p className="text-center text-secondary mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:text-blue-400">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}
