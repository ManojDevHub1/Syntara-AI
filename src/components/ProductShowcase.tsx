"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  FlaskConical,
  Activity,
  Sparkles,
  Play,
  CheckCircle2,
  Terminal,
  Settings,
} from "lucide-react";
import { useToast } from "./Toast";

type ShowcaseTab = "build" | "test" | "monitor";

export function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<ShowcaseTab>("build");
  const [temperature, setTemperature] = useState<number>(0.2);
  const [strictValidation, setStrictValidation] = useState<boolean>(true);
  const [testRunning, setTestRunning] = useState<boolean>(false);
  const { showToast } = useToast();

  const handleRunDryTest = () => {
    setTestRunning(true);
    setTimeout(() => {
      setTestRunning(false);
      showToast("Dry-run test passed: 3 assertions verified in 192ms", "success");
    }, 700);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#fafbfe] border-y border-zinc-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
            Interactive Product Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
            One interface. Complete operational control.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Switch effortlessly between visual canvas design, test-driven validation, and real-time
            telemetry.
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center justify-center mt-8">
            <div className="inline-flex p-1.5 rounded-2xl bg-zinc-200/70 border border-zinc-300/60 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveTab("build")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === "build"
                    ? "bg-white text-zinc-950 shadow-md scale-102"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                <Layers className="w-4 h-4 text-brand-600" />
                <span>Build Canvas</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("test")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === "test"
                    ? "bg-white text-zinc-950 shadow-md scale-102"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                <FlaskConical className="w-4 h-4 text-indigo-600" />
                <span>Test Sandbox</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("monitor")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === "monitor"
                    ? "bg-white text-zinc-950 shadow-md scale-102"
                    : "text-zinc-600 hover:text-zinc-950"
                }`}
              >
                <Activity className="w-4 h-4 text-emerald-600" />
                <span>Monitor &amp; Logs</span>
              </button>
            </div>
          </div>
        </div>

        {/* Large Dashboard/Workflow-Builder Mockup */}
        <div className="relative rounded-3xl bg-white border border-zinc-200/90 shadow-2xl overflow-hidden">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-5 py-3.5 border-b border-zinc-200/80 bg-zinc-50/70 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400" />
                <span className="w-3 h-3 rounded-full bg-amber-400" />
                <span className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <div className="h-4 w-[1px] bg-zinc-200 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-zinc-900">
                  Global_Triage_Pipeline_v3.syntara
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-200/70 text-zinc-700">
                  Prod-East-1
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500 font-mono hidden md:inline">
                Git Sync: <strong className="text-zinc-800">main@c84b12</strong>
              </span>
              <button
                onClick={() => showToast("Pipeline configuration saved", "info")}
                className="px-3 py-1 bg-white border border-zinc-200 hover:bg-zinc-50 text-xs font-semibold rounded-lg text-zinc-700 transition-colors shadow-2xs"
              >
                Save Draft
              </button>
              <button
                onClick={() => showToast("Deployed to Production Sandbox!", "success")}
                className="px-3 py-1 bg-zinc-900 hover:bg-zinc-800 text-xs font-semibold rounded-lg text-white transition-colors shadow-sm"
              >
                Deploy Live
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="min-h-[500px]">
            <AnimatePresence mode="wait">
              {activeTab === "build" && (
                <motion.div
                  key="build-tab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200"
                >
                  {/* Left Tool Palette Sidebar */}
                  <div className="lg:col-span-3 p-4 bg-zinc-50/50 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-zinc-400 uppercase tracking-wider mb-3">
                        <span>Available Nodes</span>
                        <span className="text-[10px] bg-zinc-200/80 px-1.5 py-0.5 rounded text-zinc-600">
                          18 Ready
                        </span>
                      </div>
                      <div className="space-y-2">
                        {[
                          { title: "Webhook Ingestion", cat: "Trigger" },
                          { title: "AI Reasoner Core", cat: "Syntara AI", active: true },
                          { title: "Deterministic Branch", cat: "Logic" },
                          { title: "CRM Upsert Deal", cat: "HubSpot / SFDC" },
                          { title: "Dispatched Notice", cat: "Slack / Teams" },
                          { title: "Custom JS / Python", cat: "Code Block" },
                        ].map((item) => (
                          <div
                            key={item.title}
                            className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                              item.active
                                ? "bg-white border-brand-300 shadow-xs ring-1 ring-brand-400"
                                : "bg-white/80 border-zinc-200 hover:border-zinc-300"
                            }`}
                          >
                            <div className="flex items-center justify-between font-semibold text-zinc-900">
                              <span>{item.title}</span>
                              <span className="text-[9px] uppercase font-bold text-zinc-400">
                                {item.cat}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-zinc-200 text-[11px] text-zinc-500">
                      <span>Drag nodes onto canvas or write natural language prompts.</span>
                    </div>
                  </div>

                  {/* Center Canvas Area */}
                  <div className="lg:col-span-6 p-6 bg-gradient-to-b from-white to-[#fafbfe] relative overflow-hidden flex flex-col justify-center items-center">
                    <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

                    {/* Canvas Nodes Flow Mockup */}
                    <div className="relative z-10 w-full max-w-md space-y-4 py-4">
                      {/* Node A */}
                      <div className="p-3.5 bg-white rounded-xl border border-zinc-200 shadow-xs flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                            IN
                          </div>
                          <div>
                            <span className="text-xs font-bold text-zinc-900 block">
                              Incoming Contact Webhook
                            </span>
                            <span className="text-[10px] text-zinc-500">
                              Payload: JSON schema validated
                            </span>
                          </div>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>

                      {/* Connection indicator */}
                      <div className="w-0.5 h-4 bg-brand-400 mx-auto" />

                      {/* Node B (Active Reasoner) */}
                      <div className="p-4 bg-brand-50/50 rounded-xl border-2 border-brand-400 shadow-md relative">
                        <span className="absolute -top-2.5 right-3 bg-brand-600 text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                          AI Core Active
                        </span>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                            <Sparkles className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-xs font-bold text-zinc-900 block">
                              Syntara Reasoning Engine
                            </span>
                            <span className="text-[10px] text-zinc-500 font-mono">
                              Model: Syntara-Reasoner-4o (temp: {temperature})
                            </span>
                          </div>
                        </div>
                        <div className="bg-white p-2.5 rounded-lg border border-brand-200 text-[11px] text-zinc-700">
                          Prompt: &ldquo;Evaluate company size &gt; 50 &amp; intent signal &gt; 80&rdquo;
                        </div>
                      </div>

                      {/* Connection indicator */}
                      <div className="w-0.5 h-4 bg-brand-400 mx-auto" />

                      {/* Node C */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 bg-white rounded-xl border border-zinc-200 shadow-xs">
                          <span className="text-[9px] font-bold text-emerald-600 uppercase block mb-1">
                            Branch: High Intent
                          </span>
                          <span className="text-xs font-bold text-zinc-900 block">
                            Create Priority Deal
                          </span>
                          <span className="text-[10px] text-zinc-500">SFDC &amp; Slack Alert</span>
                        </div>
                        <div className="p-3 bg-white rounded-xl border border-zinc-200 shadow-xs">
                          <span className="text-[9px] font-bold text-zinc-400 uppercase block mb-1">
                            Branch: Nurture
                          </span>
                          <span className="text-xs font-bold text-zinc-900 block">
                            Drip Campaign
                          </span>
                          <span className="text-[10px] text-zinc-500">Enrolled in 5-day cycle</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Configuration Inspector Panel */}
                  <div className="lg:col-span-3 p-5 bg-zinc-50/70 space-y-5">
                    <div>
                      <div className="flex items-center justify-between text-xs font-bold text-zinc-900 pb-2 border-b border-zinc-200">
                        <span className="flex items-center gap-1.5">
                          <Settings className="w-3.5 h-3.5 text-zinc-500" />
                          Configuration Inspector
                        </span>
                        <span className="text-[10px] text-brand-600 font-mono">Syntara AI</span>
                      </div>
                    </div>

                    {/* Parameter: Temperature Slider */}
                    <div>
                      <div className="flex items-center justify-between text-xs font-medium text-zinc-700 mb-1.5">
                        <span>Reasoning Temperature</span>
                        <span className="font-mono text-zinc-900 font-bold">{temperature}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={temperature}
                        onChange={(e) => setTemperature(parseFloat(e.target.value))}
                        className="w-full accent-brand-600 cursor-pointer"
                      />
                      <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                        <span>Deterministic (0.0)</span>
                        <span>Creative (1.0)</span>
                      </div>
                    </div>

                    {/* Parameter: Schema Validation Toggle */}
                    <div className="p-3 bg-white rounded-xl border border-zinc-200">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-zinc-900">
                          Strict JSON Schema
                        </span>
                        <button
                          type="button"
                          onClick={() => setStrictValidation(!strictValidation)}
                          className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                            strictValidation ? "bg-brand-600" : "bg-zinc-300"
                          }`}
                        >
                          <div
                            className={`w-4 h-4 rounded-full bg-white transition-transform ${
                              strictValidation ? "translate-x-4" : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                      <span className="text-[11px] text-zinc-500 block leading-tight">
                        Reject non-conforming inputs before reasoning starts.
                      </span>
                    </div>

                    {/* Parameter: Execution timeout */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-zinc-700 block">
                        Timeout &amp; Dead-letter Queue
                      </label>
                      <select className="w-full bg-white border border-zinc-200 rounded-lg p-2 text-xs text-zinc-800 font-medium">
                        <option>5,000ms (Automatic 3x Retry)</option>
                        <option>10,000ms (High Complexity)</option>
                        <option>1,000ms (Real-Time Ultra Fast)</option>
                      </select>
                    </div>

                    <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-100 text-xs text-indigo-700">
                      <span className="font-semibold block mb-0.5">Guardrails Active</span>
                      <span>Zero hallucination filter with automatic deterministic fallback.</span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "test" && (
                <motion.div
                  key="test-tab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 p-6 gap-6"
                >
                  {/* Left: Mock Payload Input */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-indigo-600" />
                        <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                          Mock Input Payload (JSON)
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">
                        Content-Type: application/json
                      </span>
                    </div>

                    <div className="p-4 bg-zinc-950 text-zinc-100 rounded-2xl font-mono text-xs overflow-x-auto shadow-inner border border-zinc-800">
                      <pre className="text-zinc-300">
{`{
  "event": "inbound.contact_submission",
  "lead": {
    "email": "sarah.connor@cyberdyne.io",
    "employees": 450,
    "intent_score": 94,
    "annual_budget_estimate": "$75,000",
    "requested_features": ["sso", "ai_reasoner", "audit_logs"]
  },
  "metadata": {
    "origin": "pricing_page_calculator",
    "ip_country": "US"
  }
}`}
                      </pre>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-zinc-500">
                        Dry-run executes in isolated simulation sandbox.
                      </span>
                      <button
                        onClick={handleRunDryTest}
                        disabled={testRunning}
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-sm transition-all flex items-center gap-2 disabled:opacity-50"
                      >
                        {testRunning ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Running Assertions...</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Run Dry Test</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Right: Step Assertions Output */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                        Validation Assertions &amp; Output
                      </h4>
                      <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> 3 Passed · 0 Warnings
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-zinc-900">
                            Assertion 1: Schema Integrity
                          </span>
                          <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            PASSED (14ms)
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-600">
                          Incoming JSON matches target interface `EnterpriseLeadPayload`.
                        </p>
                      </div>

                      <div className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-zinc-900">
                            Assertion 2: Syntara AI Intent Classifier
                          </span>
                          <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            PASSED (94ms)
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-600">
                          Evaluated intent: Score 94 &gt; 80 threshold → Triggered Enterprise Route.
                        </p>
                      </div>

                      <div className="p-3.5 bg-zinc-50 rounded-xl border border-zinc-200">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-zinc-900">
                            Assertion 3: Downstream Sync Mock
                          </span>
                          <span className="text-[10px] font-mono text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            PASSED (84ms)
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-600">
                          Simulated HubSpot deal created (ID: #SYN-9912) and Slack webhook ready.
                        </p>
                      </div>
                    </div>

                    <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl text-xs text-emerald-800 flex items-center justify-between">
                      <span>Ready for zero-downtime production deployment.</span>
                      <strong className="font-mono text-[11px]">Total latency: 192ms</strong>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "monitor" && (
                <motion.div
                  key="monitor-tab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 space-y-6"
                >
                  {/* Top Stats Overview */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200/80">
                      <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                        Execution Throughput
                      </span>
                      <span className="text-2xl font-extrabold text-zinc-950 font-mono">
                        42.8 <span className="text-xs font-normal text-zinc-500">runs/min</span>
                      </span>
                    </div>

                    <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200/80">
                      <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                        Success SLA
                      </span>
                      <span className="text-2xl font-extrabold text-emerald-600 font-mono">
                        99.98%
                      </span>
                    </div>

                    <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200/80">
                      <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                        P95 Latency
                      </span>
                      <span className="text-2xl font-extrabold text-zinc-950 font-mono">
                        188ms
                      </span>
                    </div>

                    <div className="p-4 bg-zinc-50 rounded-2xl border border-zinc-200/80">
                      <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-1">
                        Dead-Letter Queue
                      </span>
                      <span className="text-2xl font-extrabold text-emerald-600 font-mono">
                        0 <span className="text-xs font-normal text-emerald-600">Pending</span>
                      </span>
                    </div>
                  </div>

                  {/* Execution Log Table */}
                  <div className="bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-2xs">
                    <div className="px-4 py-3 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between text-xs font-bold text-zinc-700">
                      <span>Real-Time Execution Logs</span>
                      <span className="text-zinc-400 font-mono text-[10px]">Streaming Live</span>
                    </div>
                    <div className="divide-y divide-zinc-100 text-xs font-mono">
                      {[
                        { id: "exec-9921", time: "Just now", trigger: "webhook/contact-form", latency: "148ms", status: "SUCCESS" },
                        { id: "exec-9920", time: "12s ago", trigger: "hubspot/lifecycle-event", latency: "210ms", status: "SUCCESS" },
                        { id: "exec-9919", time: "34s ago", trigger: "zendesk/ticket-triage", latency: "162ms", status: "SUCCESS" },
                        { id: "exec-9918", time: "1m ago", trigger: "stripe/invoice-reconcile", latency: "194ms", status: "SUCCESS" },
                      ].map((log) => (
                        <div key={log.id} className="px-4 py-3 flex items-center justify-between hover:bg-zinc-50/60 transition-colors">
                          <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span className="text-zinc-900 font-bold">{log.id}</span>
                            <span className="text-zinc-500 font-sans">{log.trigger}</span>
                          </div>
                          <div className="flex items-center gap-4 text-zinc-500">
                            <span>{log.latency}</span>
                            <span className="text-zinc-400 font-sans">{log.time}</span>
                            <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px]">
                              {log.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Execution Status */}
          <div className="px-6 py-3 bg-zinc-50/90 border-t border-zinc-200/90 flex flex-wrap items-center justify-between text-xs text-zinc-500 gap-3">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 font-medium text-zinc-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Cluster: us-east-1a (Active)
              </span>
              <span>·</span>
              <span>Memory Footprint: 48MB</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-mono">
              <span>99.98% High-Availability</span>
              <span>·</span>
              <span>AES-256 State Persistence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
