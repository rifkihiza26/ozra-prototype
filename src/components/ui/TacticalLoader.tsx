"use client";

import { useEffect, useState, useRef } from "react";
import OzraLogo from "@/components/ui/OzraLogo";

interface CyberLoaderProps {
  onDone: () => void;
}

export default function TacticalLoader({ onDone }: CyberLoaderProps) {
  const [phase, setPhase] = useState<"enter" | "active" | "exit">("enter");
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Cyber security status logs
  const LOG_SEQUENCE = [
    "[SEC-KERNEL] INITIATING ENCRYPTED QUANTUM HANDSHAKE...",
    "[TLS-1.3] VERIFYING HARDWARE ZERO-TRUST KEYS...",
    "[FIREWALL] ISOLATING THREAT VECTORS // PERIMETER: ARMED",
    "[OZRA-NET] DEFENSE PROTOCOL ACTIVE // CIPHER: AES-256-GCM",
    "[NEURAL-SCAN] INTEGRITY 100% // ALL SYSTEMS NOMINAL",
  ];

  // Canvas Matrix / Cyber Rain & Hex grid effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Characters for digital stream (hex + military symbols)
    const chars = "01OZRA789ABCDEF010101";
    const fontSize = 12;
    const columns = Math.floor(W / (fontSize * 1.5));
    const drops = Array.from({ length: columns }, () => Math.random() * -50);

    const draw = () => {
      // Dark translucent wash for glowing trails
      ctx.fillStyle = "rgba(9, 9, 10, 0.25)";
      ctx.fillRect(0, 0, W, H);

      ctx.font = `${fontSize}px 'Barlow Condensed', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize * 1.5;
        const y = drops[i] * fontSize;

        // Occasional highlighted lead character in Olive / Cyber Green
        if (Math.random() > 0.88) {
          ctx.fillStyle = "#9aaa62"; // olive light
        } else {
          ctx.fillStyle = "rgba(126, 139, 82, 0.16)"; // faint tactical matrix green
        }

        ctx.fillText(text, x, y);

        if (y > H && Math.random() > 0.985) {
          drops[i] = 0;
        }
        drops[i] += 0.65;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Cyber security loading sequence
  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      onDone();
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        onDone();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    setPhase("active");

    const startTime = performance.now();
    const duration = 2800; // ms

    let animId: number;
    let lastLogIdx = -1;

    const updateLoop = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(rawProgress);

      // Trigger telemetry log lines based on progress
      const currentLogIdx = Math.min(
        LOG_SEQUENCE.length - 1,
        Math.floor((rawProgress / 100) * LOG_SEQUENCE.length)
      );
      if (currentLogIdx !== lastLogIdx) {
        lastLogIdx = currentLogIdx;
        setLogs((prev) => [...prev.slice(-3), LOG_SEQUENCE[currentLogIdx]]);
      }

      if (elapsed < duration) {
        animId = requestAnimationFrame(updateLoop);
      } else {
        setPhase("exit");
        setTimeout(() => {
          onDone();
        }, 500);
      }
    };

    animId = requestAnimationFrame(updateLoop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-500 ease-out ${
        phase === "exit"
          ? "opacity-0 scale-[1.04] pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      style={{
        background: "#08090a",
      }}
    >
      {/* ── BACKGROUND CYBER RAIN STREAM ── */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-45"
      />

      {/* ── CYBER GRID OVERLAY & SCANLINE EFFECT ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(126,139,82,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(126,139,82,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 pointer-events-none scanline-overlay opacity-30" />

      {/* ── CYBER HUD CORNER BRACKETS ── */}
      <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-[#9aaa62]/70 pointer-events-none" />
      <div className="absolute top-5 right-5 w-6 h-6 border-t-2 border-r-2 border-[#9aaa62]/70 pointer-events-none" />
      <div className="absolute bottom-5 left-5 w-6 h-6 border-b-2 border-l-2 border-[#9aaa62]/70 pointer-events-none" />
      <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-[#9aaa62]/70 pointer-events-none" />

      {/* ── TOP CYBER SECURITY TELEMETRY ── */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[9px] tracking-[0.3em] font-mono text-[#9aaa62]/70 uppercase">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#9aaa62] animate-ping" />
          <span className="text-[#f0ead8]">SEC-LEVEL 4</span>
        </span>
        <span>//</span>
        <span>DEFENSE GRID: ARMED</span>
        <span>//</span>
        <span className="text-white/60">PORT: 443 [ENCRYPTED]</span>
      </div>

      {/* ── CENTER TARGET SCANNER & CYBER RETICLE ── */}
      <div className="relative flex flex-col items-center justify-center p-8 sm:p-12">
        {/* Outer rotating cyber ring */}
        <div
          className="absolute w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] rounded-full border border-dashed border-[#9aaa62]/20 pointer-events-none"
          style={{ animation: "cyberRotate 25s linear infinite" }}
        />
        {/* Inner reverse rotating cyber brackets */}
        <div
          className="absolute w-[310px] h-[310px] sm:w-[390px] sm:h-[390px] rounded-full border border-t-[#9aaa62]/60 border-b-[#9aaa62]/60 border-l-transparent border-r-transparent pointer-events-none"
          style={{ animation: "cyberRotateRev 12s linear infinite" }}
        />

        {/* Laser horizontal scan beam sweeping the logo */}
        <div
          className="absolute left-0 right-0 h-[2px] pointer-events-none z-30"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(154,170,98,0.8) 50%, transparent 100%)",
            boxShadow: "0 0 14px rgba(154,170,98,0.9)",
            animation: "laserScan 2.4s ease-in-out infinite alternate",
          }}
        />

        {/* ── BRAND LOGO WITH PROPER BREATHING ROOM ── */}
        <div className="relative z-20 py-2 sm:py-4 scale-110 sm:scale-125 md:scale-[1.45] origin-center filter drop-shadow-[0_0_20px_rgba(154,170,98,0.25)]">
          <OzraLogo
            size="lg"
            showSubtitle={true}
            subtitle="TACTICAL GEAR SPECIALIST & APPAREL"
            gap={24}
            textColor="#FFFFFF"
            accentColor="#9aaa62"
          />
        </div>

        {/* ── CYBER ENCRYPTION PROGRESS BAR ── */}
        <div className="relative z-20 mt-12 w-64 sm:w-80 flex flex-col gap-2">
          {/* Progress bar header */}
          <div className="flex items-center justify-between text-[9px] font-mono tracking-[0.25em] text-[#9aaa62]">
            <span className="flex items-center gap-1.5">
              <span>DECRYPTING ASSETS</span>
              <span className="animate-pulse">_</span>
            </span>
            <span className="font-bold text-[#f0ead8] text-[11px]">
              {progress}%
            </span>
          </div>

          {/* Stepped Cyber Block Progress Bar */}
          <div className="w-full h-3 bg-black/80 border border-[#9aaa62]/40 p-[2px] flex gap-[2px]">
            {Array.from({ length: 24 }).map((_, idx) => {
              const active = idx / 24 <= progress / 100;
              return (
                <div
                  key={idx}
                  className={`flex-1 h-full transition-colors duration-100 ${
                    active
                      ? "bg-[#9aaa62] shadow-[0_0_6px_rgba(154,170,98,0.7)]"
                      : "bg-[#9aaa62]/10"
                  }`}
                />
              );
            })}
          </div>

          {/* Real-time Cyber Security Terminal Feed */}
          <div className="h-10 mt-1 flex flex-col justify-end overflow-hidden">
            {logs.map((log, i) => (
              <div
                key={i}
                className="text-[9px] font-mono tracking-wider text-left text-white/50 truncate"
              >
                <span className="text-[#9aaa62] mr-1.5">&gt;</span>
                {log}
              </div>
            ))}
          </div>
        </div>

        {/* ── SKIP ACCESS BUTTON ── */}
        <button
          type="button"
          onClick={onDone}
          className="relative z-20 mt-6 px-4 py-1.5 text-[9px] font-mono tracking-[0.3em] uppercase text-[#9aaa62]/70 hover:text-white border border-[#9aaa62]/30 hover:border-[#9aaa62] bg-[#9aaa62]/5 hover:bg-[#9aaa62]/20 transition-all duration-200"
        >
          [BYPASS INTRO // ESC]
        </button>
      </div>

      {/* ── CSS KEYFRAMES ── */}
      <style jsx>{`
        @keyframes cyberRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes cyberRotateRev {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        @keyframes laserScan {
          0% {
            top: 15%;
          }
          100% {
            top: 85%;
          }
        }
        .scanline-overlay {
          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0),
            rgba(255,255,255,0) 50%,
            rgba(0, 0, 0, 0.4) 50%,
            rgba(0, 0, 0, 0.4)
          );
          background-size: 100% 4px;
        }
      `}</style>
    </div>
  );
}
