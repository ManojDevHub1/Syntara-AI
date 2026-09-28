"use client";

import React, { useState } from "react";
import { ToastProvider } from "@/components/Toast";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Features } from "@/components/Features";
import { ProductShowcase } from "@/components/ProductShowcase";
import { WorkflowGenerator } from "@/components/WorkflowGenerator";
import { Benefits } from "@/components/Benefits";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { AuthModal } from "@/components/AuthModal";
import { DemoModal } from "@/components/DemoModal";

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signup" | "login">("signup");
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  const handleOpenAuth = (mode: "signup" | "login", plan?: string) => {
    setAuthMode(mode);
    setSelectedPlan(plan);
    setAuthModalOpen(true);
  };

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
  };

  return (
    <ToastProvider>
      <div className="relative min-h-screen bg-[#fafbfe] text-zinc-900 overflow-x-hidden selection:bg-brand-100 selection:text-brand-800">
        {/* Sticky Navbar */}
        <Navbar onOpenAuth={(mode) => handleOpenAuth(mode)} />

        <main id="main-content">
          {/* Hero Section with Workflow Mockup */}
          <Hero
            onStartFree={() => handleOpenAuth("signup")}
            onWatchDemo={handleOpenDemo}
          />

          {/* Trust / Capabilities Strip */}
          <TrustStrip />

          {/* Problem / Solution Section */}
          <ProblemSolution />

          {/* Features Section */}
          <Features />

          {/* Product Showcase with Build / Test / Monitor tabs */}
          <ProductShowcase />

          {/* AI Workflow Generation Section */}
          <WorkflowGenerator />

          {/* Benefits Section */}
          <Benefits />

          {/* Pricing Section */}
          <Pricing
            onSelectPlan={(planName) => handleOpenAuth("signup", planName)}
          />

          {/* FAQ Accordion Section */}
          <FAQ />

          {/* Final CTA Section */}
          <FinalCTA onStartFree={() => handleOpenAuth("signup")} />
        </main>

        {/* Footer */}
        <Footer />

        {/* Interactive Modals */}
        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          defaultMode={authMode}
          selectedPlan={selectedPlan}
        />

        <DemoModal
          isOpen={demoModalOpen}
          onClose={() => setDemoModalOpen(false)}
          onStartFree={() => {
            setDemoModalOpen(false);
            handleOpenAuth("signup");
          }}
        />
      </div>
    </ToastProvider>
  );
}
