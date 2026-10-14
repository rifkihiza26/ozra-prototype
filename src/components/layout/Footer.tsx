"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import { COMPANY_INFO, NAV_LINKS } from "@/lib/constants";
import { SERVICES_DATA } from "@/data/services";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--near-black)",
        borderTop: "1px solid var(--border)",
      }}
    >
      {/* ── TOP: CTA STRIP ── */}
      <div
        style={{
          background: "var(--olive-dark)",
          padding: "56px 80px",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "32px",
          alignItems: "center",
        }}
        className="px-6 md:px-20"
      >
        <div>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "rgba(240,234,216,0.55)",
              marginBottom: "10px",
            }}
          >
            ── Siap Konsultasi?
          </p>
          <h3
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 900,
              textTransform: "uppercase",
              lineHeight: 0.92,
              color: "#fff",
              letterSpacing: "-0.5px",
            }}
          >
            Buat Seragam <em style={{ fontStyle: "normal", color: "transparent", WebkitTextStroke: "1px var(--cream)" }}>Anda</em>
          </h3>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "13px",
              color: "rgba(240,234,216,0.6)",
              marginTop: "12px",
              maxWidth: "400px",
              lineHeight: 1.7,
            }}
          >
            Diskusikan kebutuhan PDL, workshirt, jersey sublimasi, atau corporate uniform bersama tim spesialis kami.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "#fff",
              padding: "14px 32px",
              background: "var(--olive)",
              border: "1px solid var(--olive)",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
            WhatsApp Sekarang →
          </a>
          <Link
            href="/contact"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--cream)",
              padding: "14px 32px",
              border: "1px solid rgba(240,234,216,0.3)",
              display: "inline-block",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            Isi Formulir Penawaran
          </Link>
        </div>
      </div>

      {/* ── MAIN FOOTER COLUMNS ── */}
      <div
        style={{
          padding: "64px 80px 48px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1.5fr",
          gap: "48px",
        }}
        className="px-6 md:px-20 grid-cols-1 md:grid-cols-4"
      >
        {/* Brand column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <span
              style={{
                fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                fontSize: "28px",
                fontWeight: 900,
                letterSpacing: "6px",
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              OZRA
              <span style={{ color: "var(--tan)", fontSize: "10px", verticalAlign: "super", marginLeft: "2px", letterSpacing: 0 }}>®</span>
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "9px",
                fontWeight: 600,
                letterSpacing: "5px",
                color: "var(--olive-light)",
                textTransform: "uppercase",
                lineHeight: 1,
                marginTop: "3px",
              }}
            >
              TACTICAL
            </span>
          </div>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "13px",
              color: "rgba(240,234,216,0.55)",
              lineHeight: 1.8,
              maxWidth: "280px",
            }}
          >
            PT. Ozra Mega Perkasa Indonesia — Manufaktur seragam taktis dan apparel olahraga profesional di Jakarta Selatan.
          </p>
          <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
            <a
              href={COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--grey-mid)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                border: "1px solid var(--border)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--tan)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--grey-mid)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--olive-light)",
              marginBottom: "20px",
            }}
          >
            Navigasi
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "var(--grey-mid)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--grey-mid)")}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--olive-light)",
              marginBottom: "20px",
            }}
          >
            Layanan
          </p>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
            {SERVICES_DATA.map((s) => (
              <li key={s.id}>
                <Link
                  href="/services"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: "var(--grey-mid)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    lineHeight: 1.4,
                    display: "block",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--grey-mid)")}
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "var(--olive-light)",
              marginBottom: "20px",
            }}
          >
            Kontak Resmi
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {[
              {
                icon: <Phone className="w-3.5 h-3.5" style={{ color: "var(--olive-light)", flexShrink: 0, marginTop: "1px" }} />,
                text: COMPANY_INFO.phoneFormatted,
                href: `https://wa.me/${COMPANY_INFO.phoneRaw}`,
              },
              {
                icon: <Mail className="w-3.5 h-3.5" style={{ color: "var(--olive-light)", flexShrink: 0, marginTop: "1px" }} />,
                text: COMPANY_INFO.email,
                href: `mailto:${COMPANY_INFO.email}`,
              },
              {
                icon: <MapPin className="w-3.5 h-3.5" style={{ color: "var(--olive-light)", flexShrink: 0, marginTop: "1px" }} />,
                text: COMPANY_INFO.address,
                href: COMPANY_INFO.mapsUrl,
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  textDecoration: "none",
                }}
              >
                {item.icon}
                <span
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "12px",
                    color: "var(--grey-mid)",
                    lineHeight: 1.6,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--cream)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--grey-mid)")}
                >
                  {item.text}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "20px 80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}
        className="px-6 md:px-20"
      >
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--grey-mid)",
          }}
        >
          © {new Date().getFullYear()} PT. Ozra Mega Perkasa Indonesia. All rights reserved.
        </p>
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "10px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "rgba(136,136,128,0.5)",
          }}
        >
          Precision in Every Stitch
        </p>
      </div>
    </footer>
  );
}
