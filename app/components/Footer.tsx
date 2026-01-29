import Link from "next/link";

const FOOTER_LINKS = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact Us", href: "/contact" },
  { label: "Track Order", href: "/track" },
  { label: "Terms of Service", href: "/terms" },
] as const;

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center py-12 text-center">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-white" />
            <span className="text-lg font-semibold">Brand Name</span>
          </div>

          <p className="mt-3 max-w-md text-sm sm:text-lg leading-6 text-[#008F82]">
            Shop internationally, receive your items in Nigeria. Simply, safely,
            and transparently.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full border border-[#008F82] px-6 py-3 text-sm font-medium text-[#008F82] transition hover:bg-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full py-2">
        <div className="h-[0.5px] w-full bg-[#008F82]" />

        <div className="py-4 text-center text-sm text-[#008F82]">
          © 2025 YourPlatformName. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
