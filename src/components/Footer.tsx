"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white border-t border-zinc-200/80 pt-16 pb-12 text-zinc-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-zinc-100">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group inline-flex">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-600 flex items-center justify-center text-white shadow-sm shadow-brand-500/20">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-xl font-extrabold text-zinc-950 tracking-tight">
                Syntara AI
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-zinc-500 max-w-sm mb-4 leading-relaxed">
              Turn repetitive work into intelligent workflows. An autonomous orchestration platform
              connecting tools, data, and decisions for modern teams.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs text-zinc-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>All Systems Operational · v2.4</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#product" className="hover:text-zinc-950 transition-colors">
                  Visual Canvas
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-zinc-950 transition-colors">
                  AI Reasoner Core
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-zinc-950 transition-colors">
                  150+ Integrations
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-zinc-950 transition-colors">
                  Test Sandbox
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-zinc-950 transition-colors">
                  Live Telemetry
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wider mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#solutions" className="hover:text-zinc-950 transition-colors">
                  Revenue &amp; Sales
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-zinc-950 transition-colors">
                  Marketing Automation
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-zinc-950 transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-zinc-950 transition-colors">
                  Operations &amp; Finance
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-zinc-950 transition-colors">
                  Product Telemetry
                </a>
              </li>
            </ul>
          </div>

          {/* Resources & Pricing */}
          <div>
            <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#resources" className="hover:text-zinc-950 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-zinc-950 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-zinc-950 transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-zinc-950 transition-colors">
                  FAQ Knowledgebase
                </a>
              </li>
              <li>
                <a href="#resources" className="hover:text-zinc-950 transition-colors">
                  System Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-xs font-bold text-zinc-950 uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <span className="text-zinc-400">About Syntara</span>
              </li>
              <li>
                <span className="text-zinc-400">Security Standards</span>
              </li>
              <li>
                <span className="text-zinc-400">Privacy Policy</span>
              </li>
              <li>
                <span className="text-zinc-400">Terms of Service</span>
              </li>
              <li>
                <span className="text-brand-600 font-semibold">Manoj Kushwaha Portfolio</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="font-semibold text-zinc-800">
              © 2026 Syntara AI — Concept project by Manoj Kushwaha
            </span>
            <span className="hidden sm:inline text-zinc-300">•</span>
            <span className="text-zinc-400">
              Portfolio Concept Demonstration · Fictional SaaS
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors text-xs font-medium"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
