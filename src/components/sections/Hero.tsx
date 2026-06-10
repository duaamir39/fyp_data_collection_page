"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ChevronRight, Activity } from "lucide-react";
import Topology from "../ui/Topology";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-24 pb-6 md:pt-40 md:pb-20 px-4 md:px-6 overflow-hidden">
      {/* Background Gradients & Mesh */}
      <div className="absolute inset-0 bg-cyber-grid bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Side: Headlines and CTAs */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/10 border border-brand-purple/30 text-brand-purple-light text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Security Research Pilot • Beta Deployment Phase
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-black tracking-tight leading-[1.1] mb-6"
          >
            Enterprise-Level{" "}
            <span className="bg-gradient-to-r from-brand-blue via-brand-purple-light to-brand-purple bg-clip-text text-transparent">
              Network Security
            </span>{" "}
            for Small Businesses
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-2xl"
          >
            Protect your office network from unknown threats using AI-based detection for small office networks. Apply to receive a free pilot security assessment.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={() => handleScrollTo("#register")}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-base font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.55)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group"
            >
              Join Early Access Pilot Program
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => handleScrollTo("#problem")}
              className="px-8 py-4 rounded-xl bg-brand-dark-900 border border-white/10 text-base font-semibold text-gray-300 hover:text-white hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Learn More
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 pt-8 border-t border-white/5 w-full flex items-center gap-6 text-gray-500 text-xs"
          >
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4 text-brand-purple" />
              <span>SDN-controller driven</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            <div>
              <span>Designed for 5–100 employees</span>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Interactive Cybersecurity Dashboard Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 w-full flex justify-center"
        >
          <div className="relative w-full">
            {/* Soft decorative glow background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-brand-blue/20 rounded-2xl filter blur-2xl opacity-60 pointer-events-none" />
            <Topology />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
