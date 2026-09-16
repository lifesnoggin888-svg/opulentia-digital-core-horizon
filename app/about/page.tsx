import type { Metadata } from "next";
import Image from "next/image";
import ComplianceReadout from "@/components/ComplianceReadout";

export const metadata: Metadata = { title: "About — Opulentia Digital Core Horizon" };

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden op-circuit py-20 sm:py-28">
        {/* Page-level banner sharing the homepage hero's cinematic poster
            treatment — smaller and quieter, but the same visual system. */}
        <Image
          src="/hero-poster-scene.jpg"
          alt=""
          fill
          className="object-cover object-[50%_15%] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-obsidian/90 to-obsidian" />
        <div className="op-scanline" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 400px at 50% 0%, rgba(155,92,246,0.14), transparent)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <p className="op-reveal op-reveal-1 op-mono text-xs font-semibold tracking-[0.3em] text-amber">
            COMPANY DOSSIER
          </p>
          <h1 className="op-reveal op-reveal-2 mt-3 font-display text-4xl text-text sm:text-5xl">
            Opulentia Digital Core Horizon
          </h1>
          <p className="op-reveal op-reveal-2 op-mono mt-2 text-sm text-text-dim">
            Registration RC-9802444
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="op-reveal op-reveal-3 grid gap-6 lg:grid-cols-5">
          <div className="op-glass op-hud-frame p-6 sm:p-8 lg:col-span-3">
            <p className="op-mono mb-4 text-xs font-semibold tracking-[0.25em] text-signal">
              COMPANY OVERVIEW
            </p>
            <div className="space-y-6 text-base leading-relaxed text-text-dim">
              <p>
                Opulentia Digital Core Horizon is an enterprise technology company
                building AI orchestration, analytics, cloud infrastructure, and
                digital trust tooling as a single, coherent platform — engineered for
                organizations that need real operational readiness, not a demo.
              </p>
              <p>
                We are early. This site does not claim scale, deployments, or user
                counts we have not earned yet. What we do claim is engineering
                discipline: every product is built with explainability, security,
                and auditability as defaults, not afterthoughts.
              </p>
              <p>
                Alongside our platform, we run a technology news hub — because
                staying informed on the pace of change in enterprise AI is part of
                how we build responsibly.
              </p>
            </div>
          </div>

          <div className="op-term-panel op-hud-frame p-6 sm:p-8 lg:col-span-2">
            <p className="op-mono mb-4 text-xs font-semibold tracking-[0.2em] text-amber">
              ENTITY REGISTRY
            </p>
            <div>
              {[
                { k: "ENTITY", v: "Opulentia Digital Core Horizon" },
                { k: "REGISTRATION", v: "RC-9802444" },
                { k: "JURISDICTION", v: "Nigeria" },
                { k: "STAGE", v: "Pre-seed" },
                { k: "FLAGSHIP", v: "AetherGrid" },
                { k: "BUILD STATUS", v: "Simulation prototype" },
              ].map((r) => (
                <div key={r.k} className="op-term-row">
                  <span className="op-mono w-28 shrink-0 text-[10px] text-bronze">{r.k}</span>
                  <span className="text-[12px] text-text">{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="op-mono mb-6 text-xs font-semibold tracking-[0.25em] text-amber">
            OPERATING PRINCIPLES
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Engineering-first",
                body: "Capability and readiness before claims of scale.",
                tag: "PRINCIPLE",
              },
              {
                title: "Security by default",
                body: "Access control, encryption, and audit logging built in from day one.",
                tag: "PRINCIPLE",
              },
              {
                title: "Honest positioning",
                body: "No fabricated metrics, no invented deployments — ever.",
                tag: "PRINCIPLE",
              },
            ].map((v, i) => (
              <div
                key={v.title}
                className="op-reveal op-card p-6"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <span className="op-mono text-[11px] text-bronze">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="op-mono text-[9px] tracking-[0.15em] text-text-dim">
                    {v.tag}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-base text-text">{v.title}</h3>
                <p className="mt-2 text-sm text-text-dim">{v.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <p className="op-mono mb-6 text-xs font-semibold tracking-[0.25em] text-amber">
            GOVERNANCE &amp; COMPLIANCE
          </p>
          <ComplianceReadout />
        </div>
      </div>
    </main>
  );
}
