"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  Layers,
  Network,
  GitBranch,
  Sparkles,
  Zap,
  ShieldAlert,
} from "lucide-react";
import { PROBLEMS_AND_SOLUTIONS } from "@/lib/constants";

export function ProblemSolution() {
  const [activeTab, setActiveTab] = useState<"before" | "after">("after");

  const getProblemIcon = (iconName: string) => {
    switch (iconName) {
      case "Layers":
        return <Layers className="w-5 h-5 text-rose-500" />;
      case "Network":
        return <Network className="w-5 h-5 text-amber-500" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5 text-rose-600" />;
      default:
        return <ShieldAlert className="w-5 h-5 text-rose-500" />;
    }
  };

  return (
    <section id="solutions" className="py-20 sm:py-28 relative bg-[#fafbfe]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200/80 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
            The Orchestration Bottleneck
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
            Your tools shouldn’t create more work.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            SaaS sprawl was meant to empower your team. Instead, it created fragmented silos,
            copy-paste fatigue, and manual overhead that stalls growth.
          </p>
        </div>

        {/* 3 Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PROBLEMS_AND_SOLUTIONS.map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/80 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center">
                    {getProblemIcon(item.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-rose-600 bg-rose-50/80 px-2.5 py-0.5 rounded-full border border-rose-100">
                    Friction Point 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-900 mb-2.5">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.problemText}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center gap-2 text-xs font-medium text-rose-600">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>Bottlenecks team throughput</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transition Banner into Syntara Solution */}
        <div className="relative rounded-3xl bg-gradient-to-b from-white to-zinc-50 border border-brand-200/80 p-6 sm:p-10 shadow-lg shadow-brand-500/5 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Transition Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200/80">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                The Syntara Transformation
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight">
                Syntara connects the entire process.
              </h3>
              <p className="text-sm text-zinc-600 mt-2">
                Replace brittle legacy automations and copy-paste friction with an intelligent,
                context-aware orchestration layer.
              </p>
            </div>

            {/* Toggle view pills */}
            <div className="flex p-1 bg-zinc-200/60 rounded-xl self-start md:self-auto text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab("before")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === "before"
                    ? "bg-white text-zinc-900 shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                Without Syntara
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("after")}
                className={`px-4 py-2 rounded-lg transition-all ${
                  activeTab === "after"
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-zinc-600 hover:text-zinc-900"
                }`}
              >
                With Syntara AI
              </button>
            </div>
          </div>

          {/* Side-by-Side Comparison Container */}
          <div className="pt-8">
            <AnimatePresence mode="wait">
              {activeTab === "before" ? (
                <motion.div
                  key="before"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  <div className="p-5 rounded-2xl bg-rose-50/30 border border-rose-200/60">
                    <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase mb-2">
                      <XCircle className="w-4 h-4" /> Fragmented Silos
                    </div>
                    <h4 className="text-base font-bold text-zinc-900 mb-1">
                      Manual Field Copying
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Reps constantly copy names, emails, and company notes between spreadsheets,
                      Zendesk, and Salesforce, causing 12% error rates.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-rose-50/30 border border-rose-200/60">
                    <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase mb-2">
                      <XCircle className="w-4 h-4" /> Rigid Rules Fail
                    </div>
                    <h4 className="text-base font-bold text-zinc-900 mb-1">
                      Brittle Zapier Scripts
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Basic boolean triggers fail silently whenever payload formatting changes or
                      unexpected fields are received, leaving deals neglected.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-rose-50/30 border border-rose-200/60">
                    <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase mb-2">
                      <XCircle className="w-4 h-4" /> Human Bottlenecks
                    </div>
                    <h4 className="text-base font-bold text-zinc-900 mb-1">
                      Delayed Customer Response
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Inbound enterprise inquiries sit idle for 4 to 8 hours waiting for manual AE
                      triage, dropping conversion likelihood by 60%.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="after"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  <div className="p-5 rounded-2xl bg-emerald-50/40 border border-emerald-200/70 shadow-xs">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase mb-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Autonomous Sync
                    </div>
                    <h4 className="text-base font-bold text-zinc-900 mb-1">
                      Zero Manual Re-entry
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Data is harmonized at ingestion time. Syntara validates schemas and propagates
                      normalized objects across every downstream system in 80ms.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-brand-50/40 border border-brand-200/70 shadow-xs">
                    <div className="flex items-center gap-2 text-brand-700 font-bold text-xs uppercase mb-2">
                      <Sparkles className="w-4 h-4 text-brand-600" /> Semantic Reasoning
                    </div>
                    <h4 className="text-base font-bold text-zinc-900 mb-1">
                      Nuanced AI Decisions
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      Syntara evaluates customer intent, company funding signals, and priority
                      sentiment, making intelligent decisions that traditional if/else cannot.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-indigo-50/40 border border-indigo-200/70 shadow-xs">
                    <div className="flex items-center gap-2 text-indigo-700 font-bold text-xs uppercase mb-2">
                      <Zap className="w-4 h-4 text-indigo-600" /> Sub-Second Execution
                    </div>
                    <h4 className="text-base font-bold text-zinc-900 mb-1">
                      Instantaneous Handoffs
                    </h4>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      High-value leads are qualified, enriched with CRM metrics, and assigned with
                      personalized pre-drafted outreach in under 400 milliseconds.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
