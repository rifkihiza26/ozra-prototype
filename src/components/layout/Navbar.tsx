"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* ── ANNOUNCEMENT BAR ── */}
      <div className="announce-bar">
        Konsultasi &amp; Produksi Seragam Custom &nbsp;
        <span style={{ color: "var(--tan-light)", margin: "0 10px" }}>◆</span>
        &nbsp;WhatsApp:{" "}
        <a
          href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
          style={{ color: "var(--tan-light)", textDecoration: "none", borderBottom: "1px solid rgba(180,150,100,.3)" }}
        >
          {COMPANY_INFO.phoneFormatted}
        </a>
        <span style={{ color: "var(--tan-light)", margin: "0 10px" }}>◆</span>
        Jakarta Selatan, Indonesia
      </div>

      {/* ── MAIN NAV ── */}
      <nav
        style={{
          position: "fixed",
          top: "auto",
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px",
          height: "68px",
          background: scrolled
            ? "rgba(9,9,10,0.97)"
            : "rgba(9,9,10,0.88)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          transition: "background 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ textDecoration: "none" }}
        >
          <span
            style={{
              fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
              fontSize: "24px",
              fontWeight: 900,
              letterSpacing: "6px",
              color: "#fff",
              textTransform: "uppercase",
            }}
          >
            OZRA
            <span
              style={{
                color: "var(--tan)",
                fontSize: "10px",
                verticalAlign: "super",
                marginLeft: "2px",
                letterSpacing: 0,
              }}
            >
              ®
            </span>
          </span>
          <span
            style={{
              display: "block",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "8px",
              fontWeight: 600,
              letterSpacing: "5px",
              color: "var(--olive-light)",
              textTransform: "uppercase",
              lineHeight: 1,
              marginTop: "2px",
            }}
          >
            TACTICAL
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul
          style={{
            display: "flex",
            gap: "36px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="hidden md:flex"
        >
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                    fontSize: "12px",
                    fontWeight: 600,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: isActive ? "var(--tan-light)" : "var(--grey-mid)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = "var(--grey-mid)";
                  }}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--cream)",
              padding: "9px 22px",
              border: "1px solid var(--tan)",
              transition: "all 0.2s",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--tan)";
              el.style.color = "var(--black)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "var(--cream)";
            }}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
          style={{ background: "none", border: "none", color: "var(--grey-mid)", cursor: "pointer" }}
          aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            background: "rgba(9,9,10,0.98)",
            backdropFilter: "blur(16px)",
            display: "flex",
            flexDirection: "column",
            padding: "90px 36px 48px",
            gap: "0",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "none",
              border: "none",
              color: "var(--grey-mid)",
              cursor: "pointer",
            }}
            aria-label="Tutup"
          >
            <X size={24} />
          </button>

          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                  fontSize: "28px",
                  fontWeight: 800,
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: isActive ? "var(--tan-light)" : "var(--cream)",
                  textDecoration: "none",
                  borderBottom: "1px solid var(--border)",
                  padding: "20px 0",
                  display: "block",
                }}
              >
                {link.name}
              </Link>
            );
          })}

          <a
            href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "28px",
              display: "block",
              textAlign: "center",
              padding: "16px",
              background: "var(--olive)",
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              textDecoration: "none",
            }}
          >
            Request a Quote via WhatsApp
          </a>
        </div>
      )}

      {/* Spacer so content sits below the announce bar + navbar */}
      <div style={{ height: "calc(68px + 33px)" }} />
    </>
  );
}
