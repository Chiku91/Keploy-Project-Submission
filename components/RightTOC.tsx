"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "integration-testing", label: "Integration Testing" },
  { id: "how-keploy-works", label: "How Keploy Works" },
  { id: "api-testing", label: "API Testing" },
  { id: "unit-testing", label: "Unit Testing" },
  { id: "installation", label: "Installation" },
  { id: "go-quickstart", label: "Go Quickstart" },
  { id: "cli-commands", label: "CLI Commands" },
  { id: "configuration", label: "Configuration" },
];

export default function RightTOC() {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="text-sm">
      <h4 className="mb-4 font-semibold text-zinc-900 dark:text-zinc-100">
        On this page
      </h4>

      <ul className="space-y-2 border-l border-zinc-200 pl-4 dark:border-zinc-800">
        {SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`block transition-colors ${
                activeId === section.id
                  ? "toc-active"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
