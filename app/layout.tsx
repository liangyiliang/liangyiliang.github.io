import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yiliang Liang",
  description:
    "PhD student in Software Engineering at Carnegie Mellon University.",
  openGraph: {
    title: "Yiliang Liang",
    description:
      "PhD student in Software Engineering at Carnegie Mellon University.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-[--border] py-6 mt-12">
            <div className="max-w-3xl mx-auto px-6 text-center text-sm text-[--fg-muted]">
              © {new Date().getFullYear()} Yiliang Liang · Built with Next.js
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
