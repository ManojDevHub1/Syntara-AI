"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Search } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  const [openIds, setOpenIds] = useState<string[]>(["faq-1"]); // Default first open
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFAQs = FAQ_ITEMS.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="resources" className="py-20 sm:py-28 bg-[#fafbfe] border-y border-zinc-200/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Knowledge Base
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
            Everything you need to understand how Syntara handles reasoning, integrations, and
            execution reliability.
          </p>

          {/* Quick Search Filter */}
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. coding, integrations, free plan)..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-zinc-200 rounded-xl text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 shadow-2xs transition-all"
            />
          </div>
        </div>

        {/* Animated Accordion List */}
        <div className="space-y-3.5">
          {filteredFAQs.length === 0 ? (
            <div className="text-center py-8 text-xs text-zinc-500 bg-white rounded-2xl border border-zinc-200">
              No matching questions found for &ldquo;{searchQuery}&rdquo;.
            </div>
          ) : (
            filteredFAQs.map((faq) => {
              const isOpen = openIds.includes(faq.id);

              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-zinc-200/90 bg-white shadow-2xs overflow-hidden transition-all duration-200 hover:border-zinc-300"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        toggleFAQ(faq.id);
                      }
                    }}
                    aria-expanded={isOpen}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  >
                    <span className="text-sm sm:text-base font-bold text-zinc-900">
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg bg-zinc-50 border border-zinc-200/80 flex items-center justify-center text-zinc-500 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 bg-brand-50 text-brand-600 border-brand-200" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100/80">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
