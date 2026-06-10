"use client";

import React from "react";
import { Shield, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark-950 border-t border-white/5 py-8 px-4 md:px-6 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Left */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
          <div className="flex items-center gap-2 text-white font-bold font-display text-lg tracking-tight">
            <Shield className="w-5 h-5 text-brand-purple-light" />
            <span>SOHO Shield <span className="text-brand-purple-light">AI</span></span>
          </div>
          <p className="text-xs text-gray-500 max-w-sm">
            Autonomous threat detection and device quarantine. Built as a Final Year Project for bringing enterprise-grade SDN defenses to small offices.
          </p>
        </div>

        {/* Links Center */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center text-xs text-gray-400">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="mailto:support@sohoshield.ai" className="hover:text-white transition-colors">Contact Support</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            <Github className="w-3.5 h-3.5" />
            GitHub Repository
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            <Linkedin className="w-3.5 h-3.5" />
            LinkedIn
          </a>
        </div>

        {/* Copyright Right */}
        <div className="flex flex-col items-center md:items-end text-xs text-gray-500">
          <span>&copy; {currentYear} SOHO Shield AI. All rights reserved.</span>
          <span className="text-[10px] text-gray-600 mt-1">Computer Science & Cybersecurity FYP</span>
        </div>

      </div>
    </footer>
  );
}
