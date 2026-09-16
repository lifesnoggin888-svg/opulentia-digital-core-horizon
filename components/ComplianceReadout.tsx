// A terminal-styled readout of the engineering defaults the site already
// claims in prose (access control, encryption, audit logging). No metrics,
// no uptime figures, no counts — status words only, describing design
// posture, not live measured system state.

const rows = [
  { key: "ACCESS_CONTROL", desc: "Role-based access on every product surface", status: "nominal" as const },
  { key: "ENCRYPTION", desc: "In transit and at rest, by default", status: "nominal" as const },
  { key: "AUDIT_LOGGING", desc: "Every coordination decision appended to trail", status: "nominal" as const },
  { key: "HUMAN_OVERRIDE", desc: "Autonomous actions remain operator-reviewable", status: "nominal" as const },
  { key: "SCALE_CLAIMS", desc: "None issued until earned", status: "review" as const },
];

export default function ComplianceReadout() {
  return (
    <div className="op-term-panel p-6 sm:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <span className="op-mono text-xs font-semibold tracking-[0.2em] text-amber">
          COMPLIANCE POSTURE — AS DESIGNED
        </span>
        <span className="op-mono text-[10px] text-text-dim">
          design commitments, not a live monitoring feed
        </span>
      </div>
      <div>
        {rows.map((r) => (
          <div key={r.key} className="op-term-row">
            <span
              className={`op-status-dot ${
                r.status === "nominal" ? "op-status-dot--nominal" : "op-status-dot--review"
              }`}
              aria-hidden
            />
            <span className="op-mono w-40 shrink-0 text-[11px] text-text">{r.key}</span>
            <span className="text-[12px] text-text-dim">{r.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
