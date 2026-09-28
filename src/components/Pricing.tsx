"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight, Info } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export function Pricing({ onSelectPlan }: PricingProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  return (
    <section id="pricing" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
            Concept Pricing Structure
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
            Predictable plans that grow with you.
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal mb-8">
            Transparent tiers designed for ambitious teams. Fictional concept pricing for portfolio
            demonstration.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-2xl bg-zinc-100 border border-zinc-200 shadow-inner">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                billingCycle === "monthly"
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                billingCycle === "annual"
                  ? "bg-brand-600 text-white shadow-sm"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              <span>Annual Billing</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider ${
                  billingCycle === "annual"
                    ? "bg-brand-700 text-brand-100"
                    : "bg-emerald-100 text-emerald-800"
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          {PRICING_PLANS.map((plan) => {
            const price =
              billingCycle === "annual" ? plan.priceAnnual : plan.priceMonthly;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? "bg-white border-2 border-brand-500 shadow-xl shadow-brand-500/10 lg:-translate-y-2"
                    : "bg-gradient-to-b from-[#fafbfe] to-white border border-zinc-200/90 shadow-xs hover:shadow-card-hover"
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-zinc-950">{plan.name}</h3>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider font-mono">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-500 mb-6 leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-zinc-100">
                    <span className="text-4xl sm:text-5xl font-extrabold text-zinc-950 font-mono tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs font-semibold text-zinc-500">
                      / month {billingCycle === "annual" ? "(billed yearly)" : ""}
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                      Included in this concept tier:
                    </span>
                    {plan.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs text-zinc-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200/60">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 group ${
                    plan.popular
                      ? "bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white shadow-md shadow-brand-500/20"
                      : "bg-zinc-900 hover:bg-zinc-800 text-white shadow-xs"
                  }`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Fictional Concept Disclaimer Box */}
        <div className="max-w-3xl mx-auto p-4 bg-zinc-50 rounded-2xl border border-zinc-200/80 flex items-start gap-3 text-xs text-zinc-500">
          <Info className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-zinc-700 font-semibold">Portfolio Concept Notice:</strong>{" "}
            Syntara AI is a fictional product concept engineered by Manoj Kushwaha. All pricing
            tiers, quotas, and subscription terms displayed above are strictly for illustrative and
            portfolio showcase purposes. No commercial transactions are accepted.
          </p>
        </div>
      </div>
    </section>
  );
}
