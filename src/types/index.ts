export interface WorkflowNode {
  id: string;
  name: string;
  category: string;
  status: 'idle' | 'running' | 'success' | 'warning' | 'skipped';
  action: string;
  details: string;
  icon: string;
  latency?: string;
  meta?: Record<string, string>;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  priceMonthly: number;
  priceAnnual: number;
  popular?: boolean;
  features: string[];
  cta: string;
  badge?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface CategoryCapability {
  id: string;
  name: string;
  description: string;
  tools: string[];
  sampleFlow: string;
}
