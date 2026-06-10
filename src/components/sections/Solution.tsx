"use client";

import React from "react";
import { motion } from "framer-motion";
import { BrainCircuit, Network, Zap, Lock, Monitor, Smartphone, Check } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Threat Detection",
    desc: "Analyzes telemetry, protocol packet size, and bandwidth anomalies. Our lightweight heuristic model detects ransomware, DDoS, and sniffing attacks locally.",
    isFeatured: true,
    highlight: "Real-time machine learning inference"
  },
  {
    icon: Network,
    title: "SDN-Based Network Control",
    desc: "Uses Software-Defined Networking protocols to control flow tables dynamically. Rewrites packet routes instantly without requiring expensive proprietary hardware.",
    isFeatured: true,
    highlight: "Zero hardware vendor lock-in"
  },
  {
    icon: Zap,
    title: "Automated Threat Mitigation",
    desc: "Responds to threats within milliseconds, stopping lateral spread across your company network before damage occurs.",
    isFeatured: false
  },
  {
    icon: Lock,
    title: "Device Isolation & Quarantine",
    desc: "Isolates compromised devices (like target laptops or smart cameras) into a sandboxed VLAN block with zero access to production systems.",
    isFeatured: false
  },
  {
    icon: Monitor,
    title: "Real-Time Monitoring Dashboard",
    desc: "A simplified, unified dashboard designed for non-technical office staff. View logs, alerts, active users, and system status at a glance.",
    isFeatured: false
  },
  {
    icon: Smartphone,
    title: "IoT Device Onboarding",
    desc: "Safely registers smart TVs, badge readers, and security cameras into dedicated segments, containing their operational space.",
    isFeatured: false
  }
];

export default function Solution() {
  return (
    <section id="solution" className="py-6 md:py-20 px-4 md:px-6 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-6 md:mb-16 text-left">
          <span className="text-brand-purple font-bold text-xs uppercase tracking-widest block mb-3">
            The Intelligent Solution
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 text-glow-purple">
            Meet SOHO Shield AI
          </h2>
          <p className="text-gray-400 text-lg">
            Our Final Year Research Project integrates local AI monitoring with Software-Defined Networking (SDN) to bring military-grade network quarantine capabilities to standard office routers.
          </p>
        </div>

        {/* Feature Grid (Asymmetrical Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Top Row: Two Featured Cards (Span 6 out of 12 each) */}
          {features.filter(f => f.isFeatured).map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="col-span-1 md:col-span-2 lg:col-span-6">
                <GlassCard className="h-full p-8 flex flex-col justify-between group">
                  <div>
                    <div className="inline-flex p-3 rounded-xl bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 font-display">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-base leading-relaxed mb-6">
                      {feature.desc}
                    </p>
                  </div>
                  
                  {feature.highlight && (
                    <div className="flex items-center gap-2 text-xs font-semibold text-brand-blue-light bg-brand-blue/5 border border-brand-blue/10 px-3 py-1.5 rounded-lg w-fit">
                      <Check className="w-3.5 h-3.5" />
                      {feature.highlight}
                    </div>
                  )}
                </GlassCard>
              </div>
            );
          })}

          {/* Bottom Row: Four Standard Cards (Span 3 out of 12 each) */}
          {features.filter(f => !f.isFeatured).map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="col-span-1 md:col-span-1 lg:col-span-3">
                {/* Note: Tailwind cols setup - let's make standard grid cards take 3 spans out of 6 (which is half width on large screens) */}
                <GlassCard className="h-full p-6 flex flex-col justify-start group">
                  <div className="inline-flex p-2.5 rounded-lg bg-brand-purple/10 border border-brand-purple/20 text-brand-purple-light mb-4 group-hover:rotate-6 transition-transform duration-300 w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2 font-display">
                    {feature.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </GlassCard>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
