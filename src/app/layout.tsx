import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import Logo from "@/components/Logo";
import MainNav from "@/components/MainNav";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "InfoLAW – Legal Reasoning for AI, Paid in IPN",
  description:
    "InfoLAW.net is a curated, machine-readable library of legal reasoning authored by jurists, paid in IPN on the IPPAN network."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <div className="min-h-screen flex flex-col">
          <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
              <Logo />
              <MainNav />
              <div className="flex items-center gap-3 md:hidden">
                <details className="relative">
                  <summary className="list-none rounded-full border border-slate-200 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-slate-700">
                    Menu
                  </summary>
                  <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-100 bg-white p-4 shadow-xl">
                    {[
                      { href: "/", label: "Home" },
                      { href: "/for-jurists", label: "For Jurists" },
                      { href: "/for-ai-teams", label: "For AI Teams" },
                      { href: "/about", label: "About" },
                      { href: "/contact", label: "Contact" }
                    ].map((link) => (
                      <Link key={link.href} href={link.href} className="block py-1 text-sm text-slate-700">
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </details>
                <Link
                  href="/contact"
                  className="rounded-full border border-slate-900 px-3 py-2 text-xs font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
                >
                  Access
                </Link>
              </div>
              <Link
                href="/contact"
                className="hidden rounded-full border border-slate-900 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white md:inline-block"
              >
                Request Access
              </Link>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:justify-between">
              <div>
                <p className="font-heading text-xl text-slate-900">InfoLAW.net</p>
                <p className="mt-2 max-w-md text-sm text-slate-600">
                  Structured legal reasoning authored by jurists, powered by the IPPAN network and IPN settlements. Future HashTimer anchoring keeps provenance intact.
                </p>
              </div>
              <div className="flex gap-10 text-sm text-slate-600">
                <div>
                  <p className="font-semibold text-slate-800">Network</p>
                  <ul className="mt-2 space-y-2">
                    <li>IPPAN + IPN</li>
                    <li>HashTimer provenance</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Legal</p>
                  <ul className="mt-2 space-y-2">
                    <li>
                      <Link href="#" className="hover:text-brand">
                        Terms of Use
                      </Link>
                    </li>
                    <li>
                      <Link href="#" className="hover:text-brand">
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
