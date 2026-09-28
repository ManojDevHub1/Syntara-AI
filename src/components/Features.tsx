"use client";

import React, { useState } from "react";
import {
  MessageSquareCode,
  Cpu,
  PlugZap,
  Activity,
  CheckCircle2,
  Terminal,
} from "lucide-react";

export function Features() {
  const [selectedPrompt] = useState(
    "If contract value > $50k, assign to Enterprise AE and ping #leads-p1"
  );
  const [sampleConfidence] = useState(98.4);

  return (
    <section id="product" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
            Platform Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
            Automations that think, adapt, and scale.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Everything you need to orchestrate complex operations without maintaining brittle
            scripts or bespoke infrastructure.
          </p>
        </div>

        {/* 2x2 Grid of Polished Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Describe workflows in plain English */}
          <div className="rounded-3xl border border-zinc-200/90 bg-gradient-to-b from-[#fafbfe] to-white p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-card-hover transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-brand-700 bg-brand-50 border border-brand-200/60 px-3 py-1 rounded-full">
                  Natural Language Builder
                </span>
                <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 group-hover:scale-105 transition-transform">
                  <MessageSquareCode className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3">
                Describe workflows in plain English
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                State your operational goal naturally. Syntara’s language parser decomposes complex
                intent into validated node sequences, mapping variables and edge cases automatically.
              </p>
            </div>

            {/* Micro Product UI */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-4 shadow-2xs">
              <div className="flex items-center gap-2 text-xs text-zinc-500 font-mono mb-2 pb-2 border-b border-zinc-100">
                <Terminal className="w-3.5 h-3.5 text-brand-600" />
                <span>syntara-cli / prompt-compiler</span>
              </div>
              <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-200/80 mb-3">
                <p className="text-xs text-zinc-800 font-medium">
                  &ldquo;{selectedPrompt}&rdquo;
                </p>
              </div>
              <div className="flex flex-wrap gap-2 text-[11px]">
                <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded-md border border-emerald-200 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Logic Evaluated
                </span>
                <span className="px-2 py-1 bg-brand-50 text-brand-700 rounded-md border border-brand-200 font-mono">
                  Trigger: Deal Value &gt; $50,000
                </span>
                <span className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-md border border-indigo-200 font-mono">
                  Action: Slack #leads-p1
                </span>
              </div>
            </div>
          </div>

          {/* Card 2: AI-powered decisions */}
          <div className="rounded-3xl border border-zinc-200/90 bg-gradient-to-b from-[#fafbfe] to-white p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-card-hover transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-indigo-700 bg-indigo-50 border border-indigo-200/60 px-3 py-1 rounded-full">
                  Cognitive Reasoning
                </span>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-105 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3">
                AI-powered decisions
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                Move past brittle Boolean rules. Syntara evaluates unstructured customer intent,
                sentiment, email context, and documents with configurable guardrails and confidence
                thresholds.
              </p>
            </div>

            {/* Micro Product UI */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-4 shadow-2xs space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-zinc-700">Semantic Fit Classification</span>
                <span className="text-emerald-600 font-mono">{sampleConfidence}% Match</span>
              </div>
              <div className="w-full bg-zinc-100 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-brand-500 to-indigo-600 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${sampleConfidence}%` }}
                />
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                  <span className="text-[10px] text-zinc-400 block uppercase font-bold">
                    Primary Route
                  </span>
                  <span className="text-zinc-800 font-semibold">Enterprise Fast-Track</span>
                </div>
                <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                  <span className="text-[10px] text-zinc-400 block uppercase font-bold">
                    Guardrail
                  </span>
                  <span className="text-zinc-800 font-semibold">Human Approval &lt;80%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Connect your existing tools */}
          <div className="rounded-3xl border border-zinc-200/90 bg-gradient-to-b from-[#fafbfe] to-white p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-card-hover transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
                  Unified Integrations
                </span>
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                  <PlugZap className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3">
                Connect your existing tools
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                Plug into 150+ standard API endpoints, webhooks, relational databases, and
                messaging channels with one-click secure OAuth authorization and strict schema
                validation.
              </p>
            </div>

            {/* Micro Product UI */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-4 shadow-2xs">
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { name: "Salesforce", ping: "14ms", status: "Healthy" },
                  { name: "HubSpot", ping: "18ms", status: "Healthy" },
                  { name: "Slack", ping: "22ms", status: "Healthy" },
                  { name: "PostgreSQL", ping: "8ms", status: "Healthy" },
                  { name: "Linear", ping: "12ms", status: "Healthy" },
                  { name: "Custom API", ping: "34ms", status: "Connected" },
                ].map((conn) => (
                  <div
                    key={conn.name}
                    className="p-2.5 rounded-xl border border-zinc-200/70 bg-zinc-50/60 hover:bg-white hover:border-brand-300 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-zinc-900 text-xs">{conn.name}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-zinc-500 font-mono">
                      <span>{conn.ping}</span>
                      <span className="text-emerald-600 font-semibold">{conn.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 4: Monitor everything */}
          <div className="rounded-3xl border border-zinc-200/90 bg-gradient-to-b from-[#fafbfe] to-white p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-card-hover transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-3 py-1 rounded-full">
                  Real-Time Observability
                </span>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-105 transition-transform">
                  <Activity className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 mb-3">
                Monitor everything
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                Inspect every workflow execution in real-time. Deep waterfall traces, payload diffs,
                retry telemetry, and instant alerts ensure you maintain 100% operational confidence.
              </p>
            </div>

            {/* Micro Product UI */}
            <div className="bg-white rounded-2xl border border-zinc-200 p-4 shadow-2xs space-y-2.5">
              <div className="flex items-center justify-between text-xs pb-2 border-b border-zinc-100">
                <span className="font-semibold text-zinc-800">Pipeline Execution Waterfall</span>
                <span className="text-emerald-600 font-mono text-[11px] font-bold">99.98% SLA</span>
              </div>
              <div className="space-y-1.5 text-xs font-mono">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-zinc-600">1. Webhook Ingest</span>
                  <span className="text-zinc-900 font-semibold">12ms</span>
                </div>
                <div className="w-full bg-zinc-100 rounded-full h-1.5">
                  <div className="bg-blue-500 h-1.5 rounded-full w-1/6" />
                </div>

                <div className="flex items-center justify-between text-[11px] pt-1">
                  <span className="text-zinc-600">2. AI Entity Extraction</span>
                  <span className="text-zinc-900 font-semibold">148ms</span>
                </div>
                <div className="w-full bg-zinc-100 rounded-full h-1.5">
                  <div className="bg-brand-500 h-1.5 rounded-full w-4/6" />
                </div>

                <div className="flex items-center justify-between text-[11px] pt-1">
                  <span className="text-zinc-600">3. CRM Synchronize</span>
                  <span className="text-zinc-900 font-semibold">84ms</span>
                </div>
                <div className="w-full bg-zinc-100 rounded-full h-1.5">
                  <div className="bg-emerald-500 h-1.5 rounded-full w-2/6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
