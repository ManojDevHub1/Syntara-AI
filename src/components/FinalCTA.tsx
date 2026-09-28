"use client";

import React, { useState } from "react";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { useToast } from "./Toast";

interface FinalCTAProps {
  onStartFree: () => void;
}

export function FinalCTA({ onStartFree }: FinalCTAProps) {
  const [email, setEmail] = useState("");
  const { showToast } = useToast();

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      onStartFree();
      return;
    }
    showToast(`Welcome! Initializing demo workspace for ${email}`, "success");
    onStartFree();
  };

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Decorative subtle ambient gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[350px] bg-gradient-to-tr from-brand-100/50 via-indigo-50/40 to-blue-100/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#fafbfe] to-white border border-zinc-200/90 p-8 sm:p-14 text-center shadow-xl shadow-brand-500/5 relative overflow-hidden">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Autonomous Orchestration
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4 max-w-2xl mx-auto">
            Your next workflow could automate itself.
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto mb-8 font-normal">
            Start building intelligent workflows with Syntara AI.
          </p>

          {/* Quick email input and CTA */}
          <form
            onSubmit={handleQuickSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email..."
              className="w-full sm:flex-1 px-4 py-3 bg-white border border-zinc-200 rounded-xl text-xs sm:text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 shadow-2xs"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md shadow-brand-500/20 transition-all flex items-center justify-center gap-2 whitespace-nowrap group hover:-translate-y-0.5"
            >
              <span>Start Building Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-500">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              No credit card required
            </span>
            <span className="text-zinc-300">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
              Free sandbox access
            </span>
            <span className="text-zinc-300">•</span>
            <span>Setup in under 2 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
