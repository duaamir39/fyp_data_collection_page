"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Let's use standard imports from "framer-motion".
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is SOHO Shield AI?",
    answer: "SOHO Shield AI is a lightweight cybersecurity solution designed to bring enterprise-level network monitoring and containment to small businesses. Developed as a Final Year Project, it pairs client-side machine learning traffic heuristics with Software-Defined Networking (SDN) protocols to identify threats (like spoofed MACs or anomalous downloads) and isolate them instantly at the switch level."
  },
  {
    question: "Is the pilot program free?",
    answer: "Yes. Selected SOHO businesses will get free deployment during the beta phase. We are validating network compatibility as part of our Security Research Pilot, so there are no software licensing fees or upfront setup costs associated with participating."
  },
  {
    question: "When will the product be available?",
    answer: "Development of our core agent and SDN controller middleware is currently wrapping up. We plan to begin onboarding selected pilot sites in sequential batches over the coming months. Once you register, we will keep you informed of exact launch timelines."
  },
  {
    question: "Who should join the pilot program?",
    answer: "Small businesses with 5 to 100 network devices looking to protect their office network from unknown threats. Ideal test environments for our Security Research Pilot include small software houses, call centers, medical clinics, schools, coworking spaces, and SOHO offices that need AI-based detection for small office networks."
  },
  {
    question: "How will my information be used?",
    answer: "Your information will only be used to evaluate pilot eligibility and coordinate communications. Any metadata or telemetry collected during the pilot will be fully anonymized, stored securely on Firestore, and used strictly for academic research and software performance validation. We do not sell or monetize company data."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-6 md:py-20 px-4 md:px-6 relative overflow-hidden">

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-16">
          <span className="text-brand-purple font-bold text-xs uppercase tracking-widest block mb-3">
            Inquiries
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4 text-glow-purple">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Everything you need to know about SOHO Shield AI, our pilot requirements, and data guidelines.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`glass-panel border-white/5 rounded-2xl transition-all duration-300 ${
                  isOpen ? "border-brand-purple/20" : "hover:border-white/10"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                >
                  <div className="flex gap-4 items-center">
                    <HelpCircle className={`w-5 h-5 shrink-0 ${isOpen ? "text-brand-purple-light" : "text-gray-500 group-hover:text-gray-400"} transition-colors`} />
                    <span className="text-base font-semibold text-white tracking-wide">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1.5 rounded-lg bg-white/5 border border-white/5 text-gray-400 group-hover:text-white transition-all duration-300 ${isOpen ? "rotate-180 text-brand-purple-light border-brand-purple/20" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial="collapsed"
                      animate="open"
                      exit="collapsed"
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 }
                      }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-white/5 mt-[-1px]">
                        <p className="text-gray-400 text-sm leading-relaxed pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
