"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
  {
    title: "Getting Started",
    items: [
      { label: "Integration Testing", href: "#integration-testing" },
      { label: "How Keploy Works", href: "#how-keploy-works" },
      { label: "API Testing", href: "#api-testing" },
      { label: "Unit Testing", href: "#unit-testing" },
    ],
  },
  {
    title: "Setup",
    items: [
      { label: "Installation", href: "#installation" },
      { label: "Go Quickstart", href: "#go-quickstart" },
    ],
  },
  {
    title: "Reference",
    items: [
      { label: "CLI Commands", href: "#cli-commands" },
      { label: "Configuration", href: "#configuration" },
    ],
  },
];

export default function LeftSidebar() {
  const pathname = usePathname();

  return (
    <nav className="px-2 py-6 text-sm">
      {sections.map((section) => (
        <div key={section.title} className="mb-6">
          {/* Section Title */}
          <h4 className="mb-2 px-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
            {section.title}
          </h4>

          {/* Section Links */}
          <ul className="space-y-1">
            {section.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-md px-2 py-1.5 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
