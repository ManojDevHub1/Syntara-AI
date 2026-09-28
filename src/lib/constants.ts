import { CategoryCapability, FAQItem, PricingPlan, WorkflowNode } from "@/types";

export const NAV_LINKS = [
  { name: "Product", href: "#product" },
  { name: "Solutions", href: "#solutions" },
  { name: "Resources", href: "#resources" },
  { name: "Pricing", href: "#pricing" },
];

export const HERO_WORKFLOW_NODES: WorkflowNode[] = [
  {
    id: "node-1",
    name: "New Lead Ingestion",
    category: "Trigger",
    status: "success",
    action: "Webhook / Typeform",
    details: "alex.morris@enterprise.io",
    icon: "UserPlus",
    latency: "12ms",
    meta: {
      source: "Enterprise Contact Form",
      arrEstimate: "$48,000",
      region: "North America",
    }
  },
  {
    id: "node-2",
    name: "AI Qualification",
    category: "Syntara Reasoner",
    status: "success",
    action: "Evaluate ICP & Fit Score",
    details: "Score: 94/100 · High Intent",
    icon: "Sparkles",
    latency: "148ms",
    meta: {
      model: "Syntara-LLM-4o",
      confidence: "98.4%",
      budgetVerified: "true",
    }
  },
  {
    id: "node-3",
    name: "CRM Update",
    category: "Integration",
    status: "success",
    action: "HubSpot / Salesforce Sync",
    details: "Created Deal #SYN-8921",
    icon: "Database",
    latency: "84ms",
    meta: {
      owner: "Sarah Jenkins (Lead AE)",
      pipeline: "Q4 High-Growth",
      lifecycleStage: "Opportunity",
    }
  },
  {
    id: "node-4",
    name: "Personalized Outreach",
    category: "Action",
    status: "success",
    action: "Dynamic Context Synthesis",
    details: "Custom pitch draft dispatched",
    icon: "Mail",
    latency: "112ms",
    meta: {
      tone: "Executive Consultation",
      cta: "Book 15-min Discovery",
      followUpTimer: "48h auto-check",
    }
  },
  {
    id: "node-5",
    name: "Slack Notification",
    category: "Alert",
    status: "success",
    action: "Channel #deals-priority",
    details: "Hot Lead Alert + Instant Claim Button",
    icon: "MessageSquare",
    latency: "32ms",
    meta: {
      channel: "#revenue-alerts",
      priority: "P1 Urgent",
      status: "Claimed by Sarah J.",
    }
  },
];

export const CAPABILITY_CATEGORIES: CategoryCapability[] = [
  {
    id: "crm",
    name: "CRM",
    description: "Bi-directional customer record synchronization and real-time lifecycle tracking.",
    tools: ["Salesforce", "HubSpot", "Attio", "Close"],
    sampleFlow: "Instant lead routing & lifecycle status synchronization",
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Multichannel campaign triggers, audience segmentation, and content generation.",
    tools: ["Customer.io", "Segment", "Marketo", "Braze"],
    sampleFlow: "Dynamic drip enrollment & high-intent event triggers",
  },
  {
    id: "support",
    name: "Support",
    description: "Automated ticket triage, sentiment categorization, and smart resolution routing.",
    tools: ["Zendesk", "Intercom", "Front", "Linear"],
    sampleFlow: "AI sentiment evaluation & instant escalation routing",
  },
  {
    id: "sales",
    name: "Sales",
    description: "Enrichment pipelines, buyer intent score calculation, and sales handoffs.",
    tools: ["Apollo", "ZoomInfo", "Gong", "Outreach"],
    sampleFlow: "Account research auto-briefing for pre-call prep",
  },
  {
    id: "operations",
    name: "Operations",
    description: "Cross-system reconciliation, onboarding provisioning, and audit trails.",
    tools: ["Stripe", "DocuSign", "PostgreSQL", "Snowflake"],
    sampleFlow: "Contract signed → Provisioning & billing trigger",
  },
  {
    id: "product",
    name: "Product",
    description: "Feedback aggregation, feature-request tagging, and churn risk mitigation.",
    tools: ["Mixpanel", "Jira", "Slack", "Amplitude"],
    sampleFlow: "In-app drop-off signal → Customer success trigger",
  },
];

