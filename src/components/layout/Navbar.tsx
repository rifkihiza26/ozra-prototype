"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";
import OzraLogo from "@/components/ui/OzraLogo";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── FIXED TOP BAR (ANNOUNCEMENT + NAV) ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "rgba(9,9,10,0.98)" : "rgba(9,9,10,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          transition: "background 0.3s ease",
        }}
      >
        {/* ── ANNOUNCEMENT BAR ── */}
        <div className="announce-bar">
          <div
            className="max-w-7xl mx-auto flex items-center justify-center text-center"
            style={{ padding: "0 clamp(18px, 4vw, 48px)" }}
          >
            <span>
              Konsultasi &amp; Produksi Seragam Custom &nbsp;
              <span style={{ color: "var(--tan-light)", margin: "0 6px" }}>◆</span>
              &nbsp;WhatsApp:{" "}
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}`}
                style={{ color: "var(--tan-light)", textDecoration: "none", borderBottom: "1px solid rgba(180,150,100,.3)" }}
              >
                {COMPANY_INFO.phoneFormatted}
              </a>
              <span className="hidden md:inline" style={{ color: "var(--tan-light)", margin: "0 6px" }}>◆</span>
              <span className="hidden md:inline">Jakarta Selatan, Indonesia</span>
            </span>
          </div>
        </div>

        {/* ── MAIN NAV CONTAINER (Centered Max Width Container) ── */}
        <nav
          className="max-w-7xl mx-auto w-full relative"
          style={{
            height: "72px",
            display: "flex",
            alignItems: "center",
            padding: "0 clamp(20px, 4vw, 48px)",
          }}
        >
          {/* 1. Left: Logo */}
          <div style={{ flex: "0 0 auto", zIndex: 2 }}>
            <Link
              href="/"
              prefetch={false}
              style={{ textDecoration: "none", display: "inline-block" }}
              aria-label="Ozra Tactical Home"
            >
              <OzraLogo size="sm" showSubtitle={true} />
            </Link>
          </div>

          {/* 2. Center: Perfectly Centered Desktop Nav Links (Molay style) */}
          <div
            className="hidden lg:flex"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1,
            }}
          >
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(24px, 2.5vw, 40px)",
                listStyle: "none",
                margin: 0,
                padding: 0,
              }}
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
                        whiteSpace: "nowrap",
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
          </div>

          {/* 3. Right: Desktop CTA & Mobile Hamburger */}
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: "16px",
              zIndex: 2,
            }}
          >
            {/* Desktop CTA (visible on lg: 1024px+) */}
            <div className="hidden lg:flex items-center">
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
                  padding: "9px 24px",
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

            {/* Mobile & Tablet hamburger (visible under 1024px) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex lg:hidden items-center justify-center p-2.5 rounded text-[var(--cream)] hover:text-white"
              style={{ background: "transparent", border: "1px solid var(--border)", cursor: "pointer" }}
              aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── MOBILE DRAWER ── */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            background: "rgba(9,9,10,0.98)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            padding: "80px clamp(20px, 6vw, 36px) 40px",
            overflowY: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Close button with large touch target */}
          <div style={{ position: "absolute", top: "20px", left: "24px" }}>
            <OzraLogo size="sm" showSubtitle={true} />
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "44px",
              height: "44px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              color: "var(--cream)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            aria-label="Tutup menu"
          >
            <X size={22} />
          </button>

          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
                    fontSize: "clamp(22px, 6vw, 32px)",
                    fontWeight: 800,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    color: isActive ? "var(--tan-light)" : "var(--cream)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    padding: "16px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{link.name}</span>
                  <span style={{ fontSize: "16px", color: isActive ? "var(--tan-light)" : "var(--olive)", opacity: 0.7 }}>
                    →
                  </span>
                </Link>
              );
            })}

            <div style={{ marginTop: "auto", paddingTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "15px 20px",
                  background: "var(--olive)",
                  color: "#fff",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  border: "1px solid var(--olive)",
                }}
              >
                Request a Quote via WhatsApp
              </a>

              <div
                style={{
                  textAlign: "center",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "11px",
                  color: "var(--grey-mid)",
                  marginTop: "8px",
                  lineHeight: 1.5,
                }}
              >
                PT. Ozra Mega Perkasa Indonesia<br />
                {COMPANY_INFO.address}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer so content sits below the fixed header */}
      <div className="h-[95px] sm:h-[101px]" />
    </>
  );
}
