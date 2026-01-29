import Link from "next/link";

const NAV_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "FAQs", href: "#faqs" },
  { label: "Support", href: "#support" },
] as const;

export default function Navbar() {
  return (
    <header className="w-full">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="h-8 w-8 rounded-full bg-primary" />
          <span className="text-lg font-semibold text-secondary">
            Brand Name
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-gray-500 transition-colors hover:text-secondary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center">
          <Link
            href="#get-started"
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:bg-primary/85"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
