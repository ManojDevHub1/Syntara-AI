"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Megaphone,
  Headphones,
  TrendingUp,
  Cog,
  LayoutGrid,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { CAPABILITY_CATEGORIES } from "@/lib/constants";

export function TrustStrip() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("crm");

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "crm":
        return <Users className="w-4 h-4" />;
      case "marketing":
        return <Megaphone className="w-4 h-4" />;
      case "support":
        return <Headphones className="w-4 h-4" />;
      case "sales":
        return <TrendingUp className="w-4 h-4" />;
      case "operations":
        return <Cog className="w-4 h-4" />;
      case "product":
        return <LayoutGrid className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const selectedCategory =
    CAPABILITY_CATEGORIES.find((c) => c.id === selectedCategoryId) ||
    CAPABILITY_CATEGORIES[0];

  return (
    <section className="py-14 sm:py-20 border-y border-zinc-200/70 bg-white/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2">
            Ecosystem Integrations
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 tracking-tight">
            Built for modern teams
          </h2>
          <p className="text-sm text-zinc-600 mt-2">
            Native adapters, pre-built schemas, and autonomous decision engines across your entire
            enterprise stack.
          </p>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {CAPABILITY_CATEGORIES.map((cat) => {
            const isSelected = cat.id === selectedCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryId(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isSelected
                    ? "bg-zinc-900 text-white shadow-md shadow-zinc-950/10 scale-102"
                    : "bg-zinc-100/80 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/70 border border-transparent"
                }`}
              >
                <span
                  className={
                    isSelected ? "text-brand-300" : "text-zinc-500"
                  }
                >
                  {getCategoryIcon(cat.id)}
                </span>
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Category Preview Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-zinc-50 to-white rounded-2xl border border-zinc-200/80 p-5 sm:p-7 shadow-xs">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
            >
              {/* Category Info */}
              <div className="md:col-span-2 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-md border border-brand-100">
                  {getCategoryIcon(selectedCategory.id)}
                  <span>{selectedCategory.name} Automation Suite</span>
                </div>
                <h3 className="text-lg font-bold text-zinc-900">
                  {selectedCategory.description}
                </h3>
                <div className="flex items-center gap-2 text-xs text-zinc-600 bg-white p-3 rounded-xl border border-zinc-200/70">
                  <span className="font-semibold text-zinc-900 shrink-0">Sample Flow:</span>
                  <span className="text-zinc-700">{selectedCategory.sampleFlow}</span>
                </div>
              </div>

              {/* Supported Adapters Pill Stack */}
              <div className="bg-white p-4 rounded-xl border border-zinc-200/80 shadow-2xs">
                <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-2.5">
                  Supported Adapters
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCategory.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 bg-zinc-100/90 text-zinc-800 rounded-lg text-xs font-medium border border-zinc-200/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-emerald-600 font-medium">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Bi-directional Sync
                  </span>
                  <span className="text-zinc-400">Zero Code</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Clean Protocol Badges Strip */}
        <div className="mt-10 pt-6 border-t border-zinc-200/60 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-medium text-zinc-500">
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            150+ Standard API Adapters
          </span>
          <span className="text-zinc-300 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
            Webhook Ingestion &lt;15ms
          </span>
          <span className="text-zinc-300 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            SOC2 Type II Compatible Architecture
          </span>
          <span className="text-zinc-300 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Self-Healing Execution Retries
          </span>
        </div>
      </div>
    </section>
  );
}