export const PROBLEMS_AND_SOLUTIONS = [
  {
    id: "problem-1",
    title: "Too many manual steps",
    problemText: "Employees spend up to 4.2 hours daily switching between disparate apps, manually copying contact details, CSV exports, and syncing fields.",
    syntaraSolution: "Syntara detects incoming data in real-time, validates the schema automatically, and propels information across tools without manual interventions.",
    icon: "Layers",
  },
  {
    id: "problem-2",
    title: "Scattered tools",
    problemText: "Sales operates in CRM, Engineering in Jira, Support in Zendesk. Disjointed silos leave context behind and create broken customer handoffs.",
    syntaraSolution: "A unified orchestration plane connects over 150+ standard API adapters into cohesive, event-driven pipelines that sync instantly.",
    icon: "Network",
  },
  {
    id: "problem-3",
    title: "Repetitive decisions",
    problemText: "Rules engines break whenever edge cases appear. Teams waste hours reviewing routine approvals, sorting leads, or answering repetitive queries.",
    syntaraSolution: "Syntara AI nodes reason through unstructured context, understand nuance, enforce guardrails, and execute deterministic decisions reliably.",
    icon: "GitBranch",
  },
];

export const FEATURES_LIST = [
  {
    id: "feature-1",
    badge: "Natural Language",
    title: "Describe workflows in plain English",
    description:
      "Simply state what you need in natural language. Syntara interprets the business objective, identifies the necessary integrations, and constructs production-ready logic with fallbacks.",
    icon: "MessageSquareCode",
    previewType: "chat-builder",
  },
  {
    id: "feature-2",
    badge: "Cognitive Logic",
    title: "AI-powered decisions",
    description:
      "Move beyond rigid if/else blocks. Syntara AI nodes evaluate semantic meaning, extract structured entities, classify intent, and adapt to edge cases gracefully.",
    icon: "Cpu",
    previewType: "decision-matrix",
  },
  {
    id: "feature-3",
    badge: "Open Ecosystem",
    title: "Connect your existing tools",
    description:
      "Integrate CRMs, databases, messaging apps, and custom webhooks with zero friction. Pre-authenticated connections and granular OAuth scopes keep setup effortless.",
    icon: "PlugZap",
    previewType: "connector-hub",
  },
  {
    id: "feature-4",
    badge: "Full Observability",
    title: "Monitor everything",
    description:
      "Inspect every execution down to the exact millisecond. Visual waterfall logs, payload diffs, retry mechanisms, and automated dead-letter queues guarantee bulletproof reliability.",
    icon: "Activity",
    previewType: "monitor-graph",
  },
];

export const WORKFLOW_GENERATION_PRESETS = [
  {
    prompt: "Create a workflow that qualifies new leads, updates our CRM, and alerts the sales team.",
    tag: "Revenue & Sales",
    nodes: ["Lead Capture", "AI Fit Evaluator", "HubSpot Deal", "Slack P1 Notification"],
  },
  {
    prompt: "When a customer submits a high-urgency bug ticket, summarize the logs, create a Linear issue, and notify on-call engineering.",
    tag: "Engineering & Support",
    nodes: ["Zendesk Ingestion", "AI Log Summarizer", "Linear Ticket", "PagerDuty Alert"],
  },
  {
    prompt: "When an enterprise customer churn risk exceeds 70%, trigger account executive briefing and draft a tailored retention strategy.",
    tag: "Customer Success",
    nodes: ["Usage Drop Signal", "Predictive Risk Model", "AE Briefing Doc", "Calendar Invite"],
  },
];

