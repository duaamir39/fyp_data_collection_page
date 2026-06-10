"use client";

import React from "react";
import { GraduationCap, Award, BookOpen, GitFork, GitCommit, FileText } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const researchAreas = [
  {
    icon: GraduationCap,
    title: "SDN Routing & Isolation",
    desc: "Implementing customized OpenFlow tables inside virtual switches (OVS) to partition compromised SOHO segments dynamically."
  },
  {
    icon: BookOpen,
    title: "Lightweight ML Telemetry",
    desc: "Training optimized decision-tree and heuristic classifiers to inspect packet metrics locally on low-cost devices."
  },
  {
    icon: FileText,
    title: "Market Need Study",
    desc: "Analyzing cost thresholds and technical hurdles that prevent small offices from adopting standard intrusion systems."
  }
];

export default function Founder() {
  return (
    <section id="founder" className="py-6 md:py-20 px-4 md:px-6 relative">

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Researchers Info */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand-blue font-bold text-xs uppercase tracking-widest block">
              Academic Thesis & Development
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight">
              Built by Computer Science Researchers
            </h2>
            <p className="text-gray-400 text-base leading-relaxed">
              SOHO Shield AI is being developed as an active **Final Year Project (FYP)** in Computer Science. Our research focuses on bridging the security gap for small businesses that lack the budget for full-scale corporate firewalls and SOC monitoring.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              By pairing modern Software-Defined Networking principles with lightweight machine learning classification, we hope to prove that automated threat quarantine can run locally, securely, and cost-effectively.
            </p>
            
            {/* Repository Info badge */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-xs text-gray-500 bg-brand-dark-950/80 border border-white/5 px-3 py-1.5 rounded-lg">
                <GitCommit className="w-3.5 h-3.5 text-brand-purple" />
                <span>Active Prototype V0.8</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 bg-brand-dark-950/80 border border-white/5 px-3 py-1.5 rounded-lg">
                <GitFork className="w-3.5 h-3.5 text-brand-blue" />
                <span>Open-Source Core Daemon</span>
              </div>
            </div>
          </div>
 
          {/* Right Side: Research Focus Cards */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">
              Primary Research Objectives
            </h3>
            
            <div className="space-y-4">
              {researchAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div
                    key={area.title}
                    className="flex items-start gap-4 p-5 rounded-2xl glass-panel hover:border-brand-purple/20 transition-all duration-300 group"
                  >
                    <div className="p-2.5 rounded-lg bg-brand-purple/10 border border-brand-purple/20 text-brand-purple-light shrink-0 flex items-center justify-center w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-brand-purple-light" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1 tracking-wide font-display">
                        {area.title}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {area.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
