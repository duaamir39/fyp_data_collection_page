"use client";

import React from "react";
import { ShieldAlert, Zap, Cpu, Activity } from "lucide-react";
import Counter from "../ui/Counter";
import GlassCard from "../ui/GlassCard";

const stats = [
  {
    icon: ShieldAlert,
    title: "AI Detection Accuracy",
    value: 99.9,
    decimals: 1,
    prefix: "",
    suffix: "%",
    desc: "Heuristics and behavior matching correctly identifying anomalous port-scanning and spoofing threats."
  },
  {
    icon: Zap,
    title: "SDN Quarantine Speed",
    value: 50,
    decimals: 0,
    prefix: "< ",
    suffix: "ms",
    desc: "OpenFlow flow tables updated dynamically, blocking bad packets at the switch interface instantly."
  },
  {
    icon: Cpu,
    title: "Local Overhead",
    value: 1.2,
    decimals: 1,
    prefix: "< ",
    suffix: "%",
    desc: "Highly optimized software runs in background of standard hardware without congesting throughput."
  },
  {
    icon: Activity,
    title: "Monitoring Frequency",
    value: 24,
    decimals: 0,
    prefix: "",
    suffix: "/7",
    desc: "Persistent threat scoring, automatically logging alerts and isolating devices day or night."
  }
];

export default function Statistics() {
  return (
    <section className="py-6 md:py-16 px-4 md:px-6 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <GlassCard
                key={stat.title}
                hoverEffect={true}
                delay={index * 0.1}
                className="p-6 flex flex-col justify-between border-white/5 hover:border-brand-purple/20 text-left h-full"
              >
                <div>
                  <div className="p-2.5 rounded-lg bg-brand-purple/10 border border-brand-purple/20 text-brand-purple-light mb-5 w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  {/* Counter Value */}
                  <div className="text-4xl md:text-5xl font-black text-white font-display tracking-tight mb-2">
                    <Counter
                      value={stat.value}
                      decimals={stat.decimals}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>

                  <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    {stat.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-xs leading-relaxed mt-2 pt-2 border-t border-white/5">
                  {stat.desc}
                </p>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
