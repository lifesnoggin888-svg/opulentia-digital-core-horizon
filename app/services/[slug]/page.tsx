import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/products";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return { title: product ? `${product.name} — Opulentia Digital Core Horizon` : "Not found" };
}

export default async function ProductPage({ params }: { params: Params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <Link href="/services" className="text-xs font-semibold tracking-wide text-amber hover:underline">
        ← All Solutions
      </Link>

      <div className="op-reveal op-reveal-1 mt-6 flex items-center gap-4">
        <span className="op-badge text-2xl">{product.icon}</span>
        <div>
          <h1 className="font-display text-4xl text-text sm:text-5xl">{product.name}</h1>
          <p className="mt-1 text-base text-text-dim">{product.tagline}</p>
        </div>
      </div>

      <p className="op-reveal op-reveal-2 mt-10 text-base leading-relaxed text-text-dim">
        {product.description}
      </p>

      <div className="op-reveal op-reveal-3 op-card mt-12 p-8">
        <h2 className="font-display text-lg text-text">Capabilities</h2>
        <ul className="mt-4 space-y-3">
          {product.capabilities.map((c) => (
            <li key={c} className="flex items-start gap-3 text-sm text-text-dim">
              <span className="mt-1 text-amber">›</span>
              {c}
            </li>
          ))}
        </ul>
      </div>

      <div className="op-reveal op-reveal-4 mt-14 flex flex-wrap gap-4">
        <Link href="/contact" className="op-btn-ripple rounded-sm bg-amber px-8 py-3 text-sm font-semibold tracking-wide text-obsidian transition hover:bg-amber-dim">
          Talk to the Team
        </Link>
        {product.liveUrl && (
          <a
            href={product.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-sm border border-border px-8 py-3 text-sm font-semibold tracking-wide text-text transition hover:border-amber hover:text-amber"
          >
            {product.slug === "aethergrid" ? "View Live Coordination Demo" : "Open Live App"} &rarr;
          </a>
        )}
      </div>
      {product.liveNote && (
        <p className="mt-3 text-xs text-text-dim">{product.liveNote}</p>
      )}
    </main>
  );
}
