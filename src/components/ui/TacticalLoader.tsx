"use client";

import { useEffect, useRef } from "react";
import OzraLogo from "@/components/ui/OzraLogo";

interface TacticalLoaderProps {
  onDone: () => void;
}

export default function TacticalLoader({ onDone }: TacticalLoaderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) { onDone(); return; }

    const REDUCED = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (REDUCED) { onDone(); return; }

    const DUR = 5500; // ms total animation
    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas!.width = Math.round(W * DPR);
      canvas!.height = Math.round(H * DPR);
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      ctx!.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    // ── OBJECTIVES (tactical map markers) ──
    const OBJ = [
      { x: 0.14, y: 0.22, label: "OVERWATCH" },
      { x: 0.50, y: 0.10, label: "OBJ ALPHA" },
      { x: 0.87, y: 0.24, label: "EAST FLANK" },
      { x: 0.88, y: 0.76, label: "RALLY POINT" },
      { x: 0.50, y: 0.90, label: "LZ BRAVO" },
      { x: 0.12, y: 0.77, label: "WEST POST" },
    ];

    // ── FIRETEAMS ──
    type Team = {
      x: number; y: number; hdg: number;
      idx: number; dir: number; speed: number;
      state: string; until: number;
      trail: Array<[number, number]>; lastTrail: number;
    };

    function makeTeam(startIdx: number, dir: number, speed: number): Team {
      const o = OBJ[startIdx];
      return {
        x: o.x, y: o.y, hdg: Math.random() * Math.PI * 2,
        idx: startIdx, dir, speed,
        state: "MOVE", until: 1200 + Math.random() * 1800,
        trail: [], lastTrail: 0,
      };
    }
    const TEAMS: Team[] = [
      makeTeam(0, 1, 0.016),
      makeTeam(2, 1, 0.013),
      makeTeam(4, -1, 0.018),
    ];
    const FORMATION: [number, number][] = [[0, 0], [-0.018, 0.014], [0.018, 0.014], [0, 0.030]];

    const pings: Array<{ x: number; y: number; born: number }> = [];
    let nextPing = 1400;

    // ── DRAW GRID ──
    function drawGrid() {
      ctx!.strokeStyle = "rgba(255,255,255,0.045)";
      ctx!.lineWidth = 1;
      const step = 64;
      ctx!.beginPath();
      for (let gx = 0; gx <= W; gx += step) { ctx!.moveTo(gx, 0); ctx!.lineTo(gx, H); }
      for (let gy = 0; gy <= H; gy += step) { ctx!.moveTo(0, gy); ctx!.lineTo(W, gy); }
      ctx!.stroke();
      // crosshair ticks
      ctx!.strokeStyle = "rgba(255,255,255,0.09)";
      ctx!.beginPath();
      for (let tx = step; tx < W; tx += step) {
        for (let ty = step; ty < H; ty += step) {
          ctx!.moveTo(tx - 3, ty); ctx!.lineTo(tx + 3, ty);
          ctx!.moveTo(tx, ty - 3); ctx!.lineTo(tx, ty + 3);
        }
      }
      ctx!.stroke();
    }

    // ── DRAW RADAR SWEEP ──
    function drawRadar(ts: number) {
      const cx = W * 0.5, cy = H * 0.5;
      const R = Math.max(W, H) * 0.54;
      const a = (ts * 0.00012) % (Math.PI * 2);
      ctx!.save();
      ctx!.translate(cx, cy);
      ctx!.rotate(a);
      const g = ctx!.createLinearGradient(0, 0, R, 0);
      g.addColorStop(0, "rgba(164,182,106,0.08)");
      g.addColorStop(1, "rgba(164,182,106,0)");
      ctx!.fillStyle = g;
      ctx!.beginPath();
      ctx!.moveTo(0, 0);
      ctx!.arc(0, 0, R, -0.05, 0.32);
      ctx!.closePath();
      ctx!.fill();
      ctx!.restore();
      // range rings
      ctx!.strokeStyle = "rgba(164,182,106,0.05)";
      ctx!.lineWidth = 1;
      for (let r = 120; r < R; r += 140) {
        ctx!.beginPath(); ctx!.arc(cx, cy, r, 0, Math.PI * 2); ctx!.stroke();
      }
    }

    // ── DRAW OBJECTIVE MARKER ──
    function drawObjective(o: typeof OBJ[0], ts: number) {
      const x = o.x * W, y = o.y * H;
      const pulse = 0.6 + 0.4 * Math.sin(ts * 0.003 + o.x * 10);
      // outer ring
      ctx!.strokeStyle = `rgba(164,182,106,${0.2 * pulse})`;
      ctx!.lineWidth = 1;
      ctx!.beginPath(); ctx!.arc(x, y, 10, 0, Math.PI * 2); ctx!.stroke();
      // diamond
      ctx!.strokeStyle = `rgba(164,182,106,${0.6 * pulse})`;
      ctx!.lineWidth = 1;
      ctx!.beginPath();
      ctx!.moveTo(x, y - 5); ctx!.lineTo(x + 5, y);
      ctx!.lineTo(x, y + 5); ctx!.lineTo(x - 5, y); ctx!.closePath();
      ctx!.stroke();
      // label
      ctx!.fillStyle = `rgba(164,182,106,${0.45 * pulse})`;
      ctx!.font = `600 9px 'Barlow Condensed', monospace`;
      ctx!.letterSpacing = "3px";
      ctx!.fillText(o.label, x + 12, y + 3);
    }

    // ── DRAW FIRETEAM CHEVRON ──
    function drawTeam(t: Team, ts: number) {
      const alpha = 0.65 + 0.35 * Math.sin(ts * 0.004);
      ctx!.strokeStyle = `rgba(255,255,255,${alpha})`;
      ctx!.fillStyle = `rgba(255,255,255,${alpha * 0.6})`;
      ctx!.lineWidth = 1;
      FORMATION.forEach(([dx, dy]) => {
        const wx = (t.x + dx) * W;
        const wy = (t.y + dy) * H;
        ctx!.save();
        ctx!.translate(wx, wy);
        ctx!.rotate(t.hdg - Math.PI / 2);
        ctx!.beginPath();
        ctx!.moveTo(0, -5); ctx!.lineTo(-3, 3); ctx!.lineTo(0, 1); ctx!.lineTo(3, 3); ctx!.closePath();
        ctx!.stroke();
        ctx!.restore();
      });
      // vision cone
      ctx!.save();
      ctx!.translate(t.x * W, t.y * H);
      ctx!.rotate(t.hdg - Math.PI / 2);
      const cone = ctx!.createLinearGradient(0, 0, 0, -80);
      cone.addColorStop(0, "rgba(255,255,255,0.07)");
      cone.addColorStop(1, "rgba(255,255,255,0)");
      ctx!.fillStyle = cone;
      ctx!.beginPath();
      ctx!.moveTo(0, 0); ctx!.arc(0, 0, 80, -Math.PI * 0.22, Math.PI * 0.22); ctx!.closePath();
      ctx!.fill();
      ctx!.restore();
      // trail
      if (t.trail.length > 1) {
        ctx!.strokeStyle = "rgba(255,255,255,0.12)";
        ctx!.lineWidth = 1;
        ctx!.setLineDash([3, 5]);
        ctx!.beginPath();
        t.trail.forEach(([tx2, ty2], i) => {
          if (i === 0) ctx!.moveTo(tx2 * W, ty2 * H);
          else ctx!.lineTo(tx2 * W, ty2 * H);
        });
        ctx!.stroke();
        ctx!.setLineDash([]);
      }
    }

    // ── UPDATE FIRETEAM ──
    function updateTeam(t: Team, dt: number, ts: number) {
      t.until -= dt;
      if (t.until <= 0) {
        t.state = t.state === "MOVE" ? "HOLD" : "MOVE";
        t.until = t.state === "MOVE" ? 1200 + Math.random() * 1600 : 600 + Math.random() * 1000;
        if (t.state === "MOVE") {
          t.idx = (t.idx + t.dir * 2 + OBJ.length) % OBJ.length;
        }
      }
      if (t.state === "MOVE") {
        const tgt = OBJ[(t.idx + t.dir + OBJ.length) % OBJ.length];
        const dx = tgt.x - t.x, dy = tgt.y - t.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 0.01) {
          const ang = Math.atan2(dy, dx) + Math.PI / 2;
          t.hdg = lerpAngle(t.hdg, ang, 0.06);
          const spd = t.speed * dt * 0.001;
          t.x += (dx / dist) * spd;
          t.y += (dy / dist) * spd;
        }
        if (ts - t.lastTrail > 200) {
          t.trail.push([t.x, t.y]);
          if (t.trail.length > 8) t.trail.shift();
          t.lastTrail = ts;
        }
      }
    }

    function lerpAngle(a: number, b: number, t: number) {
      let d = b - a;
      while (d > Math.PI) d -= Math.PI * 2;
      while (d < -Math.PI) d += Math.PI * 2;
      return a + d * t;
    }

    // ── DRAW PINGS ──
    function drawPings(ts: number) {
      pings.forEach((p, i) => {
        const age = ts - p.born;
        if (age > 1600) { pings.splice(i, 1); return; }
        const r = (age / 1600) * 50;
        const a = 1 - age / 1600;
        ctx!.strokeStyle = `rgba(164,182,106,${a * 0.6})`;
        ctx!.lineWidth = 1;
        ctx!.beginPath(); ctx!.arc(p.x * W, p.y * H, r, 0, Math.PI * 2); ctx!.stroke();
      });
    }


    // ── DRAW HUD CORNERS ──
    function drawCorners() {
      const pad = W < 480 ? 14 : 24;
      const len = W < 480 ? 14 : 20;
      const corners: [number, number, number, number][] = [
        [pad, pad, 1, 1],
        [W - pad, pad, -1, 1],
        [pad, H - pad, 1, -1],
        [W - pad, H - pad, -1, -1],
      ];
      ctx!.strokeStyle = "rgba(164,182,106,0.5)";
      ctx!.lineWidth = 1.5;
      corners.forEach(([x, y, sx, sy]) => {
        ctx!.beginPath();
        ctx!.moveTo(x + sx * len, y); ctx!.lineTo(x, y); ctx!.lineTo(x, y + sy * len);
        ctx!.stroke();
      });
      // corner labels
      ctx!.font = `600 8px 'Barlow Condensed', monospace`;
      ctx!.fillStyle = "rgba(164,182,106,0.35)";
      ctx!.letterSpacing = "2px";
      ctx!.textAlign = "left"; ctx!.textBaseline = "top";
      ctx!.fillText("OZRA SYS v1.0", pad + 4, pad + 4);
      if (W > 380) {
        ctx!.textAlign = "right";
        ctx!.fillText("JKT-SELATAN", W - pad - 4, pad + 4);
      }
      ctx!.textAlign = "left";
      ctx!.textBaseline = "bottom";
      ctx!.fillText("INITIALIZING...", pad + 4, H - pad - 4);
      ctx!.textAlign = "right";
      const now = new Date();
      ctx!.fillText(now.toTimeString().slice(0, 8), W - pad - 4, H - pad - 4);
    }

    // ── MAIN LOOP ──
    const startTs = performance.now();
    let lastTs = startTs;

    function frame(ts: number) {
      const elapsed = ts - startTs;
      const dt = ts - lastTs;
      lastTs = ts;

      // overall alpha ramp in/out
      let globalAlpha = 1;
      if (elapsed < 600) globalAlpha = elapsed / 600;
      if (elapsed > DUR - 800) globalAlpha = Math.max(0, 1 - (elapsed - (DUR - 800)) / 800);

      // clear
      ctx!.clearRect(0, 0, W, H);
      ctx!.globalAlpha = globalAlpha;

      // black bg
      ctx!.fillStyle = "#09090a";
      ctx!.fillRect(0, 0, W, H);

      drawGrid();
      drawRadar(ts);

      // update pings
      nextPing -= dt;
      if (nextPing <= 0) {
        const obj = OBJ[Math.floor(Math.random() * OBJ.length)];
        pings.push({ x: obj.x, y: obj.y, born: ts });
        nextPing = 1200 + Math.random() * 1400;
      }
      drawPings(ts);

      // objectives
      OBJ.forEach((o) => drawObjective(o, ts));

      // fireteams
      TEAMS.forEach((t) => {
        updateTeam(t, dt, ts);
        drawTeam(t, ts);
      });

      // HUD
      drawCorners();

      // Clear center zone for HUD vector overlay
      const cx = W * 0.5, cy = H * 0.5;
      ctx!.save();
      ctx!.globalCompositeOperation = "destination-out";
      ctx!.beginPath();
      ctx!.arc(cx, cy, Math.min(W * 0.35, 140), 0, Math.PI * 2);
      ctx!.fill();
      ctx!.restore();

      ctx!.globalAlpha = 1;

      if (elapsed < DUR) {
        rafRef.current = requestAnimationFrame(frame);
      } else {
        onDone();
      }
    }

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#09090a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Tactical Canvas Radar & Grid */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
        }}
      />

      {/* Center Tactical HUD & Authentic Vector OZRA Logo */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        style={{
          animation: "tacticalFadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Subtle tactical reticle / ring behind the logo */}
        <div
          style={{
            position: "absolute",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            border: "1px dashed rgba(164,182,106,0.2)",
            pointerEvents: "none",
            animation: "spinSlow 30s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            border: "1px solid rgba(164,182,106,0.12)",
            pointerEvents: "none",
          }}
        />

        {/* Authentic OZRA Logo from PDF cover */}
        <div className="relative z-20 py-4 scale-110 sm:scale-125 md:scale-150">
          <OzraLogo size="lg" showSubtitle={true} subtitle="TACTICAL GEAR SPECIALIST & APPAREL" />
        </div>

        {/* Real-time system status HUD readout */}
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "6px",
          }}
        >
          <div
            style={{
              fontFamily: "'Syncopate', 'Orbitron', monospace",
              fontSize: "9px",
              fontWeight: 700,
              letterSpacing: "4px",
              color: "var(--olive-light, #9aaa62)",
              textTransform: "uppercase",
            }}
          >
            SYSTEM INITIALIZING
            <span style={{ animation: "pulse 1s infinite", marginLeft: "4px" }}>...</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "'Barlow Condensed', monospace",
              fontSize: "11px",
              letterSpacing: "2px",
              color: "rgba(240,234,216,0.45)",
            }}
          >
            <span>GRID: 06°12&apos;S 106°49&apos;E</span>
            <span>•</span>
            <span style={{ color: "var(--tan-light, #b89878)" }}>VERIFIED SECURE</span>
          </div>
        </div>

        {/* Skip button for user convenience */}
        <button
          onClick={onDone}
          type="button"
          style={{
            marginTop: "28px",
            padding: "6px 16px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(164,182,106,0.25)",
            color: "rgba(240,234,216,0.5)",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.borderColor = "var(--olive-light, #9aaa62)";
            e.currentTarget.style.background = "rgba(164,182,106,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(240,234,216,0.5)";
            e.currentTarget.style.borderColor = "rgba(164,182,106,0.25)";
            e.currentTarget.style.background = "rgba(255,255,255,0.03)";
          }}
        >
          SKIP INTRO [ESC]
        </button>
      </div>

      <style jsx>{`
        @keyframes tacticalFadeIn {
          0% {
            opacity: 0;
            transform: scale(0.95);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
