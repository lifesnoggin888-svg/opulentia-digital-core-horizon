import type { Metadata } from "next";

export const metadata: Metadata = { title: "About — Opulentia Digital Core Horizon" };

export default function AboutPage() {
  return (
    <main>
      <section className="relative overflow-hidden op-circuit py-16 sm:py-20">
        <div className="op-scanline" />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 400px at 50% 0%, rgba(232,163,61,0.08), transparent)",
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
        <div className="op-reveal op-reveal-3 op-glass op-hud-frame p-6 sm:p-8">
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

        <div className="mt-12">
          <p className="op-mono mb-6 text-xs font-semibold tracking-[0.25em] text-amber">
            OPERATING PRINCIPLES
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { title: "Engineering-first", body: "Capability and readiness before claims of scale." },
              { title: "Security by default", body: "Access control, encryption, and audit logging built in from day one." },
              { title: "Honest positioning", body: "No fabricated metrics, no invented deployments — ever." },
            ].map((v, i) => (
              <div
                key={v.title}
                className="op-reveal op-card p-6"
                style={{ animationDelay: `${0.1 + i * 0.1}s` }}
              >
                <span className="op-mono text-[11px] text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-base text-text">{v.title}</h3>
                <p className="mt-2 text-sm text-text-dim">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
