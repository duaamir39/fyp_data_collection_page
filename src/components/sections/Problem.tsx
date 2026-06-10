"use client";

import React from "react";
import { UserX, Router, ShieldAlert, BadgeDollarSign } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const vulnerabilities = [
  {
    icon: UserX,
    title: "No Dedicated Security Team",
    desc: "92% of small businesses lack full-time cybersecurity personnel. IT support is stretched, leaving configuration gaps and unmonitored systems.",
    gradient: "from-blue-500/10 to-transparent"
  },
  {
    icon: Router,
    title: "Unsecured IoT Network Devices",
    desc: "Smart printers, VoIP phones, and IP cameras are highly vulnerable. Once compromised, hackers use them to move laterally across your network.",
    gradient: "from-purple-500/10 to-transparent"
  },
  {
    icon: ShieldAlert,
    title: "Surging Automated Attacks",
    desc: "Cybercriminals use automated bots to scan IP ranges. Small businesses are targeted just as heavily as large corporations, but are easier to breach.",
    gradient: "from-pink-500/10 to-transparent"
  },
  {
    icon: BadgeDollarSign,
    title: "Prohibitive Enterprise Pricing",
    desc: "Standard Next-Gen Firewalls (NGFW) and Security Operations Centers (SOC) require expensive upfront licenses and certified personnel to operate.",
    gradient: "from-cyan-500/10 to-transparent"
  }
];

export default function Problem() {
  return (
    <section id="problem" className="py-6 md:py-20 px-4 md:px-6 relative">
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest block mb-3">
            The Cybersecurity Gap
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
            Why Small Businesses Are Vulnerable
          </h2>
          <p className="text-gray-400 text-lg">
            Small business networks are no longer hidden. Attack bots don&apos;t care about company size, making modern security a survival requirement.
          </p>
        </div>

        {/* Vulnerabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vulnerabilities.map((vuln, index) => {
            const Icon = vuln.icon;
            return (
              <GlassCard
                key={vuln.title}
                delay={index * 0.1}
                className="overflow-hidden group animate-glow"
              >
                
                <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="p-4 rounded-xl bg-brand-dark-950 border border-white/5 text-brand-purple-light group-hover:text-white group-hover:border-brand-purple/40 transition-all duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 font-display">
                      {vuln.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {vuln.desc}
                    </p>
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
