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

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinkStyle = (isActive: boolean): React.CSSProperties => ({
    fontFamily: "'Barlow Condensed', 'Arial Narrow', sans-serif",
    fontSize: "13px",
    fontWeight: 600,
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: isActive ? "var(--tan-light)" : "var(--grey-mid)",
    textDecoration: "none",
    transition: "color 0.2s",
    whiteSpace: "nowrap",
    padding: "6px 0",
    borderBottom: isActive ? "2px solid var(--tan-light)" : "2px solid transparent",
    display: "inline-block",
  });

  return (
    <>
      {/* ── FIXED HEADER ── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? "rgba(9,9,10,0.98)" : "rgba(9,9,10,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--border)",
          transition: "background 0.3s ease",
        }}
      >
        {/* ── ANNOUNCEMENT BAR ── */}
        <div className="announce-bar">
          <div
            style={{
              maxWidth: "80rem",
              margin: "0 auto",
              padding: "0 clamp(18px, 4vw, 48px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
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

        {/* ── MAIN NAV ROW ── */}
        {/*
          Strategy: position:relative wrapper at full width.
          Logo + right-group use justify-between via flex.
          Nav links sit in position:absolute centered to the full wrapper — truly viewport-centered.
        */}
        <div
          style={{
            position: "relative",
            height: "68px",
            borderBottom: "1px solid var(--border)",
          }}
        >
          {/* Left logo + Right buttons — constrained to max-w-7xl */}
          <div
            style={{
              maxWidth: "80rem",
              margin: "0 auto",
              height: "100%",
              padding: "0 clamp(20px, 4vw, 48px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "relative",
              zIndex: 10,
            }}
          >
            {/* LEFT: Logo */}
            <Link
              href="/"
              prefetch={false}
              style={{ textDecoration: "none", display: "flex", alignItems: "center", flexShrink: 0 }}
              aria-label="Ozra Tactical Home"
            >
              <OzraLogo size="sm" showSubtitle={true} />
            </Link>

            {/* RIGHT: Cart + Get a Quote + Hamburger — grouped tightly */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>

              {/* Cart button */}
              <button
                type="button"
                onClick={openCart}
                aria-label="Keranjang Belanja"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  padding: "7px 12px",
                  background: "var(--surface-mid)",
                  border: `1px solid ${totalItems > 0 ? "var(--olive)" : "var(--border)"}`,
                  borderRadius: "6px",
                  color: "var(--cream)",
                  cursor: "pointer",
                  transition: "border-color 0.2s",
                  flexShrink: 0,
                }}
              >
                <ShoppingBag style={{ width: "15px", height: "15px", color: "var(--olive-light)", flexShrink: 0 }} />
                <span
                  className="hidden sm:block"
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    lineHeight: 1,
                  }}
                >
                  Cart
                </span>
                {totalItems > 0 && (
                  <span
                    style={{
                      background: "var(--olive)",
                      color: "#09090a",
                      width: "17px",
                      height: "17px",
                      borderRadius: "50%",
                      fontSize: "9px",
                      fontWeight: 800,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Get a Quote — desktop only */}
              <a
                href={`https://wa.me/${COMPANY_INFO.phoneRaw}?text=${encodeURIComponent(COMPANY_INFO.defaultWhatsAppMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex"
                style={{
                  alignItems: "center",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "var(--cream)",
                  padding: "8px 18px",
                  border: "1px solid var(--tan)",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--tan)";
                  (e.currentTarget as HTMLElement).style.color = "#09090a";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                }}
              >
                Get a Quote
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex lg:hidden"
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  width: "38px",
                  height: "38px",
                  background: "transparent",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  color: "var(--cream)",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* CENTER: Nav links — absolutely centered to the full nav row width */}
          <nav
            className="hidden lg:flex"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: "flex" as const,
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none", // let clicks pass through to logo/buttons behind
              zIndex: 5,
            }}
          >
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: "clamp(22px, 2.8vw, 40px)",
                listStyle: "none",
                margin: 0,
                padding: 0,
                pointerEvents: "auto", // re-enable on the links themselves
              }}
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      style={navLinkStyle(isActive)}
                      onMouseEnter={(e) => {
                        if (!isActive)
                          (e.currentTarget as HTMLElement).style.color = "var(--cream)";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive)
                          (e.currentTarget as HTMLElement).style.color = "var(--grey-mid)";
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            background: "rgba(9,9,10,0.98)",
            backdropFilter: "blur(20px)",
            display: "flex",
            flexDirection: "column",
            padding: "80px clamp(20px, 6vw, 36px) 40px",
            overflowY: "auto",
          }}
        >
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
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
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
                  <span style={{ fontSize: "16px", color: isActive ? "var(--tan-light)" : "var(--olive)", opacity: 0.7 }}>→</span>
                </Link>
              );
            })}

            <div style={{ marginTop: "auto", paddingTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <button
                type="button"
                onClick={() => { setMobileOpen(false); openCart(); }}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  background: "var(--surface-mid)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                  color: "var(--cream)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <ShoppingBag style={{ width: "16px", height: "16px", color: "var(--olive-light)" }} />
                <span>Keranjang ({totalItems})</span>
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
                  marginTop: "4px",
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
