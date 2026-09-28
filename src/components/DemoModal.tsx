"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, RotateCcw, Sparkles, ChevronRight, Volume2, Shield } from "lucide-react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onStartFree: () => void;
}

const CHAPTERS = [
  {
    id: 1,
    title: "1. Prompt-to-Workflow",
    duration: "0:45",
    description: "Watch how natural language creates complete multi-branch logic with schema validation.",
    highlight: "Syntara AI Reasoner translates prompt → generates 5 interconnected nodes",
  },
  {
    id: 2,
    title: "2. Autonomous Decision Logic",
    duration: "1:15",
    description: "Observe the AI node evaluating inbound lead data and making deterministic routing choices.",
    highlight: "Semantic intent scoring at 148ms latency with automated fallback guardrails",
  },
  {
    id: 3,
    title: "3. Live Telemetry & Monitoring",
    duration: "1:40",
    description: "Deep-dive into millisecond waterfall logs, payload inspection, and auto-healing retries.",
    highlight: "Zero dropped webhooks with instantaneous dead-letter queue resolution",
  },
];

export function DemoModal({ isOpen, onClose, onStartFree }: DemoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOpen && isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setActiveChapter((curr) => (curr + 1) % CHAPTERS.length);
            return 0;
          }
          return prev + 1.2;
        });
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/60 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-zinc-50/70">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600">
                <Play className="w-4 h-4 fill-brand-600 text-brand-600" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-zinc-900 leading-tight">
                  Syntara AI Product Walkthrough
                </h3>
                <p className="text-[11px] text-zinc-500">Interactive SaaS Architecture Simulation</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200/60 transition-colors"
              aria-label="Close demo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Player simulation area */}
          <div className="relative bg-zinc-950 aspect-[16/9] w-full flex flex-col justify-between p-6 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Video content overlay mockup */}
            <div className="relative z-10 flex items-center justify-between text-xs text-zinc-400">
              <span className="flex items-center gap-2 bg-zinc-900/80 px-2.5 py-1 rounded-full border border-zinc-800 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Walkthrough Feed · 1080p 60fps
              </span>
              <span className="flex items-center gap-1.5 text-zinc-400 bg-zinc-900/80 px-2.5 py-1 rounded-full border border-zinc-800">
                <Volume2 className="w-3.5 h-3.5" /> Syntara Spatial Audio
              </span>
            </div>

            {/* Visual stage */}
            <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center px-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-xl shadow-brand-500/25 mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest text-brand-400 font-semibold mb-1">
                {CHAPTERS[activeChapter].title}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white max-w-xl mb-3">
                {CHAPTERS[activeChapter].highlight}
              </h4>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mb-6 leading-relaxed">
                {CHAPTERS[activeChapter].description}
              </p>

              {/* Action buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-zinc-950 font-semibold rounded-xl text-xs hover:bg-zinc-100 transition-colors shadow-md"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" /> Pause Demo
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" /> Resume Demo
                    </>
                  )}
                </button>
                <button
                  onClick={() => setProgress(0)}
                  className="p-2 bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white rounded-xl text-xs transition-colors"
                  title="Replay chapter"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Bottom playback progress bar */}
            <div className="relative z-10">
              <div className="w-full bg-zinc-800/80 rounded-full h-1.5 overflow-hidden mb-2">
                <div
                  className="bg-gradient-to-r from-brand-500 to-indigo-400 h-full transition-all duration-100 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between items-center text-[11px] text-zinc-400">
                <span>Chapter {activeChapter + 1} of {CHAPTERS.length}</span>
                <span>{Math.round(progress)}% simulated</span>
              </div>
            </div>
          </div>

          {/* Chapter selection bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-100 border-t border-zinc-200 bg-white">
            {CHAPTERS.map((ch, idx) => (
              <button
                key={ch.id}
                onClick={() => {
                  setActiveChapter(idx);
                  setProgress(0);
                  setIsPlaying(true);
                }}
                className={`p-4 text-left transition-colors flex flex-col justify-between ${
                  activeChapter === idx
                    ? "bg-brand-50/50 border-b-2 sm:border-b-0 sm:border-t-2 border-brand-600"
                    : "hover:bg-zinc-50"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-xs font-bold ${
                      activeChapter === idx ? "text-brand-700" : "text-zinc-700"
                    }`}
                  >
                    {ch.title}
                  </span>
                  <span className="text-[10px] text-zinc-400">{ch.duration}</span>
                </div>
                <p className="text-[11px] text-zinc-500 line-clamp-1">{ch.description}</p>
              </button>
            ))}
          </div>

          {/* Footer Call to Action */}
          <div className="p-4 px-6 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-zinc-600">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Ready to test the live builder? No credit card needed.</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onStartFree();
              }}
              className="w-full sm:w-auto px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>Start Building Free</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
