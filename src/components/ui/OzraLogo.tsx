import React from "react";

interface OzraLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showSubtitle?: boolean;
  subtitle?: string;
  textColor?: string;
  accentColor?: string;
  gap?: number;
}

export default function OzraLogo({
  className = "",
  size = "md",
  showSubtitle = true,
  subtitle = "TACTICAL GEAR SPECIALIST & APPAREL",
  textColor = "#FFFFFF",
  accentColor = "var(--olive-light, #9aaa62)",
  gap,
}: OzraLogoProps) {
  // Dimension and typography presets matching authentic OZRA vector geometries
  const sizeMap = {
    sm: {
      height: 24,
      emblemW: 34,
      emblemH: 24,
      textH: 22,
      subSize: 7.5,
      subSpacing: "0.22em",
      gap: 9,
    },
    md: {
      height: 32,
      emblemW: 44,
      emblemH: 32,
      textH: 30,
      subSize: 8.5,
      subSpacing: "0.26em",
      gap: 13,
    },
    lg: {
      height: 46,
      emblemW: 64,
      emblemH: 46,
      textH: 44,
      subSize: 10,
      subSpacing: "0.28em",
      gap: 18,
    },
    xl: {
      height: 64,
      emblemW: 88,
      emblemH: 64,
      textH: 60,
      subSize: 12,
      subSpacing: "0.32em",
      gap: 24,
    },
  };

  const current = sizeMap[size];
  const effectiveGap = gap !== undefined ? gap : current.gap;

  return (
    <div
      className={`inline-flex flex-col items-start ${className}`}
      style={{ userSelect: "none", verticalAlign: "middle" }}
    >
      {/* ── MAIN OZRA LOGO ROW (Precise vector shape matching PDF cover) ── */}
      <div
        className="flex items-center"
        style={{
          gap: `${effectiveGap}px`,
          lineHeight: 1,
        }}
      >
        {/*
          1. Emblem 'O' (Wide Oval + 4-Point Concave Crosshair Cutout)
             Aspect ratio in PDF: Wide oval (~1.38 ratio: 124w x 90h).
             Concentric inner black oval with concave 4-point tactical star.
        */}
        <svg
          width={current.emblemW}
          height={current.emblemH}
          viewBox="0 0 124 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0, display: "block" }}
          aria-label="OZRA Emblem"
        >
          {/* Outer wide oval shape */}
          <ellipse cx="62" cy="45" rx="58" ry="42" fill={textColor} />
          {/* Inner cutout oval */}
          <ellipse cx="62" cy="45" rx="35" ry="25" fill="#09090a" />
          {/* 4-point concave tactical crosshair star in center */}
          <path
            d="M 62 23 Q 62 45 31 45 Q 62 45 62 67 Q 62 45 93 45 Q 62 45 62 23 Z"
            fill={textColor}
          />
        </svg>

        {/*
          2. 'ZRA' & '®' Typography
             Rendered using pure SVG vectors for exact Microgramma / Eurostile Extended letterforms
             with enhanced character tracking so letters don't feel clustered/cramped.
        */}
        <svg
          height={current.textH}
          viewBox="0 0 270 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0, display: "block", overflow: "visible" }}
          aria-label="ZRA"
        >
          <g fill={textColor}>
            {/* ── LETTER 'Z' (Wide Eurostile / Microgramma Extended) ── */}
            <path d="M 5 12 L 72 12 L 72 25 L 28 62 L 73 62 L 73 75 L 3 75 L 3 63 L 47 25 L 5 25 Z" />

            {/* ── LETTER 'R' (Extended rounded bowl & sweeping diagonal leg with increased left offset) ── */}
            <path
              d="M 94 12 L 139 12 C 155 12 165 20 165 33 C 165 43 158 50 147 53 L 167 75 L 149 75 L 132 55 L 110 55 L 110 75 L 94 75 Z
                 M 110 24 L 110 44 L 137 44 C 144 44 149 40 149 34 C 149 28 144 24 137 24 Z"
              fillRule="evenodd"
            />

            {/* ── LETTER 'A' (Wide stance, flat top, crossbar with increased offset) ── */}
            <path
              d="M 180 75 L 212 12 L 230 12 L 262 75 L 245 75 L 237 58 L 205 58 L 197 75 Z
                 M 211 45 L 231 45 L 221 24 Z"
              fillRule="evenodd"
            />
          </g>

          {/* ── Registered Trademark '®' ── */}
          <g transform="translate(268, 8)">
            <circle cx="8" cy="8" r="7.5" stroke="var(--tan, #987F60)" strokeWidth="1.2" fill="none" />
            <text
              x="8"
              y="11.5"
              fill="var(--tan, #987F60)"
              fontSize="9"
              fontWeight="bold"
              fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
              textAnchor="middle"
            >
              R
            </text>
          </g>
        </svg>
      </div>

      {/* ── SUBTITLE (Tactical Gear Specialist & Apparel / Custom subtitle) ── */}
      {showSubtitle && (
        <span
          style={{
            fontFamily: "'Syncopate', 'Orbitron', 'Barlow Condensed', sans-serif",
            fontSize: `${current.subSize}px`,
            fontWeight: 700,
            letterSpacing: current.subSpacing,
            color: accentColor,
            textTransform: "uppercase",
            lineHeight: 1,
            marginTop: "4px",
            paddingLeft: "1px",
            whiteSpace: "nowrap",
          }}
        >
          {subtitle}
        </span>
      )}
    </div>
  );
}
