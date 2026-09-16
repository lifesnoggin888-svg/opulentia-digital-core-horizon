import type { Metadata } from "next";
import Link from "next/link";
import ProductBlock from "@/components/ProductBlock";
import { products, getProduct } from "@/lib/products";

export const metadata: Metadata = { title: "Solutions — Opulentia Digital Core Horizon" };

export default function ServicesPage() {
  const aethergrid = getProduct("aethergrid")!;
  const agentproof = getProduct("agentproof")!;
  const supportingModules = products.filter(
    (p) => p.slug !== "aethergrid" && p.slug !== "agentproof"
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="op-reveal op-reveal-1 text-xs font-semibold tracking-[0.3em] text-amber">SOLUTIONS</p>
      <h1 className="op-reveal op-reveal-2 mt-3 font-display text-4xl text-text sm:text-5xl">
        Two products, one core platform
      </h1>
      <p className="op-reveal op-reveal-3 mt-6 max-w-2xl text-base text-text-dim">
        AetherGrid, our flagship platform for African distributed-energy coordination, and
        AgentProof, our AI-agent assurance product, both run on the same core technology
        stack — AI orchestration, analytics, cloud infrastructure, and digital trust — each
        also available as its own module.
      </p>

      <div className="op-reveal op-reveal-4 mt-16 grid gap-6 lg:grid-cols-2">
        <ProductBlock product={aethergrid} eyebrow="FLAGSHIP PLATFORM" index="PRODUCT_01" />
        <ProductBlock product={agentproof} eyebrow="SECOND PRODUCT" index="PRODUCT_02" />
      </div>

      <div className="mt-16">
        <p className="op-mono mb-6 text-xs font-semibold tracking-[0.25em] text-amber">
          SUPPORTING PLATFORM MODULES
        </p>
        <div className="space-y-6">
          {supportingModules.map((p) => (
            <Link
              key={p.slug}
              href={`/services/${p.slug}`}
              className="op-card group flex flex-col justify-between gap-4 p-8 sm:flex-row sm:items-center"
            >
              <div className="flex items-start gap-5">
                <span className="op-badge text-xl">{p.icon}</span>
                <div>
                  <h2 className="font-display text-xl text-text">{p.name}</h2>
                  <p className="mt-1 text-sm text-text-dim">{p.tagline}</p>
                </div>
              </div>
              <span className="text-sm font-semibold tracking-wide text-amber group-hover:underline">
                Explore Details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
