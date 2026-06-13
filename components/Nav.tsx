"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/", label: "About" },
  { href: "/publications", label: "Publications" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[--bg]/80 backdrop-blur-sm border-b border-[--border]">
      <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-[--fg] hover:opacity-70 transition-opacity"
        >
          Yiliang Liang
        </Link>
        <div className="flex items-center gap-1">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  active
                    ? "text-[--fg] bg-[--surface]"
                    : "text-[--fg-muted] hover:text-[--fg] hover:bg-[--surface]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
