import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";

export const metadata = {
  title: "CodeSnip - Modern Code Snippet Manager",
  description:
    "A modern way to save, organize, and share your code snippets with syntax highlighting and powerful search capabilities.",
  keywords: [
    "code snippets",
    "programming",
    "developer tools",
    "syntax highlighting",
  ],
  authors: [{ name: "Yacine Ayachi" }],
  creator: "Yacine Ayachi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
