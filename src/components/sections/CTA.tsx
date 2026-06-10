"use client";

import React from "react";
import { ShieldCheck, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  const handleScrollToRegister = () => {
    const el = document.querySelector("#register");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-6 md:py-20 px-4 md:px-6 relative overflow-hidden">

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        {/* Glow border banner */}
        <div className="glass-panel border-brand-purple/20 bg-gradient-to-b from-brand-dark-900/80 to-brand-dark-950/90 rounded-3xl p-6 md:p-16 relative overflow-hidden shadow-[0_0_30px_rgba(168,85,247,0.15)]">
          {/* Inner details grid overlay */}
          <div className="absolute inset-0 bg-cyber-grid bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
            
            <div className="inline-flex p-3 rounded-2xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple-light mb-6 animate-pulse-slow">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white mb-6 leading-tight">
              Help Shape the Future of <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-brand-blue via-brand-purple-light to-brand-purple bg-clip-text text-transparent">
                Small Business Cybersecurity
              </span>
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Protect your office network from unknown threats while providing telemetry metrics to our Computer Science researchers. Spots in our Security Research Pilot are limited.
            </p>

            <button
              onClick={handleScrollToRegister}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-base font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group cursor-pointer"
            >
              Join Early Access Pilot Program
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Small note */}
            <span className="text-[10px] text-gray-500 uppercase tracking-widest mt-6 block">
              Security Research Pilot • Beta Deployment Phase
            </span>

          </div>
        </div>

      </div>
    </section>
  );
}
