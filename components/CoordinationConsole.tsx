// Illustrative coordination console — a stylized, densely-composed view of
// how AetherGrid's pipeline is *designed* to connect and reason. Every value
// here is a qualitative status word or a shape, never a measured reading.
// Nothing in this component may render a unit (kW, Hz, %, SOC, uptime) or a
// specific counted quantity implying real deployed hardware or customers.

const nodes = [
  { id: "TELEMETRY_IN", label: "Telemetry ingestion", x: 40, y: 40 },
  { id: "FORECAST", label: "Demand forecasting", x: 220, y: 20 },
  { id: "COORD", label: "Asset coordination", x: 400, y: 50 },
  { id: "OPTIMIZE", label: "Optimization engine", x: 400, y: 160 },
  { id: "GOVERN", label: "Governance override", x: 220, y: 190 },
  { id: "AUDIT", label: "Audit trail", x: 40, y: 160 },
  { id: "OPERATOR", label: "Operator intelligence", x: 220, y: 105 },
];

const edges: [string, string][] = [
  ["TELEMETRY_IN", "FORECAST"],
  ["FORECAST", "COORD"],
  ["COORD", "OPTIMIZE"],
  ["OPTIMIZE", "GOVERN"],
  ["GOVERN", "AUDIT"],
  ["AUDIT", "TELEMETRY_IN"],
  ["TELEMETRY_IN", "OPERATOR"],
  ["FORECAST", "OPERATOR"],
  ["COORD", "OPERATOR"],
  ["OPTIMIZE", "OPERATOR"],
  ["GOVERN", "OPERATOR"],
];

const nodeById = Object.fromEntries(nodes.map((n) => [n.id, n]));

const dispatchLog = [
  { t: "T+00", node: "TELEMETRY_IN", event: "batch received (simulated)", status: "nominal" as const },
  { t: "T+01", node: "FORECAST", event: "demand curve modeled (illustrative)", status: "nominal" as const },
  { t: "T+02", node: "COORD", event: "asset set proposed (simulated)", status: "nominal" as const },
  { t: "T+03", node: "OPTIMIZE", event: "capacity plan drafted (illustrative)", status: "review" as const },
  { t: "T+04", node: "GOVERN", event: "operator review requested", status: "review" as const },
  { t: "T+05", node: "AUDIT", event: "decision logged (simulated)", status: "nominal" as const },
];

export default function CoordinationConsole() {
  return (
    <div className="grid gap-6 lg:grid-cols-5">
      {/* Node-graph panel */}
      <div className="op-glass op-hud-frame p-5 sm:p-6 lg:col-span-3">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="op-signal-dot" aria-hidden />
            <span className="op-mono text-xs font-semibold tracking-[0.2em] text-signal">
              PIPELINE GRAPH — ILLUSTRATIVE
            </span>
          </div>
          <span className="op-mono text-[10px] text-text-dim">structure only</span>
        </div>
        <svg
          viewBox="0 0 460 230"
          className="w-full"
          role="img"
          aria-label="Illustrative diagram of how AetherGrid's coordination pipeline stages connect to one another"
        >
          <g>
            {edges.map(([a, b], i) => {
              const na = nodeById[a];
              const nb = nodeById[b];
              return (
                <line
                  key={`${a}-${b}-${i}`}
                  x1={na.x}
                  y1={na.y}
                  x2={nb.x}
                  y2={nb.y}
                  className="op-connector-line op-connector-dash"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              );
            })}
          </g>
          {nodes.map((n) => (
            <g key={n.id}>
              <circle cx={n.x} cy={n.y} r={5} fill="var(--color-obsidian)" stroke="var(--color-amber)" strokeWidth={1.5} />
              <circle cx={n.x} cy={n.y} r={2} fill="var(--color-amber)" />
            </g>
          ))}
        </svg>
        <div className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3">
          {nodes.map((n) => (
            <div key={n.id} className="flex items-center gap-1.5">
              <span className="op-status-dot op-status-dot--idle" aria-hidden />
              <span className="op-mono text-[10px] text-text-dim">{n.label}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-[11px] leading-relaxed text-text-dim">
          Node positions and connections are a conceptual map of pipeline structure, not a
          network topology of deployed hardware.
        </p>
      </div>

      {/* Right column: forecast shape + guardrails */}
      <div className="flex flex-col gap-6 lg:col-span-2">
        <div className="op-term-panel p-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="op-mono text-[11px] font-semibold tracking-[0.15em] text-amber">
              FORECAST SHAPE
            </span>
            <span className="op-mono text-[10px] text-text-dim">conceptual</span>
          </div>
          <svg viewBox="0 0 200 60" className="w-full" role="img" aria-label="Illustrative forecast curve shape, not measured demand data">
            <polyline
              points="0,45 20,40 40,42 60,28 80,32 100,15 120,20 140,10 160,18 180,8 200,14"
              fill="none"
              stroke="var(--color-signal)"
              strokeWidth={1.5}
              strokeOpacity={0.85}
            />
            <polyline
              points="0,45 20,40 40,42 60,28 80,32 100,15 120,20 140,10 160,18 180,8 200,14 200,60 0,60"
              fill="var(--color-signal)"
              fillOpacity={0.08}
              stroke="none"
            />
          </svg>
          <p className="mt-3 text-[11px] leading-relaxed text-text-dim">
            An illustrative forecast-curve shape — depicts what a modeled demand curve looks
            like structurally. No units, no measured values, no real dataset behind this line.
          </p>
        </div>

        <div className="op-term-panel p-5 flex-1">
          <div className="mb-3 flex items-center justify-between">
            <span className="op-mono text-[11px] font-semibold tracking-[0.15em] text-amber">
              GOVERNANCE GUARDRAILS
            </span>
            <span className="op-status-dot op-status-dot--nominal" aria-hidden />
          </div>
          <ul className="space-y-2">
            {[
              "Autonomous actions require an operator-visible rationale",
              "Any override request halts coordination until reviewed",
              "Every state change is appended to the audit trail",
            ].map((g) => (
              <li key={g} className="flex items-start gap-2 text-[11px] leading-relaxed text-text-dim">
                <span className="op-mono mt-0.5 text-bronze">›</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Dispatch log strip */}
      <div className="op-term-panel p-5 sm:p-6 lg:col-span-5">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="op-mono text-[11px] font-semibold tracking-[0.15em] text-amber">
            SIMULATED COORDINATION LOG
          </span>
          <span className="op-mono text-[10px] text-text-dim">
            synthetic sequence — illustrates log shape, not a real dispatch session
          </span>
        </div>
        <div>
          {dispatchLog.map((row) => (
            <div key={row.t} className="op-term-row">
              <span className="op-mono w-12 shrink-0 text-[10px] text-bronze">{row.t}</span>
              <span
                className={`op-status-dot ${
                  row.status === "nominal" ? "op-status-dot--nominal" : "op-status-dot--review"
                }`}
                aria-hidden
              />
              <span className="op-mono w-32 shrink-0 text-[10px] text-text">{row.node}</span>
              <span className="text-[11px] text-text-dim">{row.event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
