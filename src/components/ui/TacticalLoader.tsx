"use client";

import { useEffect, useState } from "react";
import OzraLogo from "@/components/ui/OzraLogo";

interface ElegantLoaderProps {
  onDone: () => void;
}

export default function TacticalLoader({ onDone }: ElegantLoaderProps) {
  const [phase, setPhase] = useState<"enter" | "active" | "exit">("enter");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      onDone();
      return;
    }

    // Keyboard shortcut to skip immediately
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        onDone();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // Phase 1: Enter -> Active
    const enterTimer = setTimeout(() => {
      setPhase("active");
    }, 150);

    // Progress counter animation from 0% to 100% over ~2.4s
    const startTime = performance.now();
    const duration = 2400; // ms

    let animId: number;
    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(rawProgress);

      if (elapsed < duration) {
        animId = requestAnimationFrame(updateProgress);
      } else {
        // Phase 3: Exit transition (fade & slight elevate)
        setPhase("exit");
        setTimeout(() => {
          onDone();
        }, 650);
      }
    };

    animId = requestAnimationFrame(updateProgress);

    return () => {
      clearTimeout(enterTimer);
      cancelAnimationFrame(animId);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        phase === "exit"
          ? "opacity-0 scale-[1.03] pointer-events-none"
          : phase === "enter"
          ? "opacity-0 scale-[0.98]"
          : "opacity-100 scale-100"
      }`}
      style={{
        background: "radial-gradient(ellipse at 50% 40%, #161714 0%, #09090a 85%)",
      }}
    >
      {/* ── AMBIENT LUXURY GLOW & GOLD/OLIVE LIGHT BEAM ── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[360px] rounded-full pointer-events-none opacity-40 blur-[110px]"
        style={{
          background: "radial-gradient(circle, rgba(170,145,100,0.22) 0%, rgba(126,139,82,0.12) 50%, transparent 80%)",
        }}
      />

      {/* ── SUBTLE ELEGANT GEOMETRIC RING (Minimalist Luxury) ── */}
      <div
        className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full pointer-events-none border border-[rgba(240,234,216,0.04)]"
        style={{
          boxShadow: "inset 0 0 60px rgba(0,0,0,0.4)",
        }}
      />
      <div
        className="absolute w-[350px] h-[350px] sm:w-[430px] sm:h-[430px] rounded-full pointer-events-none border border-dashed border-[rgba(184,152,120,0.12)]"
        style={{
          animation: "elegantRotate 60s linear infinite",
        }}
      />

      {/* ── TOP LUXURY MONOGRAM / SUB-HEADER ── */}
      <div
        className="relative z-10 mb-8 sm:mb-10 flex items-center gap-3 opacity-80"
        style={{
          animation: "subtleFadeDown 1.2s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[var(--tan-light,#b89878)] opacity-60" />
        <span
          style={{
            fontFamily: "'Syncopate', 'Orbitron', sans-serif",
            fontSize: "9px",
            fontWeight: 700,
            letterSpacing: "0.32em",
            color: "var(--tan-light, #b89878)",
            textTransform: "uppercase",
          }}
        >
          PT. OZRA MEGA PERKASA
        </span>
        <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[var(--tan-light,#b89878)] opacity-60" />
      </div>

      {/* ── MAIN VECTOR EMBLEM (AUTHENTIC OZRA FROM PDF COVER) ── */}
      <div
        className="relative z-10 px-6 py-2 transition-transform duration-1000 ease-out"
        style={{
          animation: "elegantReveal 1.1s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        <div className="scale-110 sm:scale-125 md:scale-[1.4] origin-center drop-shadow-[0_12px_28px_rgba(0,0,0,0.7)]">
          <OzraLogo
            size="lg"
            showSubtitle={true}
            subtitle="TACTICAL GEAR SPECIALIST & APPAREL"
            textColor="#FFFFFF"
            accentColor="var(--tan-light, #b89878)"
          />
        </div>
      </div>

      {/* ── ELEGANT PROGRESS LINE & MINIMAL COUNTER ── */}
      <div
        className="relative z-10 mt-12 sm:mt-16 w-56 sm:w-64 flex flex-col items-center gap-3.5"
        style={{
          animation: "subtleFadeUp 1.2s cubic-bezier(0.16,1,0.3,1) both",
          animationDelay: "0.2s",
        }}
      >
        {/* Sleek Golden Hairline Progress Bar */}
        <div className="w-full h-[2px] bg-white/[0.08] rounded-full overflow-hidden relative">
          <div
            className="h-full rounded-full transition-all duration-150 ease-out"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #7E8B52 0%, #b89878 70%, #f0ead8 100%)",
              boxShadow: "0 0 10px rgba(184,152,120,0.6)",
            }}
          />
        </div>

        {/* Minimal Luxury Readout */}
        <div className="w-full flex items-center justify-between text-[10px] tracking-[0.25em] text-[rgba(240,234,216,0.45)]">
          <span
            style={{
              fontFamily: "'Syncopate', sans-serif",
              fontSize: "8.5px",
              fontWeight: 600,
              letterSpacing: "0.25em",
            }}
          >
            PRECISION CRAFT
          </span>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "12px",
              color: "var(--cream, #f0ead8)",
              letterSpacing: "0.15em",
            }}
          >
            {progress.toString().padStart(2, "0")}%
          </span>
        </div>
      </div>

      {/* ── SKIP BUTTON (MINIMAL & REFINED) ── */}
      <button
        type="button"
        onClick={onDone}
        className="relative z-10 mt-8 text-[9px] tracking-[0.3em] uppercase text-[rgba(240,234,216,0.35)] hover:text-[var(--tan-light,#b89878)] transition-colors duration-300 py-1.5 px-4"
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          letterSpacing: "0.3em",
        }}
      >
        Press ESC to Skip
      </button>

      {/* ── KEYFRAME ANIMATIONS ── */}
      <style jsx>{`
        @keyframes elegantRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes elegantReveal {
          0% {
            opacity: 0;
            transform: translateY(14px) scale(0.97);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0px);
          }
        }
        @keyframes subtleFadeDown {
          0% {
            opacity: 0;
            transform: translateY(-8px);
          }
          100% {
            opacity: 0.8;
            transform: translateY(0);
          }
        }
        @keyframes subtleFadeUp {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
