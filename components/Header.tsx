"use client";

import Link from "next/link";
import { useState } from "react";

const SECTION_MAP: Record<string, string> = {
  integration: "integration-testing",
  api: "api-testing",
  unit: "unit-testing",
  install: "installation",
  quickstart: "go-quickstart",
  cli: "cli-commands",
  config: "configuration",
};

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    const value = query.toLowerCase();
    const match = Object.keys(SECTION_MAP).find((key) =>
      value.includes(key)
    );

    if (match) {
      const id = SECTION_MAP[match];
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-6">
        
        {/* Left */}
        <div className="flex items-center gap-6">
          {/* Logo + Title (ONLY CHANGE HERE) */}
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold text-zinc-900 dark:text-white"
          >
            {/* Black triangle logo */}
            <span className="inline-block h-3 w-3 rotate-45 bg-black dark:bg-white" />
            Keploy
          </Link>

          <nav className="hidden items-center gap-5 text-sm font-medium text-zinc-700 dark:text-zinc-300 md:flex">
            <Link href="/" className="hover:text-zinc-900 dark:hover:text-white">
              Docs
            </Link>

            {/* Products */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("products")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white">
                Products ▾
              </button>

              {openMenu === "products" && (
                <div className="absolute left-0 top-8 w-56 rounded-lg border border-zinc-200 bg-white p-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                  <a
                    href="https://keploy.io/docs"
                    target="_blank"
                    className="block rounded-md px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    Integration Testing
                  </a>
                  <a
                    href="https://keploy.io"
                    target="_blank"
                    className="block rounded-md px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    AI Testing
                  </a>
                </div>
              )}
            </div>

            {/* Solutions */}
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu("solutions")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-zinc-900 dark:hover:text-white">
                Solutions ▾
              </button>

              {openMenu === "solutions" && (
                <div className="absolute left-0 top-8 w-64 rounded-lg border border-zinc-200 bg-white p-2 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
                  <a
                    href="https://keploy.io"
                    target="_blank"
                    className="block rounded-md px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    Code Clarity
                  </a>
                  <a
                    href="https://keploy.io"
                    target="_blank"
                    className="block rounded-md px-3 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    Developer Productivity
                  </a>
                </div>
              )}
            </div>

            <a
              href="https://keploy.io/blog"
              target="_blank"
              className="hover:text-zinc-900 dark:hover:text-white"
            >
              Blog
            </a>

            <a
              href="https://github.com/keploy/keploy"
              target="_blank"
              className="hover:text-zinc-900 dark:hover:text-white"
            >
              GitHub
            </a>
          </nav>
        </div>

        {/* Right: SEARCH (UNCHANGED) */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search docs…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleSearch}
            className="w-48 rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm text-zinc-700 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          />
        </div>
      </div>
    </header>
  );
}
