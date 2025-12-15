import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "InfoLAW – Legal Reasoning for AI, Paid in IPN",
  description:
    "InfoLAW.net is a curated, machine-readable library of legal reasoning authored by jurists, paid in IPN on the IPPAN network.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <div className="min-h-screen flex flex-col">
          {/* Top navigation */}
          <header className="border-b border-slate-800 bg-slate-950/95 text-slate-50 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
              <Link href="/" className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-sky-500 text-xs font-semibold text-slate-950">
                  IL
                </span>
                <span className="text-lg font-semibold tracking-tight">
                  InfoLAW
                </span>
              </Link>

              <nav className="flex items-center gap-4 overflow-x-auto text-sm font-medium text-slate-100 md:gap-6">
                <Link href="/" className="whitespace-nowrap hover:text-sky-200">
                  Home
                </Link>
                <Link href="/for-jurists" className="whitespace-nowrap hover:text-sky-200">
                  For Jurists
                </Link>
                <Link href="/for-ai-teams" className="whitespace-nowrap hover:text-sky-200">
                  For AI Teams
                </Link>
                <Link href="/articles/legal-reasoning-ai-law" className="whitespace-nowrap hover:text-sky-200">
                  Articles
                </Link>
                <Link href="/about" className="whitespace-nowrap hover:text-sky-200">
                  About
                </Link>
                <Link
                  href="/contact"
                  className="whitespace-nowrap rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold text-slate-950 hover:bg-sky-400"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </header>

          {/* Page content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer */}
          <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-6">
              <div>
                <p className="font-semibold text-slate-800">InfoLAW.net</p>
                <p className="text-xs text-slate-500">
                  Structured legal reasoning authored by jurists, powered by the IPPAN
                  network and IPN settlements.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <div className="space-x-3">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Network
                  </span>
                  <span className="text-xs text-slate-600">IPPAN + IPN</span>
                  <span className="text-xs text-slate-600">
                    HashTimer provenance
                  </span>
                </div>
                <div className="space-x-3 text-xs">
                  <Link href="#" className="text-slate-500 hover:text-slate-800">
                    Terms of Use
                  </Link>
                  <Link href="#" className="text-slate-500 hover:text-slate-800">
                    Privacy Policy
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
