"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-4 mx-auto mt-4">
      <div className="flex items-center gap-6 mx-auto dark:bg-gray-800 bg-gray-200 px-2 py-2 rounded-full border-2 dark:border-gray-500 border-gray-300">
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
    </div>
  );
};

export default Navbar;
