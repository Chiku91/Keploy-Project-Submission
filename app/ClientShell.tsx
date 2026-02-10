"use client";

import { ReactNode, useEffect, useState } from "react";
import Header from "@/components/Header";
import LeftSidebar from "@/components/LeftSidebar";
import RightTOC from "@/components/RightTOC";
import Footer from "@/components/Footer";

export default function ClientShell({
  children,
}: {
  children: ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  // Apply theme to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <Header />

      {/* 🌗 FIXED THEME TOGGLE (GLOBAL, CLICKABLE) */}
      <button
        onClick={() => setIsDark((prev) => !prev)}
        aria-label="Toggle theme"
        className="fixed right-6 top-20 z-[9999] flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-lg shadow-md transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
      >
        {isDark ? "🌙" : "☀️"}
      </button>

      <div className="mx-auto max-w-[1600px] px-4">
        <div className="grid grid-cols-[260px_1fr_240px] gap-8">
          
          {/* Left Sidebar */}
          <aside className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto border-r border-zinc-200 dark:border-zinc-800">
            <LeftSidebar />
          </aside>

          {/* Main Content */}
          <main className="py-12 min-w-0 pb-32">
            <div className="max-w-3xl">{children}</div>
          </main>

          {/* Right TOC */}
          <aside className="hidden xl:block">
            <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
              <RightTOC />
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </>
  );
}
