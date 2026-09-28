"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ShieldCheck, CheckCircle2 } from "lucide-react";
import { HeroWorkflowMockup } from "./HeroWorkflowMockup";

interface HeroProps {
  onStartFree: () => void;
  onWatchDemo: () => void;
}

export function Hero({ onStartFree, onWatchDemo }: HeroProps) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Subtle top mesh gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] mesh-gradient-subtle pointer-events-none" />

      {/* Floating subtle ambient rings */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-brand-100/40 via-blue-50/20 to-transparent rounded-[100%] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-200/80 shadow-xs mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-600 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
            </span>
            <span className="text-[11px] font-bold tracking-widest text-brand-700 uppercase">
              AI WORKFLOW AUTOMATION
            </span>
            <span className="text-zinc-300">|</span>
            <span className="text-[11px] font-medium text-zinc-600">
              Autonomous Orchestration
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] mb-6"
          >
            Turn repetitive work into{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-indigo-600 to-blue-600">
              intelligent workflows.
            </span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal"
          >
            Syntara AI connects your tools, understands your processes, and automates repetitive
            work with intelligent workflows your team can build in minutes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-5"
          >
            <button
              onClick={onStartFree}
              className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-700 hover:from-brand-700 hover:to-indigo-800 text-white font-semibold text-sm rounded-xl shadow-lg shadow-brand-500/25 transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
            >
              <span>Start Building Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onWatchDemo}
              className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-zinc-50 text-zinc-800 font-semibold text-sm rounded-xl border border-zinc-200/90 shadow-sm transition-all duration-200 hover:border-zinc-300 flex items-center justify-center gap-2.5"
            >
              <div className="w-5 h-5 rounded-full bg-brand-50 flex items-center justify-center text-brand-600">
                <Play className="w-2.5 h-2.5 fill-current" />
              </div>
              <span>Watch Demo</span>
            </button>
          </motion.div>

          {/* Small note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center gap-4 text-xs text-zinc-500"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              No credit card required
            </span>
            <span className="text-zinc-300">•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
              Instant 2-minute sandbox setup
            </span>
          </motion.div>
        </div>

        {/* Workflow-builder hero mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <HeroWorkflowMockup />
        </motion.div>
      </div>
    </section>
  );
}
