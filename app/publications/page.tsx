"use client";

import { useState } from "react";
import { publications, type Publication } from "@/data/publications";

const SELF = "Yiliang Liang";

const typeColors: Record<Publication["type"], string> = {
  Conference:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  Workshop:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  Journal:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  Preprint: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400",
};

export default function PublicationsPage() {
  const sorted = [...publications].sort((a, b) => b.year - a.year);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-bold text-[--fg] mb-8">Publications</h1>
      <ul className="space-y-8">
        {sorted.map((pub) => (
          <PaperCard key={pub.id} pub={pub} />
        ))}
      </ul>
    </div>
  );
}

function PaperCard({ pub }: { pub: Publication }) {
  const [showAbstract, setShowAbstract] = useState(false);
  const [showBibtex, setShowBibtex] = useState(false);

  return (
    <li className="group border border-[--border] rounded-lg p-5 bg-[--surface] hover:border-[--accent]/40 transition-colors">
      {/* Title */}
      <h3 className="font-semibold text-[--fg] leading-snug">
        {pub.links?.arxiv || pub.links?.pdf ? (
          <a
            href={pub.links.arxiv ?? pub.links.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </h3>

      {/* Authors */}
      <p className="mt-1.5 text-sm text-[--fg-muted]">
        {pub.authors.map((author, i) => (
          <span key={i}>
            {i > 0 && ", "}
            {author === SELF ? (
              <span className="font-semibold text-[--fg]">{author}</span>
            ) : (
              author
            )}
          </span>
        ))}
      </p>

      {/* Venue + year + type badge */}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="text-sm text-[--fg-muted]">
          <span className="font-medium">{pub.venue}</span> {pub.year}
        </span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-medium ${typeColors[pub.type]}`}
        >
          {pub.type}
        </span>
      </div>

      {/* Link badges */}
      <div className="mt-3 flex flex-wrap gap-2">
        {pub.links?.pdf && <LinkBadge href={pub.links.pdf} label="PDF" />}
        {pub.links?.arxiv && <LinkBadge href={pub.links.arxiv} label="arXiv" />}
        {pub.links?.code && <LinkBadge href={pub.links.code} label="Code" />}
        {pub.links?.project && (
          <LinkBadge href={pub.links.project} label="Project" />
        )}
        {pub.abstract && (
          <button
            onClick={() => {
              setShowAbstract((v) => !v);
              if (showBibtex) setShowBibtex(false);
            }}
            className="text-xs px-2.5 py-1 rounded border border-[--border] text-[--fg-muted] hover:text-[--fg] hover:border-[--fg-muted] transition-colors"
          >
            {showAbstract ? "Hide Abstract" : "Abstract"}
          </button>
        )}
        {pub.bibtex && (
          <button
            onClick={() => {
              setShowBibtex((v) => !v);
              if (showAbstract) setShowAbstract(false);
            }}
            className="text-xs px-2.5 py-1 rounded border border-[--border] text-[--fg-muted] hover:text-[--fg] hover:border-[--fg-muted] transition-colors"
          >
            {showBibtex ? "Hide BibTeX" : "BibTeX"}
          </button>
        )}
      </div>

      {/* Expandable: Abstract */}
      {showAbstract && pub.abstract && (
        <p className="mt-3 text-sm text-[--fg-muted] leading-relaxed border-t border-[--border] pt-3">
          {pub.abstract}
        </p>
      )}

      {/* Expandable: BibTeX */}
      {showBibtex && pub.bibtex && (
        <pre className="mt-3 text-xs text-[--fg-muted] bg-[--bg] border border-[--border] rounded p-3 overflow-x-auto font-mono leading-relaxed border-t-0">
          {pub.bibtex}
        </pre>
      )}
    </li>
  );
}

function LinkBadge({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs px-2.5 py-1 rounded border border-[--border] text-accent hover:bg-[--accent] hover:text-white hover:border-[--accent] transition-colors"
    >
      {label}
    </a>
  );
}
