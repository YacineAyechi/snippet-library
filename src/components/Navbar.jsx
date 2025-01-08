"use client";

import { Moon, Sun, LogOut } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, signOut } = useAuth();
  const username = user?.user_metadata?.username || user?.email;

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.href = "/login";
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="flex items-center justify-between px-4 mt-4">
      <div className="flex-1" />
      <div className="flex items-center gap-6 dark:bg-gray-800 bg-gray-200 px-2 py-2 rounded-full border-2 dark:border-gray-500 border-gray-300">
        <Link
          href="/"
          className="transition-all duration-300 dark:hover:bg-gray-600 hover:bg-gray-300 rounded-full p-1.5 px-4 dark:text-gray-300 text-gray-600 dark:hover:text-gray-100 hover:text-gray-900"
        >
          Home
        </Link>
        <Link
          href="/add-snippet"
          className="transition-all duration-300 dark:hover:bg-gray-600 hover:bg-gray-300 rounded-full p-1.5 px-4 dark:text-gray-300 text-gray-600 dark:hover:text-gray-100 hover:text-gray-900"
        >
          Add Snippet
        </Link>

        <button
          onClick={toggleTheme}
          className="dark:bg-gray-600 bg-gray-300 rounded-full p-1.5 cursor-pointer dark:text-gray-300 text-gray-600 dark:hover:text-gray-100 hover:text-gray-900"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      <div className="flex-1 flex justify-end">
        {user && (
          <span className="transition-all duration-300 rounded-full p-1.5 px-4 dark:text-gray-300 text-gray-600">
            Hello, {username}
          </span>
        )}
        {user && (
          <button
            onClick={handleSignOut}
            title="Sign out"
            className="transition-all duration-300 dark:hover:bg-gray-600 hover:bg-gray-300 rounded-full p-1.5 px-4 dark:text-gray-300 text-gray-600 dark:hover:text-gray-100 hover:text-gray-900 flex items-center gap-2"
          >
            <LogOut size={20} />
            <span className="hidden sm:inline">Sign out</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
