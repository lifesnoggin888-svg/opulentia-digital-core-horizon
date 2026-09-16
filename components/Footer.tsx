import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-panel">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 flex flex-wrap items-center gap-3 border-b border-border pb-8">
          <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden className="shrink-0">
            <polygon
              points="14,1 26,7.5 26,20.5 14,27 2,20.5 2,7.5"
              fill="none"
              stroke="var(--color-amber)"
              strokeWidth="1.5"
            />
            <polygon points="14,7 20,10.5 20,17.5 14,21 8,17.5 8,10.5" fill="var(--color-amber)" opacity="0.85" />
          </svg>
          <span className="op-mono text-[10px] tracking-[0.2em] text-text-dim">
            AETHERGRID · A FLAGSHIP SYSTEM OF OPULENTIA DIGITAL CORE HORIZON
          </span>
          <span className="op-status-dot op-status-dot--review ml-auto" aria-hidden />
          <span className="op-mono text-[10px] tracking-[0.15em] text-amber">
            SIMULATION STAGE — PRE-SEED
          </span>
        </div>
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-sm tracking-wide text-text">
              OPULENTIA <span className="text-amber">DIGITAL</span>
            </p>
            <p className="mt-1 font-mono text-xs text-text-dim">CORE HORIZON</p>
            <p className="mt-3 font-mono text-xs text-text-dim">Registration RC-9802444</p>
            {/* Placeholder social links — point to "#" until real profiles exist. */}
            <div className="mt-4 flex items-center gap-4">
              <a href="#" aria-label="X (Twitter)" className="text-text-dim hover:text-amber">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-text-dim hover:text-amber">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-text-dim hover:text-amber">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.9 5.9 0 0 0-2.13 1.39A5.9 5.9 0 0 0 .62 4.15c-.3.76-.5 1.63-.56 2.9C0 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91a5.9 5.9 0 0 0 1.39 2.13 5.9 5.9 0 0 0 2.12 1.38c.76.3 1.63.5 2.91.56C8.33 24 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.39 5.9 5.9 0 0 0 1.38-2.12c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.39-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-text-dim">COMPANY</p>
            <ul className="space-y-2 text-sm text-text-dim">
              <li><Link href="/about" className="hover:text-amber">About</Link></li>
              <li><Link href="/careers" className="hover:text-amber">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-amber">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-text-dim">PLATFORM</p>
            <ul className="space-y-2 text-sm text-text-dim">
              <li><Link href="/services" className="hover:text-amber">Solutions</Link></li>
              <li><Link href="/blog" className="hover:text-amber">Insights</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold tracking-wide text-text-dim">INTELLIGENCE</p>
            <ul className="space-y-2 text-sm text-text-dim">
              <li><Link href="/news" className="hover:text-amber">Tech News Hub</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 font-mono text-xs text-text-dim">
          © {new Date().getFullYear()} Opulentia Digital Core Horizon (RC-9802444). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
