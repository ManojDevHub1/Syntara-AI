"use client";

import React from "react";
import { Clock, RefreshCw, Zap, Target, CheckCircle2 } from "lucide-react";
import { BENEFITS_LIST } from "@/lib/constants";

export function Benefits() {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case "Clock":
        return <Clock className="w-5 h-5 text-brand-600" />;
      case "RefreshCw":
        return <RefreshCw className="w-5 h-5 text-indigo-600" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-amber-500" />;
      case "Target":
        return <Target className="w-5 h-5 text-emerald-600" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#fafbfe] border-y border-zinc-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
            Compounding Impact
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
            Built to amplify human potential.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Eliminate low-leverage drudgery and unleash your team to focus on high-judgment,
            strategic creativity that drives real growth.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS_LIST.map((benefit, idx) => (
            <div
              key={benefit.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-zinc-200/80 shadow-xs hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getBenefitIcon(benefit.icon)}
                  </div>
                  <span className="text-[11px] font-bold text-zinc-400 font-mono">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-brand-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed mb-6">
                  {benefit.description}
                </p>
              </div>

              {/* Metric Callout */}
              <div className="pt-4 border-t border-zinc-100">
                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 block font-mono">
                  {benefit.metric}
                </span>
                <span className="text-[11px] font-medium text-zinc-500 block mt-0.5">
                  {benefit.metricLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