export const BENEFITS_LIST = [
  {
    id: "benefit-1",
    title: "Save hours every week",
    description: "Eliminate low-leverage repetitive chores so teams can reclaim up to 18 hours weekly for high-impact creative and strategic work.",
    metric: "18+ hrs",
    metricLabel: "saved per employee / week",
    icon: "Clock",
  },
  {
    id: "benefit-2",
    title: "Reduce repetitive tasks",
    description: "Automate routine data entry, ticket classification, document parsing, and multi-system copy-pasting with 99.98% execution accuracy.",
    metric: "94%",
    metricLabel: "reduction in manual handoffs",
    icon: "RefreshCw",
  },
  {
    id: "benefit-3",
    title: "Move faster with AI",
    description: "Ship complex cross-department automation in minutes rather than waiting months for internal engineering sprints and custom middleware.",
    metric: "10x",
    metricLabel: "faster workflow deployment",
    icon: "Zap",
  },
  {
    id: "benefit-4",
    title: "Keep your team focused",
    description: "Empower business operators with intuitive visual builders while maintaining enterprise security guardrails, audit trails, and data isolation.",
    metric: "100%",
    metricLabel: "visibility into operational flow",
    icon: "Target",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Ideal for small teams and agile startups launching their first automated pipelines.",
    priceMonthly: 39,
    priceAnnual: 29,
    popular: false,
    badge: "Concept Tier",
    features: [
      "Up to 5 active automated workflows",
      "2,500 workflow executions / month",
      "Standard AI decision nodes (GPT-4o mini class)",
      "15+ core SaaS integrations",
      "Visual drag-and-drop canvas",
      "7-day execution history & logs",
      "Community support & docs",
    ],
    cta: "Start Free Concept Trial",
  },
  {
    id: "team",
    name: "Team",
    tagline: "For rapidly scaling organizations automating cross-department workflows.",
    priceMonthly: 99,
    priceAnnual: 79,
    popular: true,
    badge: "Most Popular",
    features: [
      "Unlimited active workflows",
      "25,000 workflow executions / month",
      "Advanced Syntara Reasoning models",
      "150+ premium integrations & webhooks",
      "Dry-run test sandbox & replay debugger",
      "Collaborative multi-user workspaces",
      "30-day full observability retention",
      "Human-in-the-loop approval gates",
      "Priority email & Slack support",
    ],
    cta: "Start 14-Day Concept Trial",
  },
  {
    id: "scale",
    name: "Scale",
    tagline: "Dedicated power, governance, and custom compliance for enterprise workloads.",
    priceMonthly: 249,
    priceAnnual: 199,
    popular: false,
    badge: "Enterprise Concept",
    features: [
      "Unlimited workflow executions",
      "Custom fine-tuned private AI models",
      "Dedicated high-throughput runners",
      "Role-based access control (RBAC) & SSO",
      "Custom VPC & on-premise connectors",
      "99.99% uptime SLA guarantee",
      "SOC2 Type II & GDPR compliance standards",
      "Audit trail export & SIEM stream",
      "Dedicated solutions architect",
    ],
    cta: "Talk to Concept Sales",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What can Syntara automate?",
    answer:
      "Syntara can orchestrate virtually any operational process involving data movement, evaluation, and action execution across your software stack. Common use cases include high-intent lead qualification and CRM routing, customer support ticket sentiment evaluation and escalation, financial invoice reconciliation, employee onboarding provisioning, and automated cross-tool incident alerts.",
  },
  {
    id: "faq-2",
    question: "Does Syntara require coding?",
    answer:
      "No programming experience is required. Syntara features an intuitive visual drag-and-drop workflow canvas and natural language workflow generation. You can construct end-to-end logic simply by describing your objective in plain English. For advanced technical teams, Syntara also provides optional custom JavaScript/Python execution blocks, regex evaluators, and raw JSON payload transformations.",
  },
  {
    id: "faq-3",
    question: "Which tools can I connect?",
    answer:
      "Syntara supports over 150+ native integrations, covering CRMs (Salesforce, HubSpot, Attio), communication platforms (Slack, Microsoft Teams, Discord), project tracking (Linear, Jira, Asana, Notion), databases (PostgreSQL, Supabase, Snowflake, BigQuery), marketing tools (Segment, Customer.io), and generic REST APIs/Webhooks.",
  },
  {
    id: "faq-4",
    question: "Can I test workflows before publishing?",
    answer:
      "Yes, Syntara includes a built-in interactive Test Sandbox. You can simulate mock webhook payloads, step through nodes one by one with execution step replays, inspect intermediate input/output variables, and verify AI reasoning results before deploying to live production environments.",
  },
  {
    id: "faq-5",
    question: "Is there a free plan?",
    answer:
      "Yes! Syntara provides a permanent Free Starter tier that allows you to experiment with up to 5 active workflows and 500 monthly executions with zero credit card required. Note: As Syntara AI is a portfolio concept project by Manoj Kushwaha, all accounts and trial tiers are simulated sandbox demonstrations.",
  },
];
