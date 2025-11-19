import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/for-jurists", label: "For Jurists" },
  { href: "/for-ai-teams", label: "For AI Teams" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export default function MainNav() {
  return (
    <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-slate-700 hover:text-brand transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
