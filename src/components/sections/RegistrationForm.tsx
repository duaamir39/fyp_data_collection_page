"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ShieldCheck, AlertCircle, Loader2 } from "lucide-react";
import { registerPilotInterest } from "@/lib/firebase";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    industry: "",
    employeeCount: "",
    deviceCount: "",
    email: "",
    phone: "",
    biggestChallenge: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const industries = [
    "Software House / IT Services",
    "Call Center",
    "Medical Clinic / Healthcare",
    "School / Educational Institution",
    "Coworking Space",
    "Retail & E-commerce",
    "Professional Services (Law, Finance)",
    "Other Small Business",
  ];

  const employeeRanges = ["5-10", "11-20", "21-50", "51-100", "100+"];
  const deviceRanges = ["1-10", "11-30", "31-70", "71-150", "150+"];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Simple validation
    if (
      !formData.fullName ||
      !formData.companyName ||
      !formData.industry ||
      !formData.employeeCount ||
      !formData.deviceCount ||
      !formData.email ||
      !formData.phone
    ) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }

    try {
      const result = await registerPilotInterest(formData);
      if (result.success) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setError(err?.message || "Failed to register. Please check your internet connection.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="register" className="py-6 md:py-20 px-4 md:px-6 relative overflow-hidden border-y border-white/5">

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-6 md:mb-12">
          <span className="text-brand-blue font-bold text-xs uppercase tracking-widest block mb-3">
            Secure Early Access
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 text-glow-blue">
            Join Early Access Pilot Program
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Fill out the form below to register for our Security Research Pilot. Selected SOHO businesses will receive a free pilot security assessment and deployment during our beta phase.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-panel border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(3,7,18,0.6)]">
          <AnimatePresence mode="wait">
            {!success ? (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {error && (
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Row 1: Full Name / Company Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="fullName" className="text-xs font-semibold text-gray-300">
                      Full Name <span className="text-brand-purple-light">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Alex Carter"
                      required
                      className="w-full bg-brand-dark-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="companyName" className="text-xs font-semibold text-gray-300">
                      Company Name <span className="text-brand-purple-light">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Apex Software"
                      required
                      className="w-full bg-brand-dark-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
                    />
                  </div>
                </div>

                {/* Row 2: Industry / Employee Count */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="industry" className="text-xs font-semibold text-gray-300">
                      Industry <span className="text-brand-purple-light">*</span>
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-dark-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all cursor-pointer"
                    >
                      <option value="" disabled className="bg-brand-dark-950 text-gray-600">Select Industry</option>
                      {industries.map((ind) => (
                        <option key={ind} value={ind} className="bg-brand-dark-950 text-white">
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="employeeCount" className="text-xs font-semibold text-gray-300">
                      Number of Employees <span className="text-brand-purple-light">*</span>
                    </label>
                    <select
                      id="employeeCount"
                      name="employeeCount"
                      value={formData.employeeCount}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-dark-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all cursor-pointer"
                    >
                      <option value="" disabled className="bg-brand-dark-950 text-gray-600">Select Employee Range</option>
                      {employeeRanges.map((range) => (
                        <option key={range} value={range} className="bg-brand-dark-950 text-white">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 3: Device Count / Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="deviceCount" className="text-xs font-semibold text-gray-300">
                      Number of Network Devices <span className="text-brand-purple-light">*</span>
                    </label>
                    <select
                      id="deviceCount"
                      name="deviceCount"
                      value={formData.deviceCount}
                      onChange={handleChange}
                      required
                      className="w-full bg-brand-dark-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all cursor-pointer"
                    >
                      <option value="" disabled className="bg-brand-dark-950 text-gray-600">Select Device Range</option>
                      {deviceRanges.map((range) => (
                        <option key={range} value={range} className="bg-brand-dark-950 text-white">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-semibold text-gray-300">
                      Phone Number <span className="text-brand-purple-light">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +1 (555) 000-0000"
                      required
                      className="w-full bg-brand-dark-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
                    />
                  </div>
                </div>

                {/* Row 4: Business Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-gray-300">
                    Business Email <span className="text-brand-purple-light">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    required
                    className="w-full bg-brand-dark-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all"
                  />
                </div>

                {/* Row 5: Biggest Challenge */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="biggestChallenge" className="text-xs font-semibold text-gray-300">
                    Biggest Network Security Challenge
                  </label>
                  <textarea
                    id="biggestChallenge"
                    name="biggestChallenge"
                    rows={4}
                    value={formData.biggestChallenge}
                    onChange={handleChange}
                    placeholder="e.g. Securing remote printers, IoT camera data leaking, no visibility on staff downloads..."
                    className="w-full bg-brand-dark-950/70 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-blue/50 focus:ring-1 focus:ring-brand-blue/50 transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple font-semibold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Registering Details...
                    </>
                  ) : (
                    "Request Early Access"
                  )}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand-purple/20 border border-brand-purple flex items-center justify-center text-brand-purple-light mb-6 animate-bounce">
                  <ShieldCheck className="w-9 h-9" />
                </div>
                
                <h3 className="text-3xl font-display font-bold text-white mb-3">
                  Early Access Requested!
                </h3>
                
                <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto mb-8">
                  Thank you, <strong>{formData.fullName}</strong>. We have logged your request for <strong>{formData.companyName}</strong>. Our research team will reach out to <strong>{formData.email}</strong> shortly.
                </p>

                <div className="w-full max-w-md p-5 rounded-2xl bg-brand-dark-950/80 border border-white/5 text-left text-xs space-y-2">
                  <div className="text-gray-500 font-bold uppercase tracking-wider mb-2">Registration Metadata</div>
                  <div className="flex justify-between"><span className="text-gray-400">Industry:</span> <span className="text-white">{formData.industry}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Employees:</span> <span className="text-white">{formData.employeeCount}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Device count:</span> <span className="text-white">{formData.deviceCount}</span></div>
                  <div className="flex justify-between"><span className="text-gray-400">Phone:</span> <span className="text-white">{formData.phone}</span></div>
                </div>

                <button
                  onClick={() => {
                    setSuccess(false);
                    setFormData({
                      fullName: "",
                      companyName: "",
                      industry: "",
                      employeeCount: "",
                      deviceCount: "",
                      email: "",
                      phone: "",
                      biggestChallenge: "",
                    });
                  }}
                  className="mt-8 px-6 py-2 rounded-lg bg-brand-dark-900 border border-white/10 text-xs font-semibold text-gray-400 hover:text-white transition-colors"
                >
                  Register Another Organization
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
