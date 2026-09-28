"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  UserPlus,
  Database,
  Mail,
  MessageSquare,
  Play,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronRight,
  Code2,
} from "lucide-react";
import { HERO_WORKFLOW_NODES } from "@/lib/constants";
import { WorkflowNode } from "@/types";
import { useToast } from "./Toast";

export function HeroWorkflowMockup() {
  const [nodes] = useState<WorkflowNode[]>(HERO_WORKFLOW_NODES);
  const [activeNodeIndex, setActiveNodeIndex] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [runCount, setRunCount] = useState<number>(1420);
  const { showToast } = useToast();

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case "UserPlus":
        return <UserPlus className="w-4 h-4 text-blue-600" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-brand-600" />;
      case "Database":
        return <Database className="w-4 h-4 text-emerald-600" />;
      case "Mail":
        return <Mail className="w-4 h-4 text-violet-600" />;
      case "MessageSquare":
        return <MessageSquare className="w-4 h-4 text-amber-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-brand-600" />;
    }
  };

  const handleSimulateRun = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setCurrentStep(0);
    setActiveNodeIndex(0);

    const stepDelays = [0, 800, 1600, 2400, 3200];

    stepDelays.forEach((delay, index) => {
      setTimeout(() => {
        setCurrentStep(index);
        setActiveNodeIndex(index);
        if (index === stepDelays.length - 1) {
          setTimeout(() => {
            setIsSimulating(false);
            setRunCount((prev) => prev + 1);
            showToast("Workflow executed successfully in 388ms · 0 errors", "success");
          }, 900);
        }
      }, delay);
    });
  };

  const activeNode = nodes[activeNodeIndex];

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-8 sm:mt-12 rounded-2xl sm:rounded-3xl bg-white border border-zinc-200/90 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.08)] overflow-hidden">
      {/* Top Application Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-6 py-3.5 border-b border-zinc-100 bg-zinc-50/70 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/80 inline-block" />
          </div>
          <div className="h-4 w-[1px] bg-zinc-200 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-zinc-900">
              Enterprise Lead Qualification &amp; Dispatch
            </span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/70 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Active · v2.4
            </span>
          </div>
        </div>

        {/* Action controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSimulateRun}
            disabled={isSimulating}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 rounded-lg shadow-sm transition-all disabled:opacity-50"
          >
            {isSimulating ? (
              <>
                <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Simulating Step {currentStep + 1}/5...</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-white" />
                <span>Simulate Execution</span>
              </>
            )}
          </button>
          <div className="hidden md:flex items-center text-[11px] text-zinc-500 gap-1 bg-white border border-zinc-200 px-2.5 py-1.5 rounded-lg shadow-xs">
            <Clock className="w-3 h-3 text-zinc-400" />
            <span>Avg Latency: 388ms</span>
          </div>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="p-4 sm:p-8 bg-gradient-to-b from-[#fafbfe] to-white relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        {/* Workflow Title Strip */}
        <div className="relative z-10 flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
            <span>Canvas View</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-zinc-800 font-semibold">Live Trigger Pipeline</span>
          </div>
          <span className="text-[11px] text-zinc-400 hidden sm:inline">
            Click any node to inspect payload &amp; reasoning metrics
          </span>
        </div>

        {/* Desktop & Tablet: Connected Sequence Flow */}
        <div className="relative z-10 hidden lg:grid grid-cols-5 gap-3 items-stretch">
          {nodes.map((node, index) => {
            const isCurrentlyExecuting = isSimulating && currentStep === index;
            const hasCompletedInSim = isSimulating ? currentStep >= index : true;
            const isSelected = activeNodeIndex === index;

            return (
              <div key={node.id} className="relative flex flex-col justify-between">
                {/* Node Box */}
                <button
                  type="button"
                  onClick={() => setActiveNodeIndex(index)}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 relative bg-white flex flex-col justify-between h-full ${
                    isSelected
                      ? "ring-2 ring-brand-500/80 border-brand-400 shadow-md"
                      : "border-zinc-200/90 hover:border-zinc-300 shadow-xs hover:shadow-sm"
                  } ${isCurrentlyExecuting ? "ring-2 ring-emerald-500 border-emerald-400 bg-emerald-50/20" : ""}`}
                >
                  <div>
                    {/* Node Header */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="w-7 h-7 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center">
                        {getNodeIcon(node.icon)}
                      </div>
                      <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">
                        {node.category}
                      </span>
                    </div>

                    {/* Node Name */}
                    <h4 className="text-xs font-bold text-zinc-900 mb-1 leading-snug line-clamp-1">
                      {node.name}
                    </h4>
                    <p className="text-[11px] text-zinc-500 line-clamp-1 mb-3">
                      {node.action}
                    </p>
                  </div>

                  {/* Node Footer Status */}
                  <div className="pt-2 border-t border-zinc-100 flex items-center justify-between text-[10px]">
                    <span className="font-mono text-zinc-400">{node.latency}</span>
                    <span
                      className={`inline-flex items-center gap-1 font-medium ${
                        isCurrentlyExecuting
                          ? "text-brand-600 animate-pulse"
                          : hasCompletedInSim
                          ? "text-emerald-600"
                          : "text-zinc-400"
                      }`}
                    >
                      {isCurrentlyExecuting ? (
                        <>
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-ping" />
                          Running
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          200 OK
                        </>
                      )}
                    </span>
                  </div>
                </button>

                {/* Connector Arrow to next node */}
                {index < nodes.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div
                      className={`w-3 h-3 rounded-full flex items-center justify-center bg-white border ${
                        isSimulating && currentStep > index
                          ? "border-emerald-500 text-emerald-600"
                          : "border-zinc-300 text-zinc-400"
                      }`}
                    >
                      <ArrowRight className="w-2 h-2" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile & Small Screen: Vertical Responsive Node Sequence */}
        <div className="relative z-10 flex lg:hidden flex-col gap-3">
          {nodes.map((node, index) => {
            const isCurrentlyExecuting = isSimulating && currentStep === index;
            const isSelected = activeNodeIndex === index;

            return (
              <div key={node.id} className="relative flex flex-col">
                <button
                  type="button"
                  onClick={() => setActiveNodeIndex(index)}
                  className={`w-full text-left p-3.5 rounded-xl border bg-white flex items-center justify-between transition-all ${
                    isSelected
                      ? "ring-2 ring-brand-500 border-brand-400 shadow-sm"
                      : "border-zinc-200"
                  } ${isCurrentlyExecuting ? "ring-2 ring-emerald-500 bg-emerald-50/20" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center shrink-0">
                      {getNodeIcon(node.icon)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-zinc-900">{node.name}</span>
                        <span className="text-[10px] text-zinc-400 uppercase tracking-wider">
                          {node.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500">{node.action}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-zinc-400">{node.latency}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </div>
                </button>

                {index < nodes.length - 1 && (
                  <div className="w-0.5 h-3 bg-zinc-200 mx-auto my-0.5" />
                )}
              </div>
            );
          })}
        </div>

        {/* Live Inspector Panel for Selected Node */}
        {activeNode && (
          <motion.div
            key={activeNode.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
            className="relative z-10 mt-6 p-4 sm:p-5 bg-zinc-900 text-white rounded-xl sm:rounded-2xl border border-zinc-800 shadow-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-zinc-800 gap-2 mb-3">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-brand-400" />
                <span className="text-xs font-bold text-zinc-200">
                  Node Inspector: {activeNode.name}
                </span>
                <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded text-zinc-300 font-mono">
                  ID: {activeNode.id}
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-zinc-400">
                <span>Latency: <strong className="text-emerald-400">{activeNode.latency}</strong></span>
                <span>Deterministic Fallback: <strong className="text-brand-300">Enabled</strong></span>
              </div>
            </div>

            {/* Payload meta grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs mb-3">
              {activeNode.meta &&
                Object.entries(activeNode.meta).map(([key, value]) => (
                  <div key={key} className="bg-zinc-800/80 p-2.5 rounded-lg border border-zinc-700/60">
                    <span className="text-[10px] text-zinc-400 uppercase tracking-wider block font-semibold mb-0.5">
                      {key.replace(/([A-Z])/g, " $1")}
                    </span>
                    <span className="font-mono text-zinc-100 text-xs truncate block">{value}</span>
                  </div>
                ))}
            </div>

            {/* Live output summary */}
            <div className="flex items-center justify-between text-xs text-zinc-400 bg-zinc-950/60 px-3 py-2 rounded-lg border border-zinc-800/80">
              <span className="flex items-center gap-1.5 font-mono text-[11px]">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Payload payload.verified: true → Dispatched downstream
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">
                Total Runs: {runCount.toLocaleString()}
              </span>
            </div>
          </motion.div>
        )}
      </div>

      {/* Mockup Footer Telemetry */}
      <div className="px-6 py-2.5 bg-zinc-100/60 border-t border-zinc-200/80 flex flex-wrap items-center justify-between text-[11px] text-zinc-500 gap-2">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Syntara Real-Time Bus: Connected
          </span>
          <span className="hidden sm:inline">Zero-Drop Guarantee</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[10px]">
          <span>Schema: Strict JSON</span>
          <span>·</span>
          <span>SSL 256-Bit Encrypted</span>
        </div>
      </div>
    </div>
  );
}
