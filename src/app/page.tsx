"use client";

import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import Pilot from "@/components/sections/Pilot";
import RegistrationForm from "@/components/sections/RegistrationForm";
import Statistics from "@/components/sections/Statistics";
import FAQ from "@/components/sections/FAQ";
import Founder from "@/components/sections/Founder";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-brand-dark-950 text-gray-100 antialiased selection:bg-brand-purple/30 selection:text-brand-purple-light">
      {/* Top Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Problem Section */}
      <div id="problem">
        <Problem />
      </div>

      {/* Solution Section */}
      <div id="solution">
        <Solution />
      </div>

      {/* How It Works Section */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* Pilot Program Intro Section */}
      <div id="pilot">
        <Pilot />
      </div>

      {/* Registration Form Section */}
      <div id="register">
        <RegistrationForm />
      </div>

      {/* Statistics Metrics Section */}
      <Statistics />

      {/* FAQ Section */}
      <div id="faq">
        <FAQ />
      </div>

      {/* Academic Founder Section */}
      <div id="founder">
        <Founder />
      </div>

      {/* Final Call To Action Banner */}
      <CTA />

      {/* Footer Details */}
      <Footer />
    </div>
  );
}
