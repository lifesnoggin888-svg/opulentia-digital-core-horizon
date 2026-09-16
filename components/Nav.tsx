import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Solutions" },
  { href: "/news", label: "News Hub" },
  { href: "/blog", label: "Insights" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(154,130,190,0.22)] bg-obsidian/55 backdrop-blur-xl backdrop-saturate-150 shadow-[0_1px_0_0_rgba(255,255,255,0.05)_inset]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-mark.png"
            alt="Opulentia Digital Core Horizon"
            width={738}
            height={583}
            className="h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(155,92,246,0.45)]"
            priority
          />
          <span className="hidden font-display text-sm font-semibold tracking-wide text-text sm:block">
            OPULENTIA <span className="text-amber">DIGITAL</span>
          </span>
        </Link>
        <nav className="hidden gap-7 font-body text-sm text-text-dim md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-amber">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-[2px] bg-amber px-4 py-2 font-mono text-xs font-semibold tracking-wide text-obsidian transition hover:bg-amber-dim"
        >
          ACCESS CORE
        </Link>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-border px-6 py-2 font-body text-xs text-text-dim md:hidden">
        {links.map((l) => (
          <Link key={l.href} href={l.href} className="whitespace-nowrap hover:text-amber">
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
