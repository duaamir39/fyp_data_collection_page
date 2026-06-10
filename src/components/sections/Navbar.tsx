"use client";

import React, { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Vulnerabilities", href: "#problem" },
    { name: "Solution", href: "#solution" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "FAQ", href: "#faq" },
    { name: "Research Team", href: "#founder" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark-950/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 text-white font-bold text-xl group font-display tracking-tight">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-purple rounded-lg blur opacity-40 group-hover:opacity-75 transition-opacity" />
            <div className="bg-brand-dark-900 border border-brand-purple/50 p-2 rounded-lg relative z-10">
              <Shield className="w-5 h-5 text-brand-purple-light" />
            </div>
          </div>
          <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            SOHO Shield <span className="text-brand-purple-light">AI</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm text-gray-400 hover:text-white transition-colors duration-200 whitespace-nowrap"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <a
            href="#register"
            onClick={(e) => handleNavClick(e, "#register")}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-sm font-semibold text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
          >
            Join Early Access Pilot
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-400 hover:text-white transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-brand-dark-950/95 border-b border-white/5 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-base text-gray-400 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#register"
                onClick={(e) => handleNavClick(e, "#register")}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-sm font-semibold text-white shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              >
                Join Early Access Pilot
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
