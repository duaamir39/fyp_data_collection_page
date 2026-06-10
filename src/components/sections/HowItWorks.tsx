"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, ShieldAlert, Lock, Bell, ChevronDown } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: Eye,
    title: "Monitor Network Traffic",
    desc: "A lightweight collector gathers flow statistics from SOHO office switches and routers, feeding telemetry back to the monitoring core without causing latency.",
  },
  {
    step: "02",
    icon: ShieldAlert,
    title: "Detect Suspicious Activity",
    desc: "Local machine learning algorithms inspect traffic flow signatures, immediately identifying anomalies like brute-force attempts or IoT data leaks.",
  },
  {
    step: "03",
    icon: Lock,
    title: "Isolate Threats Automatically",
    desc: "The SDN controller dynamically updates the open flow rules on the network switch, severing connectivity to the target device within milliseconds.",
  },
  {
    step: "04",
    icon: Bell,
    title: "Notify Administrators",
    desc: "Generates visual dashboard warnings and dispatches instant webhook alerts to IT coordinators, documenting the mitigation actions taken.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-6 md:py-20 px-4 md:px-6 relative">

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest block mb-3">
            Operational Protocol
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-gray-400 text-lg">
            Our automated security loop detects, validates, and isolates network intrusions autonomously in four unified steps.
          </p>
        </div>

        {/* Timeline Stepper */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line Connector */}
          <div className="absolute left-[30px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-brand-blue via-brand-purple to-brand-dark-950 md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-12">
            {steps.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`flex flex-col sm:flex-row items-start md:items-center relative ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Left/Right Content Card */}
                  <div className={`w-full sm:w-[calc(100%-80px)] md:w-[calc(50%-50px)] pl-16 sm:pl-16 md:pl-0 ${
                    isEven ? "md:text-right md:pr-10" : "md:text-left md:pl-10"
                  }`}>
                    <div className="glass-panel p-6 rounded-2xl border-white/5 hover:border-brand-purple/20 transition-colors duration-300">
                      <span className="text-[10px] font-bold text-brand-purple-light uppercase tracking-widest block mb-1">
                        Step {item.step}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-2 font-display">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bullet Marker (Center column) */}
                  <div className="absolute left-0 sm:left-[10px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="relative flex items-center justify-center">
                      {/* Pulsing ring */}
                      <div className="absolute w-12 h-12 rounded-full bg-brand-dark-950 border border-white/10 animate-pulse-slow" />
                      
                      {/* Main sphere */}
                      <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-purple flex items-center justify-center text-white border-2 border-brand-dark-950 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* Spacer for MD screens to keep grid balanced */}
                  <div className="hidden md:block md:w-[calc(50%-50px)]" />

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
