"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, GitMerge, ListTodo, ShieldAlert, Sparkles, HeartHandshake } from "lucide-react";
import GlassCard from "../ui/GlassCard";

const benefits = [
  {
    icon: Sparkles,
    title: "Beta Deployment Phase",
    desc: "Selected SOHO businesses will get free deployment during the beta phase, letting you test features with zero software licensing fees."
  },
  {
    icon: GitMerge,
    title: "Influence Product Roadmap",
    desc: "Communicate directly with researchers. Suggest features, custom integrations, or UI dashboard options specific to your industry needs."
  },
  {
    icon: ListTodo,
    title: "Priority Assisted Onboarding",
    desc: "Get personalized setup assistance. We will audit your current SOHO network configuration and assist in deploying the virtual SDN controller."
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Researcher Support",
    desc: "Enjoy direct access to our core development team for quick troubleshooting, hardware pairing, and custom security policy audits."
  }
];

export default function Pilot() {
  return (
    <section id="pilot" className="py-6 md:py-20 px-4 md:px-6 relative overflow-hidden">

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Copy info */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="text-brand-purple font-bold text-xs uppercase tracking-widest block mb-3">
              Research & Validation
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6 leading-tight">
              Join Early Access Pilot Program
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              We are launching a Security Research Pilot and selecting a group of SOHO environments to receive free deployment during our beta phase once development completes.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              If your business fits our criteria (5–100 devices and active office operations), registering interest grants you early access and assists computer science research.
            </p>
            
            {/* Note badge */}
            <div className="flex gap-3 items-start p-4 rounded-xl bg-brand-purple/10 border border-brand-purple/20 max-w-md">
              <Award className="w-5 h-5 text-brand-purple-light shrink-0 mt-0.5" />
              <p className="text-xs text-brand-purple-light leading-normal">
                <strong>No obligations:</strong> This is a Security Research Pilot for a Final Year Project. Your registration enables us to gauge SOHO deployment environments for academic research.
              </p>
            </div>
          </div>
 
          {/* Right Side: Benefits cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <GlassCard
                  key={benefit.title}
                  delay={index * 0.1}
                  className="p-6 flex flex-col items-start text-left border-white/5 hover:border-brand-blue/30"
                >
                  <div className="p-2 rounded-lg bg-brand-blue/10 border border-brand-blue/20 text-brand-blue-light mb-4 w-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 font-display">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {benefit.desc}
                  </p>
                </GlassCard>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
