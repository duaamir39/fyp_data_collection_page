"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Laptop, Server, Cpu, Database, AlertTriangle, ShieldAlert, CheckCircle } from "lucide-react";

type NetworkState = "healthy" | "detected" | "mitigating" | "isolated";

export default function Topology() {
  const [networkState, setNetworkState] = useState<NetworkState>("healthy");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setNetworkState((prev) => {
        if (prev === "healthy") return "detected";
        if (prev === "detected") return "mitigating";
        if (prev === "mitigating") return "isolated";
        return "healthy";
      });
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  // Coordinates
  const center = { x: 250, y: 175 };
  const nodes = [
    { id: "laptop", label: "Staff Laptop", x: 100, y: 70, icon: Laptop, type: "lan" },
    { id: "server", label: "NAS Server", x: 400, y: 70, icon: Server, type: "lan" },
    { id: "phone", label: "IP Phone", x: 100, y: 280, icon: Cpu, type: "lan" },
    { id: "iot", label: "IoT Camera (Attacked)", x: 400, y: 280, icon: Database, type: "iot" }
  ];

  const stateDetails = {
    healthy: {
      label: "Healthy Network Monitoring",
      desc: "All traffic analyzed via AI-engine. Latency & patterns normal.",
      color: "border-emerald-500/30 text-emerald-400",
      badgeBg: "bg-emerald-500/10 text-emerald-400",
      icon: CheckCircle
    },
    detected: {
      label: "Intrusion Detected",
      desc: "IoT Camera spoofing attack & anomalous SSH attempts flag detected.",
      color: "border-rose-500/30 text-rose-400",
      badgeBg: "bg-rose-500/10 text-rose-400 animate-pulse",
      icon: AlertTriangle
    },
    mitigating: {
      label: "SDN Action Issued",
      desc: "SOHO Shield controller reconfiguring OpenFlow rules instantly.",
      color: "border-amber-500/30 text-amber-400",
      badgeBg: "bg-amber-500/10 text-amber-400",
      icon: ShieldAlert
    },
    isolated: {
      label: "Threat Isolated & Quarantined",
      desc: "Attack source isolated to sandbox VLAN. Rest of network remains operational.",
      color: "border-brand-blue/30 text-brand-blue-light",
      badgeBg: "bg-brand-blue/10 text-brand-blue-light",
      icon: Shield
    }
  };

  // Render a static placeholder during server-side rendering (SSR) and initial hydration.
  if (!mounted) {
    return (
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-wrap gap-2 justify-center mb-6 z-20">
          {["healthy", "detected", "mitigating", "isolated"].map((state) => (
            <div
              key={state}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-brand-dark-900 border border-white/5 text-gray-500 select-none"
            >
              {state}
            </div>
          ))}
        </div>
        <div className="w-full aspect-[5/4] max-w-xl bg-brand-dark-900/50 rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-cyber-grid bg-grid-pattern opacity-30 radial-fade pointer-events-none" />
          <div className="text-gray-500 text-xs tracking-wider animate-pulse uppercase font-semibold">
            Initializing secure topology...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center">
      {/* Simulation Controller Panel */}
      <div className="w-full flex flex-wrap gap-2 justify-center mb-6 z-20">
        {(["healthy", "detected", "mitigating", "isolated"] as NetworkState[]).map((state) => (
          <button
            key={state}
            onClick={() => setNetworkState(state)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
              networkState === state
                ? "bg-brand-purple border-brand-purple text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                : "bg-brand-dark-900 border-white/5 text-gray-400 hover:border-white/20 hover:text-white"
            }`}
          >
            {state}
          </button>
        ))}
      </div>

      {/* SVG Topology Container */}
      <div className="w-full max-w-xl bg-brand-dark-900/50 rounded-2xl border border-white/5 relative overflow-hidden p-3 md:p-4 flex flex-col justify-between md:aspect-[5/4] md:justify-center md:items-center">
        {/* Absolute Gradients */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid-pattern opacity-30 radial-fade pointer-events-none" />

        {/* Network status overlay */}
        <div className="flex justify-between items-center z-10 mb-2 md:mb-0 w-full md:absolute md:top-4 md:left-4 md:right-4 md:w-[calc(100%-32px)]">
          <div className="flex flex-col text-left">
            <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">Network State</span>
            <span className="text-sm font-semibold text-white tracking-wide">{stateDetails[networkState].label}</span>
          </div>
          <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 ${stateDetails[networkState].badgeBg}`}>
            {React.createElement(stateDetails[networkState].icon, { className: "w-3 h-3" })}
            {networkState}
          </div>
        </div>

        <svg viewBox="0 0 500 400" className="w-full h-auto max-h-[180px] sm:max-h-[280px] md:max-h-none md:h-full z-10">
          {/* Connection Lines (Paths) */}
          {nodes.map((node) => {
            const isAttackedNode = node.id === "iot";
            let strokeColor = "rgba(255, 255, 255, 0.1)";
            let strokeDash = "5,5";
            let animateColor = "#3b82f6"; // blue default

            if (isAttackedNode) {
              if (networkState === "detected") {
                strokeColor = "rgba(244, 63, 94, 0.3)";
                animateColor = "#f43f5e"; // red
                strokeDash = "0";
              } else if (networkState === "mitigating") {
                strokeColor = "rgba(245, 158, 11, 0.4)";
                animateColor = "#f59e0b"; // orange
                strokeDash = "5,2";
              } else if (networkState === "isolated") {
                strokeColor = "rgba(244, 63, 94, 0.15)";
                animateColor = "transparent";
                strokeDash = "8,8";
              }
            } else {
              if (networkState !== "healthy") {
                strokeColor = "rgba(168, 85, 247, 0.2)"; // purple during monitoring actions
              } else {
                strokeColor = "rgba(59, 130, 246, 0.2)"; // blue during normal
              }
            }

            return (
              <g key={node.id}>
                {/* Connection Wire */}
                <motion.line
                  x1={center.x}
                  y1={center.y}
                  x2={node.x}
                  y2={node.y}
                  stroke={strokeColor}
                  strokeWidth="2"
                  strokeDasharray={strokeDash}
                  animate={{ strokeDashoffset: [0, -20] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />

                {/* Packet flow particles */}
                {animateColor !== "transparent" && (
                  <motion.circle
                    cx={center.x}
                    cy={center.y}
                    r={4}
                    fill={animateColor}
                    filter="drop-shadow(0 0 4px currentColor)"
                    animate={{
                      cx: [center.x, node.x],
                      cy: [center.y, node.y]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: isAttackedNode && networkState === "detected" ? 1 : 2.5,
                      ease: "linear",
                      delay: Math.random() * 2
                    }}
                  />
                )}
              </g>
            );
          })}

          {/* Central SOHO Shield AI Hub */}
          <g transform={`translate(${center.x - 30}, ${center.y - 30})`}>
            {/* Outer animated rings */}
            <motion.circle
              cx="30"
              cy="30"
              r="38"
              fill="none"
              stroke={
                networkState === "healthy"
                  ? "rgba(59, 130, 246, 0.2)"
                  : networkState === "detected"
                  ? "rgba(244, 63, 94, 0.3)"
                  : "rgba(168, 85, 247, 0.3)"
              }
              strokeWidth="1.5"
              animate={{ r: [35, 48, 35], opacity: [0.3, 0.8, 0.3] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />
            {/* Base Hub Card */}
            <rect
              width="60"
              height="60"
              rx="15"
              fill="#0b0f19"
              stroke={
                networkState === "healthy"
                  ? "#3b82f6"
                  : networkState === "detected"
                  ? "#f43f5e"
                  : "#a855f7"
              }
              strokeWidth="2"
              className="filter drop-shadow-[0_0_10px_rgba(168,85,247,0.2)]"
            />
            <foreignObject width="60" height="60">
              <div className="w-full h-full flex items-center justify-center text-white">
                <Shield className={`w-7 h-7 ${
                  networkState === "healthy"
                    ? "text-brand-blue"
                    : networkState === "detected"
                    ? "text-rose-500 animate-bounce"
                    : "text-brand-purple"
                }`} />
              </div>
            </foreignObject>
          </g>

          {/* Outer Node elements */}
          {nodes.map((node) => {
            const isAttackedNode = node.id === "iot";
            let borderColor = "border-white/10";
            let iconColor = "text-gray-400";
            let showAlert = false;
            let showQuarantineX = false;

            if (isAttackedNode) {
              if (networkState === "detected") {
                borderColor = "border-rose-500 shadow-[0_0_15px_rgba(244,63,94,0.4)]";
                iconColor = "text-rose-400";
                showAlert = true;
              } else if (networkState === "mitigating") {
                borderColor = "border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.4)]";
                iconColor = "text-amber-400";
              } else if (networkState === "isolated") {
                borderColor = "border-gray-800 opacity-40";
                iconColor = "text-gray-600";
                showQuarantineX = true;
              }
            } else {
              if (networkState === "isolated") {
                borderColor = "border-emerald-500/40";
                iconColor = "text-emerald-400";
              } else {
                borderColor = "border-brand-blue/20";
                iconColor = "text-brand-blue-light";
              }
            }

            return (
              <g key={node.id} transform={`translate(${node.x - 22}, ${node.y - 22})`}>
                <foreignObject width="44" height="44">
                  <div
                    className={`w-11 h-11 rounded-xl bg-brand-dark-950 border flex items-center justify-center transition-all duration-500 relative ${borderColor}`}
                  >
                    {React.createElement(node.icon, { className: `w-5 h-5 ${iconColor}` })}

                    {/* Badge overlays */}
                    {showAlert && (
                      <span className="absolute -top-1.5 -right-1.5 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-rose-500 text-[8px] font-extrabold text-white animate-bounce">
                        !
                      </span>
                    )}

                    {showQuarantineX && (
                      <span className="absolute inset-0 flex items-center justify-center bg-rose-950/80 rounded-xl border border-rose-500/50">
                        <span className="text-rose-500 text-xs font-black select-none">ISOL</span>
                      </span>
                    )}
                  </div>
                </foreignObject>

                {/* Node Text labels */}
                <text
                  x="22"
                  y={node.y < center.y ? -10 : 36}
                  fill="#9ca3af"
                  fontSize="9"
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  textAnchor="middle"
                  transform={node.y < center.y ? "translate(0, 0)" : "translate(0, 22)"}
                >
                  {node.label}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating details banner */}
        <div className="relative mt-2 w-full bg-brand-dark-950/90 border border-white/5 rounded-xl p-2.5 flex flex-col z-10 text-left md:absolute md:bottom-4 md:left-4 md:right-4 md:mt-0 md:w-[calc(100%-32px)] md:p-3">
          <span className="text-[10px] text-brand-purple font-semibold uppercase tracking-wider mb-0.5">
            FYP Automated Orchestration Info
          </span>
          <p className="text-xs text-gray-400 leading-normal">
            {stateDetails[networkState].desc}
          </p>
        </div>
      </div>
    </div>
  );
}
