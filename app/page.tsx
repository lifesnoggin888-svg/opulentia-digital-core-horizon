import Image from "next/image";
import Link from "next/link";
import NewsTicker from "@/components/NewsTicker";
import CoordinationConsole from "@/components/CoordinationConsole";
import { products } from "@/lib/products";
import { fetchTechNews } from "@/lib/news";

export default async function Home() {
  const news = await fetchTechNews(4);

  return (
    <main>
      <NewsTicker />

      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden bg-obsidian">
        {/* Cinematic poster render of the Opulentia crystal emblem — full-bleed,
            darkened and gradient-overlaid so headline copy stays legible at
            every viewport, never an image "slapped behind" existing text. */}
        <Image
          src="/hero-poster.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-70 [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_92%)] sm:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/55 via-obsidian/55 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 520px at 50% 38%, rgba(155,92,246,0.16), transparent)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-6 pt-16 pb-10 text-center sm:pt-24">
          <p className="op-reveal op-reveal-1 op-mono mb-4 text-xs font-semibold tracking-[0.3em] text-amber">
            RC-9802444 · CORE HORIZON
          </p>
          <h1 className="op-reveal op-reveal-2 font-display text-4xl leading-tight tracking-tight text-text drop-shadow-[0_4px_28px_rgba(10,7,18,0.85)] sm:text-5xl md:text-6xl">
            The intelligent coordination layer for
            <br />
            Africa&apos;s distributed-energy infrastructure
          </h1>
          <p className="op-reveal op-reveal-3 mx-auto mt-6 max-w-xl text-base text-text-dim drop-shadow-[0_2px_12px_rgba(10,7,18,0.9)]">
            <span className="text-text">AetherGrid</span>, our flagship platform, coordinates
            solar, battery, mini-grid, and hybrid-energy assets through forecasting,
            optimization, autonomous coordination, and governed human override.
          </p>
          <div className="op-reveal op-reveal-4 mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services/aethergrid"
              className="op-btn-ripple rounded-[2px] bg-amber px-8 py-3 text-sm font-semibold tracking-wide text-obsidian transition hover:bg-amber-dim"
            >
              EXPLORE AETHERGRID
            </Link>
            <a
              href="https://aethergrid-delta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[2px] border border-text-dim/40 bg-obsidian/30 px-8 py-3 text-sm font-semibold tracking-wide text-text backdrop-blur-sm transition hover:border-amber hover:text-amber"
            >
              View Live Demo
            </a>
          </div>
          <p className="op-reveal op-reveal-4 mt-4 text-xs text-text-dim">
            Current build: a functioning simulation and coordination prototype — not yet a
            deployed African energy network.
          </p>

          <div className="op-reveal op-reveal-4 op-hud-frame op-glass mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-4">
            {[
              { k: "ENTITY", v: "RC-9802444" },
              { k: "JURISDICTION", v: "NIGERIA" },
              { k: "STAGE", v: "PRE-SEED" },
              { k: "BUILD", v: "SIMULATION" },
            ].map((f) => (
              <div key={f.k} className="flex items-center gap-2">
                <span className="op-status-dot op-status-dot--idle" aria-hidden />
                <span className="op-mono text-[10px] tracking-[0.15em] text-text-dim">{f.k}</span>
                <span className="op-mono text-[10px] font-semibold tracking-[0.1em] text-amber">{f.v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Illustrative coordination console — a densely-composed, clearly-labeled
          conceptual view of pipeline structure. Built from labels in the product
          model, not from live telemetry off deployed hardware. No fabricated
          measured values (kW, Hz, SOC%, uptime%) appear anywhere in this panel. */}
      <section className="op-circuit relative overflow-hidden border-y border-border bg-panel/30 py-20">
        <div className="op-scanline" />
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="mb-8 text-center">
            <p className="op-mono text-xs font-semibold tracking-[0.3em] text-amber">
              SIMULATION &amp; COORDINATION PROTOTYPE
            </p>
            <h2 className="mt-3 font-display text-2xl text-text sm:text-3xl">
              An illustrative view of how AetherGrid reasons
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-text-dim">
              Every panel below is a conceptual model — labeled where it applies as
              simulated, illustrative, or design intent. None of it is a reading from
              deployed hardware.
            </p>
          </div>
          <CoordinationConsole />
        </div>
      </section>

      <section className="op-circuit relative overflow-hidden py-24">
        <div className="op-scanline" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 400px at 50% 0%, rgba(155,92,246,0.08), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative mb-16 text-center">
          <p className="op-mono text-xs font-semibold tracking-[0.3em] text-amber">FLAGSHIP PLATFORM</p>
          <h2 className="mt-3 font-display text-3xl text-text sm:text-4xl">
            How AetherGrid coordinates a grid
          </h2>
        </div>
        <div className="relative mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-4 lg:grid-cols-7">
          <div
            className="pointer-events-none absolute left-0 right-0 top-6 hidden lg:block"
            style={{ height: 2, background: "linear-gradient(90deg, transparent, var(--color-amber) 8%, var(--color-amber) 92%, transparent)" }}
            aria-hidden
          />
          {[
            { name: "Telemetry ingestion", role: "reads incoming asset data" },
            { name: "Demand forecasting", role: "models near-term demand" },
            { name: "Asset coordination", role: "proposes an asset set" },
            { name: "Optimization engine", role: "drafts a capacity plan" },
            { name: "Governance override", role: "gates autonomous action" },
            { name: "Audit trail", role: "logs every decision" },
            { name: "Operator intelligence", role: "surfaces it to a human" },
          ].map((stage, i) => (
            <div
              key={stage.name}
              className="group relative flex flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1"
            >
              <div className={i === 0 ? "op-ping relative" : "relative"}>
                <div className="op-node op-hex op-pulse" style={{ animationDelay: `${i * 0.25}s` }}>
                  {i + 1}
                </div>
              </div>
              <span className="mt-3 text-xs font-medium leading-snug text-text sm:text-sm">
                {stage.name}
              </span>
              <span className="op-mono mt-1 text-[10px] leading-snug text-text-dim opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {stage.role}
              </span>
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="border-y border-border bg-panel/40 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="op-mono text-xs font-semibold tracking-[0.3em] text-amber">
              THE CORE TECHNOLOGY STACK
            </p>
            <h2 className="mt-3 font-display text-3xl text-text sm:text-4xl">
              What AetherGrid runs on
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-text-dim">
              AetherGrid is built on Opulentia&apos;s broader enterprise platform — orchestration,
              analytics, cloud infrastructure, and digital trust, engineered as one core.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products
              .filter((p) => p.slug !== "aethergrid")
              .map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/services/${p.slug}`}
                  className="op-tech-card group flex flex-col p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="op-mono text-[10px] text-bronze">
                      MODULE_{String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="op-status-dot op-status-dot--idle" aria-hidden />
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="op-badge shrink-0">{p.icon}</span>
                    <h3 className="font-display text-base text-text">{p.name}</h3>
                  </div>
                  <p className="op-mono mt-3 text-[10px] tracking-wide text-text-dim">
                    {p.slug.replace(/-/g, "_").toUpperCase()}
                  </p>
                  <p className="mt-2 flex-1 text-sm text-text-dim">{p.summary}</p>
                  <div className="op-mono mt-4 flex items-center justify-between border-t border-border pt-3 text-[10px]">
                    <span className="text-text-dim">SPEC: on file</span>
                    <span className="font-semibold tracking-wide text-amber group-hover:underline">
                      DETAILS →
                    </span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-panel py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="op-mono text-xs font-semibold tracking-[0.3em] text-amber">BUILT FOR SCALE</p>
          <h2 className="mt-3 font-display text-3xl text-text sm:text-4xl">
            Engineering Excellence, Enterprise-Ready
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-text-dim">
            Our infrastructure is engineered to provide robust stability and full
            operational readiness for organizations requiring sophisticated
            intelligence solutions and secure cloud automation that integrates
            seamlessly with existing enterprise systems.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="op-mono text-xs font-semibold tracking-[0.3em] text-amber">NEWS FEED</p>
            <h2 className="mt-3 font-display text-3xl text-text sm:text-4xl">
              Tech News Hub
            </h2>
          </div>
          <Link href="/news" className="text-sm font-semibold text-amber hover:underline">
            View all →
          </Link>
        </div>
        {news.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2">
            {news.map((n) => (
              <a
                key={n.id}
                href={n.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border bg-panel p-5 transition hover:border-amber"
              >
                <p className="text-xs font-semibold tracking-wide text-amber">{n.source}</p>
                <p className="mt-2 text-sm text-text">{n.title}</p>
              </a>
            ))}
          </div>
        ) : (
          <p className="text-sm text-text-dim">Live feed temporarily unavailable — visit the News Hub directly.</p>
        )}
      </section>
    </main>
  );
}
