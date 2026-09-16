import Link from "next/link";
import type { Product } from "@/lib/products";

/**
 * Full-depth, single-product narrative block: eyebrow, mechanism paragraph,
 * italic honest-status line, monospace technical-detail line, and a CTA.
 * Used to give both AetherGrid and AgentProof equal illustrative weight on
 * the homepage, rather than a small card in a grid.
 */
export default function ProductBlock({
  product,
  eyebrow,
  index,
}: {
  product: Product;
  eyebrow: string;
  index: string;
}) {
  return (
    <div className="op-reveal op-card op-hud-frame p-8 sm:p-10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="op-badge shrink-0">{product.icon}</span>
          <div>
            <p className="op-mono text-[10px] font-semibold tracking-[0.25em] text-amber">
              {eyebrow}
            </p>
            <h3 className="mt-1 font-display text-2xl text-text sm:text-3xl">{product.name}</h3>
          </div>
        </div>
        <span className="op-mono hidden shrink-0 text-[10px] text-bronze sm:block">{index}</span>
      </div>

      <p className="mt-2 text-sm text-text-dim">{product.tagline}</p>

      {product.mechanism && (
        <p className="mt-6 text-base leading-relaxed text-text-dim">{product.mechanism}</p>
      )}

      {product.buildStatus && (
        <p className="mt-5 text-sm italic leading-relaxed text-text-dim/90">{product.buildStatus}</p>
      )}

      {product.signalLine && (
        <p className="op-mono mt-4 rounded-[2px] border border-border bg-obsidian/40 px-4 py-3 text-[11px] leading-relaxed text-signal">
          {product.signalLine}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href={`/services/${product.slug}`}
          className="op-btn-ripple rounded-[2px] bg-amber px-6 py-3 text-sm font-semibold tracking-wide text-obsidian transition hover:bg-amber-dim"
        >
          {product.ctaLabel ?? `Explore ${product.name} →`}
        </Link>
        {product.liveUrl && (
          <a
            href={product.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[2px] border border-text-dim/40 px-6 py-3 text-sm font-semibold tracking-wide text-text transition hover:border-amber hover:text-amber"
          >
            View Live
          </a>
        )}
      </div>
      {product.liveNote && <p className="mt-3 text-xs text-text-dim">{product.liveNote}</p>}
    </div>
  );
}
