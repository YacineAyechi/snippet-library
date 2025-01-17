"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initializeAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (_event, session) => {
        setUser(session?.user ?? null);
      });

      return () => {
        subscription?.unsubscribe();
      };
    };

    initializeAuth();
  }, []);

  const signUp = async (email, password, username) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username,
        },
      },
    });
    return { data, error };
  };

  const signIn = async (email, password) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        return { data: null, error: error };
      }

      if (data?.session) {
        await supabase.auth.setSession(data.session);

        document.cookie = `sb-access-token=${
          data.session.access_token
        }; path=/; max-age=${60 * 60 * 24 * 7}`;

        await new Promise((resolve) => setTimeout(resolve, 500));

        window.location.href = "/snippets";
        return { data, error: null };
      }

      return { data: null, error: new Error("No session in response") };
    } catch (error) {
      console.error("Sign in error:", error);
      return { data: null, error };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      document.cookie =
        "sb-access-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      window.localStorage.removeItem("sb-access-token");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error during sign out:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
