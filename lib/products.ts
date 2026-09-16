export type Product = {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  summary: string;
  description: string;
  capabilities: string[];
  liveUrl?: string;
  liveNote?: string;
};

export const products: Product[] = [
  {
    slug: "aethergrid",
    name: "AetherGrid",
    tagline: "The intelligent coordination layer for Africa's distributed-energy infrastructure",
    icon: "⚡",
    summary:
      "AetherGrid coordinates solar, battery, mini-grid, and hybrid-energy assets through forecasting, optimization, autonomous coordination, and governed human override.",
    description:
      "AetherGrid enables energy operators to forecast demand, coordinate distributed assets, optimize available capacity, and govern autonomous decisions across solar, battery, mini-grid, and hybrid-energy networks. It is Opulentia Digital Core Horizon's flagship platform and its commercial wedge into African distributed-energy infrastructure. Current build: a functioning simulation and coordination prototype running on real autonomous-tick infrastructure — not yet a deployed African energy network.",
    capabilities: [
      "Telemetry ingestion from distributed energy assets",
      "Demand forecasting across connected sites",
      "Distributed asset coordination — solar, battery, mini-grid, hybrid",
      "Optimization engine for available capacity",
      "Governance and human override on autonomous decisions",
      "Full audit trail on every coordination decision",
      "Operator intelligence dashboard for real-time visibility",
    ],
    liveUrl: "https://aethergrid-delta.vercel.app",
    liveNote:
      "The live demo requires signing in — it is a working operator console, not a public marketing page.",
  },
  {
    slug: "agentproof",
    name: "AgentProof",
    tagline: "Reliability infrastructure for AI agents before they touch production",
    icon: "✓",
    summary:
      "AgentProof runs controlled simulations and adversarial scenarios against autonomous AI agents, scoring authority, security, reliability, and cost into a readiness report before an agent gets production access.",
    description:
      "AgentProof is Opulentia Digital Core Horizon's AI-agent assurance product, alongside AetherGrid. It executes authority tests, adversarial scenarios, and operational-economics checks against a declared agent contract, capturing every failure with the exact decision, tool call, and policy result so it can be replayed and turned into a regression test. Reports persist to Supabase with a SHA-256 canonical-hash integrity check on every write. Current build: a real, working simulation and reporting tool with a verified persistence round trip in production, not an enterprise-scale deployment with named customers.",
    capabilities: [
      "Authority testing against declared tool permissions",
      "Adversarial scenarios: prompt injection, sensitive-data exposure, outage, impersonation",
      "Operational-economics scoring: success rate, p95 latency, projected monthly cost",
      "Separate security, reliability, policy, and cost scores per report",
      "Every failure captured as a replayable trace and regression test",
      "Append-only reports with SHA-256 integrity verification on read",
    ],
    liveUrl: "https://agentproof-source.vercel.app",
    liveNote: "The live app runs real simulations and a sample readiness report — no account required.",
  },
  {
    slug: "horizon-intelligence",
    name: "Horizon Intelligence",
    tagline: "Enterprise AI orchestration for complex operations",
    icon: "◈",
    summary:
      "An orchestration layer for coordinating AI agents and workflows across an enterprise's existing systems.",
    description:
      "Horizon Intelligence is built for organizations that need AI capability woven into real operational workflows, not bolted on as a chat widget. It coordinates task routing, tool access, and human review across your existing stack, with every action logged for accountability.",
    capabilities: [
      "Workflow orchestration across existing enterprise tools",
      "Configurable human-in-the-loop review gates",
      "Full audit trail on every automated action",
      "Modular deployment — start with one workflow, expand from there",
    ],
  },
  {
    slug: "core-analytics",
    name: "Core Analytics",
    tagline: "Precise, explainable data intelligence",
    icon: "▣",
    summary:
      "Analytics tooling built for teams that need to trust the number, not just see it.",
    description:
      "Core Analytics prioritizes explainability alongside speed: every metric traces back to its source data and transformation logic, so analytical output can withstand real scrutiny from clients, auditors, and boards.",
    capabilities: [
      "Source-traceable metrics and dashboards",
      "Custom reporting pipelines for enterprise data",
      "Anomaly flagging with plain-language explanations",
      "Exportable, audit-ready reporting formats",
    ],
  },
  {
    slug: "opulentia-cloud",
    name: "Opulentia Cloud",
    tagline: "Infrastructure built for business continuity",
    icon: "☁",
    summary:
      "Scalable cloud infrastructure engineered around uptime, security, and predictable cost.",
    description:
      "Opulentia Cloud provides the hosting and infrastructure layer beneath the rest of the platform: designed for high-availability workloads, transparent scaling behavior, and infrastructure-as-code from day one.",
    capabilities: [
      "High-availability architecture with documented failover",
      "Infrastructure-as-code deployment model",
      "Transparent, usage-based cost visibility",
      "Security-hardened defaults on every environment",
    ],
  },
  {
    slug: "digital-trust-suite",
    name: "Digital Trust Suite",
    tagline: "Security and integrity safeguards, by default",
    icon: "⛨",
    summary:
      "Security tooling focused on access control, data integrity, and compliance readiness.",
    description:
      "Digital Trust Suite covers the safeguards that enterprise buyers ask about first: authentication, authorization, encryption in transit and at rest, and compliance-oriented logging — implemented as defaults, not add-ons.",
    capabilities: [
      "Role-based access control across every product",
      "Encryption in transit and at rest by default",
      "Compliance-oriented audit logging",
      "Regular third-party security review cadence",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
