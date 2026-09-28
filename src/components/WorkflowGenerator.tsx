"use client";

import React, { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  RotateCw,
  Terminal,
} from "lucide-react";
import { WORKFLOW_GENERATION_PRESETS } from "@/lib/constants";
import { useToast } from "./Toast";
import confetti from "canvas-confetti";

type GenerationPhase = 0 | 1 | 2 | 3 | 4;

const GENERATION_STEPS = [
  { id: 1, label: "Understanding request", description: "Parsing intent, required inputs, and business rules" },
  { id: 2, label: "Generating workflow", description: "Structuring conditional branches and cognitive AI nodes" },
  { id: 3, label: "Connecting actions", description: "Configuring API adapters, scopes, and schema mappings" },
  { id: 4, label: "Workflow ready", description: "Validated, secure, and prepared for instant deployment" },
];

export function WorkflowGenerator() {
  const [promptText, setPromptText] = useState(
    "Create a workflow that qualifies new leads, updates our CRM, and alerts the sales team."
  );
  const [activePhase, setActivePhase] = useState<GenerationPhase>(4); // Default to ready
  const [isGenerating, setIsGenerating] = useState(false);
  const { showToast } = useToast();

  const handleStartGeneration = (customPrompt?: string) => {
    if (isGenerating) return;
    if (customPrompt) setPromptText(customPrompt);

    setIsGenerating(true);
    setActivePhase(1);

    // Sequence through the 4 states
    setTimeout(() => {
      setActivePhase(2);
    }, 800);

    setTimeout(() => {
      setActivePhase(3);
    }, 1600);

    setTimeout(() => {
      setActivePhase(4);
      setIsGenerating(false);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#6366f1", "#3b82f6", "#10b981"],
      });
      showToast("Workflow generated and verified in 2.4s", "success");
    }, 2400);
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-50/70 via-indigo-50/40 to-blue-50/60 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            AI Workflow Synthesis
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
            Describe it. Syntara builds it.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            No endless manual node wiring. Simply specify your business goal in plain language and
            let our orchestration engine construct the resilient architecture.
          </p>
        </div>

        {/* Generator Interactive Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-white to-zinc-50/70 rounded-3xl border border-zinc-200/90 shadow-xl overflow-hidden p-6 sm:p-10">
          {/* Preset Prompts Pills */}
          <div className="mb-4">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">
              Try a preset prompt
            </span>
            <div className="flex flex-wrap gap-2">
              {WORKFLOW_GENERATION_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleStartGeneration(preset.prompt)}
                  disabled={isGenerating}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-medium transition-all ${
                    promptText === preset.prompt
                      ? "bg-zinc-900 text-white shadow-xs"
                      : "bg-zinc-100 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/70"
                  }`}
                >
                  {preset.tag}
                </button>
              ))}
            </div>
          </div>

          {/* Prompt Input Box */}
          <div className="relative mb-8">
            <div className="relative flex items-center">
              <div className="absolute left-4 top-3.5 text-brand-600">
                <Sparkles className="w-5 h-5" />
              </div>
              <textarea
                value={promptText}
                onChange={(e) => setPromptText(e.target.value)}
                disabled={isGenerating}
                rows={3}
                className="w-full pl-12 pr-32 py-3.5 bg-white border border-zinc-200 rounded-2xl text-sm font-medium text-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 shadow-xs resize-none transition-all"
                placeholder="Describe the workflow you want to build..."
              />
              <button
                type="button"
                onClick={() => handleStartGeneration()}
                disabled={isGenerating}
                className="absolute right-3 bottom-3 px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl shadow-sm transition-all flex items-center gap-1.5 disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RotateCw className="w-3.5 h-3.5 animate-spin" />
                    <span>Synthesizing...</span>
                  </>
                ) : (
                  <>
                    <span>Generate</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* 4 Generation States Progression Bar */}
          <div className="bg-white rounded-2xl border border-zinc-200/90 p-5 sm:p-6 mb-8 shadow-xs">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-zinc-100">
              <span className="text-xs font-bold text-zinc-900 uppercase tracking-wider">
                Synthesis Pipeline
              </span>
              <span className="text-xs font-mono text-brand-600 font-medium">
                {isGenerating
                  ? `Phase ${activePhase} of 4 in progress`
                  : activePhase === 4
                  ? "Workflow Synthesized (100%)"
                  : "Awaiting instruction"}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              {GENERATION_STEPS.map((step) => {
                const isPassed = activePhase >= step.id;
                const isCurrent = activePhase === step.id && isGenerating;

                return (
                  <div
                    key={step.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isCurrent
                        ? "bg-brand-50/60 border-brand-400 ring-2 ring-brand-500/20 shadow-xs"
                        : isPassed
                        ? "bg-zinc-50/70 border-zinc-200"
                        : "bg-zinc-50/30 border-zinc-100 opacity-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-zinc-400 font-mono">
                        0{step.id}
                      </span>
                      {isCurrent ? (
                        <div className="w-4 h-4 rounded-full border-2 border-brand-500 border-t-transparent animate-spin" />
                      ) : isPassed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <div className="w-3.5 h-3.5 rounded-full border border-zinc-300" />
                      )}
                    </div>
                    <h4
                      className={`text-xs font-bold mb-1 ${
                        isPassed ? "text-zinc-900" : "text-zinc-400"
                      }`}
                    >
                      {step.label}
                    </h4>
                    <p className="text-[11px] text-zinc-500 leading-snug line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Resulting Generated Workflow Preview */}
          <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-5 text-white shadow-lg">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800 mb-4 text-xs">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-zinc-200">Generated Pipeline Output</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
                Verified Ready
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700">
                <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">
                  1. Trigger
                </span>
                <span className="font-bold text-zinc-100 block">Lead Ingest</span>
                <span className="text-[11px] text-zinc-400">Webhook Listener</span>
              </div>

              <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700">
                <span className="text-[10px] font-mono text-brand-400 uppercase block mb-1">
                  2. AI Reasoner
                </span>
                <span className="font-bold text-zinc-100 block">Lead Qualification</span>
                <span className="text-[11px] text-zinc-400">Intent &gt; 80 Check</span>
              </div>

              <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700">
                <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">
                  3. Integration
                </span>
                <span className="font-bold text-zinc-100 block">CRM Record Upsert</span>
                <span className="text-[11px] text-zinc-400">HubSpot / Salesforce</span>
              </div>

              <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700">
                <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">
                  4. Notification
                </span>
                <span className="font-bold text-zinc-100 block">Sales Team Alert</span>
                <span className="text-[11px] text-zinc-400">Slack #priority-deals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
