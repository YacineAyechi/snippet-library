# CodeSnip - Modern Code Snippet Manager

CodeSnip is a sleek web application for managing and sharing code snippets. Built with Next.js and Supabase, it offers a modern interface with dark/light theme support and real-time syntax highlighting.

## ✨ Features

- 📝 Create, view, and manage code snippets
- 🎨 Beautiful syntax highlighting for multiple languages
- 🌓 Dark/Light theme with system preference support
- 🔍 Search snippets by title, description, or code
- 🏷️ Filter snippets by programming language
- 📋 One-click code copying
- 💨 Responsive design for all devices
- ⚡ Fast and modern UI built with Next.js 15

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19
- **Backend**: Supabase
- **Styling**: TailwindCSS
- **Syntax Highlighting**: Prism.js
- **Icons**: Lucide React

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm
- Supabase account

### Installation

1. Clone the repository
2. Run `npm install` to install the dependencies
3. Run `npm run dev` to start the development server
4. Create a `.env` file in the root directory:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Start the development server
   bash
   npm run dev

6. Open [http://localhost:3000](http://localhost:3000) with your browser

### Database Setup

Create the following table in your Supabase database:

```
create table snippets (
id uuid default uuid_generate_v4() primary key,
title text not null,
description text,
language text not null,
code text not null,
created_at timestamp with time zone default timezone('utc'::text, now()) not null
);
```

### Supported Languages

- JavaScript
- Python
- Java

## 🎯 Core Features

### Home Page

- Grid layout of code snippets
- Real-time search functionality
- Language filtering
- Skeleton loading states

### Add Snippet

- Form for creating new snippets
- Live preview with syntax highlighting
- Multiple language support

### Theme Support

- Dark/Light mode toggle
- Persistent theme preference

## 🎨 Styling

The application uses a custom theme system with CSS variables for consistent styling across light and dark modes:

- Responsive design with Tailwind CSS
- Custom color schemes for light/dark modes
- Smooth transitions between themes
- Consistent component styling

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Supabase](https://supabase.com/) for the backend infrastructure
- [TailwindCSS](https://tailwindcss.com/) for the styling system
- [Prism.js](https://prismjs.com/) for code syntax highlighting

## 📸 Screenshots

[Add your application screenshots here]

---

Made with ❤️ by Yacine Ayachi
