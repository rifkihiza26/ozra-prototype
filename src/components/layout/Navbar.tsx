"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";
import OzraLogo from "@/components/ui/OzraLogo";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, openCart } = useCart();

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
        className="fixed top-0 left-0 right-0 z-50 w-full"
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

        {/* ── MAIN NAV BAR: 3-column grid — Logo | Center Nav | Cart+CTA ── */}
        <div
          className="w-full"
          style={{
            height: "72px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            className="max-w-7xl mx-auto w-full h-full"
            style={{
              padding: "0 clamp(20px, 4vw, 48px)",
              display: "grid",
              gridTemplateColumns: "1fr auto 1fr",
              alignItems: "center",
              gap: "0",
            }}
          >
            {/* Col 1 — Left: Brand Logo */}
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link
                href="/"
                prefetch={false}
                style={{ textDecoration: "none", display: "inline-block" }}
                aria-label="Ozra Tactical Home"
              >
                <OzraLogo size="sm" showSubtitle={true} />
              </Link>
            </div>

            {/* Col 2 — Center: Desktop Nav Links (exactly centered) */}
            <nav
              className="hidden lg:flex"
              style={{ justifySelf: "center" }}
            >
              <ul
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "clamp(20px, 2.5vw, 38px)",
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
                          fontSize: "13px",
                          fontWeight: 600,
                          letterSpacing: "3px",
                          textTransform: "uppercase",
                          color: isActive ? "var(--tan-light)" : "var(--grey-mid)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                          whiteSpace: "nowrap",
                          padding: "6px 2px",
                          borderBottom: isActive ? "2px solid var(--tan-light)" : "2px solid transparent",
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
            </nav>

            {/* Col 3 — Right: Cart + CTA + Mobile Hamburger */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "clamp(8px, 1vw, 16px)",
              }}
            >
              {/* ECOMMERCE SHOPPING CART TRIGGER */}
              <button
                type="button"
                onClick={openCart}
                style={{
                  backgroundColor: "var(--surface-mid)",
                  borderColor: totalItems > 0 ? "var(--olive)" : "var(--border)",
                  color: "var(--cream)",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  border: "1px solid",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                  position: "relative",
                }}
                title="Buka Keranjang Belanja & Checkout"
                aria-label="Keranjang Belanja"
              >
                <ShoppingBag style={{ width: "16px", height: "16px", color: "var(--olive-light)" }} />
                <span
                  className="hidden sm:inline"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Cart
                </span>
                {totalItems > 0 && (
                  <span
                    style={{
                      backgroundColor: "var(--olive)",
                      color: "#09090a",
                      width: "18px",
                      height: "18px",
                      borderRadius: "50%",
                      fontSize: "10px",
                      fontFamily: "monospace",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Desktop CTA */}
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-block"
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

              {/* Mobile & Tablet hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex lg:hidden"
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  borderRadius: "4px",
                  background: "transparent",
                  border: "1px solid var(--border)",
                  color: "var(--cream)",
                  cursor: "pointer",
                }}
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
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
            zIndex: 60,
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
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openCart();
                }}
                className="w-full py-3.5 px-4 rounded border border-[var(--border)] bg-[var(--surface-mid)] text-[var(--cream)] font-condensed font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-[var(--olive-light)]" />
                <span>Lihat Keranjang Belanja ({totalItems})</span>
              </button>

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
                  borderRadius: "2px",
                }}
              >
                Konsultasi WhatsApp
              </a>

              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "11px",
                  color: "var(--grey-mid)",
                  textAlign: "center",
                  marginTop: "8px",
                  lineHeight: 1.6,
                }}
              >
                PT. Ozra Mega Perkasa Indonesia<br />
                Jakarta Selatan, Indonesia
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
