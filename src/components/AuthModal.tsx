"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Check, ArrowRight, ShieldCheck, Mail, Lock, User } from "lucide-react";
import confetti from "canvas-confetti";
import { useToast } from "./Toast";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: "signup" | "login";
  selectedPlan?: string;
}

export function AuthModal({ isOpen, onClose, defaultMode = "signup", selectedPlan }: AuthModalProps) {
  const [mode, setMode] = useState<"signup" | "login">(defaultMode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    setMode(defaultMode);
    setIsSuccess(false);
  }, [defaultMode, isOpen]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6366f1", "#4f46e5", "#3b82f6", "#10b981"],
      });
      showToast(
        mode === "signup"
          ? "Concept account created! Welcome to Syntara AI."
          : "Logged in to demo workspace."
      );
    }, 900);
  };

  const handleFillDemo = () => {
    setName("Alex Rivera");
    setEmail("alex.rivera@syntara-demo.com");
    setPassword("Syntara2026!Demo");
    showToast("Filled with demo tester credentials", "info");
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/40 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-zinc-200/90 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Subtle gradient banner */}
          <div className="h-2 bg-gradient-to-r from-brand-600 via-indigo-500 to-blue-500" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-lg text-zinc-400 hover:text-zinc-700 hover:bg-zinc-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8">
            {isSuccess ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">
                  {mode === "signup" ? "Account Initialized" : "Welcome Back"}
                </h3>
                <p className="text-sm text-zinc-600 mb-6 leading-relaxed">
                  You are now connected to the Syntara AI interactive sandbox workspace.
                  All workflow engines and test sandboxes are enabled.
                </p>
                <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 text-xs text-zinc-500 mb-6 flex items-center gap-2 text-left">
                  <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0" />
                  <span>
                    Portfolio Concept Note: This is an interactive frontend demo built by Manoj Kushwaha.
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
                >
                  Enter Workspace Canvas
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-200 flex items-center justify-center text-brand-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-lg text-zinc-900 tracking-tight">Syntara AI</span>
                </div>

                <h2 id="auth-modal-title" className="text-xl font-bold text-zinc-900 mb-1">
                  {mode === "signup" ? "Get started with Syntara" : "Log in to your workspace"}
                </h2>
                <p className="text-xs text-zinc-500 mb-5">
                  {selectedPlan
                    ? `Selected tier: ${selectedPlan} (Demo Sandbox)`
                    : "Turn repetitive work into intelligent workflows in minutes."}
                </p>

                {/* Concept badge */}
                <div className="mb-5 px-3 py-2 bg-indigo-50/60 border border-indigo-100 rounded-lg flex items-center justify-between text-xs text-indigo-700">
                  <span className="font-medium">Portfolio Concept Sandbox</span>
                  <button
                    type="button"
                    onClick={handleFillDemo}
                    className="text-[11px] underline font-semibold text-brand-600 hover:text-brand-800"
                  >
                    Quick-Fill Demo Info
                  </button>
                </div>

                {/* Tab switch */}
                <div className="flex p-1 bg-zinc-100 rounded-xl mb-5 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className={`flex-1 py-1.5 rounded-lg transition-all ${
                      mode === "signup"
                        ? "bg-white text-zinc-900 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    Create Free Account
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className={`flex-1 py-1.5 rounded-lg transition-all ${
                      mode === "login"
                        ? "bg-white text-zinc-900 shadow-sm"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    Sign In
                  </button>
                </div>

                {/* Social Login simulation */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    type="button"
                    onClick={handleFillDemo}
                    className="flex items-center justify-center gap-2 py-2 px-3 border border-zinc-200 rounded-xl text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                      />
                    </svg>
                    <span>Google SSO</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleFillDemo}
                    className="flex items-center justify-center gap-2 py-2 px-3 border border-zinc-200 rounded-xl text-xs font-medium text-zinc-700 hover:bg-zinc-50 transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    <span>GitHub</span>
                  </button>
                </div>

                <div className="relative flex py-2 items-center mb-4">
                  <div className="flex-grow border-t border-zinc-200"></div>
                  <span className="flex-shrink mx-3 text-[11px] uppercase tracking-wider text-zinc-400 font-medium">
                    Or with email
                  </span>
                  <div className="flex-grow border-t border-zinc-200"></div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-3">
                  {mode === "signup" && (
                    <div>
                      <label className="block text-xs font-medium text-zinc-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Manoj Kushwaha"
                          className="w-full pl-9 pr-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1">
                      Work Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full pl-9 pr-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full pl-9 pr-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-xs text-zinc-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full mt-2 py-2.5 px-4 bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white text-xs font-semibold rounded-xl transition-all shadow-md shadow-brand-500/20 flex items-center justify-center gap-2 group disabled:opacity-70"
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{mode === "signup" ? "Create Free Workspace" : "Access Workspace"}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-[11px] text-center text-zinc-400 mt-4">
                  By continuing, you acknowledge this is a frontend portfolio concept project by Manoj Kushwaha.
                </p>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
